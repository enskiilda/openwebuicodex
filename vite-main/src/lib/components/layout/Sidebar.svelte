<script lang="ts">
        import { toast } from 'svelte-sonner';
        import { v4 as uuidv4 } from 'uuid';

        import { goto } from '$app/navigation';
        import {
                user,
                chats,
                settings,
                showSettings,
                chatId,
                tags,
                folders as _folders,
                showSidebar,
                showSearch,
                mobile,
                showArchivedChats,
                pinnedChats,
                scrollPaginationEnabled,
                currentChatPage,
                temporaryChatEnabled,
                channels,
                socket,
                config,
                isApp,
                models,
                selectedFolder,
                WEBUI_NAME
        } from '$lib/stores';
        import { onMount, getContext, tick, onDestroy } from 'svelte';

        const i18n = getContext('i18n');

        import {
                getChatList,
                getAllTags,
                getPinnedChatList,
                toggleChatPinnedStatusById,
                getChatById,
                updateChatFolderIdById,
                importChats
        } from '$lib/apis/chats';
        import { createNewFolder, getFolders, updateFolderParentIdById } from '$lib/apis/folders';
        import { WEBUI_API_BASE_URL, WEBUI_BASE_URL } from '$lib/constants';

        import ArchivedChatsModal from './ArchivedChatsModal.svelte';
        import UserMenu from './Sidebar/UserMenu.svelte';
        import ChatItem from './Sidebar/ChatItem.svelte';
        import Spinner from '../common/Spinner.svelte';
        import Loader from '../common/Loader.svelte';
        import Folder from '../common/Folder.svelte';
        import Tooltip from '../common/Tooltip.svelte';
        import Folders from './Sidebar/Folders.svelte';
        import { getChannels, createNewChannel } from '$lib/apis/channels';
        import ChannelModal from './Sidebar/ChannelModal.svelte';
        import ChannelItem from './Sidebar/ChannelItem.svelte';
        import Settings from '../icons/Settings.svelte';
        import SearchModal from './SearchModal.svelte';
        import FolderModal from './Sidebar/Folders/FolderModal.svelte';
        import Sidebar from '../icons/Sidebar.svelte';
        import PinnedModelList from './Sidebar/PinnedModelList.svelte';
        import Note from '../icons/Note.svelte';
        import { slide } from 'svelte/transition';
        import HotkeyHint from '../common/HotkeyHint.svelte';

        const BREAKPOINT = 768;

        let scrollTop = 0;

        let navElement;
        let shiftKey = false;

        let selectedChatId = null;
        let showCreateChannel = false;

        // Pagination variables
        let chatListLoading = false;
        let allChatsLoaded = false;

        let showCreateFolderModal = false;

        let folders = {};
        let folderRegistry = {};

        let newFolderId = null;

        $: if ($selectedFolder) {
                initFolders();
        }

        const initFolders = async () => {
                const folderList = await getFolders(localStorage.token).catch((error) => {
                        toast.error(`${error}`);
                        return [];
                });
                _folders.set(folderList.sort((a, b) => b.updated_at - a.updated_at));

                folders = {};

                // First pass: Initialize all folder entries
                for (const folder of folderList) {
                        // Ensure folder is added to folders with its data
                        folders[folder.id] = { ...(folders[folder.id] || {}), ...folder };

                        if (newFolderId && folder.id === newFolderId) {
                                folders[folder.id].new = true;
                                newFolderId = null;
                        }
                }

                // Second pass: Tie child folders to their parents
                for (const folder of folderList) {
                        if (folder.parent_id) {
                                // Ensure the parent folder is initialized if it doesn't exist
                                if (!folders[folder.parent_id]) {
                                        folders[folder.parent_id] = {}; // Create a placeholder if not already present
                                }

                                // Initialize childrenIds array if it doesn't exist and add the current folder id
                                folders[folder.parent_id].childrenIds = folders[folder.parent_id].childrenIds
                                        ? [...folders[folder.parent_id].childrenIds, folder.id]
                                        : [folder.id];

                                // Sort the children by updated_at field
                                folders[folder.parent_id].childrenIds.sort((a, b) => {
                                        return folders[b].updated_at - folders[a].updated_at;
                                });
                        }
                }
        };

        const createFolder = async ({ name, data }) => {
                name = name?.trim();
                if (!name) {
                        toast.error($i18n.t('Folder name cannot be empty.'));
                        return;
                }

                const rootFolders = Object.values(folders).filter((folder) => folder.parent_id === null);
                if (rootFolders.find((folder) => folder.name.toLowerCase() === name.toLowerCase())) {
                        // If a folder with the same name already exists, append a number to the name
                        let i = 1;
                        while (
                                rootFolders.find((folder) => folder.name.toLowerCase() === `${name} ${i}`.toLowerCase())
                        ) {
                                i++;
                        }

                        name = `${name} ${i}`;
                }

                // Add a dummy folder to the list to show the user that the folder is being created
                const tempId = uuidv4();
                folders = {
                        ...folders,
                        tempId: {
                                id: tempId,
                                name: name,
                                created_at: Date.now(),
                                updated_at: Date.now()
                        }
                };

                const res = await createNewFolder(localStorage.token, {
                        name,
                        data
                }).catch((error) => {
                        toast.error(`${error}`);
                        return null;
                });

                if (res) {
                        // newFolderId = res.id;
                        await initFolders();
                }
        };

        const initChannels = async () => {
                await channels.set(await getChannels(localStorage.token));
        };

        const initChatList = async () => {
                // Reset pagination variables
                console.log('initChatList');
                currentChatPage.set(1);
                allChatsLoaded = false;
                scrollPaginationEnabled.set(false);

                initFolders();
                await Promise.all([
                        await (async () => {
                                console.log('Init tags');
                                const _tags = await getAllTags(localStorage.token);
                                tags.set(_tags);
                        })(),
                        await (async () => {
                                console.log('Init pinned chats');
                                const _pinnedChats = await getPinnedChatList(localStorage.token);
                                pinnedChats.set(_pinnedChats);
                        })(),
                        await (async () => {
                                console.log('Init chat list');
                                const _chats = await getChatList(localStorage.token, $currentChatPage);
                                await chats.set(_chats);
                        })()
                ]);

                // Enable pagination
                scrollPaginationEnabled.set(true);
        };

        const loadMoreChats = async () => {
                chatListLoading = true;

                currentChatPage.set($currentChatPage + 1);

                let newChatList = [];

                newChatList = await getChatList(localStorage.token, $currentChatPage);

                // once the bottom of the list has been reached (no results) there is no need to continue querying
                allChatsLoaded = newChatList.length === 0;
                await chats.set([...($chats ? $chats : []), ...newChatList]);

                chatListLoading = false;
        };

        const importChatHandler = async (items, pinned = false, folderId = null) => {
                console.log('importChatHandler', items, pinned, folderId);
                for (const item of items) {
                        console.log(item);
                        if (item.chat) {
                                await importChats(localStorage.token, [
                                        {
                                                chat: item.chat,
                                                meta: item?.meta ?? {},
                                                pinned: pinned,
                                                folder_id: folderId,
                                                created_at: item?.created_at ?? null,
                                                updated_at: item?.updated_at ?? null
                                        }
                                ]);
                        }
                }

                initChatList();
        };

        const inputFilesHandler = async (files) => {
                console.log(files);

                for (const file of files) {
                        const reader = new FileReader();
                        reader.onload = async (e) => {
                                const content = e.target.result;

                                try {
                                        const chatItems = JSON.parse(content);
                                        importChatHandler(chatItems);
                                } catch {
                                        toast.error($i18n.t(`Invalid file format.`));
                                }
                        };

                        reader.readAsText(file);
                }
        };

        const tagEventHandler = async (type, tagName, chatId) => {
                console.log(type, tagName, chatId);
                if (type === 'delete') {
                        initChatList();
                } else if (type === 'add') {
                        initChatList();
                }
        };

        let draggedOver = false;

        const onDragOver = (e) => {
                e.preventDefault();

                // Check if a file is being draggedOver.
                if (e.dataTransfer?.types?.includes('Files')) {
                        draggedOver = true;
                } else {
                        draggedOver = false;
                }
        };

        const onDragLeave = () => {
                draggedOver = false;
        };

        const onDrop = async (e) => {
                e.preventDefault();
                console.log(e); // Log the drop event

                // Perform file drop check and handle it accordingly
                if (e.dataTransfer?.files) {
                        const inputFiles = Array.from(e.dataTransfer?.files);

                        if (inputFiles && inputFiles.length > 0) {
                                console.log(inputFiles); // Log the dropped files
                                inputFilesHandler(inputFiles); // Handle the dropped files
                        }
                }

                draggedOver = false; // Reset draggedOver status after drop
        };

        let touchstart;
        let touchend;

        function checkDirection() {
                const screenWidth = window.innerWidth;
                const swipeDistance = Math.abs(touchend.screenX - touchstart.screenX);
                if (touchstart.clientX < 40 && swipeDistance >= screenWidth / 8) {
                        if (touchend.screenX < touchstart.screenX) {
                                showSidebar.set(false);
                        }
                        if (touchend.screenX > touchstart.screenX) {
                                showSidebar.set(true);
                        }
                }
        }

        const onTouchStart = (e) => {
                touchstart = e.changedTouches[0];
                console.log(touchstart.clientX);
        };

        const onTouchEnd = (e) => {
                touchend = e.changedTouches[0];
                checkDirection();
        };

        const onKeyDown = (e) => {
                if (e.key === 'Shift') {
                        shiftKey = true;
                }
        };

        const onKeyUp = (e) => {
                if (e.key === 'Shift') {
                        shiftKey = false;
                }
        };

        const onFocus = () => {};

        const onBlur = () => {
                shiftKey = false;
                selectedChatId = null;
        };

        let unsubscribers = [];
        onMount(async () => {
                await showSidebar.set(!$mobile ? localStorage.sidebar === 'true' : false);

                unsubscribers = [
                        mobile.subscribe((value) => {
                                if ($showSidebar && value) {
                                        showSidebar.set(false);
                                }

                                if ($showSidebar && !value) {
                                        const navElement = document.getElementsByTagName('nav')[0];
                                        if (navElement) {
                                                navElement.style['-webkit-app-region'] = 'drag';
                                        }
                                }
                        }),
                        showSidebar.subscribe(async (value) => {
                                localStorage.sidebar = value;

                                // nav element is not available on the first render
                                const navElement = document.getElementsByTagName('nav')[0];

                                if (navElement) {
                                        if ($mobile) {
                                                if (!value) {
                                                        navElement.style['-webkit-app-region'] = 'drag';
                                                } else {
                                                        navElement.style['-webkit-app-region'] = 'no-drag';
                                                }
                                        } else {
                                                navElement.style['-webkit-app-region'] = 'drag';
                                        }
                                }

                                if (value) {
                                        await initChannels();
                                        await initChatList();
                                }
                        })
                ];

                window.addEventListener('keydown', onKeyDown);
                window.addEventListener('keyup', onKeyUp);

                window.addEventListener('touchstart', onTouchStart);
                window.addEventListener('touchend', onTouchEnd);

                window.addEventListener('focus', onFocus);
                window.addEventListener('blur', onBlur);

                const dropZone = document.getElementById('sidebar');

                dropZone?.addEventListener('dragover', onDragOver);
                dropZone?.addEventListener('drop', onDrop);
                dropZone?.addEventListener('dragleave', onDragLeave);
        });

        onDestroy(() => {
                if (unsubscribers && unsubscribers.length > 0) {
                        unsubscribers.forEach((unsubscriber) => {
                                if (unsubscriber) {
                                        unsubscriber();
                                }
                        });
                }

                window.removeEventListener('keydown', onKeyDown);
                window.removeEventListener('keyup', onKeyUp);

                window.removeEventListener('touchstart', onTouchStart);
                window.removeEventListener('touchend', onTouchEnd);

                window.removeEventListener('focus', onFocus);
                window.removeEventListener('blur', onBlur);

                const dropZone = document.getElementById('sidebar');

                dropZone?.removeEventListener('dragover', onDragOver);
                dropZone?.removeEventListener('drop', onDrop);
                dropZone?.removeEventListener('dragleave', onDragLeave);
        });

        const newChatHandler = async () => {
                selectedChatId = null;
                selectedFolder.set(null);

                if ($user?.role !== 'admin' && $user?.permissions?.chat?.temporary_enforced) {
                        await temporaryChatEnabled.set(true);
                } else {
                        await temporaryChatEnabled.set(false);
                }

                setTimeout(() => {
                        if ($mobile) {
                                showSidebar.set(false);
                        }
                }, 0);
        };

        const itemClickHandler = async () => {
                selectedChatId = null;
                chatId.set('');

                if ($mobile) {
                        showSidebar.set(false);
                }

                await tick();
        };

        const isWindows = /Windows/i.test(navigator.userAgent);
</script>

<ArchivedChatsModal
        bind:show={$showArchivedChats}
        onUpdate={async () => {
                await initChatList();
        }}
/>

<ChannelModal
        bind:show={showCreateChannel}
        onSubmit={async ({ name, access_control }) => {
                name = name?.trim();
                if (!name) {
                        toast.error($i18n.t('Channel name cannot be empty.'));
                        return;
                }

                const res = await createNewChannel(localStorage.token, {
                        name: name,
                        access_control: access_control
                }).catch((error) => {
                        toast.error(`${error}`);
                        return null;
                });

                if (res) {
                        $socket.emit('join-channels', { auth: { token: $user?.token } });
                        await initChannels();
                        showCreateChannel = false;
                }
        }}
/>

<FolderModal
        bind:show={showCreateFolderModal}
        onSubmit={async (folder) => {
                await createFolder(folder);
                showCreateFolderModal = false;
        }}
/>

<!-- svelte-ignore a11y-no-static-element-interactions -->

{#if $showSidebar}
        <div
                class=" {$isApp
                        ? ' ml-[4.5rem] md:ml-0'
                        : ''} fixed md:hidden z-40 top-0 right-0 left-0 bottom-0 bg-black/60 w-full min-h-screen h-screen flex justify-center overflow-hidden overscroll-contain"
                on:mousedown={() => {
                        showSidebar.set(!$showSidebar);
                }}
        />
{/if}

<SearchModal
        bind:show={$showSearch}
        onClose={() => {
                if ($mobile) {
                        showSidebar.set(false);
                }
        }}
/>

<button
        id="sidebar-new-chat-button"
        class="hidden"
        on:click={() => {
                goto('/');
                newChatHandler();
        }}
/>

{#if !$mobile}
        <div
                class="flex h-full"
                id="sidebar-container"
        >
                <div
                        class=" pt-[7px] pb-2 px-1.5 flex flex-col justify-between text-black dark:text-white hover:bg-gray-50/30 dark:hover:bg-gray-950/30 h-full z-10 transition-all border-e-[0.5px] border-gray-50 dark:border-gray-850"
                        id="sidebar-icons"
                >
                <button
                        class="flex flex-col flex-1 {isWindows ? 'cursor-pointer' : 'cursor-[e-resize]'}"
                        on:click={async () => {
                                showSidebar.set(!$showSidebar);
                        }}
                >
                        <div class="pb-1.5">
                                <Tooltip
                                        content={$showSidebar ? $i18n.t('Close Sidebar') : $i18n.t('Open Sidebar')}
                                        placement="right"
                                >
                                        <button
                                                class="flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group {isWindows
                                                        ? 'cursor-pointer'
                                                        : 'cursor-[e-resize]'}"
                                                aria-label={$showSidebar ? $i18n.t('Close Sidebar') : $i18n.t('Open Sidebar')}
                                        >
                                                <div class=" self-center flex items-center justify-center size-9">
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon-lg"><path d="M11.2475 18.25C10.6975 18.25 10.175 18.1455 9.67999 17.9365C9.18499 17.7275 8.74499 17.436 8.35999 17.062C7.94199 17.205 7.50749 17.2765 7.05649 17.2765C6.31949 17.2765 5.63749 17.095 5.01049 16.732C4.38349 16.369 3.87749 15.874 3.49249 15.247C3.11849 14.62 2.93149 13.9215 2.93149 13.1515C2.93149 12.8325 2.97549 12.486 3.06349 12.112C2.62349 11.705 2.28249 11.2375 2.04049 10.7095C1.79849 10.1705 1.67749 9.6095 1.67749 9.0265C1.67749 8.4325 1.80399 7.8605 2.05699 7.3105C2.30999 6.7605 2.66199 6.2875 3.11299 5.8915C3.57499 5.4845 4.10849 5.204 4.71349 5.05C4.83449 4.423 5.08749 3.862 5.47249 3.367C5.86849 2.861 6.35249 2.465 6.92449 2.179C7.49649 1.893 8.10699 1.75 8.75599 1.75C9.30599 1.75 9.82849 1.8545 10.3235 2.0635C10.8185 2.2725 11.2585 2.564 11.6435 2.938C12.0615 2.795 12.496 2.7235 12.947 2.7235C13.684 2.7235 14.366 2.905 14.993 3.268C15.62 3.631 16.1205 4.126 16.4945 4.753C16.8795 5.38 17.072 6.0785 17.072 6.8485C17.072 7.1675 17.028 7.514 16.94 7.888C17.38 8.295 17.721 8.768 17.963 9.307C18.205 9.835 18.326 10.3905 18.326 10.9735C18.326 11.5675 18.1995 12.1395 17.9465 12.6895C17.6935 13.2395 17.336 13.718 16.874 14.125C16.423 14.521 15.895 14.796 15.29 14.95C15.169 15.577 14.9105 16.138 14.5145 16.633C14.1295 17.139 13.651 17.535 13.079 17.821C12.507 18.107 11.8965 18.25 11.2475 18.25ZM7.17199 16.1875C7.72199 16.1875 8.20049 16.072 8.60749 15.841L11.7095 14.059C11.8195 13.982 11.8745 13.8775 11.8745 13.7455V12.3265L7.88149 14.62C7.63949 14.763 7.39749 14.763 7.15549 14.62L4.03699 12.8215C4.03699 12.8545 4.03149 12.893 4.02049 12.937C4.02049 12.981 4.02049 13.047 4.02049 13.135C4.02049 13.696 4.15249 14.213 4.41649 14.686C4.69149 15.148 5.07099 15.511 5.55499 15.775C6.03899 16.05 6.57799 16.1875 7.17199 16.1875ZM7.33699 13.498C7.40299 13.531 7.46349 13.5475 7.51849 13.5475C7.57349 13.5475 7.62849 13.531 7.68349 13.498L8.92099 12.7885L4.94449 10.4785C4.70249 10.3355 4.58149 10.121 4.58149 9.835V6.2545C4.03149 6.4965 3.59149 6.8705 3.26149 7.3765C2.93149 7.8715 2.76649 8.4215 2.76649 9.0265C2.76649 9.5655 2.90399 10.0825 3.17899 10.5775C3.45399 11.0725 3.81149 11.4465 4.25149 11.6995L7.33699 13.498ZM11.2475 17.161C11.8305 17.161 12.3585 17.029 12.8315 16.765C13.3045 16.501 13.6785 16.138 13.9535 15.676C14.2285 15.214 14.366 14.697 14.366 14.125V10.561C14.366 10.429 14.311 10.33 14.201 10.264L12.947 9.538V14.1415C12.947 14.4275 12.826 14.642 12.584 14.785L9.46549 16.5835C10.0045 16.9685 10.5985 17.161 11.2475 17.161ZM11.8745 11.122V8.878L10.01 7.822L8.12899 8.878V11.122L10.01 12.178L11.8745 11.122ZM7.05649 5.8585C7.05649 5.5725 7.17749 5.358 7.41949 5.215L10.538 3.4165C9.99899 3.0315 9.40499 2.839 8.75599 2.839C8.17299 2.839 7.64499 2.971 7.17199 3.235C6.69899 3.499 6.32499 3.862 6.04999 4.324C5.78599 4.786 5.65399 5.303 5.65399 5.875V9.4225C5.65399 9.5545 5.70899 9.659 5.81899 9.736L7.05649 10.462V5.8585ZM15.4385 13.7455C15.9885 13.5035 16.423 13.1295 16.742 12.6235C17.072 12.1175 17.237 11.5675 17.237 10.9735C17.237 10.4345 17.0995 9.9175 16.8245 9.4225C16.5495 8.9275 16.192 8.5535 15.752 8.3005L12.6665 6.5185C12.6005 6.4745 12.54 6.458 12.485 6.469C12.43 6.469 12.375 6.4855 12.32 6.5185L11.0825 7.2115L15.0755 9.538C15.1965 9.604 15.2845 9.692 15.3395 9.802C15.4055 9.901 15.4385 10.022 15.4385 10.165V13.7455ZM12.122 5.3635C12.364 5.2095 12.606 5.2095 12.848 5.3635L15.983 7.195C15.983 7.118 15.983 7.019 15.983 6.898C15.983 6.37 15.851 5.8695 15.587 5.3965C15.334 4.9125 14.9655 4.5275 14.4815 4.2415C14.0085 3.9555 13.4585 3.8125 12.8315 3.8125C12.2815 3.8125 11.803 3.928 11.396 4.159L8.29399 5.941C8.18399 6.018 8.12899 6.1225 8.12899 6.2545V7.6735L12.122 5.3635Z"></path></svg>
                                                </div>
                                        </button>
                                </Tooltip>
                        </div>

                        <div class="-mt-[0.5px]">
                                <div class="">
                                        <Tooltip content={$i18n.t('New Chat')} placement="right">
                                                <a
                                                        class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group"
                                                        href="/"
                                                        draggable="false"
                                                        on:click={async (e) => {
                                                                e.stopImmediatePropagation();
                                                                e.preventDefault();

                                                                goto('/');
                                                                newChatHandler();
                                                        }}
                                                        aria-label={$i18n.t('New Chat')}
                                                >
                                                        <div class=" self-center flex items-center justify-center size-9">
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true"><path d="M2.6687 11.333V8.66699C2.6687 7.74455 2.66841 7.01205 2.71655 6.42285C2.76533 5.82612 2.86699 5.31731 3.10425 4.85156L3.25854 4.57617C3.64272 3.94975 4.19392 3.43995 4.85229 3.10449L5.02905 3.02149C5.44666 2.84233 5.90133 2.75849 6.42358 2.71582C7.01272 2.66769 7.74445 2.66797 8.66675 2.66797H9.16675C9.53393 2.66797 9.83165 2.96586 9.83179 3.33301C9.83179 3.70028 9.53402 3.99805 9.16675 3.99805H8.66675C7.7226 3.99805 7.05438 3.99834 6.53198 4.04102C6.14611 4.07254 5.87277 4.12568 5.65601 4.20313L5.45581 4.28906C5.01645 4.51293 4.64872 4.85345 4.39233 5.27149L4.28979 5.45508C4.16388 5.7022 4.08381 6.01663 4.04175 6.53125C3.99906 7.05373 3.99878 7.7226 3.99878 8.66699V11.333C3.99878 12.2774 3.99906 12.9463 4.04175 13.4688C4.08381 13.9833 4.16389 14.2978 4.28979 14.5449L4.39233 14.7285C4.64871 15.1465 5.01648 15.4871 5.45581 15.7109L5.65601 15.7969C5.87276 15.8743 6.14614 15.9265 6.53198 15.958C7.05439 16.0007 7.72256 16.002 8.66675 16.002H11.3337C12.2779 16.002 12.9461 16.0007 13.4685 15.958C13.9829 15.916 14.2976 15.8367 14.5447 15.7109L14.7292 15.6074C15.147 15.3511 15.4879 14.9841 15.7117 14.5449L15.7976 14.3447C15.8751 14.128 15.9272 13.8546 15.9587 13.4688C16.0014 12.9463 16.0017 12.2774 16.0017 11.333V10.833C16.0018 10.466 16.2997 10.1681 16.6667 10.168C17.0339 10.168 17.3316 10.4659 17.3318 10.833V11.333C17.3318 12.2555 17.3331 12.9879 17.2849 13.5771C17.2422 14.0993 17.1584 14.5541 16.9792 14.9717L16.8962 15.1484C16.5609 15.8066 16.0507 16.3571 15.4246 16.7412L15.1492 16.8955C14.6833 17.1329 14.1739 17.2354 13.5769 17.2842C12.9878 17.3323 12.256 17.332 11.3337 17.332H8.66675C7.74446 17.332 7.01271 17.3323 6.42358 17.2842C5.90135 17.2415 5.44665 17.1577 5.02905 16.9785L4.85229 16.8955C4.19396 16.5601 3.64271 16.0502 3.25854 15.4238L3.10425 15.1484C2.86697 14.6827 2.76534 14.1739 2.71655 13.5771C2.66841 12.9879 2.6687 12.2555 2.6687 11.333ZM13.4646 3.11328C14.4201 2.334 15.8288 2.38969 16.7195 3.28027L16.8865 3.46485C17.6141 4.35685 17.6143 5.64423 16.8865 6.53613L16.7195 6.7207L11.6726 11.7686C11.1373 12.3039 10.4624 12.6746 9.72827 12.8408L9.41089 12.8994L7.59351 13.1582C7.38637 13.1877 7.17701 13.1187 7.02905 12.9707C6.88112 12.8227 6.81199 12.6134 6.84155 12.4063L7.10132 10.5898L7.15991 10.2715C7.3262 9.53749 7.69692 8.86241 8.23218 8.32715L13.2791 3.28027L13.4646 3.11328ZM15.7791 4.2207C15.3753 3.81702 14.7366 3.79124 14.3035 4.14453L14.2195 4.2207L9.17261 9.26856C8.81541 9.62578 8.56774 10.0756 8.45679 10.5654L8.41772 10.7773L8.28296 11.7158L9.22241 11.582L9.43433 11.543C9.92426 11.432 10.3749 11.1844 10.7322 10.8271L15.7791 5.78027L15.8552 5.69629C16.185 5.29194 16.1852 4.708 15.8552 4.30371L15.7791 4.2207Z"></path></svg>
                                                        </div>
                                                </a>
                                        </Tooltip>
                                </div>

                                <div>
                                        <Tooltip content={$i18n.t('Search')} placement="right">
                                                <button
                                                        class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group"
                                                        on:click={(e) => {
                                                                e.stopImmediatePropagation();
                                                                e.preventDefault();

                                                                showSearch.set(true);
                                                        }}
                                                        draggable="false"
                                                        aria-label={$i18n.t('Search')}
                                                >
                                                        <div class=" self-center flex items-center justify-center size-9">
                                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true"><path d="M14.0857 8.74999C14.0857 5.80355 11.6972 3.41503 8.75073 3.41503C5.80429 3.41503 3.41577 5.80355 3.41577 8.74999C3.41577 11.6964 5.80429 14.085 8.75073 14.085C11.6972 14.085 14.0857 11.6964 14.0857 8.74999ZM15.4158 8.74999C15.4158 10.3539 14.848 11.8245 13.9041 12.9746L13.9705 13.0303L16.9705 16.0303L17.0564 16.1338C17.2269 16.3919 17.1977 16.7434 16.9705 16.9707C16.7432 17.1975 16.3925 17.226 16.1345 17.0557L16.03 16.9707L13.03 13.9707L12.9753 13.9033C11.8253 14.8472 10.3547 15.415 8.75073 15.415C5.06975 15.415 2.08569 12.431 2.08569 8.74999C2.08569 5.06901 5.06975 2.08495 8.75073 2.08495C12.4317 2.08495 15.4158 5.06901 15.4158 8.74999Z"></path></svg>
                                                        </div>
                                                </button>
                                        </Tooltip>
                                </div>

                                {#if ($config?.features?.enable_notes ?? false) && ($user?.role === 'admin' || ($user?.permissions?.features?.notes ?? true))}
                                        <div class="">
                                                <Tooltip content={$i18n.t('Notes')} placement="right">
                                                        <a
                                                                class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group"
                                                                href="/notes"
                                                                on:click={async (e) => {
                                                                        e.stopImmediatePropagation();
                                                                        e.preventDefault();

                                                                        goto('/notes');
                                                                        itemClickHandler();
                                                                }}
                                                                draggable="false"
                                                                aria-label={$i18n.t('Notes')}
                                                        >
                                                                <div class=" self-center flex items-center justify-center size-9">
                                                                        <Note className="size-4.5" />
                                                                </div>
                                                        </a>
                                                </Tooltip>
                                        </div>
                                {/if}

                                {#if $user?.role === 'admin' || $user?.permissions?.workspace?.models || $user?.permissions?.workspace?.knowledge || $user?.permissions?.workspace?.prompts || $user?.permissions?.workspace?.tools}
                                        <div class="">
                                                <Tooltip content={$i18n.t('Workspace')} placement="right">
                                                        <a
                                                                class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group"
                                                                href="/workspace"
                                                                on:click={async (e) => {
                                                                        e.stopImmediatePropagation();
                                                                        e.preventDefault();

                                                                        goto('/workspace');
                                                                        itemClickHandler();
                                                                }}
                                                                aria-label={$i18n.t('Workspace')}
                                                                draggable="false"
                                                        >
                                                                <div class=" self-center flex items-center justify-center size-9">
                                                                        <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                fill="none"
                                                                                viewBox="0 0 24 24"
                                                                                stroke-width="1.5"
                                                                                stroke="currentColor"
                                                                                class="size-4.5"
                                                                        >
                                                                                <path
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                                                                                />
                                                                        </svg>
                                                                </div>
                                                        </a>
                                                </Tooltip>
                                        </div>
                                {/if}
                        </div>
                </button>

                <div>
                        <div>
                                <div class=" py-0.5">
                                        {#if $user !== undefined && $user !== null}
                                                <UserMenu
                                                        role={$user?.role}
                                                        on:show={(e) => {
                                                                if (e.detail === 'archived-chat') {
                                                                        showArchivedChats.set(true);
                                                                }
                                                        }}
                                                >
                                                        <div
                                                                class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group"
                                                        >
                                                                <div class=" self-center flex items-center justify-center size-9">
                                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true"><path d="M16.585 10C16.585 6.3632 13.6368 3.41504 10 3.41504C6.3632 3.41504 3.41504 6.3632 3.41504 10C3.41504 11.9528 4.26592 13.7062 5.61621 14.9121C6.6544 13.6452 8.23235 12.835 10 12.835C11.7674 12.835 13.3447 13.6454 14.3828 14.9121C15.7334 13.7062 16.585 11.9531 16.585 10ZM10 14.165C8.67626 14.165 7.49115 14.7585 6.69531 15.6953C7.66679 16.2602 8.79525 16.585 10 16.585C11.2041 16.585 12.3316 16.2597 13.3027 15.6953C12.5069 14.759 11.3233 14.1651 10 14.165ZM11.835 8.5C11.835 7.48656 11.0134 6.66504 10 6.66504C8.98656 6.66504 8.16504 7.48656 8.16504 8.5C8.16504 9.51344 8.98656 10.335 10 10.335C11.0134 10.335 11.835 9.51344 11.835 8.5ZM17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10ZM13.165 8.5C13.165 10.248 11.748 11.665 10 11.665C8.25202 11.665 6.83496 10.248 6.83496 8.5C6.83496 6.75202 8.25202 5.33496 10 5.33496C11.748 5.33496 13.165 6.75202 13.165 8.5Z"></path></svg>
                                                                </div>
                                                        </div>
                                                </UserMenu>
                                        {/if}
                                </div>
                        </div>
                </div>
        </div>

        {#if $showSidebar}
                <div
                        bind:this={navElement}
                        id="sidebar-content"
                        class="h-screen max-h-[100dvh] min-h-screen select-none w-[260px] bg-gray-50/70 dark:bg-gray-950/70 shrink-0 text-gray-900 dark:text-gray-200 text-sm overflow-x-hidden transition-all duration-300"
                        transition:slide={{ duration: 250, axis: 'x' }}
                        data-state={$showSidebar}
                >
                        <div
                                class="my-auto flex flex-col justify-between h-screen max-h-[100dvh] w-[260px] overflow-x-hidden scrollbar-hidden z-50"
                        >
                                <div
                                        class="sidebar px-2 pt-2 pb-1.5 flex justify-between space-x-1 text-gray-600 dark:text-gray-400 sticky top-0 z-10 -mb-3"
                                >
                                        <a href="/" class="flex flex-1 px-1.5" on:click={newChatHandler}>
                                                <div
                                                        id="sidebar-webui-name"
                                                        class="self-center font-medium text-gray-850 dark:text-white font-primary"
                                                >
                                                        {$WEBUI_NAME}
                                                </div>
                                        </a>
                                        <Tooltip
                                                content={$i18n.t('Close Sidebar')}
                                                placement="bottom"
                                        >
                                                <button
                                                        class="flex rounded-xl size-8.5 justify-center items-center hover:bg-gray-100/50 dark:hover:bg-gray-850/50 transition {isWindows
                                                                ? 'cursor-pointer'
                                                                : 'cursor-[w-resize]'}"
                                                        on:click={() => {
                                                                showSidebar.set(false);
                                                        }}
                                                        aria-label={$i18n.t('Close Sidebar')}
                                                >
                                                        <div class="self-center p-1.5">
                                                                <Sidebar />
                                                        </div>
                                                </button>
                                        </Tooltip>

                                        <div
                                                class="{scrollTop > 0
                                                        ? 'visible'
                                                        : 'invisible'} sidebar-bg-gradient-to-b bg-linear-to-b from-gray-50 dark:from-gray-950 to-transparent from-50% pointer-events-none absolute inset-0 -z-10 -mb-6"
                                        ></div>
                                </div>

                        <div
                                class="relative flex flex-col flex-1 overflow-y-auto scrollbar-hidden pt-3 pb-3"
                                on:scroll={(e) => {
                                        if (e.target.scrollTop === 0) {
                                                scrollTop = 0;
                                        } else {
                                                scrollTop = e.target.scrollTop;
                                        }
                                }}
                        >
                                {#if ($models ?? []).length > 0 && (($settings?.pinnedModels ?? []).length > 0 || $config?.default_pinned_models)}
                                        <Folder
                                                id="sidebar-models"
                                                className="px-2 mt-0.5"
                                                name={$i18n.t('Models')}
                                                chevron={false}
                                                dragAndDrop={false}
                                        >
                                                <PinnedModelList bind:selectedChatId {shiftKey} />
                                        </Folder>
                                {/if}

                                {#if $config?.features?.enable_channels && ($user?.role === 'admin' || $channels.length > 0)}
                                        <Folder
                                                id="sidebar-channels"
                                                className="px-2 mt-0.5"
                                                name={$i18n.t('Channels')}
                                                chevron={false}
                                                dragAndDrop={false}
                                                onAdd={async () => {
                                                        if ($user?.role === 'admin') {
                                                                await tick();

                                                                setTimeout(() => {
                                                                        showCreateChannel = true;
                                                                }, 0);
                                                        }
                                                }}
                                                onAddLabel={$i18n.t('Create Channel')}
                                        >
                                                {#each $channels as channel}
                                                        <ChannelItem
                                                                {channel}
                                                                onUpdate={async () => {
                                                                        await initChannels();
                                                                }}
                                                        />
                                                {/each}
                                        </Folder>
                                {/if}

                                {#if folders}
                                        <Folder
                                                id="sidebar-folders"
                                                className="px-2 mt-0.5"
                                                name={$i18n.t('Folders')}
                                                chevron={false}
                                                onAdd={() => {
                                                        showCreateFolderModal = true;
                                                }}
                                                onAddLabel={$i18n.t('New Folder')}
                                                on:drop={async (e) => {
                                                        const { type, id, item } = e.detail;

                                                        if (type === 'folder') {
                                                                if (folders[id].parent_id === null) {
                                                                        return;
                                                                }

                                                                const res = await updateFolderParentIdById(localStorage.token, id, null).catch(
                                                                        (error) => {
                                                                                toast.error(`${error}`);
                                                                                return null;
                                                                        }
                                                                );

                                                                if (res) {
                                                                        await initFolders();
                                                                }
                                                        }
                                                }}
                                        >
                                                <Folders
                                                        bind:folderRegistry
                                                        {folders}
                                                        {shiftKey}
                                                        onDelete={(folderId) => {
                                                                selectedFolder.set(null);
                                                                initChatList();
                                                        }}
                                                        on:update={() => {
                                                                initChatList();
                                                        }}
                                                        on:import={(e) => {
                                                                const { folderId, items } = e.detail;
                                                                importChatHandler(items, false, folderId);
                                                        }}
                                                        on:change={async () => {
                                                                initChatList();
                                                        }}
                                                />
                                        </Folder>
                                {/if}

                                <Folder
                                        id="sidebar-chats"
                                        className="px-2 mt-0.5"
                                        name={$i18n.t('Chats')}
                                        chevron={false}
                                        on:change={async (e) => {
                                                selectedFolder.set(null);
                                        }}
                                        on:import={(e) => {
                                                importChatHandler(e.detail);
                                        }}
                                        on:drop={async (e) => {
                                                const { type, id, item } = e.detail;

                                                if (type === 'chat') {
                                                        let chat = await getChatById(localStorage.token, id).catch((error) => {
                                                                return null;
                                                        });
                                                        if (!chat && item) {
                                                                chat = await importChats(localStorage.token, [
                                                                        {
                                                                                chat: item.chat,
                                                                                meta: item?.meta ?? {},
                                                                                pinned: false,
                                                                                folder_id: null,
                                                                                created_at: item?.created_at ?? null,
                                                                                updated_at: item?.updated_at ?? null
                                                                        }
                                                                ]);
                                                        }

                                                        if (chat) {
                                                                console.log(chat);
                                                                if (chat.folder_id) {
                                                                        const res = await updateChatFolderIdById(localStorage.token, chat.id, null).catch(
                                                                                (error) => {
                                                                                        toast.error(`${error}`);
                                                                                        return null;
                                                                                }
                                                                        );

                                                                        folderRegistry[chat.folder_id]?.setFolderItems();
                                                                }

                                                                if (chat.pinned) {
                                                                        const res = await toggleChatPinnedStatusById(localStorage.token, chat.id);
                                                                }

                                                                initChatList();
                                                        }
                                                } else if (type === 'folder') {
                                                        if (folders[id].parent_id === null) {
                                                                return;
                                                        }

                                                        const res = await updateFolderParentIdById(localStorage.token, id, null).catch(
                                                                (error) => {
                                                                        toast.error(`${error}`);
                                                                        return null;
                                                                }
                                                        );

                                                        if (res) {
                                                                await initFolders();
                                                        }
                                                }
                                        }}
                                >
                                        {#if $pinnedChats.length > 0}
                                                <div class="mb-1">
                                                        <div class="flex flex-col space-y-1 rounded-xl">
                                                                <Folder
                                                                        id="sidebar-pinned-chats"
                                                                        buttonClassName=" text-gray-500"
                                                                        on:import={(e) => {
                                                                                importChatHandler(e.detail, true);
                                                                        }}
                                                                        on:drop={async (e) => {
                                                                                const { type, id, item } = e.detail;

                                                                                if (type === 'chat') {
                                                                                        let chat = await getChatById(localStorage.token, id).catch((error) => {
                                                                                                return null;
                                                                                        });
                                                                                        if (!chat && item) {
                                                                                                chat = await importChats(localStorage.token, [
                                                                                                        {
                                                                                                                chat: item.chat,
                                                                                                                meta: item?.meta ?? {},
                                                                                                                pinned: false,
                                                                                                                folder_id: null,
                                                                                                                created_at: item?.created_at ?? null,
                                                                                                                updated_at: item?.updated_at ?? null
                                                                                                        }
                                                                                                ]);
                                                                                        }

                                                                                        if (chat) {
                                                                                                console.log(chat);
                                                                                                if (chat.folder_id) {
                                                                                                        const res = await updateChatFolderIdById(
                                                                                                                localStorage.token,
                                                                                                                chat.id,
                                                                                                                null
                                                                                                        ).catch((error) => {
                                                                                                                toast.error(`${error}`);
                                                                                                                return null;
                                                                                                        });
                                                                                                }

                                                                                                if (!chat.pinned) {
                                                                                                        const res = await toggleChatPinnedStatusById(localStorage.token, chat.id);
                                                                                                }

                                                                                                initChatList();
                                                                                        }
                                                                                }
                                                                        }}
                                                                        name={$i18n.t('Pinned')}
                                                                >
                                                                        <div
                                                                                class="ml-3 pl-1 mt-[1px] flex flex-col overflow-y-auto scrollbar-hidden border-s border-gray-100 dark:border-gray-900 text-gray-900 dark:text-gray-200"
                                                                        >
                                                                                {#each $pinnedChats as chat, idx (`pinned-chat-${chat?.id ?? idx}`)}
                                                                                        <ChatItem
                                                                                                className=""
                                                                                                id={chat.id}
                                                                                                title={chat.title}
                                                                                                {shiftKey}
                                                                                                selected={selectedChatId === chat.id}
                                                                                                on:select={() => {
                                                                                                        selectedChatId = chat.id;
                                                                                                }}
                                                                                                on:unselect={() => {
                                                                                                        selectedChatId = null;
                                                                                                }}
                                                                                                on:change={async () => {
                                                                                                        initChatList();
                                                                                                }}
                                                                                                on:tag={(e) => {
                                                                                                        const { type, name } = e.detail;
                                                                                                        tagEventHandler(type, name, chat.id);
                                                                                                }}
                                                                                        />
                                                                                {/each}
                                                                        </div>
                                                                </Folder>
                                                        </div>
                                                </div>
                                        {/if}

                                        <div class=" flex-1 flex flex-col overflow-y-auto scrollbar-hidden">
                                                <div class="pt-1.5">
                                                        {#if $chats}
                                                                {#each $chats as chat, idx (`chat-${chat?.id ?? idx}`)}
                                                                        {#if idx === 0 || (idx > 0 && chat.time_range !== $chats[idx - 1].time_range)}
                                                                                <div
                                                                                        class="w-full pl-2.5 text-xs text-gray-500 dark:text-gray-500 font-medium {idx ===
                                                                                        0
                                                                                                ? ''
                                                                                                : 'pt-5'} pb-1.5"
                                                                                >
                                                                                        {$i18n.t(chat.time_range)}
                                                                                        <!-- localisation keys for time_range to be recognized from the i18next parser (so they don't get automatically removed):
                                                        {$i18n.t('Today')}
                                                        {$i18n.t('Yesterday')}
                                                        {$i18n.t('Previous 7 days')}
                                                        {$i18n.t('Previous 30 days')}
                                                        {$i18n.t('January')}
                                                        {$i18n.t('February')}
                                                        {$i18n.t('March')}
                                                        {$i18n.t('April')}
                                                        {$i18n.t('May')}
                                                        {$i18n.t('June')}
                                                        {$i18n.t('July')}
                                                        {$i18n.t('August')}
                                                        {$i18n.t('September')}
                                                        {$i18n.t('October')}
                                                        {$i18n.t('November')}
                                                        {$i18n.t('December')}
                                                        -->
                                                                                </div>
                                                                        {/if}

                                                                        <ChatItem
                                                                                className=""
                                                                                id={chat.id}
                                                                                title={chat.title}
                                                                                {shiftKey}
                                                                                selected={selectedChatId === chat.id}
                                                                                on:select={() => {
                                                                                        selectedChatId = chat.id;
                                                                                }}
                                                                                on:unselect={() => {
                                                                                        selectedChatId = null;
                                                                                }}
                                                                                on:change={async () => {
                                                                                        initChatList();
                                                                                }}
                                                                                on:tag={(e) => {
                                                                                        const { type, name } = e.detail;
                                                                                        tagEventHandler(type, name, chat.id);
                                                                                }}
                                                                        />
                                                                {/each}

                                                                {#if $scrollPaginationEnabled && !allChatsLoaded}
                                                                        <Loader
                                                                                on:visible={(e) => {
                                                                                        if (!chatListLoading) {
                                                                                                loadMoreChats();
                                                                                        }
                                                                                }}
                                                                        >
                                                                                <div
                                                                                        class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"
                                                                                >
                                                                                        <Spinner className=" size-4" />
                                                                                        <div class=" ">{$i18n.t('Loading...')}</div>
                                                                                </div>
                                                                        </Loader>
                                                                {/if}
                                                        {:else}
                                                                <div
                                                                        class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"
                                                                >
                                                                        <Spinner className=" size-4" />
                                                                        <div class=" ">{$i18n.t('Loading...')}</div>
                                                                </div>
                                                        {/if}
                                                </div>
                                        </div>
                                </Folder>
                        </div>

                        <div class="px-1.5 pt-1.5 pb-2 sticky bottom-0 z-10 -mt-3 sidebar">
                                <div
                                        class=" sidebar-bg-gradient-to-t bg-linear-to-t from-gray-50 dark:from-gray-950 to-transparent from-50% pointer-events-none absolute inset-0 -z-10 -mt-6"
                                ></div>
                                <div class="flex flex-col font-primary">
                                        {#if $user !== undefined && $user !== null}
                                                <UserMenu
                                                        role={$user?.role}
                                                        on:show={(e) => {
                                                                if (e.detail === 'archived-chat') {
                                                                        showArchivedChats.set(true);
                                                                }
                                                        }}
                                                >
                                                        <div
                                                                class=" flex items-center rounded-2xl py-2 px-1.5 w-full hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition"
                                                        >
                                                                <div class=" self-center mr-3">
                                                                        <Settings className="size-6" strokeWidth="1.5" />
                                                                </div>
                                                                <div class=" self-center font-medium">{$user?.name}</div>
                                                        </div>
                                                </UserMenu>
                                        {/if}
                                </div>
                        </div>
                </div>
        </div>
        {/if}
        </div>
{/if}
