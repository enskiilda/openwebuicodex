const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/kq2ZDxMK.js","../chunks/CQrtv1eE.js","../chunks/WJl3ipnu.js","../chunks/C7w8oddz.js","../chunks/DsTn8WK5.js","../chunks/Bh-hrM1w.js","../chunks/OO7lCI-F.js","../chunks/DQ9UxF7k.js"])))=>i.map(i=>d[i]);
import "../chunks/DKem_M_z.js";
import "../chunks/DwLkIEu4.js";
import { p as push, g as getContext, l as legacy_pre_effect, s as set, b as get, m as mutable_source, i as deep_read_state, j as legacy_pre_effect_reset, f as first_child, h as derived_safe_equal, e as sibling, c as child, r as reset, t as template_effect, u as untrack, a as pop, n as createEventDispatcher, k as tick, o as onMount, ay as onDestroy, q as next, aF as mutate, aE as invalidate_inner_signals, aG as remove_textarea_child } from "../chunks/BxIY6ir7.js";
import { s as set_text, e as event } from "../chunks/cBADewWV.js";
import { i as if_block } from "../chunks/BoSuMvtf.js";
import { f as from_html, a as append, t as text, b as from_svg, c as comment } from "../chunks/CAbo1QWi.js";
import { s as slot } from "../chunks/CZEGIGsR.js";
import { i as init } from "../chunks/ByqEASoO.js";
import { a as store_get, s as setup_stores, d as store_set, m as mark_store_binding } from "../chunks/BvQ5O7-v.js";
import { f as fileSaver } from "../chunks/DRcZXQDn.js";
import { g as goto } from "../chunks/h-B6Md2q.js";
import { p as page } from "../chunks/CrvggIeO.js";
import { u as user, E as folders, b as settings, e as chatId, q as tags, J as selectedFolder, s as showSidebar, K as chatTitle, C as currentChatPage, D as chats, L as pinnedChats, m as mobile, c as config, a as models, g as showArchivedChats, N as showSearch, j as socket, h as channels, O as scrollPaginationEnabled, B as temporaryChatEnabled, P as isApp, W as WEBUI_NAME, Q as showChangelog, l as theme, F as toolServers, t as tools, f as functions, I as banners, o as showSettings, n as showShortcuts } from "../chunks/2Yg1sHDo.js";
import { e as each, i as index } from "../chunks/7_HZMPNF.js";
import { a as set_attribute, s as set_class, c as clsx, h as set_style, r as remove_input_defaults, d as bind_select_value, g as set_selected } from "../chunks/kXiCYuyj.js";
import { t as transition } from "../chunks/B3nUhwYU.js";
import { b as bind_this } from "../chunks/D16JuV5t.js";
import { t as toast } from "../chunks/BccDN__m.js";
import { q as getArchivedChatList, r as getAllArchivedChats, t as archiveChatById, v as unarchiveAllChats, w as toggleChatPinnedStatusById, x as getChatPinnedStatusById, a as getChatById, d as deleteChatById, j as getAllTags, u as updateChatById, f as getChatList, p as getPinnedChatList, o as updateChatFolderIdById, y as cloneChatById, l as getChatListByFolderId, z as importChats, m as getChatsByFolderId, A as getChatListBySearchText, B as getAllChats, C as archiveAllChats, D as deleteAllChats } from "../chunks/17j0UIT7.js";
import { S as ShareChatModal, F as FolderModal, a as FolderMenu, g as getFolderById, b as updateFolderParentIdById, d as deleteFolderById, u as updateFolderById, c as updateFolderIsExpandedById, e as getFolders, f as createNewFolder } from "../chunks/CicxgGfq.js";
import { p as prop } from "../chunks/BRmGPDvq.js";
import { C as ChatsModal, U as UserProfileImage } from "../chunks/BfZt12ry.js";
import { C as ConfirmDialog } from "../chunks/DhVOSDv1.js";
import { S as Spinner } from "../chunks/CtnI4RVL.js";
import { A as ArchiveBox, s as shortcuts, U as UserMenu, S as Settings, b as Shortcut } from "../chunks/B4U2oVkx.js";
import { b as bind_value, c as bind_checked, a as bind_files } from "../chunks/DVLuwGai.js";
import { _ as __vitePreload } from "../chunks/CQrtv1eE.js";
import "../chunks/C2A39Ney.js";
import { M as Menu_sub, a as Menu_sub_trigger, b as Menu_sub_content } from "../chunks/DIObiElu.js";
import { b as Menu_content, c as Menu_item } from "../chunks/DQmZL-p0.js";
import { f as flyAndScale } from "../chunks/BuLNlPfL.js";
import { D as Dropdown } from "../chunks/NbBmD2S8.js";
import { G as GarbageBin } from "../chunks/C_eYBUEf.js";
import { P as Pencil } from "../chunks/wRvEFTSI.js";
import { T as Tooltip } from "../chunks/BHXWufQb.js";
import { S as Share } from "../chunks/BK4529jj.js";
import { D as DocumentDuplicate } from "../chunks/D4EXptqs.js";
import { b as createMessagesList, l as localizedFormat, x as v4, f as generateInitialsImage, i as copyToClipboard, c as compareVersion, a as getUserPosition, Z as getImportOrigin, _ as convertOpenAIChats, m as marked } from "../chunks/Bh-hrM1w.js";
import { D as Download } from "../chunks/Dm1xcaSj.js";
import { b as Folder$1, P as PageEdit } from "../chunks/P5gA3V2-.js";
import { M as Messages } from "../chunks/C0LRR2ef.js";
import { S as Sparkles } from "../chunks/CsQKPwST.js";
import { l as generateTitle, m as getVersionUpdates, n as getToolServersData, g as getModels, o as getChangelog } from "../chunks/DtDmpg9G.js";
import { L as Loader } from "../chunks/Bne0qWmB.js";
import { C as ChevronDown } from "../chunks/CUFupyOK.js";
import { C as ChevronRight } from "../chunks/CS8GUXml.js";
import { C as Collapsible } from "../chunks/BgD15ug2.js";
import { P as Plus } from "../chunks/F9_n4pHG.js";
import { b as bind_prop } from "../chunks/B81XwWpr.js";
import purify from "../chunks/bQFTtKkZ.js";
import { F as FolderOpen } from "../chunks/D8r4M5hU.js";
import { E as EllipsisHorizontal } from "../chunks/BC-suBaL.js";
import { E as Emoji } from "../chunks/D1wUrbJE.js";
import { f as deleteChannelById, h as updateChannelById, i as createNewChannel, j as getChannels } from "../chunks/CBVbYfHa.js";
import { p as preventDefault, s as stopPropagation } from "../chunks/CGgk3ROl.js";
import { M as Modal } from "../chunks/DF6V1elH.js";
import { A as AccessControl } from "../chunks/CFsG9iJ9.js";
import { X as XMark } from "../chunks/CUUSX84-.js";
import { C as Cog6, M as Minus, A as AddConnectionModal, a as AddToolServerModal, b as Connection$1, W as WrenchAlt } from "../chunks/CLQ6JPcA.js";
import { H as Hashtag, L as Lock } from "../chunks/sO1Rge5t.js";
import { c as component } from "../chunks/-ZmPojHm.js";
import { f as fade, s as slide } from "../chunks/BNZI2i79.js";
import { S as Search$1 } from "../chunks/2ixn6gs3.js";
import { d as dayjs2 } from "../chunks/OO7lCI-F.js";
import "../chunks/CAzIiltw.js";
import { c as calendar } from "../chunks/CvB8sZNw.js";
import { P as PencilSquare$1 } from "../chunks/B7zwdaZ7.js";
import { S as Sidebar } from "../chunks/CIfNu5Bq.js";
import { S as Sortable } from "../chunks/xMOMEvTi.js";
import { h as updateUserSettings, j as updateUserInfo } from "../chunks/Bi6Hlb5b.js";
import { a as WEBUI_API_BASE_URL, W as WEBUI_VERSION, e as WEBUI_BUILD_HASH } from "../chunks/DQ9UxF7k.js";
import { d as updateUserPassword, g as getSessionUser, e as getAPIKey, f as updateUserProfile, h as createAPIKey, i as getAdminDetails } from "../chunks/GdVmBnqS.js";
import { S as SensitiveInput } from "../chunks/BmA2IqKa.js";
import { T as Textarea } from "../chunks/B-P1fI-w.js";
import { g as getOllamaVersion } from "../chunks/d72FSnuN.js";
import { g as getLanguages, c as changeLanguage } from "../chunks/BEveHQTb.js";
import { A as AdvancedParams } from "../chunks/Ap_nRVJv.js";
import { S as Switch_1 } from "../chunks/CakJ276w.js";
import { g as getVoices } from "../chunks/BgG6Mq7m.js";
import "../chunks/-BrZk0Qz.js";
import { L as Link } from "../chunks/EZxqw5-p.js";
import { h as html } from "../chunks/tLAl1VVg.js";
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
const cursorRequestMap = /* @__PURE__ */ new WeakMap();
const transactionDoneMap = /* @__PURE__ */ new WeakMap();
const transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
const transformCache = /* @__PURE__ */ new WeakMap();
const reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
  get(target, prop2, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop2 === "done")
        return transactionDoneMap.get(target);
      if (prop2 === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop2 === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop2]);
  },
  set(target, prop2, value) {
    target[prop2] = value;
    return true;
  },
  has(target, prop2) {
    if (target instanceof IDBTransaction && (prop2 === "done" || prop2 === "store")) {
      return true;
    }
    return prop2 in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name, version);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event2) => {
      upgrade(wrap(request.result), event2.oldVersion, event2.newVersion, wrap(request.transaction), event2);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event2) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event2.oldVersion,
      event2.newVersion,
      event2
    ));
  }
  openPromise.then((db) => {
    if (terminated)
      db.addEventListener("close", () => terminated());
    if (blocking) {
      db.addEventListener("versionchange", (event2) => blocking(event2.oldVersion, event2.newVersion, event2));
    }
  }).catch(() => {
  });
  return openPromise;
}
function deleteDB(name, { blocked } = {}) {
  const request = indexedDB.deleteDatabase(name);
  if (blocked) {
    request.addEventListener("blocked", (event2) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event2.oldVersion,
      event2
    ));
  }
  return wrap(request).then(() => void 0);
}
const readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
const writeMethods = ["put", "add", "delete", "clear"];
const cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop2) {
  if (!(target instanceof IDBDatabase && !(prop2 in target) && typeof prop2 === "string")) {
    return;
  }
  if (cachedMethods.get(prop2))
    return cachedMethods.get(prop2);
  const targetFuncName = prop2.replace(/FromIndex$/, "");
  const useIndex = prop2 !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop2, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop2, receiver) => getMethod(target, prop2) || oldTraps.get(target, prop2, receiver),
  has: (target, prop2) => !!getMethod(target, prop2) || oldTraps.has(target, prop2)
}));
var root_1$t = from_html(`<div slot="footer"><div class="flex flex-wrap text-sm font-medium gap-1.5 mt-2 m-1 justify-end w-full"><button class=" px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-800 rounded-3xl"><!></button> <button class="px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-800 rounded-3xl"> </button></div></div>`);
var root$B = from_html(`<!> <!>`, 1);
function ArchivedChatsModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let loading = mutable_source(false);
  let chatList = mutable_source(null);
  let page2 = 1;
  let query = mutable_source("");
  let orderBy = mutable_source("updated_at");
  let direction = mutable_source("desc");
  let allChatsLoaded = mutable_source(false);
  let chatListLoading = mutable_source(false);
  let searchDebounceTimeout;
  let showUnarchiveAllConfirmDialog = mutable_source(false);
  let filter = mutable_source({});
  const searchHandler = async () => {
    if (!show()) {
      return;
    }
    if (searchDebounceTimeout) {
      clearTimeout(searchDebounceTimeout);
    }
    page2 = 1;
    set(chatList, null);
    if (get(query) === "") {
      set(chatList, await getArchivedChatList(localStorage.token, page2, get(filter)));
    } else {
      searchDebounceTimeout = setTimeout(
        async () => {
          set(chatList, await getArchivedChatList(localStorage.token, page2, get(filter)));
        },
        500
      );
    }
    if ((get(chatList) ?? []).length === 0) {
      set(allChatsLoaded, true);
    } else {
      set(allChatsLoaded, false);
    }
  };
  const loadMoreChats = async () => {
    set(chatListLoading, true);
    page2 += 1;
    let newChatList = [];
    if (get(query)) {
      newChatList = await getArchivedChatList(localStorage.token, page2, get(filter));
    } else {
      newChatList = await getArchivedChatList(localStorage.token, page2, get(filter));
    }
    set(allChatsLoaded, newChatList.length === 0);
    if (newChatList.length > 0) {
      set(chatList, [...get(chatList), ...newChatList]);
    }
    set(chatListLoading, false);
  };
  const exportChatsHandler = async () => {
    const chats2 = await getAllArchivedChats(localStorage.token);
    let blob = new Blob([JSON.stringify(chats2)], { type: "application/json" });
    saveAs(blob, `${$i18n().t("archived-chat-export")}-${Date.now()}.json`);
  };
  const unarchiveHandler = async (chatId2) => {
    await archiveChatById(localStorage.token, chatId2).catch((error) => {
      toast.error(`${error}`);
    });
    onUpdate()();
    init$1();
  };
  const unarchiveAllHandler = async () => {
    set(loading, true);
    try {
      await unarchiveAllChats(localStorage.token);
      toast.success($i18n().t("All chats have been unarchived."));
      onUpdate()();
      await init$1();
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      set(loading, false);
    }
  };
  const init$1 = async () => {
    set(chatList, await getArchivedChatList(localStorage.token));
  };
  legacy_pre_effect(() => (get(query), get(orderBy), get(direction)), () => {
    set(filter, {
      ...get(query) ? { query: get(query) } : {},
      ...get(orderBy) ? { order_by: get(orderBy) } : {},
      ...get(direction) ? { direction: get(direction) } : {}
    });
  });
  legacy_pre_effect(() => get(filter), () => {
    if (get(filter) !== null) {
      searchHandler();
    }
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$B();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Are you sure you want to unarchive all archived chats?"))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Unarchive All"))));
    ConfirmDialog(node, {
      get message() {
        return get($0);
      },
      get confirmLabel() {
        return get($1);
      },
      get show() {
        return get(showUnarchiveAllConfirmDialog);
      },
      set show($$value) {
        set(showUnarchiveAllConfirmDialog, $$value);
      },
      $$events: {
        confirm: () => {
          unarchiveAllHandler();
        }
      },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Archived Chats"))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("You have no archived conversations."))));
    ChatsModal(node_1, {
      get title() {
        return get($0);
      },
      get emptyPlaceholder() {
        return get($1);
      },
      get chatList() {
        return get(chatList);
      },
      get allChatsLoaded() {
        return get(allChatsLoaded);
      },
      get chatListLoading() {
        return get(chatListLoading);
      },
      onUpdate: () => {
        init$1();
      },
      loadHandler: loadMoreChats,
      unarchiveHandler,
      get show() {
        return show();
      },
      set show($$value) {
        show($$value);
      },
      get query() {
        return get(query);
      },
      set query($$value) {
        set(query, $$value);
      },
      get orderBy() {
        return get(orderBy);
      },
      set orderBy($$value) {
        set(orderBy, $$value);
      },
      get direction() {
        return get(direction);
      },
      set direction($$value) {
        set(direction, $$value);
      },
      $$slots: {
        footer: ($$anchor2, $$slotProps) => {
          var div = root_1$t();
          var div_1 = child(div);
          var button = child(div_1);
          var node_2 = child(button);
          {
            var consequent = ($$anchor3) => {
              Spinner($$anchor3, { className: "size-4" });
            };
            var alternate = ($$anchor3) => {
              var text$1 = text();
              template_effect(($02) => set_text(text$1, $02), [
                () => ($i18n(), untrack(() => $i18n().t("Unarchive All Archived Chats")))
              ]);
              append($$anchor3, text$1);
            };
            if_block(node_2, ($$render) => {
              if (get(loading)) $$render(consequent);
              else $$render(alternate, false);
            });
          }
          reset(button);
          var button_1 = sibling(button, 2);
          var text_1 = child(button_1, true);
          reset(button_1);
          reset(div_1);
          reset(div);
          template_effect(
            ($02) => {
              button.disabled = get(loading);
              button_1.disabled = get(loading);
              set_text(text_1, $02);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Export All Archived Chats")))
            ]
          );
          event("click", button, () => {
            set(showUnarchiveAllConfirmDialog, true);
          });
          event("click", button_1, () => {
            exportChatsHandler();
          });
          append($$anchor2, div);
        }
      },
      $$legacy: true
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$A = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"></path></svg>`);
function Bookmark($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$A();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root$z = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"></path></svg>`);
function BookmarkSlash($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$z();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_1$s = from_html(`<div class="hidden w-full h-full flex-col"><div id="full-messages-container"><!></div></div>`);
var root_7$9 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_9$9 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_12$5 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_13$4 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_14$6 = from_html(`<div class="flex items-center line-clamp-1"> </div>`);
var root_10$6 = from_html(`<!> <!> <!>`, 1);
var root_8$5 = from_html(`<!> <!>`, 1);
var root_15$3 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_17$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_18$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_19 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_22$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_25$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_21 = from_html(`<!> <!>`, 1);
var root_26 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_27$1 = from_html(`<!> <div class="flex items-center"> </div>`, 1);
var root_5$f = from_html(`<!> <!> <!> <hr class="border-gray-50 dark:border-gray-800 my-1"/> <!> <!> <!> <!> <!>`, 1);
var root_4$k = from_html(`<div slot="content"><!></div>`);
var root$y = from_html(`<!> <!>`, 1);
function ChatMenu($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $folders = () => store_get(folders, "$folders", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let shareHandler = prop($$props, "shareHandler", 8);
  let moveChatHandler = prop($$props, "moveChatHandler", 8);
  let cloneChatHandler = prop($$props, "cloneChatHandler", 8);
  let archiveChatHandler = prop($$props, "archiveChatHandler", 8);
  let renameHandler = prop($$props, "renameHandler", 8);
  let deleteHandler = prop($$props, "deleteHandler", 8);
  let onClose = prop($$props, "onClose", 8);
  let chatId2 = prop($$props, "chatId", 8, "");
  let show = mutable_source(false);
  let pinned = mutable_source(false);
  let chat = mutable_source(null);
  let showFullMessages = mutable_source(false);
  const pinHandler = async () => {
    await toggleChatPinnedStatusById(localStorage.token, chatId2());
    dispatch("change");
  };
  const checkPinned = async () => {
    set(pinned, await getChatPinnedStatusById(localStorage.token, chatId2()));
  };
  const getChatAsText = async (chat2) => {
    const history = chat2.chat.history;
    const messages = createMessagesList(history, history.currentId);
    const chatText = messages.reduce(
      (a, message, i, arr) => {
        return `${a}### ${message.role.toUpperCase()}
${message.content}

`;
      },
      ""
    );
    return chatText.trim();
  };
  const downloadTxt = async () => {
    const chat2 = await getChatById(localStorage.token, chatId2());
    if (!chat2) {
      return;
    }
    const chatText = await getChatAsText(chat2);
    let blob = new Blob([chatText], { type: "text/plain" });
    saveAs(blob, `chat-${chat2.chat.title}.txt`);
  };
  const downloadPdf = async () => {
    var _a;
    set(chat, await getChatById(localStorage.token, chatId2()));
    if (!get(chat)) {
      return;
    }
    const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([__vitePreload(() => import("../chunks/kq2ZDxMK.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url), __vitePreload(() => import("../chunks/C8IzhQs1.js"), true ? [] : void 0, import.meta.url)]);
    if (((_a = $settings()) == null ? void 0 : _a.stylizedPdfExport) ?? true) {
      set(showFullMessages, true);
      await tick();
      const containerElement = document.getElementById("full-messages-container");
      if (containerElement) {
        try {
          const isDarkMode = document.documentElement.classList.contains("dark");
          const virtualWidth = 800;
          const clonedElement = containerElement.cloneNode(true);
          clonedElement.classList.add("text-black");
          clonedElement.classList.add("dark:text-white");
          clonedElement.style.width = `${virtualWidth}px`;
          clonedElement.style.position = "absolute";
          clonedElement.style.left = "-9999px";
          clonedElement.style.height = "auto";
          document.body.appendChild(clonedElement);
          await new Promise((r) => setTimeout(r, 100));
          const canvas = await html2canvas(clonedElement, {
            backgroundColor: isDarkMode ? "#000" : "#fff",
            useCORS: true,
            scale: 2,
            // increase resolution
            width: virtualWidth
          });
          document.body.removeChild(clonedElement);
          const pdf = new jsPDF("p", "mm", "a4");
          const pageWidthMM = 210;
          const pageHeightMM = 297;
          const pxPerMM = canvas.width / virtualWidth;
          const pxPerPDFMM = canvas.width / pageWidthMM;
          const pagePixelHeight = Math.floor(pxPerPDFMM * pageHeightMM);
          let offsetY = 0;
          let page2 = 0;
          while (offsetY < canvas.height) {
            const sliceHeight = Math.min(pagePixelHeight, canvas.height - offsetY);
            const pageCanvas = document.createElement("canvas");
            pageCanvas.width = canvas.width;
            pageCanvas.height = sliceHeight;
            const ctx = pageCanvas.getContext("2d");
            ctx.drawImage(canvas, 0, offsetY, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);
            const imgData = pageCanvas.toDataURL("image/jpeg", 0.7);
            const imgHeightMM = sliceHeight * pageWidthMM / canvas.width;
            if (page2 > 0) pdf.addPage();
            if (isDarkMode) {
              pdf.setFillColor(0, 0, 0);
              pdf.rect(0, 0, pageWidthMM, pageHeightMM, "F");
            }
            pdf.addImage(imgData, "JPEG", 0, 0, pageWidthMM, imgHeightMM);
            offsetY += sliceHeight;
            page2++;
          }
          pdf.save(`chat-${get(chat).chat.title}.pdf`);
          set(showFullMessages, false);
        } catch (error) {
          console.error("Error generating PDF", error);
        }
      }
    } else {
      console.log("Downloading PDF");
      const chatText = await getChatAsText(get(chat));
      const doc = new jsPDF();
      const left = 15;
      const top = 20;
      const right = 15;
      const bottom = 20;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const usableWidth = pageWidth - left - right;
      const fontSize = 8;
      doc.setFontSize(fontSize);
      const lineHeight = fontSize * 1;
      const paragraphs = chatText.split("\n");
      let y = top;
      for (let paragraph of paragraphs) {
        const lines = doc.splitTextToSize(paragraph, usableWidth);
        for (let line of lines) {
          if (y + lineHeight > pageHeight - bottom) {
            doc.addPage();
            y = top;
          }
          doc.text(line, left, y);
          y += lineHeight * 0.5;
        }
        y += lineHeight * 0.1;
      }
      doc.save(`chat-${get(chat).chat.title}.pdf`);
    }
  };
  const downloadJSONExport = async () => {
    const chat2 = await getChatById(localStorage.token, chatId2());
    if (chat2) {
      let blob = new Blob([JSON.stringify([chat2])], { type: "application/json" });
      saveAs(blob, `chat-export-${Date.now()}.json`);
    }
  };
  legacy_pre_effect(() => get(show), () => {
    if (get(show)) {
      checkPinned();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$y();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$s();
      var div_1 = child(div);
      var node_1 = child(div_1);
      {
        let $0 = derived_safe_equal(() => (get(chat), untrack(() => {
          var _a;
          return `chat-preview-${((_a = get(chat)) == null ? void 0 : _a.id) ?? ""}`;
        })));
        Messages(node_1, {
          className: "h-full flex pt-4 pb-8 w-full",
          get chatId() {
            return get($0);
          },
          get user() {
            return $user();
          },
          readOnly: true,
          get history() {
            return get(chat), untrack(() => get(chat).chat.history);
          },
          get messages() {
            return get(chat), untrack(() => get(chat).chat.messages);
          },
          autoScroll: true,
          sendMessage: () => {
          },
          continueResponse: () => {
          },
          regenerateResponse: () => {
          },
          messagesCount: null,
          editCodeBlock: false
        });
      }
      reset(div_1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(chat) && get(showFullMessages)) $$render(consequent);
    });
  }
  var node_2 = sibling(node, 2);
  Dropdown(node_2, {
    get show() {
      return get(show);
    },
    set show($$value) {
      set(show, $$value);
    },
    $$events: {
      change: (e) => {
        if (e.detail === false) {
          onClose()();
        }
      }
    },
    children: ($$anchor2, $$slotProps) => {
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("More"))));
        Tooltip($$anchor2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = comment();
            var node_3 = first_child(fragment_2);
            slot(node_3, $$props, "default", {}, null);
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      }
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div_2 = root_4$k();
        var node_4 = child(div_2);
        Menu_content(node_4, {
          class: "w-full max-w-[200px] rounded-2xl px-1 py-1  border border-gray-100  dark:border-gray-800 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg transition",
          sideOffset: -2,
          side: "bottom",
          align: "start",
          get transition() {
            return flyAndScale;
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_5$f();
            var node_5 = first_child(fragment_3);
            {
              var consequent_1 = ($$anchor4) => {
                Menu_item($$anchor4, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800  rounded-xl",
                  $$events: {
                    click: () => {
                      shareHandler()();
                    }
                  },
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_5 = root_7$9();
                    var node_6 = first_child(fragment_5);
                    Share(node_6, { strokeWidth: "1.5" });
                    var div_3 = sibling(node_6, 2);
                    var text2 = child(div_3, true);
                    reset(div_3);
                    template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Share")))]);
                    append($$anchor5, fragment_5);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_5, ($$render) => {
                if ($user(), untrack(() => {
                  var _a, _b, _c;
                  return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user().permissions) == null ? void 0 : _b.chat) == null ? void 0 : _c.share) ?? true);
                })) $$render(consequent_1);
              });
            }
            var node_7 = sibling(node_5, 2);
            Menu_sub(node_7, {
              children: ($$anchor4, $$slotProps3) => {
                var fragment_6 = root_8$5();
                var node_8 = first_child(fragment_6);
                Menu_sub_trigger(node_8, {
                  class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                  children: ($$anchor5, $$slotProps4) => {
                    var fragment_7 = root_9$9();
                    var node_9 = first_child(fragment_7);
                    Download(node_9, { strokeWidth: "1.5" });
                    var div_4 = sibling(node_9, 2);
                    var text_1 = child(div_4, true);
                    reset(div_4);
                    template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Download")))]);
                    append($$anchor5, fragment_7);
                  },
                  $$slots: { default: true }
                });
                var node_10 = sibling(node_8, 2);
                Menu_sub_content(node_10, {
                  class: "w-full rounded-2xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white shadow-lg border border-gray-100  dark:border-gray-800",
                  get transition() {
                    return flyAndScale;
                  },
                  sideOffset: 8,
                  children: ($$anchor5, $$slotProps4) => {
                    var fragment_8 = root_10$6();
                    var node_11 = first_child(fragment_8);
                    {
                      var consequent_2 = ($$anchor6) => {
                        Menu_item($$anchor6, {
                          class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                          $$events: {
                            click: () => {
                              downloadJSONExport();
                            }
                          },
                          children: ($$anchor7, $$slotProps5) => {
                            var div_5 = root_12$5();
                            var text_2 = child(div_5, true);
                            reset(div_5);
                            template_effect(($0) => set_text(text_2, $0), [
                              () => ($i18n(), untrack(() => $i18n().t("Export chat (.json)")))
                            ]);
                            append($$anchor7, div_5);
                          },
                          $$slots: { default: true }
                        });
                      };
                      if_block(node_11, ($$render) => {
                        if ($user(), untrack(() => {
                          var _a, _b, _c;
                          return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user().permissions) == null ? void 0 : _b.chat) == null ? void 0 : _c.export) ?? true);
                        })) $$render(consequent_2);
                      });
                    }
                    var node_12 = sibling(node_11, 2);
                    Menu_item(node_12, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                      $$events: {
                        click: () => {
                          downloadTxt();
                        }
                      },
                      children: ($$anchor6, $$slotProps5) => {
                        var div_6 = root_13$4();
                        var text_3 = child(div_6, true);
                        reset(div_6);
                        template_effect(($0) => set_text(text_3, $0), [
                          () => ($i18n(), untrack(() => $i18n().t("Plain text (.txt)")))
                        ]);
                        append($$anchor6, div_6);
                      },
                      $$slots: { default: true }
                    });
                    var node_13 = sibling(node_12, 2);
                    Menu_item(node_13, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                      $$events: {
                        click: () => {
                          downloadPdf();
                        }
                      },
                      children: ($$anchor6, $$slotProps5) => {
                        var div_7 = root_14$6();
                        var text_4 = child(div_7, true);
                        reset(div_7);
                        template_effect(($0) => set_text(text_4, $0), [
                          () => ($i18n(), untrack(() => $i18n().t("PDF document (.pdf)")))
                        ]);
                        append($$anchor6, div_7);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_8);
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_6);
              },
              $$slots: { default: true }
            });
            var node_14 = sibling(node_7, 2);
            Menu_item(node_14, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  renameHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_10 = root_15$3();
                var node_15 = first_child(fragment_10);
                Pencil(node_15, { strokeWidth: "1.5" });
                var div_8 = sibling(node_15, 2);
                var text_5 = child(div_8, true);
                reset(div_8);
                template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Rename")))]);
                append($$anchor4, fragment_10);
              },
              $$slots: { default: true }
            });
            var node_16 = sibling(node_14, 4);
            Menu_item(node_16, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  pinHandler();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_11 = comment();
                var node_17 = first_child(fragment_11);
                {
                  var consequent_3 = ($$anchor5) => {
                    var fragment_12 = root_17$1();
                    var node_18 = first_child(fragment_12);
                    BookmarkSlash(node_18, { strokeWidth: "1.5" });
                    var div_9 = sibling(node_18, 2);
                    var text_6 = child(div_9, true);
                    reset(div_9);
                    template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Unpin")))]);
                    append($$anchor5, fragment_12);
                  };
                  var alternate = ($$anchor5) => {
                    var fragment_13 = root_18$1();
                    var node_19 = first_child(fragment_13);
                    Bookmark(node_19, { strokeWidth: "1.5" });
                    var div_10 = sibling(node_19, 2);
                    var text_7 = child(div_10, true);
                    reset(div_10);
                    template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Pin")))]);
                    append($$anchor5, fragment_13);
                  };
                  if_block(node_17, ($$render) => {
                    if (get(pinned)) $$render(consequent_3);
                    else $$render(alternate, false);
                  });
                }
                append($$anchor4, fragment_11);
              },
              $$slots: { default: true }
            });
            var node_20 = sibling(node_16, 2);
            Menu_item(node_20, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  cloneChatHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_14 = root_19();
                var node_21 = first_child(fragment_14);
                DocumentDuplicate(node_21, { strokeWidth: "1.5" });
                var div_11 = sibling(node_21, 2);
                var text_8 = child(div_11, true);
                reset(div_11);
                template_effect(($0) => set_text(text_8, $0), [() => ($i18n(), untrack(() => $i18n().t("Clone")))]);
                append($$anchor4, fragment_14);
              },
              $$slots: { default: true }
            });
            var node_22 = sibling(node_20, 2);
            {
              var consequent_4 = ($$anchor4) => {
                Menu_sub($$anchor4, {
                  children: ($$anchor5, $$slotProps3) => {
                    var fragment_16 = root_21();
                    var node_23 = first_child(fragment_16);
                    Menu_sub_trigger(node_23, {
                      class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl select-none w-full",
                      children: ($$anchor6, $$slotProps4) => {
                        var fragment_17 = root_22$1();
                        var node_24 = first_child(fragment_17);
                        Folder$1(node_24, {});
                        var div_12 = sibling(node_24, 2);
                        var text_9 = child(div_12, true);
                        reset(div_12);
                        template_effect(($0) => set_text(text_9, $0), [() => ($i18n(), untrack(() => $i18n().t("Move")))]);
                        append($$anchor6, fragment_17);
                      },
                      $$slots: { default: true }
                    });
                    var node_25 = sibling(node_23, 2);
                    Menu_sub_content(node_25, {
                      class: "w-full rounded-2xl p-1 z-50 bg-white dark:bg-gray-850 dark:text-white border border-gray-100  dark:border-gray-800 shadow-lg max-h-52 overflow-y-auto scrollbar-hidden",
                      get transition() {
                        return flyAndScale;
                      },
                      sideOffset: 8,
                      children: ($$anchor6, $$slotProps4) => {
                        var fragment_18 = comment();
                        var node_26 = first_child(fragment_18);
                        each(
                          node_26,
                          1,
                          () => ($folders(), untrack(() => $folders().sort((a, b) => b.updated_at - a.updated_at))),
                          index,
                          ($$anchor7, folder) => {
                            Menu_item($$anchor7, {
                              class: "flex gap-2 items-center px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
                              $$events: {
                                click: () => {
                                  moveChatHandler()(chatId2(), get(folder).id);
                                }
                              },
                              children: ($$anchor8, $$slotProps5) => {
                                var fragment_20 = root_25$1();
                                var node_27 = first_child(fragment_20);
                                Folder$1(node_27, {});
                                var div_13 = sibling(node_27, 2);
                                var text_10 = child(div_13, true);
                                reset(div_13);
                                template_effect(() => set_text(text_10, (get(folder), untrack(() => {
                                  var _a;
                                  return ((_a = get(folder)) == null ? void 0 : _a.name) ?? "Folder";
                                }))));
                                append($$anchor8, fragment_20);
                              },
                              $$slots: { default: true }
                            });
                          }
                        );
                        append($$anchor6, fragment_18);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_16);
                  },
                  $$slots: { default: true }
                });
              };
              if_block(node_22, ($$render) => {
                if (deep_read_state(chatId2()), $folders(), untrack(() => chatId2() && $folders().length > 0)) $$render(consequent_4);
              });
            }
            var node_28 = sibling(node_22, 2);
            Menu_item(node_28, {
              class: "flex gap-2 items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  archiveChatHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_21 = root_26();
                var node_29 = first_child(fragment_21);
                ArchiveBox(node_29, { strokeWidth: "1.5" });
                var div_14 = sibling(node_29, 2);
                var text_11 = child(div_14, true);
                reset(div_14);
                template_effect(($0) => set_text(text_11, $0), [() => ($i18n(), untrack(() => $i18n().t("Archive")))]);
                append($$anchor4, fragment_21);
              },
              $$slots: { default: true }
            });
            var node_30 = sibling(node_28, 2);
            Menu_item(node_30, {
              class: "flex  gap-2  items-center px-3 py-1.5 text-sm  cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl",
              $$events: {
                click: () => {
                  deleteHandler()();
                }
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_22 = root_27$1();
                var node_31 = first_child(fragment_22);
                GarbageBin(node_31, { strokeWidth: "1.5" });
                var div_15 = sibling(node_31, 2);
                var text_12 = child(div_15, true);
                reset(div_15);
                template_effect(($0) => set_text(text_12, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
                append($$anchor4, fragment_22);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        append($$anchor2, div_2);
      }
    },
    $$legacy: true
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$x = from_html(`<div class="fixed top-0 left-0 w-screen h-[100dvh] z-50 touch-none pointer-events-none"><div class=" absolute text-white z-99999"><!></div></div>`);
function DragGhost($$anchor, $$props) {
  push($$props, false);
  let x = prop($$props, "x", 8);
  let y = prop($$props, "y", 8);
  let popupElement = mutable_source(null);
  onMount(() => {
    document.body.appendChild(get(popupElement));
    document.body.style.overflow = "hidden";
  });
  onDestroy(() => {
    document.body.removeChild(get(popupElement));
    document.body.style.overflow = "unset";
  });
  init();
  var div = root$x();
  var div_1 = child(div);
  var node = child(div_1);
  slot(node, $$props, "default", {}, null);
  reset(div_1);
  reset(div);
  bind_this(div, ($$value) => set(popupElement, $$value), () => get(popupElement));
  template_effect(() => set_style(div_1, `top: ${y() + 10}px; left: ${x() + 10}px;`));
  append($$anchor, div);
  pop();
}
var root$w = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"></path></svg>`);
function Document($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$w();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_1$r = from_html(`<div class=" text-sm text-gray-500 flex-1 line-clamp-3"> <span class="  font-semibold"> </span>.</div>`);
var root_3$g = from_html(`<div class=" bg-black/80 backdrop-blur-2xl px-2 py-1 rounded-lg w-fit max-w-40"><div class="flex items-center gap-1"><!> <div class=" text-xs text-white line-clamp-1"> </div></div></div>`);
var root_4$j = from_html(`<div id="sidebar-chat-item"><input class=" bg-transparent w-full outline-hidden mr-10"/></div>`);
var root_5$e = from_html(`<a id="sidebar-chat-item" draggable="false"><div class=" flex self-center flex-1 w-full"><div dir="auto" class=" text-left self-center overflow-hidden w-full h-[20px] truncate"> </div></div></a>`);
var root_7$8 = from_html(`<button class=" self-center dark:hover:text-white transition disabled:cursor-not-allowed" id="generate-title-button"><!></button>`);
var root_6$c = from_html(`<div class="flex self-center items-center space-x-1.5 z-10 translate-y-[0.5px] -translate-x-[0.5px]"><!></div>`);
var root_10$5 = from_html(`<button class=" self-center dark:hover:text-white transition" type="button"><!></button>`);
var root_11$5 = from_html(`<button class=" self-center dark:hover:text-white transition" type="button"><!></button>`);
var root_9$8 = from_html(`<div class=" flex items-center self-center space-x-1.5"><!> <!></div>`);
var root_13$3 = from_html(`<button aria-label="Chat Menu" class=" self-center dark:hover:text-white transition m-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg></button>`);
var root_14$5 = from_html(`<button id="delete-chat-button" class="hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path></svg></button>`);
var root_12$4 = from_html(`<div class="flex self-center z-10 items-end"><!> <!></div>`);
var root$v = from_html(`<!> <!> <!> <div id="sidebar-chat-group"><!> <div id="sidebar-chat-item-menu"><!></div></div>`, 1);
function ChatItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const $currentChatPage = () => store_get(currentChatPage, "$currentChatPage", $$stores);
  const $selectedFolder = () => store_get(selectedFolder, "$selectedFolder", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  let className = prop($$props, "className", 8, "");
  let id = prop($$props, "id", 8);
  let title = prop($$props, "title", 8);
  let selected = prop($$props, "selected", 8, false);
  let shiftKey = prop($$props, "shiftKey", 8, false);
  let onDragEnd = prop($$props, "onDragEnd", 8, () => {
  });
  let chat = null;
  let mouseOver = mutable_source(false);
  let draggable = mutable_source(false);
  const loadChat = async () => {
    if (!chat) {
      set(draggable, false);
      chat = await getChatById(localStorage.token, id());
      set(draggable, true);
    }
  };
  let showShareChatModal = mutable_source(false);
  let confirmEdit = mutable_source(false);
  let chatTitle$1 = mutable_source(title());
  const editChatTitle = async (id2, title2) => {
    if (title2 === "") {
      toast.error($i18n().t("Title cannot be an empty string."));
    } else {
      await updateChatById(localStorage.token, id2, { title: title2 });
      if (id2 === $chatId()) {
        chatTitle.set(title2);
      }
      currentChatPage.set(1);
      await chats.set(await getChatList(localStorage.token, $currentChatPage()));
      await pinnedChats.set(await getPinnedChatList(localStorage.token));
      dispatch("change");
    }
  };
  const cloneChatHandler = async (id2) => {
    const res = await cloneChatById(localStorage.token, id2, $i18n().t("Clone of {{TITLE}}", { TITLE: title() })).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      goto(`/c/${res.id}`);
      currentChatPage.set(1);
      await chats.set(await getChatList(localStorage.token, $currentChatPage()));
      await pinnedChats.set(await getPinnedChatList(localStorage.token));
    }
  };
  const deleteChatHandler = async (id2) => {
    const res = await deleteChatById(localStorage.token, id2).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      tags.set(await getAllTags(localStorage.token));
      if ($chatId() === id2) {
        await goto("/");
        await chatId.set("");
        await tick();
      }
      dispatch("change");
    }
  };
  const archiveChatHandler = async (id2) => {
    await archiveChatById(localStorage.token, id2);
    dispatch("change");
  };
  const moveChatHandler = async (chatId2, folderId) => {
    if (chatId2 && folderId) {
      const res = await updateChatFolderIdById(localStorage.token, chatId2, folderId).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        currentChatPage.set(1);
        await chats.set(await getChatList(localStorage.token, $currentChatPage()));
        await pinnedChats.set(await getPinnedChatList(localStorage.token));
        dispatch("change");
        toast.success($i18n().t("Chat moved successfully"));
      }
    } else {
      toast.error($i18n().t("Failed to move chat"));
    }
  };
  let itemElement = mutable_source();
  let generating = mutable_source(false);
  let ignoreBlur = mutable_source(false);
  let doubleClicked = mutable_source(false);
  let dragged = mutable_source(false);
  let x = mutable_source(0);
  let y = mutable_source(0);
  const dragImage = new Image();
  dragImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  const onDragStart = (event2) => {
    event2.stopPropagation();
    event2.dataTransfer.setDragImage(dragImage, 0, 0);
    event2.dataTransfer.setData("text/plain", JSON.stringify({ type: "chat", id: id(), item: chat }));
    set(dragged, true);
    mutate(
      itemElement,
      // Optional: Visual cue to show it's being dragged
      get(itemElement).style.opacity = "0.5"
    );
  };
  const onDrag = (event2) => {
    event2.stopPropagation();
    set(x, event2.clientX);
    set(y, event2.clientY);
  };
  const onDragEndHandler = (event2) => {
    event2.stopPropagation();
    mutate(
      itemElement,
      // Reset visual cue after drag
      get(itemElement).style.opacity = "1"
    );
    set(dragged, false);
    onDragEnd()(event2);
  };
  const onClickOutside = (event2) => {
    if (get(confirmEdit) && !event2.target.closest(`#chat-title-input-${id()}`)) {
      set(confirmEdit, false);
      set(ignoreBlur, false);
      set(chatTitle$1, "");
    }
  };
  onMount(() => {
    if (get(itemElement)) {
      document.addEventListener("click", onClickOutside, true);
      get(itemElement).addEventListener("dragstart", onDragStart);
      get(itemElement).addEventListener("drag", onDrag);
      get(itemElement).addEventListener("dragend", onDragEndHandler);
    }
  });
  onDestroy(() => {
    if (get(itemElement)) {
      document.removeEventListener("click", onClickOutside, true);
      get(itemElement).removeEventListener("dragstart", onDragStart);
      get(itemElement).removeEventListener("drag", onDrag);
      get(itemElement).removeEventListener("dragend", onDragEndHandler);
    }
  });
  let showDeleteConfirm = mutable_source(false);
  const chatTitleInputKeydownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTimeout(
        () => {
          const input = document.getElementById(`chat-title-input-${id()}`);
          if (input) input.blur();
        },
        0
      );
    } else if (e.key === "Escape") {
      e.preventDefault();
      set(confirmEdit, false);
      set(chatTitle$1, "");
    }
  };
  const renameHandler = async () => {
    set(chatTitle$1, title());
    set(confirmEdit, true);
    await tick();
    setTimeout(
      () => {
        const input = document.getElementById(`chat-title-input-${id()}`);
        if (input) {
          input.focus();
          input.select();
        }
      },
      0
    );
  };
  const generateTitleHandler = async () => {
    var _a;
    set(generating, true);
    if (!chat) {
      chat = await getChatById(localStorage.token, id());
    }
    const messages = (((_a = chat.chat) == null ? void 0 : _a.messages) ?? []).map((message) => {
      return { role: message.role, content: message.content };
    });
    const model = chat.chat.models.at(0) ?? chat.models.at(0) ?? "";
    set(chatTitle$1, "");
    const generatedTitle = await generateTitle(localStorage.token, model, messages).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (generatedTitle) {
      if (generatedTitle !== title()) {
        editChatTitle(id(), generatedTitle);
      }
      set(confirmEdit, false);
    } else {
      set(chatTitle$1, title());
    }
    set(generating, false);
  };
  legacy_pre_effect(() => get(mouseOver), () => {
    if (get(mouseOver)) {
      loadChat();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$v();
  var node = first_child(fragment);
  ShareChatModal(node, {
    get chatId() {
      return id();
    },
    get show() {
      return get(showShareChatModal);
    },
    set show($$value) {
      set(showShareChatModal, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete chat?"))));
    ConfirmDialog(node_1, {
      get title() {
        return get($0);
      },
      get show() {
        return get(showDeleteConfirm);
      },
      set show($$value) {
        set(showDeleteConfirm, $$value);
      },
      $$events: {
        confirm: () => {
          deleteChatHandler(id());
        }
      },
      children: ($$anchor2, $$slotProps) => {
        var div = root_1$r();
        var text2 = child(div);
        var span = sibling(text2);
        var text_1 = child(span, true);
        reset(span);
        next();
        reset(div);
        template_effect(
          ($02) => {
            set_text(text2, `${$02 ?? ""} `);
            set_text(text_1, title());
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("This will delete")))
          ]
        );
        append($$anchor2, div);
      },
      $$slots: { default: true },
      $$legacy: true
    });
  }
  var node_2 = sibling(node_1, 2);
  {
    var consequent = ($$anchor2) => {
      DragGhost($$anchor2, {
        get x() {
          return get(x);
        },
        get y() {
          return get(y);
        },
        children: ($$anchor3, $$slotProps) => {
          var div_1 = root_3$g();
          var div_2 = child(div_1);
          var node_3 = child(div_2);
          Document(node_3, { className: " size-[18px]", strokeWidth: "2" });
          var div_3 = sibling(node_3, 2);
          var text_2 = child(div_3, true);
          reset(div_3);
          reset(div_2);
          reset(div_1);
          template_effect(() => set_text(text_2, title()));
          append($$anchor3, div_1);
        },
        $$slots: { default: true }
      });
    };
    if_block(node_2, ($$render) => {
      if (get(dragged) && get(x) && get(y)) $$render(consequent);
    });
  }
  var div_4 = sibling(node_2, 2);
  var node_4 = child(div_4);
  {
    var consequent_1 = ($$anchor2) => {
      var div_5 = root_4$j();
      var input_1 = child(div_5);
      remove_input_defaults(input_1);
      reset(div_5);
      template_effect(
        ($0) => {
          set_class(div_5, 1, ` w-full flex justify-between rounded-xl px-[11px] py-[6px] ${id() === $chatId() || get(confirmEdit) ? "bg-gray-100 dark:bg-gray-900 selected" : selected() ? "bg-gray-100 dark:bg-gray-950 selected" : "group-hover:bg-gray-100 dark:group-hover:bg-gray-950"}  whitespace-nowrap text-ellipsis relative ${get(generating) ? "cursor-not-allowed" : ""}`);
          set_attribute(input_1, "id", `chat-title-input-${id() ?? ""}`);
          set_attribute(input_1, "placeholder", $0);
          input_1.disabled = get(generating);
        },
        [
          () => (get(generating), $i18n(), untrack(() => get(generating) ? $i18n().t("Generating...") : ""))
        ]
      );
      bind_value(input_1, () => get(chatTitle$1), ($$value) => set(chatTitle$1, $$value));
      event("keydown", input_1, chatTitleInputKeydownHandler);
      event("blur", input_1, async (e) => {
        var _a;
        if (get(ignoreBlur)) {
          set(ignoreBlur, false);
          if (((_a = e.relatedTarget) == null ? void 0 : _a.id) === "generate-title-button") {
            generateTitleHandler();
          }
          return;
        }
        if (get(doubleClicked)) {
          e.preventDefault();
          e.stopPropagation();
          await tick();
          setTimeout(
            () => {
              const input = document.getElementById(`chat-title-input-${id()}`);
              if (input) input.focus();
            },
            0
          );
          set(doubleClicked, false);
          return;
        }
        if (get(chatTitle$1) !== title()) {
          editChatTitle(id(), get(chatTitle$1));
        }
        set(confirmEdit, false);
        set(chatTitle$1, "");
      });
      append($$anchor2, div_5);
    };
    var alternate = ($$anchor2) => {
      var a = root_5$e();
      var div_6 = child(a);
      var div_7 = child(div_6);
      var text_3 = child(div_7, true);
      reset(div_7);
      reset(div_6);
      reset(a);
      template_effect(() => {
        set_class(a, 1, ` w-full flex justify-between rounded-xl px-[11px] py-[6px] ${id() === $chatId() || get(confirmEdit) ? "bg-gray-100 dark:bg-gray-900 selected" : selected() ? "bg-gray-100 dark:bg-gray-950 selected" : " group-hover:bg-gray-100 dark:group-hover:bg-gray-950"}  whitespace-nowrap text-ellipsis`);
        set_attribute(a, "href", `/c/${id() ?? ""}`);
        set_text(text_3, title());
        div_7.dir = div_7.dir;
      });
      event("click", a, () => {
        dispatch("select");
        if ($selectedFolder()) {
          selectedFolder.set(null);
        }
        if ($mobile()) {
          showSidebar.set(false);
        }
      });
      event("dblclick", a, async (e) => {
        e.preventDefault();
        e.stopPropagation();
        set(doubleClicked, true);
        renameHandler();
      });
      event("mouseenter", a, (e) => {
        set(mouseOver, true);
      });
      event("mouseleave", a, (e) => {
        set(mouseOver, false);
      });
      event("focus", a, (e) => {
      });
      append($$anchor2, a);
    };
    if_block(node_4, ($$render) => {
      if (get(confirmEdit)) $$render(consequent_1);
      else $$render(alternate, false);
    });
  }
  var div_8 = sibling(node_4, 2);
  var node_5 = child(div_8);
  {
    var consequent_2 = ($$anchor2) => {
      var div_9 = root_6$c();
      var node_6 = child(div_9);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Generate"))));
        Tooltip(node_6, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button = root_7$8();
            var node_7 = child(button);
            Sparkles(node_7, { strokeWidth: "2" });
            reset(button);
            template_effect(() => button.disabled = get(generating));
            event("mouseenter", button, () => {
              set(ignoreBlur, true);
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
      reset(div_9);
      append($$anchor2, div_9);
    };
    var alternate_2 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_8 = first_child(fragment_2);
      {
        var consequent_3 = ($$anchor3) => {
          var div_10 = root_9$8();
          var node_9 = child(div_10);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Archive"))));
            Tooltip(node_9, {
              get content() {
                return get($0);
              },
              className: "flex items-center",
              children: ($$anchor4, $$slotProps) => {
                var button_1 = root_10$5();
                var node_10 = child(button_1);
                ArchiveBox(node_10, { className: "size-4  translate-y-[0.5px]", strokeWidth: "2" });
                reset(button_1);
                event("click", button_1, () => {
                  archiveChatHandler(id());
                });
                append($$anchor4, button_1);
              },
              $$slots: { default: true }
            });
          }
          var node_11 = sibling(node_9, 2);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
            Tooltip(node_11, {
              get content() {
                return get($0);
              },
              children: ($$anchor4, $$slotProps) => {
                var button_2 = root_11$5();
                var node_12 = child(button_2);
                GarbageBin(node_12, { strokeWidth: "2" });
                reset(button_2);
                event("click", button_2, () => {
                  deleteChatHandler(id());
                });
                append($$anchor4, button_2);
              },
              $$slots: { default: true }
            });
          }
          reset(div_10);
          append($$anchor3, div_10);
        };
        var alternate_1 = ($$anchor3) => {
          var div_11 = root_12$4();
          var node_13 = child(div_11);
          ChatMenu(node_13, {
            get chatId() {
              return id();
            },
            cloneChatHandler: () => {
              cloneChatHandler(id());
            },
            shareHandler: () => {
              set(showShareChatModal, true);
            },
            moveChatHandler,
            archiveChatHandler: () => {
              archiveChatHandler(id());
            },
            renameHandler,
            deleteHandler: () => {
              set(showDeleteConfirm, true);
            },
            onClose: () => {
              dispatch("unselect");
            },
            $$events: {
              change: async () => {
                dispatch("change");
              },
              tag: (e) => {
                dispatch("tag", e.detail);
              }
            },
            children: ($$anchor4, $$slotProps) => {
              var button_3 = root_13$3();
              event("click", button_3, () => {
                dispatch("select");
              });
              append($$anchor4, button_3);
            },
            $$slots: { default: true }
          });
          var node_14 = sibling(node_13, 2);
          {
            var consequent_4 = ($$anchor4) => {
              var button_4 = root_14$5();
              event("click", button_4, () => {
                set(showDeleteConfirm, true);
              });
              append($$anchor4, button_4);
            };
            if_block(node_14, ($$render) => {
              if (id() === $chatId()) $$render(consequent_4);
            });
          }
          reset(div_11);
          append($$anchor3, div_11);
        };
        if_block(
          node_8,
          ($$render) => {
            if (shiftKey() && get(mouseOver)) $$render(consequent_3);
            else $$render(alternate_1, false);
          },
          true
        );
      }
      append($$anchor2, fragment_2);
    };
    if_block(node_5, ($$render) => {
      if (get(confirmEdit)) $$render(consequent_2);
      else $$render(alternate_2, false);
    });
  }
  reset(div_8);
  reset(div_4);
  bind_this(div_4, ($$value) => set(itemElement, $$value), () => get(itemElement));
  template_effect(() => {
    set_class(div_4, 1, ` w-full ${className() ?? ""} relative group`);
    set_attribute(div_4, "draggable", get(draggable) && !get(confirmEdit));
    set_class(div_8, 1, `
        ${id() === $chatId() || get(confirmEdit) ? "from-gray-100 dark:from-gray-900 selected" : selected() ? "from-gray-100 dark:from-gray-950 selected" : "invisible group-hover:visible from-gray-100 dark:from-gray-950"}
            absolute ${className() === "pr-2" ? "right-[8px]" : "right-1"} top-[4px] py-1 pr-0.5 mr-1.5 pl-5 bg-linear-to-l from-80%

              to-transparent`);
  });
  event("mouseenter", div_8, (e) => {
    set(mouseOver, true);
  });
  event("mouseleave", div_8, (e) => {
    set(mouseOver, false);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$k = from_html(`<div class="absolute top-0 left-0 w-full h-full rounded-xs bg-gray-100/50 dark:bg-gray-700/20 bg-opacity-50 dark:bg-opacity-10 z-50 pointer-events-none touch-none"></div>`);
var root_5$d = from_html(`<div class=" p-[1px]"><!></div>`);
var root_9$7 = from_html(`<button class="p-0.5 dark:hover:bg-gray-850 rounded-lg touch-auto"><!></button>`);
var root_8$4 = from_html(`<button class="absolute z-10 right-2 invisible group-hover:visible self-center flex items-center dark:text-gray-300"><!></button>`);
var root_4$i = from_html(`<div id="sidebar-folder-button"><button class="w-full py-1.5 pl-2 flex items-center gap-1.5 text-xs font-medium"><!> <div> </div></button> <!></div>`);
var root_10$4 = from_html(`<div slot="content" class="w-full"><!></div>`);
var root_1$q = from_html(`<!> <!>`, 1);
var root$u = from_html(`<div><!></div>`);
function Folder($$anchor, $$props) {
  push($$props, false);
  getContext("i18n");
  const dispatch = createEventDispatcher();
  let open = prop($$props, "open", 12, true);
  let id = prop($$props, "id", 8, "");
  let name = prop($$props, "name", 8, "");
  let collapsible = prop($$props, "collapsible", 8, true);
  let className = prop($$props, "className", 8, "");
  let buttonClassName = prop($$props, "buttonClassName", 8, "text-gray-600 dark:text-gray-400");
  let chevron = prop($$props, "chevron", 8, true);
  let onAddLabel = prop($$props, "onAddLabel", 8, "");
  let onAdd = prop($$props, "onAdd", 8, null);
  let dragAndDrop = prop($$props, "dragAndDrop", 8, true);
  let folderElement = mutable_source();
  let loaded = mutable_source(false);
  let draggedOver = mutable_source(false);
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    set(draggedOver, true);
  };
  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (get(folderElement).contains(e.target)) {
      console.log("Dropped on the Button");
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        for (const item of Array.from(e.dataTransfer.items)) {
          if (item.kind === "file") {
            const file = item.getAsFile();
            if (file && file.type === "application/json") {
              console.log("Dropped file is a JSON file!");
              const reader = new FileReader();
              reader.onload = async function(event2) {
                try {
                  const fileContent = JSON.parse(event2.target.result);
                  console.log("Parsed JSON Content: ", fileContent);
                  open(true);
                  dispatch("import", fileContent);
                } catch (error) {
                  console.error("Error parsing JSON file:", error);
                }
              };
              reader.readAsText(file);
            } else {
              console.error("Only JSON file types are supported.");
            }
          } else {
            open(true);
            try {
              const dataTransfer = e.dataTransfer.getData("text/plain");
              if (dataTransfer) {
                const data = JSON.parse(dataTransfer);
                console.log(data);
                dispatch("drop", data);
              } else {
                console.log("Dropped text data is empty or not text/plain.");
              }
            } catch (error) {
              console.log("Dropped data is not valid JSON text or is empty. Ignoring drop event for this type of data.");
            } finally {
              set(draggedOver, false);
            }
          }
        }
      }
      set(draggedOver, false);
    }
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    set(draggedOver, false);
  };
  onMount(() => {
    const state = localStorage.getItem(`${id()}-folder-state`);
    if (state !== null) {
      open(state === "true");
    }
    set(loaded, true);
    if (!dragAndDrop()) {
      return;
    }
    get(folderElement).addEventListener("dragover", onDragOver);
    get(folderElement).addEventListener("drop", onDrop);
    get(folderElement).addEventListener("dragleave", onDragLeave);
  });
  onDestroy(() => {
    if (!dragAndDrop()) {
      return;
    }
    get(folderElement).removeEventListener("dragover", onDragOver);
    get(folderElement).removeEventListener("drop", onDrop);
    get(folderElement).removeEventListener("dragleave", onDragLeave);
  });
  init();
  var div = root$u();
  var node = child(div);
  {
    var consequent_5 = ($$anchor2) => {
      var fragment = root_1$q();
      var node_1 = first_child(fragment);
      {
        var consequent = ($$anchor3) => {
          var div_1 = root_2$k();
          append($$anchor3, div_1);
        };
        if_block(node_1, ($$render) => {
          if (get(draggedOver)) $$render(consequent);
        });
      }
      var node_2 = sibling(node_1, 2);
      {
        var consequent_4 = ($$anchor3) => {
          Collapsible($$anchor3, {
            className: "w-full ",
            buttonClassName: "w-full",
            onChange: (state) => {
              dispatch("change", state);
              localStorage.setItem(`${id()}-folder-state`, `${state}`);
            },
            get open() {
              return open();
            },
            set open($$value) {
              open($$value);
            },
            children: ($$anchor4, $$slotProps) => {
              var div_2 = root_4$i();
              var button = child(div_2);
              var node_3 = child(button);
              {
                var consequent_2 = ($$anchor5) => {
                  var div_3 = root_5$d();
                  var node_4 = child(div_3);
                  {
                    var consequent_1 = ($$anchor6) => {
                      ChevronDown($$anchor6, { className: " size-3", strokeWidth: "2" });
                    };
                    var alternate = ($$anchor6) => {
                      ChevronRight($$anchor6, { className: " size-3", strokeWidth: "2" });
                    };
                    if_block(node_4, ($$render) => {
                      if (open()) $$render(consequent_1);
                      else $$render(alternate, false);
                    });
                  }
                  reset(div_3);
                  append($$anchor5, div_3);
                };
                if_block(node_3, ($$render) => {
                  if (chevron()) $$render(consequent_2);
                });
              }
              var div_4 = sibling(node_3, 2);
              var text2 = child(div_4, true);
              reset(div_4);
              reset(button);
              var node_5 = sibling(button, 2);
              {
                var consequent_3 = ($$anchor5) => {
                  var button_1 = root_8$4();
                  var node_6 = child(button_1);
                  Tooltip(node_6, {
                    get content() {
                      return onAddLabel();
                    },
                    children: ($$anchor6, $$slotProps2) => {
                      var button_2 = root_9$7();
                      var node_7 = child(button_2);
                      Plus(node_7, { className: " size-3", strokeWidth: "2.5" });
                      reset(button_2);
                      event("click", button_2, (e) => {
                      });
                      append($$anchor6, button_2);
                    },
                    $$slots: { default: true }
                  });
                  reset(button_1);
                  event("pointerup", button_1, (e) => {
                    e.stopPropagation();
                  });
                  event("click", button_1, (e) => {
                    e.stopPropagation();
                    onAdd()();
                  });
                  append($$anchor5, button_1);
                };
                if_block(node_5, ($$render) => {
                  if (onAdd()) $$render(consequent_3);
                });
              }
              reset(div_2);
              template_effect(() => {
                set_class(div_2, 1, ` w-full group rounded-xl relative flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-900 transition ${buttonClassName() ?? ""}`);
                set_class(div_4, 1, `translate-y-[0.5px] ${chevron() ? "" : "pl-0.5"}`);
                set_text(text2, name());
              });
              append($$anchor4, div_2);
            },
            $$slots: {
              default: true,
              content: ($$anchor4, $$slotProps) => {
                var div_5 = root_10$4();
                var node_8 = child(div_5);
                slot(node_8, $$props, "default", {}, null);
                reset(div_5);
                append($$anchor4, div_5);
              }
            },
            $$legacy: true
          });
        };
        var alternate_1 = ($$anchor3) => {
          var fragment_4 = comment();
          var node_9 = first_child(fragment_4);
          slot(node_9, $$props, "default", {}, null);
          append($$anchor3, fragment_4);
        };
        if_block(node_2, ($$render) => {
          if (collapsible()) $$render(consequent_4);
          else $$render(alternate_1, false);
        });
      }
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (get(loaded)) $$render(consequent_5);
    });
  }
  reset(div);
  bind_this(div, ($$value) => set(folderElement, $$value), () => get(folderElement));
  template_effect(() => set_class(div, 1, `relative ${className() ?? ""}`));
  append($$anchor, div);
  pop();
}
var root_1$p = from_html(`<div class=" text-sm text-gray-700 dark:text-gray-300 flex-1 line-clamp-3 mb-2"> </div> <div class="flex items-center gap-1.5"><input type="checkbox"/> <div class="text-xs text-gray-500"> </div></div>`, 1);
var root_3$f = from_html(`<div class=" bg-black/80 backdrop-blur-2xl px-2 py-1 rounded-lg w-fit max-w-40"><div class="flex items-center gap-1"><!> <div class=" text-xs text-white line-clamp-1"> </div></div></div>`);
var root_4$h = from_html(`<div class="absolute top-0 left-0 w-full h-full rounded-xs bg-gray-100/50 dark:bg-gray-700/20 bg-opacity-50 dark:bg-opacity-10 z-50 pointer-events-none touch-none"></div>`);
var root_6$b = from_html(`<div class="flex group-hover:hidden transition-all"><!></div> <div class="hidden group-hover:flex transition-all p-[1px]"><!></div>`, 1);
var root_9$6 = from_html(`<div class="p-[1px]"><!></div>`);
var root_12$3 = from_html(`<input type="text" class="w-full h-full bg-transparent outline-hidden"/>`);
var root_14$4 = from_html(`<div class="p-1 dark:hover:bg-gray-850 rounded-lg touch-auto"><!></div>`);
var root_5$c = from_html(`<div class="w-full group"><div><button class="text-gray-500 dark:text-gray-500 transition-all p-1 hover:bg-gray-200 dark:hover:bg-gray-850 rounded-lg"><!></button> <div class="translate-y-[0.5px] flex-1 justify-start text-start line-clamp-1"><!></div> <button class="absolute z-10 right-2 invisible group-hover:visible self-center flex items-center dark:text-gray-300"><!></button></div></div>`);
var root_16$2 = from_html(`<div class="ml-3 pl-1 mt-[1px] flex flex-col overflow-y-auto scrollbar-hidden border-s border-gray-100 dark:border-gray-900"><!> <!></div>`);
var root_20$1 = from_html(`<div class="flex justify-center items-center p-2"><!></div>`);
var root_15$2 = from_html(`<div slot="content" class="w-full"><!> <!></div>`);
var root$t = from_html(`<!> <!> <!> <div draggable="true"><!> <!></div>`, 1);
function RecursiveFolder($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $selectedFolder = () => store_get(selectedFolder, "$selectedFolder", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  const dispatch = createEventDispatcher();
  const { saveAs } = fileSaver;
  let folderRegistry = prop($$props, "folderRegistry", 28, () => ({}));
  let open = prop($$props, "open", 12, false);
  let folders2 = prop($$props, "folders", 12);
  let folderId = prop($$props, "folderId", 8);
  let shiftKey = prop($$props, "shiftKey", 8, false);
  let className = prop($$props, "className", 8, "");
  let deleteFolderContents = prop($$props, "deleteFolderContents", 12, true);
  let parentDragged = prop($$props, "parentDragged", 8, false);
  let onDelete = prop($$props, "onDelete", 8, (e) => {
  });
  let onItemMove = prop($$props, "onItemMove", 8, (e) => {
  });
  let folderElement = mutable_source();
  let showFolderModal = mutable_source(false);
  let edit = mutable_source(false);
  let draggedOver = mutable_source(false);
  let dragged = mutable_source(false);
  let clickTimer = mutable_source(null);
  let name = mutable_source("");
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (get(dragged) || parentDragged()) {
      return;
    }
    set(draggedOver, true);
  };
  const onDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (get(dragged) || parentDragged()) {
      return;
    }
    if (get(folderElement).contains(e.target)) {
      console.log("Dropped on the Button");
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        for (const item of Array.from(e.dataTransfer.items)) {
          if (item.kind === "file") {
            const file = item.getAsFile();
            if (file && file.type === "application/json") {
              console.log("Dropped file is a JSON file!");
              const reader = new FileReader();
              reader.onload = async function(event2) {
                try {
                  const fileContent = JSON.parse(event2.target.result);
                  open(true);
                  dispatch("import", { folderId: folderId(), items: fileContent });
                } catch (error) {
                  console.error("Error parsing JSON file:", error);
                }
              };
              reader.readAsText(file);
            } else {
              console.error("Only JSON file types are supported.");
            }
            console.log(file);
          } else {
            const dataTransfer = e.dataTransfer.getData("text/plain");
            try {
              const data = JSON.parse(dataTransfer);
              console.log(data);
              const { type, id, item: item2 } = data;
              if (type === "folder") {
                open(true);
                if (id === folderId()) {
                  return;
                }
                const res = await updateFolderParentIdById(localStorage.token, id, folderId()).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
                if (res) {
                  dispatch("update");
                }
              } else if (type === "chat") {
                open(true);
                let chat = await getChatById(localStorage.token, id).catch((error) => {
                  return null;
                });
                if (!chat && item2) {
                  chat = await importChats(localStorage.token, [
                    {
                      chat: item2.chat,
                      meta: (item2 == null ? void 0 : item2.meta) ?? {},
                      pinned: false,
                      folder_id: null,
                      created_at: (item2 == null ? void 0 : item2.created_at) ?? null,
                      updated_at: (item2 == null ? void 0 : item2.updated_at) ?? null
                    }
                  ]).catch((error) => {
                    toast.error(`${error}`);
                    return null;
                  });
                }
                const res = await updateChatFolderIdById(localStorage.token, chat.id, folderId()).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
                onItemMove()({
                  originFolderId: chat.folder_id,
                  targetFolderId: folderId(),
                  e
                });
                if (res) {
                  dispatch("update");
                }
              }
            } catch (error) {
              console.log("Error parsing dataTransfer:", error);
            }
          }
        }
      }
      setFolderItems();
      set(draggedOver, false);
    }
  };
  const onDragLeave = (e) => {
    e.preventDefault();
    if (get(dragged) || parentDragged()) {
      return;
    }
    set(draggedOver, false);
  };
  const dragImage = new Image();
  dragImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  let x = mutable_source();
  let y = mutable_source();
  const onDragStart = (event2) => {
    event2.stopPropagation();
    event2.dataTransfer.setDragImage(dragImage, 0, 0);
    event2.dataTransfer.setData("text/plain", JSON.stringify({ type: "folder", id: folderId() }));
    set(dragged, true);
    mutate(
      folderElement,
      // Optional: Visual cue to show it's being dragged
      get(folderElement).style.opacity = "0.5"
    );
  };
  const onDrag = (event2) => {
    event2.stopPropagation();
    set(x, event2.clientX);
    set(y, event2.clientY);
  };
  const onDragEnd = (event2) => {
    event2.stopPropagation();
    mutate(
      folderElement,
      // Reset visual cue after drag
      get(folderElement).style.opacity = "1"
    );
    set(dragged, false);
  };
  onMount(async () => {
    var _a;
    open(folders2()[folderId()].is_expanded);
    folderRegistry(
      folderRegistry()[folderId()] = {
        setFolderItems: () => {
          setFolderItems();
        }
      },
      true
    );
    if (get(folderElement)) {
      get(folderElement).addEventListener("dragover", onDragOver);
      get(folderElement).addEventListener("drop", onDrop);
      get(folderElement).addEventListener("dragleave", onDragLeave);
      get(folderElement).addEventListener("dragstart", onDragStart);
      get(folderElement).addEventListener("drag", onDrag);
      get(folderElement).addEventListener("dragend", onDragEnd);
    }
    if ((_a = folders2()[folderId()]) == null ? void 0 : _a.new) {
      delete folders2()[folderId()].new;
      await tick();
      renameHandler();
    }
  });
  onDestroy(() => {
    if (get(folderElement)) {
      get(folderElement).addEventListener("dragover", onDragOver);
      get(folderElement).removeEventListener("drop", onDrop);
      get(folderElement).removeEventListener("dragleave", onDragLeave);
      get(folderElement).removeEventListener("dragstart", onDragStart);
      get(folderElement).removeEventListener("drag", onDrag);
      get(folderElement).removeEventListener("dragend", onDragEnd);
    }
  });
  let showDeleteConfirm = mutable_source(false);
  const deleteHandler = async () => {
    const res = await deleteFolderById(localStorage.token, folderId(), deleteFolderContents()).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      toast.success($i18n().t("Folder deleted successfully"));
      onDelete()(folderId());
    }
  };
  const updateHandler = async ({ name: name2, meta, data }) => {
    var _a;
    if (name2 === "") {
      toast.error($i18n().t("Folder name cannot be empty."));
      return;
    }
    const currentName = folders2()[folderId()].name;
    name2 = name2.trim();
    folders2(folders2()[folderId()].name = name2, true);
    const res = await updateFolderById(localStorage.token, folderId(), { name: name2, ...meta ? { meta } : {}, ...data ? { data } : {} }).catch((error) => {
      toast.error(`${error}`);
      folders2(folders2()[folderId()].name = currentName, true);
      return null;
    });
    if (res) {
      folders2(folders2()[folderId()].name = name2, true);
      if (data) {
        folders2(folders2()[folderId()].data = data, true);
      }
      toast.success($i18n().t("Folder updated successfully"));
      if (((_a = $selectedFolder()) == null ? void 0 : _a.id) === folderId()) {
        const folder = await getFolderById(localStorage.token, folderId()).catch((error) => {
          toast.error(`${error}`);
          return null;
        });
        if (folder) {
          await selectedFolder.set(folder);
        }
      }
      dispatch("update");
    }
  };
  const isExpandedUpdateHandler = async () => {
    await updateFolderIsExpandedById(localStorage.token, folderId(), open()).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
  };
  let isExpandedUpdateTimeout;
  const isExpandedUpdateDebounceHandler = () => {
    clearTimeout(isExpandedUpdateTimeout);
    isExpandedUpdateTimeout = setTimeout(
      () => {
        isExpandedUpdateHandler();
      },
      500
    );
  };
  let chats2 = mutable_source(null);
  const setFolderItems = async () => {
    await tick();
    if (open()) {
      set(chats2, await getChatListByFolderId(localStorage.token, folderId()).catch((error) => {
        toast.error(`${error}`);
        return [];
      }));
    } else {
      set(chats2, null);
    }
  };
  const renameHandler = async () => {
    console.log("Edit");
    await tick();
    set(name, folders2()[folderId()].name);
    set(edit, true);
    await tick();
    await tick();
    const input = document.getElementById(`folder-${folderId()}-input`);
    if (input) {
      input.focus();
      input.select();
    }
  };
  const exportHandler = async () => {
    const chats3 = await getChatsByFolderId(localStorage.token, folderId()).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (!chats3) {
      return;
    }
    const blob = new Blob([JSON.stringify(chats3)], { type: "application/json" });
    saveAs(blob, `folder-${folders2()[folderId()].name}-export-${Date.now()}.json`);
  };
  legacy_pre_effect(() => deep_read_state(open()), () => {
    if (open()) {
      setFolderItems();
    }
  });
  legacy_pre_effect_reset();
  var $$exports = { setFolderItems };
  init();
  var fragment = root$t();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete folder?"))));
    ConfirmDialog(node, {
      get title() {
        return get($0);
      },
      get show() {
        return get(showDeleteConfirm);
      },
      set show($$value) {
        set(showDeleteConfirm, $$value);
      },
      $$events: {
        confirm: () => {
          deleteHandler();
        }
      },
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_1$p();
        var div = first_child(fragment_1);
        var text2 = child(div, true);
        reset(div);
        var div_1 = sibling(div, 2);
        var input_1 = child(div_1);
        remove_input_defaults(input_1);
        var div_2 = sibling(input_1, 2);
        var text_1 = child(div_2, true);
        reset(div_2);
        reset(div_1);
        template_effect(
          ($02, $1) => {
            set_text(text2, $02);
            set_text(text_1, $1);
          },
          [
            () => ($i18n(), deep_read_state(folders2()), deep_read_state(folderId()), untrack(() => $i18n().t(`Are you sure you want to delete "{{NAME}}"?`, { NAME: folders2()[folderId()].name }))),
            () => ($i18n(), untrack(() => $i18n().t("Delete all contents inside this folder")))
          ]
        );
        bind_checked(input_1, deleteFolderContents);
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  FolderModal(node_1, {
    edit: true,
    get folderId() {
      return folderId();
    },
    onSubmit: updateHandler,
    get show() {
      return get(showFolderModal);
    },
    set show($$value) {
      set(showFolderModal, $$value);
    },
    $$legacy: true
  });
  var node_2 = sibling(node_1, 2);
  {
    var consequent = ($$anchor2) => {
      DragGhost($$anchor2, {
        get x() {
          return get(x);
        },
        get y() {
          return get(y);
        },
        children: ($$anchor3, $$slotProps) => {
          var div_3 = root_3$f();
          var div_4 = child(div_3);
          var node_3 = child(div_4);
          FolderOpen(node_3, { className: "size-3.5", strokeWidth: "2" });
          var div_5 = sibling(node_3, 2);
          var text_2 = child(div_5, true);
          reset(div_5);
          reset(div_4);
          reset(div_3);
          template_effect(() => set_text(text_2, (deep_read_state(folders2()), deep_read_state(folderId()), untrack(() => folders2()[folderId()].name))));
          append($$anchor3, div_3);
        },
        $$slots: { default: true }
      });
    };
    if_block(node_2, ($$render) => {
      if (get(dragged) && get(x) && get(y)) $$render(consequent);
    });
  }
  var div_6 = sibling(node_2, 2);
  var node_4 = child(div_6);
  {
    var consequent_1 = ($$anchor2) => {
      var div_7 = root_4$h();
      append($$anchor2, div_7);
    };
    if_block(node_4, ($$render) => {
      if (get(draggedOver)) $$render(consequent_1);
    });
  }
  var node_5 = sibling(node_4, 2);
  Collapsible(node_5, {
    className: "w-full",
    buttonClassName: "w-full",
    onChange: (state) => {
      dispatch("open", state);
    },
    get open() {
      return open();
    },
    set open($$value) {
      open($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div_8 = root_5$c();
      var div_9 = child(div_8);
      var button = child(div_9);
      var node_6 = child(button);
      {
        var consequent_3 = ($$anchor3) => {
          var fragment_3 = root_6$b();
          var div_10 = first_child(fragment_3);
          var node_7 = child(div_10);
          Emoji(node_7, {
            className: "size-3.5",
            get shortCode() {
              return deep_read_state(folders2()), deep_read_state(folderId()), untrack(() => folders2()[folderId()].meta.icon);
            }
          });
          reset(div_10);
          var div_11 = sibling(div_10, 2);
          var node_8 = child(div_11);
          {
            var consequent_2 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: " size-3", strokeWidth: "2.5" });
            };
            var alternate = ($$anchor4) => {
              ChevronRight($$anchor4, { className: " size-3", strokeWidth: "2.5" });
            };
            if_block(node_8, ($$render) => {
              if (open()) $$render(consequent_2);
              else $$render(alternate, false);
            });
          }
          reset(div_11);
          append($$anchor3, fragment_3);
        };
        var alternate_2 = ($$anchor3) => {
          var div_12 = root_9$6();
          var node_9 = child(div_12);
          {
            var consequent_4 = ($$anchor4) => {
              ChevronDown($$anchor4, { className: " size-3", strokeWidth: "2.5" });
            };
            var alternate_1 = ($$anchor4) => {
              ChevronRight($$anchor4, { className: " size-3", strokeWidth: "2.5" });
            };
            if_block(node_9, ($$render) => {
              if (open()) $$render(consequent_4);
              else $$render(alternate_1, false);
            });
          }
          reset(div_12);
          append($$anchor3, div_12);
        };
        if_block(node_6, ($$render) => {
          if (deep_read_state(folders2()), deep_read_state(folderId()), untrack(() => {
            var _a, _b;
            return (_b = (_a = folders2()[folderId()]) == null ? void 0 : _a.meta) == null ? void 0 : _b.icon;
          })) $$render(consequent_3);
          else $$render(alternate_2, false);
        });
      }
      reset(button);
      var div_13 = sibling(button, 2);
      var node_10 = child(div_13);
      {
        var consequent_5 = ($$anchor3) => {
          var input_2 = root_12$3();
          remove_input_defaults(input_2);
          template_effect(() => set_attribute(input_2, "id", `folder-${folderId() ?? ""}-input`));
          bind_value(input_2, () => get(name), ($$value) => set(name, $$value));
          event("blur", input_2, () => {
            console.log("Blur");
            updateHandler({ name: get(name) });
            set(edit, false);
          });
          event("click", input_2, (e) => {
            e.stopPropagation();
          });
          event("mousedown", input_2, (e) => {
            e.stopPropagation();
          });
          event("keydown", input_2, (e) => {
            if (e.key === "Enter") {
              updateHandler({ name: get(name) });
              set(edit, false);
            }
          });
          append($$anchor3, input_2);
        };
        var alternate_3 = ($$anchor3) => {
          var text_3 = text();
          template_effect(() => set_text(text_3, (deep_read_state(folders2()), deep_read_state(folderId()), untrack(() => folders2()[folderId()].name))));
          append($$anchor3, text_3);
        };
        if_block(node_10, ($$render) => {
          if (get(edit)) $$render(consequent_5);
          else $$render(alternate_3, false);
        });
      }
      reset(div_13);
      var button_1 = sibling(div_13, 2);
      var node_11 = child(button_1);
      FolderMenu(node_11, {
        onEdit: () => {
          set(showFolderModal, true);
        },
        onDelete: () => {
          set(showDeleteConfirm, true);
        },
        onExport: () => {
          exportHandler();
        },
        children: ($$anchor3, $$slotProps2) => {
          var div_14 = root_14$4();
          var node_12 = child(div_14);
          EllipsisHorizontal(node_12, { className: "size-4", strokeWidth: "2.5" });
          reset(div_14);
          append($$anchor3, div_14);
        },
        $$slots: { default: true }
      });
      reset(button_1);
      reset(div_9);
      reset(div_8);
      template_effect(() => {
        set_attribute(div_9, "id", `folder-${folderId() ?? ""}-button`);
        set_class(div_9, 1, `relative w-full py-1 px-1.5 rounded-xl flex items-center gap-1.5 hover:bg-gray-100 dark:hover:bg-gray-900 transition ${($selectedFolder(), deep_read_state(folderId()), untrack(() => {
          var _a;
          return ((_a = $selectedFolder()) == null ? void 0 : _a.id) === folderId() ? "bg-gray-100 dark:bg-gray-900 selected" : "";
        })) ?? ""}`);
      });
      event("click", button, (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
        open(!open());
        isExpandedUpdateDebounceHandler();
      });
      event("dblclick", div_9, (e) => {
        if (get(clickTimer)) {
          clearTimeout(get(
            clickTimer
            // cancel the single-click action
          ));
          set(clickTimer, null);
        }
        renameHandler();
      });
      event("click", div_9, async (e) => {
        if (get(clickTimer)) {
          clearTimeout(get(clickTimer));
          set(clickTimer, null);
        }
        set(
          clickTimer,
          setTimeout(
            async () => {
              const folder = await getFolderById(localStorage.token, folderId()).catch((error) => {
                toast.error(`${error}`);
                return null;
              });
              if (folder) {
                await selectedFolder.set(folder);
              }
              await goto("/");
              if ($mobile()) {
                showSidebar.set(!$showSidebar());
              }
              set(clickTimer, null);
            },
            100
          )
          // 100ms delay (typical double-click threshold)
        );
      });
      event("pointerup", div_9, (e) => {
        e.stopPropagation();
      });
      append($$anchor2, div_8);
    },
    $$slots: {
      default: true,
      content: ($$anchor2, $$slotProps) => {
        var div_15 = root_15$2();
        var node_13 = child(div_15);
        {
          var consequent_7 = ($$anchor3) => {
            var div_16 = root_16$2();
            var node_14 = child(div_16);
            {
              var consequent_6 = ($$anchor4) => {
                const children = derived_safe_equal(() => (deep_read_state(folders2()), deep_read_state(folderId()), untrack(() => {
                  var _a;
                  return (_a = folders2()[folderId()]) == null ? void 0 : _a.childrenIds.map((id) => folders2()[id]).sort((a, b) => a.name.localeCompare(b.name, void 0, { numeric: true, sensitivity: "base" }));
                })));
                var fragment_9 = comment();
                var node_15 = first_child(fragment_9);
                each(node_15, 1, () => get(children), (childFolder) => `${folderId()}-${childFolder.id}`, ($$anchor5, childFolder) => {
                  var fragment_10 = comment();
                  var node_16 = first_child(fragment_10);
                  RecursiveFolder(node_16, {
                    get folders() {
                      return folders2();
                    },
                    get folderId() {
                      return get(childFolder), untrack(() => get(childFolder).id);
                    },
                    get shiftKey() {
                      return shiftKey();
                    },
                    get parentDragged() {
                      return get(dragged);
                    },
                    get onItemMove() {
                      return onItemMove();
                    },
                    get onDelete() {
                      return onDelete();
                    },
                    get folderRegistry() {
                      return folderRegistry();
                    },
                    set folderRegistry($$value) {
                      folderRegistry($$value);
                    },
                    $$events: {
                      import: (e) => {
                        dispatch("import", e.detail);
                      },
                      update: (e) => {
                        dispatch("update", e.detail);
                      },
                      change: (e) => {
                        dispatch("change", e.detail);
                      }
                    },
                    $$legacy: true
                  });
                  append($$anchor5, fragment_10);
                });
                append($$anchor4, fragment_9);
              };
              if_block(node_14, ($$render) => {
                if (deep_read_state(folders2()), deep_read_state(folderId()), untrack(() => {
                  var _a;
                  return (_a = folders2()[folderId()]) == null ? void 0 : _a.childrenIds;
                })) $$render(consequent_6);
              });
            }
            var node_17 = sibling(node_14, 2);
            each(node_17, 1, () => get(chats2) ?? [], (chat) => chat.id, ($$anchor4, chat) => {
              ChatItem($$anchor4, {
                get id() {
                  return get(chat), untrack(() => get(chat).id);
                },
                get title() {
                  return get(chat), untrack(() => get(chat).title);
                },
                get shiftKey() {
                  return shiftKey();
                },
                $$events: {
                  change: (e) => {
                    dispatch("change", e.detail);
                  }
                }
              });
            });
            reset(div_16);
            append($$anchor3, div_16);
          };
          if_block(node_13, ($$render) => {
            if (deep_read_state(folders2()), deep_read_state(folderId()), get(chats2), untrack(() => {
              var _a;
              return (((_a = folders2()[folderId()]) == null ? void 0 : _a.childrenIds) ?? []).length > 0 || (get(chats2) ?? []).length > 0;
            })) $$render(consequent_7);
          });
        }
        var node_18 = sibling(node_13, 2);
        {
          var consequent_8 = ($$anchor3) => {
            var div_17 = root_20$1();
            var node_19 = child(div_17);
            Spinner(node_19, { className: "size-4 text-gray-500" });
            reset(div_17);
            append($$anchor3, div_17);
          };
          if_block(node_18, ($$render) => {
            if (get(chats2) === null) $$render(consequent_8);
          });
        }
        reset(div_15);
        append($$anchor2, div_15);
      }
    },
    $$legacy: true
  });
  reset(div_6);
  bind_this(div_6, ($$value) => set(folderElement, $$value), () => get(folderElement));
  template_effect(() => set_class(div_6, 1, `relative ${className() ?? ""}`));
  append($$anchor, fragment);
  bind_prop($$props, "setFolderItems", setFolderItems);
  var $$pop = pop($$exports);
  $$cleanup();
  return $$pop;
}
function Folders($$anchor, $$props) {
  push($$props, false);
  const $selectedFolder = () => store_get(selectedFolder, "$selectedFolder", $$stores);
  const $chatId = () => store_get(chatId, "$chatId", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  let folderRegistry = prop($$props, "folderRegistry", 28, () => ({}));
  let folders2 = prop($$props, "folders", 24, () => ({}));
  let shiftKey = prop($$props, "shiftKey", 8, false);
  let onDelete = prop($$props, "onDelete", 8, (folderId) => {
  });
  let folderList = mutable_source([]);
  const onItemMove = (e) => {
    var _a;
    if (e.originFolderId) {
      (_a = folderRegistry()[e.originFolderId]) == null ? void 0 : _a.setFolderItems();
    }
  };
  const loadFolderItems = () => {
    var _a;
    for (const folderId of Object.keys(folders2())) {
      (_a = folderRegistry()[folderId]) == null ? void 0 : _a.setFolderItems();
    }
  };
  legacy_pre_effect(() => deep_read_state(folders2()), () => {
    set(folderList, Object.keys(folders2()).filter((key) => folders2()[key].parent_id === null).sort((a, b) => folders2()[a].name.localeCompare(folders2()[b].name, void 0, { numeric: true, sensitivity: "base" })));
  });
  legacy_pre_effect(() => (deep_read_state(folders2()), $selectedFolder(), $chatId()), () => {
    if (folders2() || $selectedFolder() && $chatId()) {
      loadFolderItems();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = comment();
  var node = first_child(fragment);
  each(node, 1, () => get(folderList), (folderId) => folderId, ($$anchor2, folderId) => {
    RecursiveFolder($$anchor2, {
      className: "",
      get folders() {
        return folders2();
      },
      get folderId() {
        return get(folderId);
      },
      get shiftKey() {
        return shiftKey();
      },
      get onDelete() {
        return onDelete();
      },
      onItemMove,
      get folderRegistry() {
        return folderRegistry();
      },
      set folderRegistry($$value) {
        folderRegistry($$value);
      },
      $$events: {
        import: (e) => {
          dispatch("import", e.detail);
        },
        update: (e) => {
          dispatch("update", e.detail);
        },
        change: (e) => {
          dispatch("change", e.detail);
        }
      },
      $$legacy: true
    });
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_4$g = from_html(`<button class="px-3.5 py-1.5 text-sm font-medium dark:bg-black dark:hover:bg-black/90 dark:text-white bg-white text-black hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center" type="button"> </button>`);
var root_7$7 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1$o = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-1"><div class=" text-lg font-medium self-center"><!></div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div class="flex flex-col w-full mt-2"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><input class="w-full text-sm bg-transparent placeholder:text-gray-300 dark:placeholder:text-gray-700 outline-hidden" type="text" autocomplete="off"/></div></div> <hr class=" border-gray-100 dark:border-gray-700/10 my-2.5 w-full"/> <div class="my-2 -mx-2"><div class="px-4 py-3 bg-gray-50 dark:bg-gray-950 rounded-3xl"><!></div></div> <div class="flex justify-end pt-3 text-sm font-medium gap-1.5"><!> <button type="submit"><!> <!></button></div></form></div></div></div>`);
var root$s = from_html(`<!> <!>`, 1);
function ChannelModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let channel = prop($$props, "channel", 8, null);
  let edit = prop($$props, "edit", 8, false);
  let name = mutable_source("");
  let accessControl = mutable_source({});
  let loading = mutable_source(false);
  const submitHandler = async () => {
    set(loading, true);
    await onSubmit()({
      name: get(name).replace(/\s/g, "-"),
      access_control: get(accessControl)
    });
    show(false);
    set(loading, false);
  };
  const init$1 = () => {
    set(name, channel().name);
    set(accessControl, channel().access_control);
  };
  let showDeleteConfirmDialog = mutable_source(false);
  const deleteHandler = async () => {
    set(showDeleteConfirmDialog, false);
    const res = await deleteChannelById(localStorage.token, channel().id).catch((error) => {
      toast.error(error.message);
    });
    if (res) {
      toast.success($i18n().t("Channel deleted successfully"));
      onUpdate()();
      if ($page().url.pathname === `/channels/${channel().id}`) {
        goto("/");
      }
    }
    show(false);
  };
  const resetHandler = () => {
    set(name, "");
    set(accessControl, {});
    set(loading, false);
  };
  legacy_pre_effect(() => get(name), () => {
    if (get(name)) {
      set(name, get(name).replace(/\s/g, "-").toLocaleLowerCase());
    }
  });
  legacy_pre_effect(() => (deep_read_state(show()), deep_read_state(channel())), () => {
    if (show()) {
      if (channel()) {
        init$1();
      }
    } else {
      resetHandler();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$s();
  var node = first_child(fragment);
  Modal(node, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$o();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var node_1 = child(div_2);
      {
        var consequent = ($$anchor3) => {
          var text$1 = text();
          template_effect(($0) => set_text(text$1, $0), [() => ($i18n(), untrack(() => $i18n().t("Edit Channel")))]);
          append($$anchor3, text$1);
        };
        var alternate = ($$anchor3) => {
          var text_1 = text();
          template_effect(($0) => set_text(text_1, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Create Channel")))
          ]);
          append($$anchor3, text_1);
        };
        if_block(node_1, ($$render) => {
          if (edit()) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_2);
      var button = sibling(div_2, 2);
      var node_2 = child(button);
      XMark(node_2, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var form = child(div_4);
      var div_5 = child(form);
      var div_6 = child(div_5);
      var text_2 = child(div_6, true);
      reset(div_6);
      var div_7 = sibling(div_6, 2);
      var input = child(div_7);
      remove_input_defaults(input);
      reset(div_7);
      reset(div_5);
      var div_8 = sibling(div_5, 4);
      var div_9 = child(div_8);
      var node_3 = child(div_9);
      AccessControl(node_3, {
        accessRoles: ["read", "write"],
        get accessControl() {
          return get(accessControl);
        },
        set accessControl($$value) {
          set(accessControl, $$value);
        },
        $$legacy: true
      });
      reset(div_9);
      reset(div_8);
      var div_10 = sibling(div_8, 2);
      var node_4 = child(div_10);
      {
        var consequent_1 = ($$anchor3) => {
          var button_1 = root_4$g();
          var text_3 = child(button_1, true);
          reset(button_1);
          template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Delete")))]);
          event("click", button_1, () => {
            set(showDeleteConfirmDialog, true);
          });
          append($$anchor3, button_1);
        };
        if_block(node_4, ($$render) => {
          if (edit()) $$render(consequent_1);
        });
      }
      var button_2 = sibling(node_4, 2);
      var node_5 = child(button_2);
      {
        var consequent_2 = ($$anchor3) => {
          var text_4 = text();
          template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Update")))]);
          append($$anchor3, text_4);
        };
        var alternate_1 = ($$anchor3) => {
          var text_5 = text();
          template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Create")))]);
          append($$anchor3, text_5);
        };
        if_block(node_5, ($$render) => {
          if (edit()) $$render(consequent_2);
          else $$render(alternate_1, false);
        });
      }
      var node_6 = sibling(node_5, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var div_11 = root_7$7();
          var node_7 = child(div_11);
          Spinner(node_7, {});
          reset(div_11);
          append($$anchor3, div_11);
        };
        if_block(node_6, ($$render) => {
          if (get(loading)) $$render(consequent_3);
        });
      }
      reset(button_2);
      reset(div_10);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1) => {
          set_text(text_2, $0);
          set_attribute(input, "placeholder", $1);
          set_class(button_2, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-950 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full flex flex-row space-x-1 items-center ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_2.disabled = get(loading);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Channel Name"))),
          () => ($i18n(), untrack(() => $i18n().t("new-channel")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input, () => get(name), ($$value) => set(name, $$value));
      event("submit", form, preventDefault(() => {
        submitHandler();
      }));
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  var node_8 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Are you sure you want to delete this channel?"))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Delete"))));
    ConfirmDialog(node_8, {
      get message() {
        return get($0);
      },
      get confirmLabel() {
        return get($1);
      },
      get show() {
        return get(showDeleteConfirmDialog);
      },
      set show($$value) {
        set(showDeleteConfirmDialog, $$value);
      },
      $$events: {
        confirm: () => {
          deleteHandler();
        }
      },
      $$legacy: true
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_3$e = from_html(`<div class="absolute z-10 right-2 invisible group-hover:visible self-center flex items-center dark:text-gray-300"><button class="p-0.5 dark:hover:bg-gray-850 rounded-lg touch-auto"><!></button></div>`);
var root$r = from_html(`<!> <div id="sidebar-channel-item"><a class=" w-full flex justify-between" draggable="false"><div class="flex items-center gap-1 shrink-0"><div class=" size-4 justify-center flex items-center"><!></div> <div class=" text-left self-center overflow-hidden w-full line-clamp-1 flex-1"> </div></div></a> <!></div>`, 1);
function ChannelItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onUpdate = prop($$props, "onUpdate", 8, () => {
  });
  let className = prop($$props, "className", 8, "");
  let channel = prop($$props, "channel", 8);
  let showEditChannelModal = mutable_source(false);
  let itemElement = mutable_source();
  init();
  var fragment = root$r();
  var node = first_child(fragment);
  ChannelModal(node, {
    get channel() {
      return channel();
    },
    edit: true,
    get onUpdate() {
      return onUpdate();
    },
    onSubmit: async ({ name, access_control }) => {
      const res = await updateChannelById(localStorage.token, channel().id, { name, access_control }).catch((error) => {
        toast.error(error.message);
      });
      if (res) {
        toast.success($i18n().t("Channel updated successfully"));
      }
      onUpdate()();
    },
    get show() {
      return get(showEditChannelModal);
    },
    set show($$value) {
      set(showEditChannelModal, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var a = child(div);
  var div_1 = child(a);
  var div_2 = child(div_1);
  var node_1 = child(div_2);
  {
    var consequent = ($$anchor2) => {
      Hashtag($$anchor2, { className: "size-3", strokeWidth: "2.5" });
    };
    var alternate = ($$anchor2) => {
      Lock($$anchor2, { className: "size-[15px]", strokeWidth: "2" });
    };
    if_block(node_1, ($$render) => {
      if (deep_read_state(channel()), untrack(() => {
        var _a;
        return ((_a = channel()) == null ? void 0 : _a.access_control) === null;
      })) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div_2);
  var div_3 = sibling(div_2, 2);
  var text2 = child(div_3, true);
  reset(div_3);
  reset(div_1);
  reset(a);
  var node_2 = sibling(a, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_4 = root_3$e();
      var button = child(div_4);
      var node_3 = child(button);
      Cog6(node_3, { className: "size-3.5" });
      reset(button);
      reset(div_4);
      event("click", button, (e) => {
      });
      event("click", div_4, (e) => {
        e.stopPropagation();
        set(showEditChannelModal, true);
      });
      append($$anchor2, div_4);
    };
    if_block(node_2, ($$render) => {
      if ($user(), untrack(() => {
        var _a;
        return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
      })) $$render(consequent_1);
    });
  }
  reset(div);
  bind_this(div, ($$value) => set(itemElement, $$value), () => get(itemElement));
  template_effect(() => {
    set_class(div, 1, ` w-full ${className() ?? ""} rounded-xl flex relative group hover:bg-gray-100 dark:hover:bg-gray-900 ${($page(), deep_read_state(channel()), untrack(() => $page().url.pathname === `/channels/${channel().id}` ? "bg-gray-100 dark:bg-gray-900 selected" : "")) ?? ""} px-2.5 py-1`);
    set_attribute(a, "href", `/channels/${(deep_read_state(channel()), untrack(() => channel().id)) ?? ""}`);
    set_text(text2, (deep_read_state(channel()), untrack(() => channel().name)));
  });
  event("click", a, () => {
    console.log(channel());
    if ($mobile()) {
      showSidebar.set(false);
    }
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$n = from_html(`<div class="self-center pl-1.5 translate-y-[0.5px] rounded-l-xl bg-transparent"><button class="p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition"><!></button></div>`);
var root_4$f = from_html(`<button><div class="dark:text-gray-300 text-gray-700 font-medium line-clamp-1 shrink-0"> </div> <div class=" text-gray-500 line-clamp-1"> </div></button>`);
var root_3$d = from_html(`<div class="px-1 font-medium dark:text-gray-300 text-gray-700 mb-1 capitalize"> </div> <div class="max-h-60 overflow-auto"></div>`, 1);
var root_7$6 = from_html(`<button><div class="dark:text-gray-300 text-gray-700 font-medium"> </div> <div class=" text-gray-500 line-clamp-1"> </div></button>`);
var root_6$a = from_html(`<div class="px-1 font-medium dark:text-gray-300 text-gray-700 mb-1"> </div> <div class=" max-h-60 overflow-auto"></div>`, 1);
var root_2$j = from_html(`<div class="absolute top-0 mt-8 left-0 right-1 border border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-950 rounded-2xl z-10 shadow-lg" id="search-options-container"><div class="px-3 py-2.5 text-xs group"><!></div></div>`);
var root$q = from_html(`<div class="px-1 mb-1 flex justify-center space-x-2 relative z-10" id="search-container"><div class="flex w-full rounded-xl" id="chat-search"><div class="self-center py-2 rounded-l-xl bg-transparent dark:text-gray-300"><!></div> <input id="search-input" class="w-full rounded-r-xl py-1.5 pl-2.5 text-sm bg-transparent dark:text-gray-300 outline-hidden" autocomplete="off"/> <!></div> <!></div>`);
function SearchInput($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $tags = () => store_get(tags, "$tags", $$stores);
  const $folders = () => store_get(folders, "$folders", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let placeholder = prop($$props, "placeholder", 8, "");
  let value = prop($$props, "value", 12, "");
  let showClearButton = prop($$props, "showClearButton", 8, false);
  let onFocus = prop($$props, "onFocus", 8, () => {
  });
  let onKeydown = prop($$props, "onKeydown", 8, (e) => {
  });
  let selectedIdx = mutable_source(0);
  let selectedOption = mutable_source(null);
  let lastWord = mutable_source("");
  let options = [
    { name: "tag:", description: $i18n().t("search for tags") },
    {
      name: "folder:",
      description: $i18n().t("search for folders")
    },
    {
      name: "pinned:",
      description: $i18n().t("search for pinned chats")
    },
    {
      name: "shared:",
      description: $i18n().t("search for shared chats")
    },
    {
      name: "archived:",
      description: $i18n().t("search for archived chats")
    }
  ];
  let focused = mutable_source(false);
  let hovering = mutable_source(false);
  let filteredOptions = mutable_source(options);
  let filteredItems = mutable_source([]);
  const initItems = async () => {
    console.log("initItems", get(lastWord));
    await tick();
    if (get(lastWord).startsWith("tag:")) {
      set(filteredItems, [...$tags(), { id: "none", name: $i18n().t("Untagged") }].filter((tag) => {
        const tagName = get(lastWord).slice(4);
        if (tagName) {
          const tagId = tagName.replaceAll(" ", "_").toLowerCase();
          if (tag.id !== tagId) {
            return tag.id.startsWith(tagId);
          } else {
            return false;
          }
        } else {
          return true;
        }
      }).map((tag) => {
        return { id: tag.id, name: tag.name, type: "tag" };
      }));
    } else if (get(lastWord).startsWith("folder:")) {
      set(filteredItems, [...$folders()].filter((folder) => {
        const folderName = get(lastWord).slice(7);
        if (folderName) {
          const id = folder.name.replaceAll(" ", "_").toLowerCase();
          const folderId = folderName.replaceAll(" ", "_").toLowerCase();
          if (id !== folderId) {
            return id.startsWith(folderId);
          } else {
            return false;
          }
        } else {
          return true;
        }
      }).map((folder) => {
        return {
          id: folder.name.replaceAll(" ", "_").toLowerCase(),
          name: folder.name,
          type: "folder"
        };
      }));
    } else if (get(lastWord).startsWith("pinned:")) {
      set(filteredItems, [
        { id: "true", name: "true", type: "pinned" },
        { id: "false", name: "false", type: "pinned" }
      ].filter((item) => {
        const pinnedValue = get(lastWord).slice(7);
        if (pinnedValue) {
          return item.id.startsWith(pinnedValue) && item.id !== pinnedValue;
        } else {
          return true;
        }
      }));
    } else if (get(lastWord).startsWith("shared:")) {
      set(filteredItems, [
        { id: "true", name: "true", type: "shared" },
        { id: "false", name: "false", type: "shared" }
      ].filter((item) => {
        const sharedValue = get(lastWord).slice(7);
        if (sharedValue) {
          return item.id.startsWith(sharedValue) && item.id !== sharedValue;
        } else {
          return true;
        }
      }));
    } else if (get(lastWord).startsWith("archived:")) {
      set(filteredItems, [
        { id: "true", name: "true", type: "archived" },
        { id: "false", name: "false", type: "archived" }
      ].filter((item) => {
        const archivedValue = get(lastWord).slice(9);
        if (archivedValue) {
          return item.id.startsWith(archivedValue) && item.id !== archivedValue;
        } else {
          return true;
        }
      }));
    } else {
      set(filteredItems, []);
    }
  };
  const initTags = async () => {
    await tags.set(await getAllTags(localStorage.token));
  };
  const clearSearchInput = () => {
    value("");
    dispatch("input");
  };
  legacy_pre_effect(() => deep_read_state(value()), () => {
    set(lastWord, value() ? value().split(" ").at(-1) : value());
  });
  legacy_pre_effect(() => get(lastWord), () => {
    set(filteredOptions, options.filter((option) => {
      return option.name.startsWith(get(lastWord));
    }));
  });
  legacy_pre_effect(() => get(lastWord), () => {
    if (get(lastWord) && get(lastWord) !== null) {
      initItems();
    }
  });
  legacy_pre_effect_reset();
  init();
  var div = root$q();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var node = child(div_2);
  Search$1(node, {});
  reset(div_2);
  var input = sibling(div_2, 2);
  remove_input_defaults(input);
  var node_1 = sibling(input, 2);
  {
    var consequent = ($$anchor2) => {
      var div_3 = root_1$n();
      var button = child(div_3);
      var node_2 = child(button);
      XMark(node_2, { className: "size-3", strokeWidth: "2" });
      reset(button);
      reset(div_3);
      event("click", button, clearSearchInput);
      append($$anchor2, div_3);
    };
    if_block(node_1, ($$render) => {
      if (showClearButton() && value()) $$render(consequent);
    });
  }
  reset(div_1);
  var node_3 = sibling(div_1, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var div_4 = root_2$j();
      var div_5 = child(div_4);
      var node_4 = child(div_5);
      {
        var consequent_1 = ($$anchor3) => {
          var fragment = root_3$d();
          var div_6 = first_child(fragment);
          var text2 = child(div_6, true);
          reset(div_6);
          var div_7 = sibling(div_6, 2);
          each(div_7, 5, () => get(filteredItems), index, ($$anchor4, item, itemIdx) => {
            var button_1 = root_4$f();
            set_attribute(button_1, "id", `search-item-${itemIdx}`);
            var div_8 = child(button_1);
            var text_1 = child(div_8, true);
            reset(div_8);
            var div_9 = sibling(div_8, 2);
            var text_2 = child(div_9, true);
            reset(div_9);
            reset(button_1);
            template_effect(() => {
              set_class(button_1, 1, ` px-1.5 py-0.5 flex gap-1 hover:bg-gray-100 dark:hover:bg-gray-900 w-full rounded ${get(selectedIdx) === itemIdx ? "bg-gray-100 dark:bg-gray-900" : ""}`);
              set_attribute(button_1, "data-selected", get(selectedIdx) === itemIdx);
              set_text(text_1, (get(item), untrack(() => get(item).name)));
              set_text(text_2, (get(item), untrack(() => get(item).id)));
            });
            event("click", button_1, stopPropagation(async () => {
              const words = value().split(" ");
              words.pop();
              words.push(`${get(item).type}:${get(item).id} `);
              value(words.join(" "));
              set(filteredItems, []);
              dispatch("input");
            }));
            append($$anchor4, button_1);
          });
          reset(div_7);
          template_effect(() => set_text(text2, get(selectedOption)));
          append($$anchor3, fragment);
        };
        var alternate = ($$anchor3) => {
          var fragment_1 = comment();
          var node_5 = first_child(fragment_1);
          {
            var consequent_2 = ($$anchor4) => {
              var fragment_2 = root_6$a();
              var div_10 = first_child(fragment_2);
              var text_3 = child(div_10, true);
              reset(div_10);
              var div_11 = sibling(div_10, 2);
              each(div_11, 5, () => get(filteredOptions), index, ($$anchor5, option, optionIdx) => {
                var button_2 = root_7$6();
                set_attribute(button_2, "id", `search-option-${optionIdx}`);
                var div_12 = child(button_2);
                var text_4 = child(div_12, true);
                reset(div_12);
                var div_13 = sibling(div_12, 2);
                var text_5 = child(div_13, true);
                reset(div_13);
                reset(button_2);
                template_effect(() => {
                  set_class(button_2, 1, ` px-1.5 py-0.5 flex gap-1 hover:bg-gray-100 dark:hover:bg-gray-900 w-full rounded ${get(selectedIdx) === optionIdx ? "bg-gray-100 dark:bg-gray-900" : ""}`);
                  set_text(text_4, (get(option), untrack(() => get(option).name)));
                  set_text(text_5, (get(option), untrack(() => get(option).description)));
                });
                event("click", button_2, stopPropagation(async () => {
                  const words = value().split(" ");
                  words.pop();
                  words.push(`${get(option).name}`);
                  set(selectedOption, get(option).name.replace(":", ""));
                  value(words.join(" "));
                  dispatch("input");
                }));
                append($$anchor5, button_2);
              });
              reset(div_11);
              template_effect(($0) => set_text(text_3, $0), [
                () => ($i18n(), untrack(() => $i18n().t("Search options")))
              ]);
              append($$anchor4, fragment_2);
            };
            if_block(
              node_5,
              ($$render) => {
                if (get(filteredOptions), untrack(() => get(filteredOptions).length > 0)) $$render(consequent_2);
              },
              true
            );
          }
          append($$anchor3, fragment_1);
        };
        if_block(node_4, ($$render) => {
          if (get(filteredItems), untrack(() => get(filteredItems).length > 0)) $$render(consequent_1);
          else $$render(alternate, false);
        });
      }
      reset(div_5);
      reset(div_4);
      transition(1, div_4, () => fade, () => ({ duration: 50 }));
      event("mouseenter", div_4, () => {
        set(hovering, true);
        set(selectedIdx, null);
      });
      event("mouseleave", div_4, () => {
        set(hovering, false);
        set(selectedIdx, 0);
      });
      append($$anchor2, div_4);
    };
    if_block(node_3, ($$render) => {
      if (get(focused), get(filteredOptions), get(filteredItems), untrack(() => get(focused) && (get(filteredOptions).length > 0 || get(filteredItems).length > 0))) $$render(consequent_3);
    });
  }
  reset(div);
  template_effect(($0) => set_attribute(input, "placeholder", $0), [
    () => (deep_read_state(placeholder()), $i18n(), untrack(() => placeholder() ? placeholder() : $i18n().t("Search")))
  ]);
  bind_value(input, value);
  event("input", input, () => {
    dispatch("input");
  });
  event("click", input, () => {
    if (!get(focused)) {
      onFocus()();
      set(hovering, false);
      set(focused, true);
      initTags();
    }
  });
  event("blur", input, () => {
    if (!get(hovering)) {
      set(focused, false);
    }
  });
  event("keydown", input, (e) => {
    if (e.key === "Enter") {
      if (get(filteredItems).length > 0) {
        const itemElement = document.getElementById(`search-item-${get(selectedIdx)}`);
        itemElement.click();
        return;
      }
      if (get(filteredOptions).length > 0) {
        const optionElement = document.getElementById(`search-option-${get(selectedIdx)}`);
        optionElement.click();
        return;
      }
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      set(selectedIdx, Math.max(0, get(selectedIdx) - 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (get(filteredItems).length > 0) {
        if (get(selectedIdx) === get(filteredItems).length - 1) {
          set(focused, false);
        } else {
          set(selectedIdx, Math.min(get(selectedIdx) + 1, get(filteredItems).length - 1));
        }
      } else {
        if (get(selectedIdx) === get(filteredOptions).length - 1) {
          set(focused, false);
        } else {
          set(selectedIdx, Math.min(get(selectedIdx) + 1, get(filteredOptions).length - 1));
        }
      }
    } else {
      if (!get(focused)) {
        onFocus()();
        set(hovering, false);
        set(focused, true);
        initTags();
      }
      set(selectedIdx, 0);
    }
    const item = document.querySelector(`[data-selected="true"]`);
    item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
    if (!document.getElementById("search-options-container")) {
      onKeydown()(e);
    }
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2$i = from_html(`<button dragabble="false"><div class="pr-2"><!></div> <div class=" flex-1 text-left"><div class="text-ellipsis line-clamp-1 w-full"> </div></div></button>`);
var root_4$e = from_html(`<div class="text-xs text-gray-500 dark:text-gray-400 text-center px-5 py-4"> </div>`);
var root_6$9 = from_html(`<div> </div>`);
var root_5$b = from_html(`<!> <a draggable="false"><div class=" flex-1"><div class="text-ellipsis line-clamp-1 w-full"> </div></div> <div class=" pl-3 shrink-0 text-gray-500 dark:text-gray-400 text-xs"> </div></a>`, 1);
var root_8$3 = from_html(`<div class="w-full flex justify-center py-4 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_3$c = from_html(`<hr class="border-gray-50 dark:border-gray-850 my-3"/> <!> <!> <!>`, 1);
var root_9$5 = from_html(`<div class="w-full h-full flex justify-center items-center"><!></div>`);
var root_10$3 = from_html(`<div class="w-full h-full flex justify-center items-center text-gray-500 dark:text-gray-400 text-sm"> </div>`);
var root_11$4 = from_html(`<div class="w-full h-full flex flex-col"><!></div>`);
var root_1$m = from_html(`<div class="py-3 dark:text-gray-300 text-gray-700"><div class="px-4 pb-1.5"><!></div> <div class="flex px-4 pb-1"><div class="flex flex-col overflow-y-auto h-96 md:h-[40rem] max-h-full scrollbar-hidden w-full flex-1 pr-2"><div class="w-full text-xs text-gray-500 dark:text-gray-500 font-medium pb-2 px-2"> </div> <!> <!></div> <div id="chat-preview" class="hidden md:flex md:flex-1 w-full overflow-y-auto h-96 md:h-[40rem] scrollbar-hidden"><!></div></div></div>`);
function SearchModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  dayjs2.extend(calendar);
  dayjs2.extend(localizedFormat);
  let show = prop($$props, "show", 12, false);
  let onClose = prop($$props, "onClose", 8, () => {
  });
  let actions = mutable_source([
    {
      label: $i18n().t("Start a new conversation"),
      onClick: async () => {
        await goto(`/${get(query) ? `?q=${get(query)}` : ""}`);
        show(false);
        onClose()();
      },
      icon: PencilSquare$1
    }
  ]);
  let query = mutable_source("");
  let page2 = 1;
  let chatList = mutable_source(null);
  let chatListLoading = mutable_source(false);
  let allChatsLoaded = mutable_source(false);
  let searchDebounceTimeout;
  let selectedIdx = mutable_source(null);
  let selectedChat = mutable_source(null);
  let selectedModels = mutable_source([""]);
  let history = mutable_source(null);
  let messages = mutable_source(null);
  const loadChatPreview = async (selectedIdx2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (!get(chatList) || get(chatList).length === 0 || selectedIdx2 === null) {
      set(selectedChat, null);
      set(messages, null);
      set(history, null);
      set(selectedModels, [""]);
      return;
    }
    const selectedChatIdx = selectedIdx2 - get(actions).length;
    if (selectedChatIdx < 0 || selectedChatIdx >= get(chatList).length) {
      set(selectedChat, null);
      set(messages, null);
      set(history, null);
      set(selectedModels, [""]);
      return;
    }
    const chatId2 = get(chatList)[selectedChatIdx].id;
    const chat = await getChatById(localStorage.token, chatId2).catch(async (error) => {
      return null;
    });
    if (chat) {
      if ((_a = chat == null ? void 0 : chat.chat) == null ? void 0 : _a.history) {
        set(selectedModels, (((_b = chat == null ? void 0 : chat.chat) == null ? void 0 : _b.models) ?? void 0) !== void 0 ? (_c = chat == null ? void 0 : chat.chat) == null ? void 0 : _c.models : [((_d = chat == null ? void 0 : chat.chat) == null ? void 0 : _d.models) ?? ""]);
        set(history, (_e = chat == null ? void 0 : chat.chat) == null ? void 0 : _e.history);
        set(messages, createMessagesList((_f = chat == null ? void 0 : chat.chat) == null ? void 0 : _f.history, (_h = (_g = chat == null ? void 0 : chat.chat) == null ? void 0 : _g.history) == null ? void 0 : _h.currentId));
        await tick();
        const messagesContainerElement = document.getElementById("chat-preview");
        if (messagesContainerElement) {
          messagesContainerElement.scrollTop = messagesContainerElement.scrollHeight;
        }
      } else {
        set(messages, []);
      }
    } else {
      toast.error($i18n().t("Failed to load chat preview"));
      set(selectedChat, null);
      set(messages, null);
      set(history, null);
      set(selectedModels, [""]);
      return;
    }
  };
  const searchHandler = async () => {
    if (!show()) {
      return;
    }
    if (searchDebounceTimeout) {
      clearTimeout(searchDebounceTimeout);
    }
    page2 = 1;
    set(chatList, null);
    if (get(query) === "") {
      set(chatList, await getChatList(localStorage.token, page2));
    } else {
      searchDebounceTimeout = setTimeout(
        async () => {
          set(chatList, await getChatListBySearchText(localStorage.token, get(query), page2));
          if ((get(chatList) ?? []).length === 0) {
            set(allChatsLoaded, true);
          } else {
            set(allChatsLoaded, false);
          }
        },
        500
      );
    }
    set(selectedChat, null);
    set(messages, null);
    set(history, null);
    set(selectedModels, [""]);
    if ((get(chatList) ?? []).length === 0) {
      set(allChatsLoaded, true);
    } else {
      set(allChatsLoaded, false);
    }
  };
  const loadMoreChats = async () => {
    set(chatListLoading, true);
    page2 += 1;
    let newChatList = [];
    if (get(query)) {
      newChatList = await getChatListBySearchText(localStorage.token, get(query), page2);
    } else {
      newChatList = await getChatList(localStorage.token, page2);
    }
    set(allChatsLoaded, newChatList.length === 0);
    if (newChatList.length > 0) {
      set(chatList, [...get(chatList), ...newChatList]);
    }
    set(chatListLoading, false);
  };
  const onKeyDown = (e) => {
    const searchOptions = document.getElementById("search-options-container");
    if (searchOptions || !show()) {
      return;
    }
    if (e.code === "Escape") {
      show(false);
      onClose()();
    } else if (e.code === "Enter") {
      const item2 = document.querySelector(`[data-arrow-selected="true"]`);
      if (item2) {
        item2 == null ? void 0 : item2.click();
        show(false);
      }
      return;
    } else if (e.code === "ArrowDown") {
      const searchInput = document.getElementById("search-input");
      if (searchInput) {
        if (document.activeElement === searchInput) {
          searchInput.blur();
          set(selectedIdx, 0);
          return;
        }
      }
      set(selectedIdx, Math.min(get(selectedIdx) + 1, (get(chatList) ?? []).length - 1 + get(actions).length));
    } else if (e.code === "ArrowUp") {
      if (get(selectedIdx) === 0) {
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
          if (document.activeElement !== searchInput) {
            searchInput.focus();
            set(selectedIdx, 0);
            return;
          }
        }
      }
      set(selectedIdx, Math.max(get(selectedIdx) - 1, 0));
    }
    const item = document.querySelector(`[data-arrow-selected="true"]`);
    item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
  };
  onMount(() => {
    var _a, _b, _c, _d, _e, _f;
    set(actions, [
      ...get(actions),
      ...(((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_notes) ?? false) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || (((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.notes) ?? true)) ? [
        {
          label: $i18n().t("Create a new note"),
          onClick: async () => {
            await goto(`/notes?content=${get(query)}`);
            show(false);
            onClose()();
          },
          icon: PageEdit
        }
      ] : []
    ]);
    document.addEventListener("keydown", onKeyDown);
  });
  onDestroy(() => {
    if (searchDebounceTimeout) {
      clearTimeout(searchDebounceTimeout);
    }
    document.removeEventListener("keydown", onKeyDown);
  });
  legacy_pre_effect(() => (get(chatListLoading), get(chatList), get(selectedIdx)), () => {
    if (!get(chatListLoading) && get(chatList)) {
      loadChatPreview(get(selectedIdx));
    }
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      searchHandler();
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "xl",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$m();
      var div_1 = child(div);
      var node = child(div_1);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Search"))));
        SearchInput(node, {
          get placeholder() {
            return get($0);
          },
          showClearButton: true,
          onFocus: () => {
            set(selectedIdx, null);
            set(messages, null);
          },
          onKeydown: (e) => {
            console.log("e", e);
            if (e.code === "Enter" && (get(chatList) ?? []).length > 0) {
              const item2 = document.querySelector(`[data-arrow-selected="true"]`);
              if (item2) {
                item2 == null ? void 0 : item2.click();
              }
              show(false);
              return;
            } else if (e.code === "ArrowDown") {
              set(selectedIdx, Math.min(get(selectedIdx) + 1, (get(chatList) ?? []).length - 1 + get(actions).length));
            } else if (e.code === "ArrowUp") {
              set(selectedIdx, Math.max(get(selectedIdx) - 1, 0));
            } else {
              set(selectedIdx, 0);
            }
            const item = document.querySelector(`[data-arrow-selected="true"]`);
            item == null ? void 0 : item.scrollIntoView({ block: "center", inline: "nearest", behavior: "instant" });
          },
          get value() {
            return get(query);
          },
          set value($$value) {
            set(query, $$value);
          },
          $$events: { input: searchHandler },
          $$legacy: true
        });
      }
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text2 = child(div_4, true);
      reset(div_4);
      var node_1 = sibling(div_4, 2);
      each(node_1, 3, () => get(actions), (action) => action.label, ($$anchor3, action, idx) => {
        var button = root_2$i();
        var div_5 = child(button);
        var node_2 = child(div_5);
        component(node_2, () => get(action).icon, ($$anchor4, $$component) => {
          $$component($$anchor4, {});
        });
        reset(div_5);
        var div_6 = sibling(div_5, 2);
        var div_7 = child(div_6);
        var text_1 = child(div_7, true);
        reset(div_7);
        reset(div_6);
        reset(button);
        template_effect(
          ($0) => {
            set_class(button, 1, ` w-full flex items-center rounded-xl text-sm py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-850 ${get(selectedIdx) === get(idx) ? "bg-gray-50 dark:bg-gray-850" : ""}`);
            set_attribute(button, "data-arrow-selected", get(selectedIdx) === get(idx) ? "true" : void 0);
            set_text(text_1, $0);
          },
          [
            () => ($i18n(), get(action), untrack(() => $i18n().t(get(action).label)))
          ]
        );
        event("mouseenter", button, () => {
          set(selectedIdx, get(idx));
        });
        event("click", button, async () => {
          await get(action).onClick();
        });
        append($$anchor3, button);
      });
      var node_3 = sibling(node_1, 2);
      {
        var consequent_3 = ($$anchor3) => {
          var fragment_1 = root_3$c();
          var node_4 = sibling(first_child(fragment_1), 2);
          {
            var consequent = ($$anchor4) => {
              var div_8 = root_4$e();
              var text_2 = child(div_8, true);
              reset(div_8);
              template_effect(($0) => set_text(text_2, $0), [
                () => ($i18n(), untrack(() => $i18n().t("No results found")))
              ]);
              append($$anchor4, div_8);
            };
            if_block(node_4, ($$render) => {
              if (get(chatList), untrack(() => get(chatList).length === 0)) $$render(consequent);
            });
          }
          var node_5 = sibling(node_4, 2);
          each(node_5, 3, () => get(chatList), (chat) => chat.id, ($$anchor4, chat, idx) => {
            var fragment_2 = root_5$b();
            var node_6 = first_child(fragment_2);
            {
              var consequent_1 = ($$anchor5) => {
                var div_9 = root_6$9();
                var text_3 = child(div_9, true);
                reset(div_9);
                template_effect(
                  ($0) => {
                    set_class(div_9, 1, `w-full text-xs text-gray-500 dark:text-gray-500 font-medium ${get(idx) === 0 ? "" : "pt-5"} pb-2 px-2`);
                    set_text(text_3, $0);
                  },
                  [
                    () => ($i18n(), get(chat), untrack(() => $i18n().t(get(chat).time_range)))
                  ]
                );
                append($$anchor5, div_9);
              };
              if_block(node_6, ($$render) => {
                if (deep_read_state(get(idx)), get(chat), get(chatList), untrack(() => get(idx) === 0 || get(idx) > 0 && get(chat).time_range !== get(chatList)[get(idx) - 1].time_range)) $$render(consequent_1);
              });
            }
            var a = sibling(node_6, 2);
            var div_10 = child(a);
            var div_11 = child(div_10);
            var text_4 = child(div_11, true);
            reset(div_11);
            reset(div_10);
            var div_12 = sibling(div_10, 2);
            var text_5 = child(div_12, true);
            reset(div_12);
            reset(a);
            template_effect(
              ($0) => {
                set_class(a, 1, ` w-full flex justify-between items-center rounded-xl text-sm py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-850 ${(get(selectedIdx), deep_read_state(get(idx)), get(actions), untrack(() => get(selectedIdx) === get(idx) + get(actions).length ? "bg-gray-50 dark:bg-gray-850" : "")) ?? ""}`);
                set_attribute(a, "href", `/c/${(get(chat), untrack(() => get(chat).id)) ?? ""}`);
                set_attribute(a, "data-arrow-selected", (get(selectedIdx), deep_read_state(get(idx)), get(actions), untrack(() => get(selectedIdx) === get(idx) + get(actions).length ? "true" : void 0)));
                set_text(text_4, (get(chat), untrack(() => {
                  var _a;
                  return (_a = get(chat)) == null ? void 0 : _a.title;
                })));
                set_text(text_5, $0);
              },
              [
                () => ($i18n(), deep_read_state(dayjs2), get(chat), untrack(() => {
                  var _a;
                  return $i18n().t(dayjs2(((_a = get(chat)) == null ? void 0 : _a.updated_at) * 1e3).calendar(null, {
                    sameDay: "[Today]",
                    nextDay: "[Tomorrow]",
                    nextWeek: "dddd",
                    lastDay: "[Yesterday]",
                    lastWeek: "[Last] dddd",
                    sameElse: "L"
                  }));
                }))
              ]
            );
            event("mouseenter", a, () => {
              set(selectedIdx, get(idx) + get(actions).length);
            });
            event("click", a, async () => {
              await goto(`/c/${get(chat).id}`);
              show(false);
              onClose()();
            });
            append($$anchor4, fragment_2);
          });
          var node_7 = sibling(node_5, 2);
          {
            var consequent_2 = ($$anchor4) => {
              Loader($$anchor4, {
                $$events: {
                  visible: (e) => {
                    if (!get(chatListLoading)) {
                      loadMoreChats();
                    }
                  }
                },
                children: ($$anchor5, $$slotProps2) => {
                  var div_13 = root_8$3();
                  var node_8 = child(div_13);
                  Spinner(node_8, { className: " size-4" });
                  var div_14 = sibling(node_8, 2);
                  var text_6 = child(div_14, true);
                  reset(div_14);
                  reset(div_13);
                  template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                  append($$anchor5, div_13);
                },
                $$slots: { default: true }
              });
            };
            if_block(node_7, ($$render) => {
              if (!get(allChatsLoaded)) $$render(consequent_2);
            });
          }
          append($$anchor3, fragment_1);
        };
        var alternate = ($$anchor3) => {
          var div_15 = root_9$5();
          var node_9 = child(div_15);
          Spinner(node_9, { className: "size-5" });
          reset(div_15);
          append($$anchor3, div_15);
        };
        if_block(node_3, ($$render) => {
          if (get(chatList)) $$render(consequent_3);
          else $$render(alternate, false);
        });
      }
      reset(div_3);
      var div_16 = sibling(div_3, 2);
      var node_10 = child(div_16);
      {
        var consequent_4 = ($$anchor3) => {
          var div_17 = root_10$3();
          var text_7 = child(div_17, true);
          reset(div_17);
          template_effect(($0) => set_text(text_7, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Select a conversation to preview")))
          ]);
          append($$anchor3, div_17);
        };
        var alternate_1 = ($$anchor3) => {
          var div_18 = root_11$4();
          var node_11 = child(div_18);
          {
            let $0 = derived_safe_equal(() => (get(selectedChat), untrack(() => {
              var _a;
              return `chat-preview-${((_a = get(selectedChat)) == null ? void 0 : _a.id) ?? ""}`;
            })));
            Messages(node_11, {
              className: "h-full flex pt-4 pb-8 w-full",
              get chatId() {
                return get($0);
              },
              get user() {
                return $user();
              },
              readOnly: true,
              get selectedModels() {
                return get(selectedModels);
              },
              autoScroll: true,
              sendMessage: () => {
              },
              continueResponse: () => {
              },
              regenerateResponse: () => {
              },
              get history() {
                return get(history);
              },
              set history($$value) {
                set(history, $$value);
              },
              get messages() {
                return get(messages);
              },
              set messages($$value) {
                set(messages, $$value);
              },
              $$legacy: true
            });
          }
          reset(div_18);
          append($$anchor3, div_18);
        };
        if_block(node_10, ($$render) => {
          if (get(messages) === null) $$render(consequent_4);
          else $$render(alternate_1, false);
        });
      }
      reset(div_16);
      reset(div_2);
      reset(div);
      template_effect(($0) => set_text(text2, $0), [() => ($i18n(), untrack(() => $i18n().t("Actions")))]);
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root$p = from_svg(`<svg stroke="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" viewBox="0 0 22 22"><path d="M9.5 14.5L3 21" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.67602 7.8896L6.69713 7.78823L5.00007 9.48528L14.1925 18.6777L15.8895 16.9806L15.7879 16M11.4847 7L15.1568 2.67141L21.0065 8.5211L16.6991 12.175" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 3L21 21" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function PinSlash($$anchor, $$props) {
  let className = prop($$props, "className", 8, "size-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$p();
  template_effect(() => {
    set_attribute(svg, "stroke-width", strokeWidth());
    set_class(svg, 0, clsx(className()));
  });
  append($$anchor, svg);
}
var root_3$b = from_html(`<button class=" self-center dark:hover:text-white transition" type="button"><!></button>`);
var root_2$h = from_html(`<div class="absolute right-5 top-2.5"><div class=" flex items-center self-center space-x-1.5"><!></div></div>`);
var root_1$l = from_html(`<div class=" flex justify-center text-gray-800 dark:text-gray-200 cursor-grab relative group"><a class="grow flex items-center space-x-2.5 rounded-xl px-2.5 py-[7px] group-hover:bg-gray-100 dark:group-hover:bg-gray-900 transition" draggable="false"><div class="self-center shrink-0"><img class=" size-5 rounded-full -translate-x-[0.5px]" alt="logo"/></div> <div class="flex self-center translate-y-[0.5px]"><div class=" self-center text-sm font-primary line-clamp-1"> </div></div></a> <!></div>`);
function PinnedModelItem($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let model = prop($$props, "model", 8, null);
  let shiftKey = prop($$props, "shiftKey", 8, false);
  let onClick = prop($$props, "onClick", 8, () => {
  });
  let onUnpin = prop($$props, "onUnpin", 8, () => {
  });
  let mouseOver = mutable_source(false);
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent_1 = ($$anchor2) => {
      var div = root_1$l();
      var a = child(div);
      var div_1 = child(a);
      var img = child(div_1);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var text2 = child(div_3, true);
      reset(div_3);
      reset(div_2);
      reset(a);
      var node_1 = sibling(a, 2);
      {
        var consequent = ($$anchor3) => {
          var div_4 = root_2$h();
          var div_5 = child(div_4);
          var node_2 = child(div_5);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Unpin"))));
            Tooltip(node_2, {
              get content() {
                return get($0);
              },
              className: "flex items-center",
              children: ($$anchor4, $$slotProps) => {
                var button = root_3$b();
                var node_3 = child(button);
                PinSlash(node_3, { className: "size-3.5", strokeWidth: "2" });
                reset(button);
                event("click", button, () => {
                  onUnpin()();
                });
                append($$anchor4, button);
              },
              $$slots: { default: true }
            });
          }
          reset(div_5);
          reset(div_4);
          append($$anchor3, div_4);
        };
        if_block(node_1, ($$render) => {
          if (get(mouseOver) && shiftKey() && onUnpin()) $$render(consequent);
        });
      }
      reset(div);
      template_effect(() => {
        set_attribute(div, "data-id", (deep_read_state(model()), untrack(() => {
          var _a;
          return (_a = model()) == null ? void 0 : _a.id;
        })));
        set_attribute(a, "href", `/?model=${(deep_read_state(model()), untrack(() => {
          var _a;
          return (_a = model()) == null ? void 0 : _a.id;
        })) ?? ""}`);
        set_attribute(img, "src", (deep_read_state(WEBUI_API_BASE_URL), deep_read_state(model()), $i18n(), untrack(() => `${WEBUI_API_BASE_URL}/models/model/profile/image?id=${model().id}&lang=${$i18n().language}`)));
        set_text(text2, (deep_read_state(model()), untrack(() => {
          var _a;
          return ((_a = model()) == null ? void 0 : _a.name) ?? model().id;
        })));
      });
      event("click", a, function(...$$args) {
        var _a;
        (_a = onClick()) == null ? void 0 : _a.apply(this, $$args);
      });
      event("mouseenter", div, (e) => {
        set(mouseOver, true);
      });
      event("mouseleave", div, (e) => {
        set(mouseOver, false);
      });
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (model()) $$render(consequent_1);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$o = from_html(`<div class="mt-0.5 pb-1.5" id="pinned-models-list"></div>`);
function PinnedModelList($$anchor, $$props) {
  push($$props, false);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  let selectedChatId = prop($$props, "selectedChatId", 12, null);
  let shiftKey = prop($$props, "shiftKey", 8, false);
  let pinnedModels = mutable_source([]);
  const initPinnedModelsSortable = () => {
    const pinnedModelsList = document.getElementById("pinned-models-list");
    if (pinnedModelsList && !$mobile()) {
      new Sortable(pinnedModelsList, {
        animation: 150,
        onUpdate: async (event2) => {
          const modelId = event2.item.dataset.id;
          const newIndex = event2.newIndex;
          const pinnedModels2 = $settings().pinnedModels;
          const oldIndex = pinnedModels2.indexOf(modelId);
          pinnedModels2.splice(oldIndex, 1);
          pinnedModels2.splice(newIndex, 0, modelId);
          settings.set({ ...$settings(), pinnedModels: pinnedModels2 });
          await updateUserSettings(localStorage.token, { ui: $settings() });
        }
      });
    }
  };
  let unsubscribeSettings;
  onMount(async () => {
    var _a, _b, _c;
    set(pinnedModels, ((_a = $settings()) == null ? void 0 : _a.pinnedModels) ?? []);
    if (get(pinnedModels).length === 0 && ((_b = $config()) == null ? void 0 : _b.default_pinned_models)) {
      const defaultPinnedModels = (_c = $config()) == null ? void 0 : _c.default_pinned_models.split(",").filter((id) => id);
      set(pinnedModels, defaultPinnedModels.filter((id) => $models().find((model) => model.id === id)));
      settings.set({ ...$settings(), pinnedModels: get(pinnedModels) });
      await updateUserSettings(localStorage.token, { ui: $settings() });
    }
    unsubscribeSettings = settings.subscribe((value) => {
      set(pinnedModels, (value == null ? void 0 : value.pinnedModels) ?? []);
    });
    await tick();
    initPinnedModelsSortable();
  });
  onDestroy(() => {
    if (unsubscribeSettings) {
      unsubscribeSettings();
    }
  });
  init();
  var div = root$o();
  each(div, 5, () => get(pinnedModels), (modelId) => modelId, ($$anchor2, modelId) => {
    const model = derived_safe_equal(() => ($models(), get(modelId), untrack(() => $models().find((model2) => model2.id === get(modelId)))));
    var fragment = comment();
    var node = first_child(fragment);
    {
      var consequent = ($$anchor3) => {
        {
          let $0 = derived_safe_equal(() => ($settings(), get(modelId), deep_read_state(settings), deep_read_state(updateUserSettings), untrack(() => {
            var _a;
            return (((_a = $settings()) == null ? void 0 : _a.pinnedModels) ?? []).includes(get(modelId)) ? () => {
              const pinnedModels2 = $settings().pinnedModels.filter((id) => id !== get(modelId));
              settings.set({ ...$settings(), pinnedModels: pinnedModels2 });
              updateUserSettings(localStorage.token, { ui: $settings() });
            } : null;
          })));
          PinnedModelItem($$anchor3, {
            get model() {
              return get(model);
            },
            get shiftKey() {
              return shiftKey();
            },
            onClick: () => {
              selectedChatId(null);
              chatId.set("");
              if ($mobile()) {
                showSidebar.set(false);
              }
            },
            get onUnpin() {
              return get($0);
            }
          });
        }
      };
      if_block(node, ($$render) => {
        if (get(model)) $$render(consequent);
      });
    }
    append($$anchor2, fragment);
  });
  reset(div);
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root$n = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 3v4a1 1 0 0 1-1 1H5m4 8h6m-6-4h6m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z"></path></svg>`);
function Note($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$n();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root_1$k = from_html(`<div><span> </span></div>`);
function HotkeyHint($$anchor, $$props) {
  push($$props, false);
  let name = prop($$props, "name", 8);
  let className = prop($$props, "className", 8, "");
  let isMac = mutable_source(false);
  let mounted = mutable_source(false);
  let keys = mutable_source([]);
  let isVisible = true;
  onMount(() => {
    var _a;
    set(isMac, /Mac/i.test(navigator.userAgent));
    set(keys, ((_a = shortcuts[name()]) == null ? void 0 : _a.keys) ?? []);
    set(mounted, true);
  });
  function formatKey(key) {
    const lowerKey = key.toLowerCase();
    if (lowerKey === "mod") return get(isMac) ? "⌘" : "Ctrl";
    if (lowerKey === "shift") return get(isMac) ? "⇧" : "Shift";
    if (lowerKey.startsWith("key")) return key.slice(-1);
    return key;
  }
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$k();
      var span = child(div);
      var text2 = child(span, true);
      reset(span);
      reset(div);
      template_effect(
        ($0) => {
          set_class(div, 1, `hidden md:flex items-center self-center text-xs text-gray-400 dark:text-gray-600 ${className() ?? ""}`);
          set_text(text2, $0);
        },
        [
          () => (get(keys), get(isMac), untrack(() => get(keys).map(formatKey).join(get(isMac) ? "" : "+")))
        ]
      );
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (get(mounted) && isVisible) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_1$j = from_html(`<div></div>`);
var root_3$a = from_html(`<button><div class=" self-center flex items-center justify-center size-9"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon-lg"><path d="M11.2475 18.25C10.6975 18.25 10.175 18.1455 9.67999 17.9365C9.18499 17.7275 8.74499 17.436 8.35999 17.062C7.94199 17.205 7.50749 17.2765 7.05649 17.2765C6.31949 17.2765 5.63749 17.095 5.01049 16.732C4.38349 16.369 3.87749 15.874 3.49249 15.247C3.11849 14.62 2.93149 13.9215 2.93149 13.1515C2.93149 12.8325 2.97549 12.486 3.06349 12.112C2.62349 11.705 2.28249 11.2375 2.04049 10.7095C1.79849 10.1705 1.67749 9.6095 1.67749 9.0265C1.67749 8.4325 1.80399 7.8605 2.05699 7.3105C2.30999 6.7605 2.66199 6.2875 3.11299 5.8915C3.57499 5.4845 4.10849 5.204 4.71349 5.05C4.83449 4.423 5.08749 3.862 5.47249 3.367C5.86849 2.861 6.35249 2.465 6.92449 2.179C7.49649 1.893 8.10699 1.75 8.75599 1.75C9.30599 1.75 9.82849 1.8545 10.3235 2.0635C10.8185 2.2725 11.2585 2.564 11.6435 2.938C12.0615 2.795 12.496 2.7235 12.947 2.7235C13.684 2.7235 14.366 2.905 14.993 3.268C15.62 3.631 16.1205 4.126 16.4945 4.753C16.8795 5.38 17.072 6.0785 17.072 6.8485C17.072 7.1675 17.028 7.514 16.94 7.888C17.38 8.295 17.721 8.768 17.963 9.307C18.205 9.835 18.326 10.3905 18.326 10.9735C18.326 11.5675 18.1995 12.1395 17.9465 12.6895C17.6935 13.2395 17.336 13.718 16.874 14.125C16.423 14.521 15.895 14.796 15.29 14.95C15.169 15.577 14.9105 16.138 14.5145 16.633C14.1295 17.139 13.651 17.535 13.079 17.821C12.507 18.107 11.8965 18.25 11.2475 18.25ZM7.17199 16.1875C7.72199 16.1875 8.20049 16.072 8.60749 15.841L11.7095 14.059C11.8195 13.982 11.8745 13.8775 11.8745 13.7455V12.3265L7.88149 14.62C7.63949 14.763 7.39749 14.763 7.15549 14.62L4.03699 12.8215C4.03699 12.8545 4.03149 12.893 4.02049 12.937C4.02049 12.981 4.02049 13.047 4.02049 13.135C4.02049 13.696 4.15249 14.213 4.41649 14.686C4.69149 15.148 5.07099 15.511 5.55499 15.775C6.03899 16.05 6.57799 16.1875 7.17199 16.1875ZM7.33699 13.498C7.40299 13.531 7.46349 13.5475 7.51849 13.5475C7.57349 13.5475 7.62849 13.531 7.68349 13.498L8.92099 12.7885L4.94449 10.4785C4.70249 10.3355 4.58149 10.121 4.58149 9.835V6.2545C4.03149 6.4965 3.59149 6.8705 3.26149 7.3765C2.93149 7.8715 2.76649 8.4215 2.76649 9.0265C2.76649 9.5655 2.90399 10.0825 3.17899 10.5775C3.45399 11.0725 3.81149 11.4465 4.25149 11.6995L7.33699 13.498ZM11.2475 17.161C11.8305 17.161 12.3585 17.029 12.8315 16.765C13.3045 16.501 13.6785 16.138 13.9535 15.676C14.2285 15.214 14.366 14.697 14.366 14.125V10.561C14.366 10.429 14.311 10.33 14.201 10.264L12.947 9.538V14.1415C12.947 14.4275 12.826 14.642 12.584 14.785L9.46549 16.5835C10.0045 16.9685 10.5985 17.161 11.2475 17.161ZM11.8745 11.122V8.878L10.01 7.822L8.12899 8.878V11.122L10.01 12.178L11.8745 11.122ZM7.05649 5.8585C7.05649 5.5725 7.17749 5.358 7.41949 5.215L10.538 3.4165C9.99899 3.0315 9.40499 2.839 8.75599 2.839C8.17299 2.839 7.64499 2.971 7.17199 3.235C6.69899 3.499 6.32499 3.862 6.04999 4.324C5.78599 4.786 5.65399 5.303 5.65399 5.875V9.4225C5.65399 9.5545 5.70899 9.659 5.81899 9.736L7.05649 10.462V5.8585ZM15.4385 13.7455C15.9885 13.5035 16.423 13.1295 16.742 12.6235C17.072 12.1175 17.237 11.5675 17.237 10.9735C17.237 10.4345 17.0995 9.9175 16.8245 9.4225C16.5495 8.9275 16.192 8.5535 15.752 8.3005L12.6665 6.5185C12.6005 6.4745 12.54 6.458 12.485 6.469C12.43 6.469 12.375 6.4855 12.32 6.5185L11.0825 7.2115L15.0755 9.538C15.1965 9.604 15.2845 9.692 15.3395 9.802C15.4055 9.901 15.4385 10.022 15.4385 10.165V13.7455ZM12.122 5.3635C12.364 5.2095 12.606 5.2095 12.848 5.3635L15.983 7.195C15.983 7.118 15.983 7.019 15.983 6.898C15.983 6.37 15.851 5.8695 15.587 5.3965C15.334 4.9125 14.9655 4.5275 14.4815 4.2415C14.0085 3.9555 13.4585 3.8125 12.8315 3.8125C12.2815 3.8125 11.803 3.928 11.396 4.159L8.29399 5.941C8.18399 6.018 8.12899 6.1225 8.12899 6.2545V7.6735L12.122 5.3635Z"></path></svg></div></button>`);
var root_4$d = from_html(`<a class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group" href="/" draggable="false"><div class=" self-center flex items-center justify-center size-9"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true"><path d="M2.6687 11.333V8.66699C2.6687 7.74455 2.66841 7.01205 2.71655 6.42285C2.76533 5.82612 2.86699 5.31731 3.10425 4.85156L3.25854 4.57617C3.64272 3.94975 4.19392 3.43995 4.85229 3.10449L5.02905 3.02149C5.44666 2.84233 5.90133 2.75849 6.42358 2.71582C7.01272 2.66769 7.74445 2.66797 8.66675 2.66797H9.16675C9.53393 2.66797 9.83165 2.96586 9.83179 3.33301C9.83179 3.70028 9.53402 3.99805 9.16675 3.99805H8.66675C7.7226 3.99805 7.05438 3.99834 6.53198 4.04102C6.14611 4.07254 5.87277 4.12568 5.65601 4.20313L5.45581 4.28906C5.01645 4.51293 4.64872 4.85345 4.39233 5.27149L4.28979 5.45508C4.16388 5.7022 4.08381 6.01663 4.04175 6.53125C3.99906 7.05373 3.99878 7.7226 3.99878 8.66699V11.333C3.99878 12.2774 3.99906 12.9463 4.04175 13.4688C4.08381 13.9833 4.16389 14.2978 4.28979 14.5449L4.39233 14.7285C4.64871 15.1465 5.01648 15.4871 5.45581 15.7109L5.65601 15.7969C5.87276 15.8743 6.14614 15.9265 6.53198 15.958C7.05439 16.0007 7.72256 16.002 8.66675 16.002H11.3337C12.2779 16.002 12.9461 16.0007 13.4685 15.958C13.9829 15.916 14.2976 15.8367 14.5447 15.7109L14.7292 15.6074C15.147 15.3511 15.4879 14.9841 15.7117 14.5449L15.7976 14.3447C15.8751 14.128 15.9272 13.8546 15.9587 13.4688C16.0014 12.9463 16.0017 12.2774 16.0017 11.333V10.833C16.0018 10.466 16.2997 10.1681 16.6667 10.168C17.0339 10.168 17.3316 10.4659 17.3318 10.833V11.333C17.3318 12.2555 17.3331 12.9879 17.2849 13.5771C17.2422 14.0993 17.1584 14.5541 16.9792 14.9717L16.8962 15.1484C16.5609 15.8066 16.0507 16.3571 15.4246 16.7412L15.1492 16.8955C14.6833 17.1329 14.1739 17.2354 13.5769 17.2842C12.9878 17.3323 12.256 17.332 11.3337 17.332H8.66675C7.74446 17.332 7.01271 17.3323 6.42358 17.2842C5.90135 17.2415 5.44665 17.1577 5.02905 16.9785L4.85229 16.8955C4.19396 16.5601 3.64271 16.0502 3.25854 15.4238L3.10425 15.1484C2.86697 14.6827 2.76534 14.1739 2.71655 13.5771C2.66841 12.9879 2.6687 12.2555 2.6687 11.333ZM13.4646 3.11328C14.4201 2.334 15.8288 2.38969 16.7195 3.28027L16.8865 3.46485C17.6141 4.35685 17.6143 5.64423 16.8865 6.53613L16.7195 6.7207L11.6726 11.7686C11.1373 12.3039 10.4624 12.6746 9.72827 12.8408L9.41089 12.8994L7.59351 13.1582C7.38637 13.1877 7.17701 13.1187 7.02905 12.9707C6.88112 12.8227 6.81199 12.6134 6.84155 12.4063L7.10132 10.5898L7.15991 10.2715C7.3262 9.53749 7.69692 8.86241 8.23218 8.32715L13.2791 3.28027L13.4646 3.11328ZM15.7791 4.2207C15.3753 3.81702 14.7366 3.79124 14.3035 4.14453L14.2195 4.2207L9.17261 9.26856C8.81541 9.62578 8.56774 10.0756 8.45679 10.5654L8.41772 10.7773L8.28296 11.7158L9.22241 11.582L9.43433 11.543C9.92426 11.432 10.3749 11.1844 10.7322 10.8271L15.7791 5.78027L15.8552 5.69629C16.185 5.29194 16.1852 4.708 15.8552 4.30371L15.7791 4.2207Z"></path></svg></div></a>`);
var root_5$a = from_html(`<button class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group" draggable="false"><div class=" self-center flex items-center justify-center size-9"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true"><path d="M14.0857 8.74999C14.0857 5.80355 11.6972 3.41503 8.75073 3.41503C5.80429 3.41503 3.41577 5.80355 3.41577 8.74999C3.41577 11.6964 5.80429 14.085 8.75073 14.085C11.6972 14.085 14.0857 11.6964 14.0857 8.74999ZM15.4158 8.74999C15.4158 10.3539 14.848 11.8245 13.9041 12.9746L13.9705 13.0303L16.9705 16.0303L17.0564 16.1338C17.2269 16.3919 17.1977 16.7434 16.9705 16.9707C16.7432 17.1975 16.3925 17.226 16.1345 17.0557L16.03 16.9707L13.03 13.9707L12.9753 13.9033C11.8253 14.8472 10.3547 15.415 8.75073 15.415C5.06975 15.415 2.08569 12.431 2.08569 8.74999C2.08569 5.06901 5.06975 2.08495 8.75073 2.08495C12.4317 2.08495 15.4158 5.06901 15.4158 8.74999Z"></path></svg></div></button>`);
var root_7$5 = from_html(`<a class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group" href="/notes" draggable="false"><div class=" self-center flex items-center justify-center size-9"><!></div></a>`);
var root_6$8 = from_html(`<div><!></div>`);
var root_9$4 = from_html(`<a class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group" href="/workspace" draggable="false"><div class=" self-center flex items-center justify-center size-9"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg></div></a>`);
var root_8$2 = from_html(`<div><!></div>`);
var root_11$3 = from_html(`<div class=" cursor-pointer flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group"><div class=" self-center flex items-center justify-center size-9"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon" aria-hidden="true"><path d="M16.585 10C16.585 6.3632 13.6368 3.41504 10 3.41504C6.3632 3.41504 3.41504 6.3632 3.41504 10C3.41504 11.9528 4.26592 13.7062 5.61621 14.9121C6.6544 13.6452 8.23235 12.835 10 12.835C11.7674 12.835 13.3447 13.6454 14.3828 14.9121C15.7334 13.7062 16.585 11.9531 16.585 10ZM10 14.165C8.67626 14.165 7.49115 14.7585 6.69531 15.6953C7.66679 16.2602 8.79525 16.585 10 16.585C11.2041 16.585 12.3316 16.2597 13.3027 15.6953C12.5069 14.759 11.3233 14.1651 10 14.165ZM11.835 8.5C11.835 7.48656 11.0134 6.66504 10 6.66504C8.98656 6.66504 8.16504 7.48656 8.16504 8.5C8.16504 9.51344 8.98656 10.335 10 10.335C11.0134 10.335 11.835 9.51344 11.835 8.5ZM17.915 10C17.915 14.3713 14.3713 17.915 10 17.915C5.62867 17.915 2.08496 14.3713 2.08496 10C2.08496 5.62867 5.62867 2.08496 10 2.08496C14.3713 2.08496 17.915 5.62867 17.915 10ZM13.165 8.5C13.165 10.248 11.748 11.665 10 11.665C8.25202 11.665 6.83496 10.248 6.83496 8.5C6.83496 6.75202 8.25202 5.33496 10 5.33496C11.748 5.33496 13.165 6.75202 13.165 8.5Z"></path></svg></div></div>`);
var root_2$g = from_html(`<div class=" pt-[7px] pb-2 px-1.5 flex flex-col justify-between text-black dark:text-white hover:bg-gray-50/30 dark:hover:bg-gray-950/30 h-full z-10 transition-all border-e-[0.5px] border-gray-50 dark:border-gray-850" id="sidebar"><button><div class="pb-1.5"><!></div> <div class="-mt-[0.5px]"><div><!></div> <div><!></div> <!> <!></div></button> <div><div><div class=" py-0.5"><!></div></div></div></div>`);
var root_13$2 = from_html(`<button><div class=" self-center p-1.5"><!></div></button>`);
var root_14$3 = from_html(`<div class="px-1.5 flex justify-center text-gray-800 dark:text-gray-200"><a id="sidebar-notes-button" class="grow flex items-center space-x-3 rounded-2xl px-2.5 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition" href="/notes" draggable="false"><div class="self-center"><!></div> <div class="flex self-center translate-y-[0.5px]"><div class=" self-center text-sm font-primary"> </div></div></a></div>`);
var root_15$1 = from_html(`<div class="px-1.5 flex justify-center text-gray-800 dark:text-gray-200"><a id="sidebar-workspace-button" class="grow flex items-center space-x-3 rounded-2xl px-2.5 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition" href="/workspace" draggable="false"><div class="self-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path></svg></div> <div class="flex self-center translate-y-[0.5px]"><div class=" self-center text-sm font-primary"> </div></div></a></div>`);
var root_25 = from_html(`<div class="ml-3 pl-1 mt-[1px] flex flex-col overflow-y-auto scrollbar-hidden border-s border-gray-100 dark:border-gray-900 text-gray-900 dark:text-gray-200"></div>`);
var root_24$1 = from_html(`<div class="mb-1"><div class="flex flex-col space-y-1 rounded-xl"><!></div></div>`);
var root_29 = from_html(`<div> </div>`);
var root_28 = from_html(`<!> <!>`, 1);
var root_31 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_27 = from_html(`<!> <!>`, 1);
var root_32 = from_html(`<div class="w-full flex justify-center py-1 text-xs animate-pulse items-center gap-2"><!> <div class=" "> </div></div>`);
var root_23$1 = from_html(`<!> <div class=" flex-1 flex flex-col overflow-y-auto scrollbar-hidden"><div class="pt-1.5"><!></div></div>`, 1);
var root_34 = from_html(`<div class=" flex items-center rounded-2xl py-2 px-1.5 w-full hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition"><div class=" self-center mr-3"><!></div> <div class=" self-center font-medium"> </div></div>`);
var root_12$2 = from_html(`<div id="sidebar"><div><div class="sidebar px-2 pt-2 pb-1.5 flex justify-between space-x-1 text-gray-600 dark:text-gray-400 sticky top-0 z-10 -mb-3"><a class="flex items-center rounded-xl size-8.5 h-full justify-center hover:bg-gray-100/50 dark:hover:bg-gray-850/50 transition no-drag-region" href="/" draggable="false"><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="icon-lg"><path d="M11.2475 18.25C10.6975 18.25 10.175 18.1455 9.67999 17.9365C9.18499 17.7275 8.74499 17.436 8.35999 17.062C7.94199 17.205 7.50749 17.2765 7.05649 17.2765C6.31949 17.2765 5.63749 17.095 5.01049 16.732C4.38349 16.369 3.87749 15.874 3.49249 15.247C3.11849 14.62 2.93149 13.9215 2.93149 13.1515C2.93149 12.8325 2.97549 12.486 3.06349 12.112C2.62349 11.705 2.28249 11.2375 2.04049 10.7095C1.79849 10.1705 1.67749 9.6095 1.67749 9.0265C1.67749 8.4325 1.80399 7.8605 2.05699 7.3105C2.30999 6.7605 2.66199 6.2875 3.11299 5.8915C3.57499 5.4845 4.10849 5.204 4.71349 5.05C4.83449 4.423 5.08749 3.862 5.47249 3.367C5.86849 2.861 6.35249 2.465 6.92449 2.179C7.49649 1.893 8.10699 1.75 8.75599 1.75C9.30599 1.75 9.82849 1.8545 10.3235 2.0635C10.8185 2.2725 11.2585 2.564 11.6435 2.938C12.0615 2.795 12.496 2.7235 12.947 2.7235C13.684 2.7235 14.366 2.905 14.993 3.268C15.62 3.631 16.1205 4.126 16.4945 4.753C16.8795 5.38 17.072 6.0785 17.072 6.8485C17.072 7.1675 17.028 7.514 16.94 7.888C17.38 8.295 17.721 8.768 17.963 9.307C18.205 9.835 18.326 10.3905 18.326 10.9735C18.326 11.5675 18.1995 12.1395 17.9465 12.6895C17.6935 13.2395 17.336 13.718 16.874 14.125C16.423 14.521 15.895 14.796 15.29 14.95C15.169 15.577 14.9105 16.138 14.5145 16.633C14.1295 17.139 13.651 17.535 13.079 17.821C12.507 18.107 11.8965 18.25 11.2475 18.25ZM7.17199 16.1875C7.72199 16.1875 8.20049 16.072 8.60749 15.841L11.7095 14.059C11.8195 13.982 11.8745 13.8775 11.8745 13.7455V12.3265L7.88149 14.62C7.63949 14.763 7.39749 14.763 7.15549 14.62L4.03699 12.8215C4.03699 12.8545 4.03149 12.893 4.02049 12.937C4.02049 12.981 4.02049 13.047 4.02049 13.135C4.02049 13.696 4.15249 14.213 4.41649 14.686C4.69149 15.148 5.07099 15.511 5.55499 15.775C6.03899 16.05 6.57799 16.1875 7.17199 16.1875ZM7.33699 13.498C7.40299 13.531 7.46349 13.5475 7.51849 13.5475C7.57349 13.5475 7.62849 13.531 7.68349 13.498L8.92099 12.7885L4.94449 10.4785C4.70249 10.3355 4.58149 10.121 4.58149 9.835V6.2545C4.03149 6.4965 3.59149 6.8705 3.26149 7.3765C2.93149 7.8715 2.76649 8.4215 2.76649 9.0265C2.76649 9.5655 2.90399 10.0825 3.17899 10.5775C3.45399 11.0725 3.81149 11.4465 4.25149 11.6995L7.33699 13.498ZM11.2475 17.161C11.8305 17.161 12.3585 17.029 12.8315 16.765C13.3045 16.501 13.6785 16.138 13.9535 15.676C14.2285 15.214 14.366 14.697 14.366 14.125V10.561C14.366 10.429 14.311 10.33 14.201 10.264L12.947 9.538V14.1415C12.947 14.4275 12.826 14.642 12.584 14.785L9.46549 16.5835C10.0045 16.9685 10.5985 17.161 11.2475 17.161ZM11.8745 11.122V8.878L10.01 7.822L8.12899 8.878V11.122L10.01 12.178L11.8745 11.122ZM7.05649 5.8585C7.05649 5.5725 7.17749 5.358 7.41949 5.215L10.538 3.4165C9.99899 3.0315 9.40499 2.839 8.75599 2.839C8.17299 2.839 7.64499 2.971 7.17199 3.235C6.69899 3.499 6.32499 3.862 6.04999 4.324C5.78599 4.786 5.65399 5.303 5.65399 5.875V9.4225C5.65399 9.5545 5.70899 9.659 5.81899 9.736L7.05649 10.462V5.8585ZM15.4385 13.7455C15.9885 13.5035 16.423 13.1295 16.742 12.6235C17.072 12.1175 17.237 11.5675 17.237 10.9735C17.237 10.4345 17.0995 9.9175 16.8245 9.4225C16.5495 8.9275 16.192 8.5535 15.752 8.3005L12.6665 6.5185C12.6005 6.4745 12.54 6.458 12.485 6.469C12.43 6.469 12.375 6.4855 12.32 6.5185L11.0825 7.2115L15.0755 9.538C15.1965 9.604 15.2845 9.692 15.3395 9.802C15.4055 9.901 15.4385 10.022 15.4385 10.165V13.7455ZM12.122 5.3635C12.364 5.2095 12.606 5.2095 12.848 5.3635L15.983 7.195C15.983 7.118 15.983 7.019 15.983 6.898C15.983 6.37 15.851 5.8695 15.587 5.3965C15.334 4.9125 14.9655 4.5275 14.4815 4.2415C14.0085 3.9555 13.4585 3.8125 12.8315 3.8125C12.2815 3.8125 11.803 3.928 11.396 4.159L8.29399 5.941C8.18399 6.018 8.12899 6.1225 8.12899 6.2545V7.6735L12.122 5.3635Z"></path></svg></a> <a href="/" class="flex flex-1 px-1.5"><div id="sidebar-webui-name" class=" self-center font-medium text-gray-850 dark:text-white font-primary"> </div></a> <!> <div></div></div> <div class="relative flex flex-col flex-1 overflow-y-auto scrollbar-hidden pt-3 pb-3"><div class="pb-1.5"><div class="px-1.5 flex justify-center text-gray-800 dark:text-gray-200"><a id="sidebar-new-chat-button" class="group grow flex items-center space-x-3 rounded-2xl px-2.5 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition outline-none" href="/" draggable="false"><div class="self-center"><!></div> <div class="flex flex-1 self-center translate-y-[0.5px]"><div class=" self-center text-sm font-primary"> </div></div> <!></a></div> <div class="px-1.5 flex justify-center text-gray-800 dark:text-gray-200"><button id="sidebar-search-button" class="group grow flex items-center space-x-3 rounded-2xl px-2.5 py-2 hover:bg-gray-100 dark:hover:bg-gray-900 transition outline-none" draggable="false"><div class="self-center"><!></div> <div class="flex flex-1 self-center translate-y-[0.5px]"><div class=" self-center text-sm font-primary"> </div></div> <!></button></div> <!> <!></div> <!> <!> <!> <!></div> <div class="px-1.5 pt-1.5 pb-2 sticky bottom-0 z-10 -mt-3 sidebar"><div class=" sidebar-bg-gradient-to-t bg-linear-to-t from-gray-50 dark:from-gray-950 to-transparent from-50% pointer-events-none absolute inset-0 -z-10 -mt-6"></div> <div class="flex flex-col font-primary"><!></div></div></div></div>`);
var root$m = from_html(`<!> <!> <!> <!> <!> <button id="sidebar-new-chat-button" class="hidden"></button> <!> <!>`, 1);
function Sidebar_1($$anchor, $$props) {
  push($$props, false);
  const $selectedFolder = () => store_get(selectedFolder, "$selectedFolder", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $currentChatPage = () => store_get(currentChatPage, "$currentChatPage", $$stores);
  const $chats = () => store_get(chats, "$chats", $$stores);
  const $mobile = () => store_get(mobile, "$mobile", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $showArchivedChats = () => store_get(showArchivedChats, "$showArchivedChats", $$stores);
  const $socket = () => store_get(socket, "$socket", $$stores);
  const $isApp = () => store_get(isApp, "$isApp", $$stores);
  const $showSearch = () => store_get(showSearch, "$showSearch", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $models = () => store_get(models, "$models", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $channels = () => store_get(channels, "$channels", $$stores);
  const $pinnedChats = () => store_get(pinnedChats, "$pinnedChats", $$stores);
  const $scrollPaginationEnabled = () => store_get(scrollPaginationEnabled, "$scrollPaginationEnabled", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let scrollTop = mutable_source(0);
  let navElement = mutable_source();
  let shiftKey = mutable_source(false);
  let selectedChatId = mutable_source(null);
  let showCreateChannel = mutable_source(false);
  let chatListLoading = mutable_source(false);
  let allChatsLoaded = mutable_source(false);
  let showCreateFolderModal = mutable_source(false);
  let folders$1 = mutable_source({});
  let folderRegistry = mutable_source({});
  const initFolders = async () => {
    const folderList = await getFolders(localStorage.token).catch((error) => {
      toast.error(`${error}`);
      return [];
    });
    folders.set(folderList.sort((a, b) => b.updated_at - a.updated_at));
    set(folders$1, {});
    for (const folder of folderList) {
      mutate(folders$1, get(folders$1)[folder.id] = { ...get(folders$1)[folder.id] || {}, ...folder });
    }
    for (const folder of folderList) {
      if (folder.parent_id) {
        if (!get(folders$1)[folder.parent_id]) {
          mutate(
            folders$1,
            // Create a placeholder if not already present
            get(folders$1)[folder.parent_id] = {}
          );
        }
        mutate(folders$1, get(folders$1)[folder.parent_id].childrenIds = get(folders$1)[folder.parent_id].childrenIds ? [...get(folders$1)[folder.parent_id].childrenIds, folder.id] : [folder.id]);
        get(folders$1)[folder.parent_id].childrenIds.sort((a, b) => {
          return get(folders$1)[b].updated_at - get(folders$1)[a].updated_at;
        });
      }
    }
  };
  const createFolder = async ({ name, data }) => {
    name = name == null ? void 0 : name.trim();
    if (!name) {
      toast.error($i18n().t("Folder name cannot be empty."));
      return;
    }
    const rootFolders = Object.values(get(folders$1)).filter((folder) => folder.parent_id === null);
    if (rootFolders.find((folder) => folder.name.toLowerCase() === name.toLowerCase())) {
      let i = 1;
      while (rootFolders.find((folder) => folder.name.toLowerCase() === `${name} ${i}`.toLowerCase())) {
        i++;
      }
      name = `${name} ${i}`;
    }
    const tempId = v4();
    set(folders$1, {
      ...get(folders$1),
      tempId: {
        id: tempId,
        name,
        created_at: Date.now(),
        updated_at: Date.now()
      }
    });
    const res = await createNewFolder(localStorage.token, { name, data }).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      await initFolders();
    }
  };
  const initChannels = async () => {
    await channels.set(await getChannels(localStorage.token));
  };
  const initChatList = async () => {
    console.log("initChatList");
    currentChatPage.set(1);
    set(allChatsLoaded, false);
    scrollPaginationEnabled.set(false);
    initFolders();
    await Promise.all([
      await (async () => {
        console.log("Init tags");
        const _tags = await getAllTags(localStorage.token);
        tags.set(_tags);
      })(),
      await (async () => {
        console.log("Init pinned chats");
        const _pinnedChats = await getPinnedChatList(localStorage.token);
        pinnedChats.set(_pinnedChats);
      })(),
      await (async () => {
        console.log("Init chat list");
        const _chats = await getChatList(localStorage.token, $currentChatPage());
        await chats.set(_chats);
      })()
    ]);
    scrollPaginationEnabled.set(true);
  };
  const loadMoreChats = async () => {
    set(chatListLoading, true);
    currentChatPage.set($currentChatPage() + 1);
    let newChatList = [];
    newChatList = await getChatList(localStorage.token, $currentChatPage());
    set(allChatsLoaded, newChatList.length === 0);
    await chats.set([...$chats() ? $chats() : [], ...newChatList]);
    set(chatListLoading, false);
  };
  const importChatHandler = async (items, pinned = false, folderId = null) => {
    console.log("importChatHandler", items, pinned, folderId);
    for (const item of items) {
      console.log(item);
      if (item.chat) {
        await importChats(localStorage.token, [
          {
            chat: item.chat,
            meta: (item == null ? void 0 : item.meta) ?? {},
            pinned,
            folder_id: folderId,
            created_at: (item == null ? void 0 : item.created_at) ?? null,
            updated_at: (item == null ? void 0 : item.updated_at) ?? null
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
          toast.error($i18n().t(`Invalid file format.`));
        }
      };
      reader.readAsText(file);
    }
  };
  const tagEventHandler = async (type, tagName, chatId2) => {
    console.log(type, tagName, chatId2);
    if (type === "delete") {
      initChatList();
    } else if (type === "add") {
      initChatList();
    }
  };
  const onDragOver = (e) => {
    var _a, _b;
    e.preventDefault();
    if ((_b = (_a = e.dataTransfer) == null ? void 0 : _a.types) == null ? void 0 : _b.includes("Files")) ;
  };
  const onDragLeave = () => {
  };
  const onDrop = async (e) => {
    var _a, _b;
    e.preventDefault();
    console.log(e);
    if ((_a = e.dataTransfer) == null ? void 0 : _a.files) {
      const inputFiles = Array.from((_b = e.dataTransfer) == null ? void 0 : _b.files);
      if (inputFiles && inputFiles.length > 0) {
        console.log(inputFiles);
        inputFilesHandler(inputFiles);
      }
    }
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
    if (e.key === "Shift") {
      set(shiftKey, true);
    }
  };
  const onKeyUp = (e) => {
    if (e.key === "Shift") {
      set(shiftKey, false);
    }
  };
  const onFocus = () => {
  };
  const onBlur = () => {
    set(shiftKey, false);
    set(selectedChatId, null);
  };
  let unsubscribers = [];
  onMount(async () => {
    await showSidebar.set(!$mobile() ? localStorage.sidebar === "true" : false);
    unsubscribers = [
      mobile.subscribe((value) => {
        if ($showSidebar() && value) {
          showSidebar.set(false);
        }
        if ($showSidebar() && !value) {
          const navElement2 = document.getElementsByTagName("nav")[0];
          if (navElement2) {
            navElement2.style["-webkit-app-region"] = "drag";
          }
        }
      }),
      showSidebar.subscribe(async (value) => {
        localStorage.sidebar = value;
        const navElement2 = document.getElementsByTagName("nav")[0];
        if (navElement2) {
          if ($mobile()) {
            if (!value) {
              navElement2.style["-webkit-app-region"] = "drag";
            } else {
              navElement2.style["-webkit-app-region"] = "no-drag";
            }
          } else {
            navElement2.style["-webkit-app-region"] = "drag";
          }
        }
        if (value) {
          await initChannels();
          await initChatList();
        }
      })
    ];
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);
    const dropZone = document.getElementById("sidebar");
    dropZone == null ? void 0 : dropZone.addEventListener("dragover", onDragOver);
    dropZone == null ? void 0 : dropZone.addEventListener("drop", onDrop);
    dropZone == null ? void 0 : dropZone.addEventListener("dragleave", onDragLeave);
  });
  onDestroy(() => {
    if (unsubscribers && unsubscribers.length > 0) {
      unsubscribers.forEach((unsubscriber) => {
        if (unsubscriber) {
          unsubscriber();
        }
      });
    }
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
    window.removeEventListener("touchstart", onTouchStart);
    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("focus", onFocus);
    window.removeEventListener("blur", onBlur);
    const dropZone = document.getElementById("sidebar");
    dropZone == null ? void 0 : dropZone.removeEventListener("dragover", onDragOver);
    dropZone == null ? void 0 : dropZone.removeEventListener("drop", onDrop);
    dropZone == null ? void 0 : dropZone.removeEventListener("dragleave", onDragLeave);
  });
  const newChatHandler = async () => {
    var _a, _b, _c, _d;
    set(selectedChatId, null);
    selectedFolder.set(null);
    if (((_a = $user()) == null ? void 0 : _a.role) !== "admin" && ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.chat) == null ? void 0 : _d.temporary_enforced)) {
      await temporaryChatEnabled.set(true);
    } else {
      await temporaryChatEnabled.set(false);
    }
    setTimeout(
      () => {
        if ($mobile()) {
          showSidebar.set(false);
        }
      },
      0
    );
  };
  const itemClickHandler = async () => {
    set(selectedChatId, null);
    chatId.set("");
    if ($mobile()) {
      showSidebar.set(false);
    }
    await tick();
  };
  const isWindows = /Windows/i.test(navigator.userAgent);
  legacy_pre_effect(() => $selectedFolder(), () => {
    if ($selectedFolder()) {
      initFolders();
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$m();
  var node = first_child(fragment);
  ArchivedChatsModal(node, {
    onUpdate: (
      // First pass: Initialize all folder entries
      // Ensure folder is added to folders with its data
      // Second pass: Tie child folders to their parents
      // Ensure the parent folder is initialized if it doesn't exist
      // Create a placeholder if not already present
      // Initialize childrenIds array if it doesn't exist and add the current folder id
      // Sort the children by updated_at field
      // If a folder with the same name already exists, append a number to the name
      // Add a dummy folder to the list to show the user that the folder is being created
      // newFolderId = res.id;
      // Reset pagination variables
      // Enable pagination
      // once the bottom of the list has been reached (no results) there is no need to continue querying
      // Check if a file is being draggedOver.
      // Log the drop event
      // Perform file drop check and handle it accordingly
      // Log the dropped files
      // Handle the dropped files
      // Reset draggedOver status after drop
      // nav element is not available on the first render
      async () => {
        await initChatList();
      }
    ),
    get show() {
      mark_store_binding();
      return $showArchivedChats();
    },
    set show($$value) {
      store_set(showArchivedChats, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  ChannelModal(node_1, {
    onSubmit: async ({ name, access_control }) => {
      var _a;
      name = name == null ? void 0 : name.trim();
      if (!name) {
        toast.error($i18n().t("Channel name cannot be empty."));
        return;
      }
      const res = await createNewChannel(localStorage.token, { name, access_control }).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        $socket().emit("join-channels", { auth: { token: (_a = $user()) == null ? void 0 : _a.token } });
        await initChannels();
        set(showCreateChannel, false);
      }
    },
    get show() {
      return get(showCreateChannel);
    },
    set show($$value) {
      set(showCreateChannel, $$value);
    },
    $$legacy: true
  });
  var node_2 = sibling(node_1, 2);
  FolderModal(node_2, {
    onSubmit: async (folder) => {
      await createFolder(folder);
      set(showCreateFolderModal, false);
    },
    get show() {
      return get(showCreateFolderModal);
    },
    set show($$value) {
      set(showCreateFolderModal, $$value);
    },
    $$legacy: true
  });
  var node_3 = sibling(node_2, 2);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$j();
      template_effect(() => set_class(div, 1, ` ${$isApp() ? " ml-[4.5rem] md:ml-0" : ""} fixed md:hidden z-40 top-0 right-0 left-0 bottom-0 bg-black/60 w-full min-h-screen h-screen flex justify-center overflow-hidden overscroll-contain`));
      event("mousedown", div, () => {
        showSidebar.set(!$showSidebar());
      });
      append($$anchor2, div);
    };
    if_block(node_3, ($$render) => {
      if ($showSidebar()) $$render(consequent);
    });
  }
  var node_4 = sibling(node_3, 2);
  SearchModal(node_4, {
    onClose: () => {
      if ($mobile()) {
        showSidebar.set(false);
      }
    },
    get show() {
      mark_store_binding();
      return $showSearch();
    },
    set show($$value) {
      store_set(showSearch, $$value);
    },
    $$legacy: true
  });
  var button = sibling(node_4, 2);
  var node_5 = sibling(button, 2);
  {
    var consequent_4 = ($$anchor2) => {
      var div_1 = root_2$g();
      var button_1 = child(div_1);
      var div_2 = child(button_1);
      var node_6 = child(div_2);
      {
        let $0 = derived_safe_equal(() => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"))));
        Tooltip(node_6, {
          get content() {
            return get($0);
          },
          placement: "right",
          children: ($$anchor3, $$slotProps) => {
            var button_2 = root_3$a();
            template_effect(
              ($02) => {
                set_class(button_2, 1, `flex rounded-xl hover:bg-gray-100 dark:hover:bg-gray-850 transition group ${isWindows ? "cursor-pointer" : "cursor-[e-resize]"}`);
                set_attribute(button_2, "aria-label", $02);
              },
              [
                () => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar")))
              ]
            );
            append($$anchor3, button_2);
          },
          $$slots: { default: true }
        });
      }
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var div_4 = child(div_3);
      var node_7 = child(div_4);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("New Chat"))));
        Tooltip(node_7, {
          get content() {
            return get($0);
          },
          placement: "right",
          children: ($$anchor3, $$slotProps) => {
            var a_1 = root_4$d();
            template_effect(($02) => set_attribute(a_1, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("New Chat")))]);
            event("click", a_1, async (e) => {
              e.stopImmediatePropagation();
              e.preventDefault();
              goto("/");
              newChatHandler();
            });
            append($$anchor3, a_1);
          },
          $$slots: { default: true }
        });
      }
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var node_8 = child(div_5);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Search"))));
        Tooltip(node_8, {
          get content() {
            return get($0);
          },
          placement: "right",
          children: ($$anchor3, $$slotProps) => {
            var button_3 = root_5$a();
            template_effect(($02) => set_attribute(button_3, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Search")))]);
            event("click", button_3, (e) => {
              e.stopImmediatePropagation();
              e.preventDefault();
              showSearch.set(true);
            });
            append($$anchor3, button_3);
          },
          $$slots: { default: true }
        });
      }
      reset(div_5);
      var node_9 = sibling(div_5, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var div_6 = root_6$8();
          var node_10 = child(div_6);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Notes"))));
            Tooltip(node_10, {
              get content() {
                return get($0);
              },
              placement: "right",
              children: ($$anchor4, $$slotProps) => {
                var a_2 = root_7$5();
                var div_7 = child(a_2);
                var node_11 = child(div_7);
                Note(node_11, { className: "size-4.5" });
                reset(div_7);
                reset(a_2);
                template_effect(($02) => set_attribute(a_2, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Notes")))]);
                event("click", a_2, async (e) => {
                  e.stopImmediatePropagation();
                  e.preventDefault();
                  goto("/notes");
                  itemClickHandler();
                });
                append($$anchor4, a_2);
              },
              $$slots: { default: true }
            });
          }
          reset(div_6);
          append($$anchor3, div_6);
        };
        if_block(node_9, ($$render) => {
          if ($config(), $user(), untrack(() => {
            var _a, _b, _c, _d, _e, _f;
            return (((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_notes) ?? false) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || (((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.notes) ?? true));
          })) $$render(consequent_1);
        });
      }
      var node_12 = sibling(node_9, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_8 = root_8$2();
          var node_13 = child(div_8);
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Workspace"))));
            Tooltip(node_13, {
              get content() {
                return get($0);
              },
              placement: "right",
              children: ($$anchor4, $$slotProps) => {
                var a_3 = root_9$4();
                template_effect(($02) => set_attribute(a_3, "aria-label", $02), [() => ($i18n(), untrack(() => $i18n().t("Workspace")))]);
                event("click", a_3, async (e) => {
                  e.stopImmediatePropagation();
                  e.preventDefault();
                  goto("/workspace");
                  itemClickHandler();
                });
                append($$anchor4, a_3);
              },
              $$slots: { default: true }
            });
          }
          reset(div_8);
          append($$anchor3, div_8);
        };
        if_block(node_12, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models) || ((_g = (_f = (_e = $user()) == null ? void 0 : _e.permissions) == null ? void 0 : _f.workspace) == null ? void 0 : _g.knowledge) || ((_j = (_i = (_h = $user()) == null ? void 0 : _h.permissions) == null ? void 0 : _i.workspace) == null ? void 0 : _j.prompts) || ((_m = (_l = (_k = $user()) == null ? void 0 : _k.permissions) == null ? void 0 : _l.workspace) == null ? void 0 : _m.tools);
          })) $$render(consequent_2);
        });
      }
      reset(div_3);
      reset(button_1);
      var div_9 = sibling(button_1, 2);
      var div_10 = child(div_9);
      var div_11 = child(div_10);
      var node_14 = child(div_11);
      {
        var consequent_3 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($user(), untrack(() => {
              var _a;
              return (_a = $user()) == null ? void 0 : _a.role;
            })));
            UserMenu($$anchor3, {
              get role() {
                return get($0);
              },
              $$events: {
                show: (e) => {
                  if (e.detail === "archived-chat") {
                    showArchivedChats.set(true);
                  }
                }
              },
              children: ($$anchor4, $$slotProps) => {
                var div_12 = root_11$3();
                append($$anchor4, div_12);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_14, ($$render) => {
          if ($user() !== void 0 && $user() !== null) $$render(consequent_3);
        });
      }
      reset(div_11);
      reset(div_10);
      reset(div_9);
      reset(div_1);
      template_effect(() => set_class(button_1, 1, `flex flex-col flex-1 ${isWindows ? "cursor-pointer" : "cursor-[e-resize]"}`));
      event("click", button_1, async () => {
        showSidebar.set(!$showSidebar());
      });
      append($$anchor2, div_1);
    };
    if_block(node_5, ($$render) => {
      if (!$mobile() && !$showSidebar()) $$render(consequent_4);
    });
  }
  var node_15 = sibling(node_5, 2);
  {
    var consequent_15 = ($$anchor2) => {
      var div_13 = root_12$2();
      var div_14 = child(div_13);
      var div_15 = child(div_14);
      var a_4 = child(div_15);
      var a_5 = sibling(a_4, 2);
      var div_16 = child(a_5);
      var text2 = child(div_16, true);
      reset(div_16);
      reset(a_5);
      var node_16 = sibling(a_5, 2);
      {
        let $0 = derived_safe_equal(() => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar"))));
        Tooltip(node_16, {
          get content() {
            return get($0);
          },
          placement: "bottom",
          children: ($$anchor3, $$slotProps) => {
            var button_4 = root_13$2();
            var div_17 = child(button_4);
            var node_17 = child(div_17);
            Sidebar(node_17, {});
            reset(div_17);
            reset(button_4);
            template_effect(
              ($02) => {
                set_class(button_4, 1, `flex rounded-xl size-8.5 justify-center items-center hover:bg-gray-100/50 dark:hover:bg-gray-850/50 transition ${isWindows ? "cursor-pointer" : "cursor-[w-resize]"}`);
                set_attribute(button_4, "aria-label", $02);
              },
              [
                () => ($showSidebar(), $i18n(), untrack(() => $showSidebar() ? $i18n().t("Close Sidebar") : $i18n().t("Open Sidebar")))
              ]
            );
            event("click", button_4, () => {
              showSidebar.set(!$showSidebar());
            });
            append($$anchor3, button_4);
          },
          $$slots: { default: true }
        });
      }
      var div_18 = sibling(node_16, 2);
      reset(div_15);
      var div_19 = sibling(div_15, 2);
      var div_20 = child(div_19);
      var div_21 = child(div_20);
      var a_6 = child(div_21);
      var div_22 = child(a_6);
      var node_18 = child(div_22);
      PencilSquare(node_18, { className: " size-4.5", strokeWidth: "2" });
      reset(div_22);
      var div_23 = sibling(div_22, 2);
      var div_24 = child(div_23);
      var text_1 = child(div_24, true);
      reset(div_24);
      reset(div_23);
      var node_19 = sibling(div_23, 2);
      HotkeyHint(node_19, { name: "newChat", className: " group-hover:visible invisible" });
      reset(a_6);
      reset(div_21);
      var div_25 = sibling(div_21, 2);
      var button_5 = child(div_25);
      var div_26 = child(button_5);
      var node_20 = child(div_26);
      Search(node_20, { strokeWidth: "2", className: "size-4.5" });
      reset(div_26);
      var div_27 = sibling(div_26, 2);
      var div_28 = child(div_27);
      var text_2 = child(div_28, true);
      reset(div_28);
      reset(div_27);
      var node_21 = sibling(div_27, 2);
      HotkeyHint(node_21, { name: "search", className: " group-hover:visible invisible" });
      reset(button_5);
      reset(div_25);
      var node_22 = sibling(div_25, 2);
      {
        var consequent_5 = ($$anchor3) => {
          var div_29 = root_14$3();
          var a_7 = child(div_29);
          var div_30 = child(a_7);
          var node_23 = child(div_30);
          Note(node_23, { className: "size-4.5", strokeWidth: "2" });
          reset(div_30);
          var div_31 = sibling(div_30, 2);
          var div_32 = child(div_31);
          var text_3 = child(div_32, true);
          reset(div_32);
          reset(div_31);
          reset(a_7);
          reset(div_29);
          template_effect(
            ($0, $1) => {
              set_attribute(a_7, "aria-label", $0);
              set_text(text_3, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Notes"))),
              () => ($i18n(), untrack(() => $i18n().t("Notes")))
            ]
          );
          event("click", a_7, itemClickHandler);
          append($$anchor3, div_29);
        };
        if_block(node_22, ($$render) => {
          if ($config(), $user(), untrack(() => {
            var _a, _b, _c, _d, _e, _f;
            return (((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_notes) ?? false) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || (((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.notes) ?? true));
          })) $$render(consequent_5);
        });
      }
      var node_24 = sibling(node_22, 2);
      {
        var consequent_6 = ($$anchor3) => {
          var div_33 = root_15$1();
          var a_8 = child(div_33);
          var div_34 = sibling(child(a_8), 2);
          var div_35 = child(div_34);
          var text_4 = child(div_35, true);
          reset(div_35);
          reset(div_34);
          reset(a_8);
          reset(div_33);
          template_effect(
            ($0, $1) => {
              set_attribute(a_8, "aria-label", $0);
              set_text(text_4, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Workspace"))),
              () => ($i18n(), untrack(() => $i18n().t("Workspace")))
            ]
          );
          event("click", a_8, itemClickHandler);
          append($$anchor3, div_33);
        };
        if_block(node_24, ($$render) => {
          if ($user(), untrack(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_d = (_c = (_b = $user()) == null ? void 0 : _b.permissions) == null ? void 0 : _c.workspace) == null ? void 0 : _d.models) || ((_g = (_f = (_e = $user()) == null ? void 0 : _e.permissions) == null ? void 0 : _f.workspace) == null ? void 0 : _g.knowledge) || ((_j = (_i = (_h = $user()) == null ? void 0 : _h.permissions) == null ? void 0 : _i.workspace) == null ? void 0 : _j.prompts) || ((_m = (_l = (_k = $user()) == null ? void 0 : _k.permissions) == null ? void 0 : _l.workspace) == null ? void 0 : _m.tools);
          })) $$render(consequent_6);
        });
      }
      reset(div_20);
      var node_25 = sibling(div_20, 2);
      {
        var consequent_7 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Models"))));
            Folder($$anchor3, {
              id: "sidebar-models",
              className: "px-2 mt-0.5",
              get name() {
                return get($0);
              },
              chevron: false,
              dragAndDrop: false,
              children: ($$anchor4, $$slotProps) => {
                PinnedModelList($$anchor4, {
                  get shiftKey() {
                    return get(shiftKey);
                  },
                  get selectedChatId() {
                    return get(selectedChatId);
                  },
                  set selectedChatId($$value) {
                    set(selectedChatId, $$value);
                  },
                  $$legacy: true
                });
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_25, ($$render) => {
          if ($models(), $settings(), $config(), untrack(() => {
            var _a, _b;
            return ($models() ?? []).length > 0 && ((((_a = $settings()) == null ? void 0 : _a.pinnedModels) ?? []).length > 0 || ((_b = $config()) == null ? void 0 : _b.default_pinned_models));
          })) $$render(consequent_7);
        });
      }
      var node_26 = sibling(node_25, 2);
      {
        var consequent_8 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Channels"))));
            let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Create Channel"))));
            Folder($$anchor3, {
              id: "sidebar-channels",
              className: "px-2 mt-0.5",
              get name() {
                return get($0);
              },
              chevron: false,
              dragAndDrop: false,
              onAdd: async () => {
                var _a;
                if (((_a = $user()) == null ? void 0 : _a.role) === "admin") {
                  await tick();
                  setTimeout(
                    () => {
                      set(showCreateChannel, true);
                    },
                    0
                  );
                }
              },
              get onAddLabel() {
                return get($1);
              },
              children: ($$anchor4, $$slotProps) => {
                var fragment_5 = comment();
                var node_27 = first_child(fragment_5);
                each(node_27, 1, $channels, index, ($$anchor5, channel) => {
                  ChannelItem($$anchor5, {
                    get channel() {
                      return get(channel);
                    },
                    onUpdate: async () => {
                      await initChannels();
                    }
                  });
                });
                append($$anchor4, fragment_5);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_26, ($$render) => {
          if ($config(), $user(), $channels(), untrack(() => {
            var _a, _b, _c;
            return ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_channels) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || $channels().length > 0);
          })) $$render(consequent_8);
        });
      }
      var node_28 = sibling(node_26, 2);
      {
        var consequent_9 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Folders"))));
            let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("New Folder"))));
            Folder($$anchor3, {
              id: "sidebar-folders",
              className: "px-2 mt-0.5",
              get name() {
                return get($0);
              },
              chevron: false,
              onAdd: () => {
                set(showCreateFolderModal, true);
              },
              get onAddLabel() {
                return get($1);
              },
              $$events: {
                drop: async (e) => {
                  const { type, id, item } = e.detail;
                  if (type === "folder") {
                    if (get(folders$1)[id].parent_id === null) {
                      return;
                    }
                    const res = await updateFolderParentIdById(localStorage.token, id, null).catch((error) => {
                      toast.error(`${error}`);
                      return null;
                    });
                    if (res) {
                      await initFolders();
                    }
                  }
                }
              },
              children: ($$anchor4, $$slotProps) => {
                Folders($$anchor4, {
                  get folders() {
                    return get(folders$1);
                  },
                  get shiftKey() {
                    return get(shiftKey);
                  },
                  onDelete: (folderId) => {
                    selectedFolder.set(null);
                    initChatList();
                  },
                  get folderRegistry() {
                    return get(folderRegistry);
                  },
                  set folderRegistry($$value) {
                    set(folderRegistry, $$value);
                  },
                  $$events: {
                    update: () => {
                      initChatList();
                    },
                    import: (e) => {
                      const { folderId, items } = e.detail;
                      importChatHandler(items, false, folderId);
                    },
                    change: async () => {
                      initChatList();
                    }
                  },
                  $$legacy: true
                });
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_28, ($$render) => {
          if (get(folders$1)) $$render(consequent_9);
        });
      }
      var node_29 = sibling(node_28, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Chats"))));
        Folder(node_29, {
          id: "sidebar-chats",
          className: "px-2 mt-0.5",
          get name() {
            return get($0);
          },
          chevron: false,
          $$events: {
            change: async (e) => {
              selectedFolder.set(null);
            },
            import: (e) => {
              importChatHandler(e.detail);
            },
            drop: async (e) => {
              var _a;
              const { type, id, item } = e.detail;
              if (type === "chat") {
                let chat = await getChatById(localStorage.token, id).catch((error) => {
                  return null;
                });
                if (!chat && item) {
                  chat = await importChats(localStorage.token, [
                    {
                      chat: item.chat,
                      meta: (item == null ? void 0 : item.meta) ?? {},
                      pinned: false,
                      folder_id: null,
                      created_at: (item == null ? void 0 : item.created_at) ?? null,
                      updated_at: (item == null ? void 0 : item.updated_at) ?? null
                    }
                  ]);
                }
                if (chat) {
                  console.log(chat);
                  if (chat.folder_id) {
                    await updateChatFolderIdById(localStorage.token, chat.id, null).catch((error) => {
                      toast.error(`${error}`);
                      return null;
                    });
                    (_a = get(folderRegistry)[chat.folder_id]) == null ? void 0 : _a.setFolderItems();
                  }
                  if (chat.pinned) {
                    await toggleChatPinnedStatusById(localStorage.token, chat.id);
                  }
                  initChatList();
                }
              } else if (type === "folder") {
                if (get(folders$1)[id].parent_id === null) {
                  return;
                }
                const res = await updateFolderParentIdById(localStorage.token, id, null).catch((error) => {
                  toast.error(`${error}`);
                  return null;
                });
                if (res) {
                  await initFolders();
                }
              }
            }
          },
          children: ($$anchor3, $$slotProps) => {
            var fragment_9 = root_23$1();
            var node_30 = first_child(fragment_9);
            {
              var consequent_10 = ($$anchor4) => {
                var div_36 = root_24$1();
                var div_37 = child(div_36);
                var node_31 = child(div_37);
                {
                  let $02 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Pinned"))));
                  Folder(node_31, {
                    id: "sidebar-pinned-chats",
                    buttonClassName: " text-gray-500",
                    get name() {
                      return get($02);
                    },
                    $$events: {
                      import: (e) => {
                        importChatHandler(e.detail, true);
                      },
                      drop: async (e) => {
                        const { type, id, item } = e.detail;
                        if (type === "chat") {
                          let chat = await getChatById(localStorage.token, id).catch((error) => {
                            return null;
                          });
                          if (!chat && item) {
                            chat = await importChats(localStorage.token, [
                              {
                                chat: item.chat,
                                meta: (item == null ? void 0 : item.meta) ?? {},
                                pinned: false,
                                folder_id: null,
                                created_at: (item == null ? void 0 : item.created_at) ?? null,
                                updated_at: (item == null ? void 0 : item.updated_at) ?? null
                              }
                            ]);
                          }
                          if (chat) {
                            console.log(chat);
                            if (chat.folder_id) {
                              await updateChatFolderIdById(localStorage.token, chat.id, null).catch((error) => {
                                toast.error(`${error}`);
                                return null;
                              });
                            }
                            if (!chat.pinned) {
                              await toggleChatPinnedStatusById(localStorage.token, chat.id);
                            }
                            initChatList();
                          }
                        }
                      }
                    },
                    children: ($$anchor5, $$slotProps2) => {
                      var div_38 = root_25();
                      each(div_38, 7, $pinnedChats, (chat, idx) => `pinned-chat-${(chat == null ? void 0 : chat.id) ?? idx}`, ($$anchor6, chat) => {
                        {
                          let $03 = derived_safe_equal(() => (get(selectedChatId), get(chat), untrack(() => get(selectedChatId) === get(chat).id)));
                          ChatItem($$anchor6, {
                            className: "",
                            get id() {
                              return get(chat), untrack(() => get(chat).id);
                            },
                            get title() {
                              return get(chat), untrack(() => get(chat).title);
                            },
                            get shiftKey() {
                              return get(shiftKey);
                            },
                            get selected() {
                              return get($03);
                            },
                            $$events: {
                              select: () => {
                                set(selectedChatId, get(chat).id);
                              },
                              unselect: () => {
                                set(selectedChatId, null);
                              },
                              change: async () => {
                                initChatList();
                              },
                              tag: (e) => {
                                const { type, name } = e.detail;
                                tagEventHandler(type, name, get(chat).id);
                              }
                            }
                          });
                        }
                      });
                      reset(div_38);
                      append($$anchor5, div_38);
                    },
                    $$slots: { default: true }
                  });
                }
                reset(div_37);
                reset(div_36);
                append($$anchor4, div_36);
              };
              if_block(node_30, ($$render) => {
                if ($pinnedChats(), untrack(() => $pinnedChats().length > 0)) $$render(consequent_10);
              });
            }
            var div_39 = sibling(node_30, 2);
            var div_40 = child(div_39);
            var node_32 = child(div_40);
            {
              var consequent_13 = ($$anchor4) => {
                var fragment_11 = root_27();
                var node_33 = first_child(fragment_11);
                each(node_33, 3, $chats, (chat, idx) => `chat-${(chat == null ? void 0 : chat.id) ?? idx}`, ($$anchor5, chat, idx) => {
                  var fragment_12 = root_28();
                  var node_34 = first_child(fragment_12);
                  {
                    var consequent_11 = ($$anchor6) => {
                      var div_41 = root_29();
                      var text_5 = child(div_41, true);
                      reset(div_41);
                      template_effect(
                        ($02) => {
                          set_class(div_41, 1, `w-full pl-2.5 text-xs text-gray-500 dark:text-gray-500 font-medium ${get(idx) === 0 ? "" : "pt-5"} pb-1.5`);
                          set_text(text_5, $02);
                        },
                        [
                          () => ($i18n(), get(chat), untrack(() => $i18n().t(get(chat).time_range)))
                        ]
                      );
                      append($$anchor6, div_41);
                    };
                    if_block(node_34, ($$render) => {
                      if (deep_read_state(get(idx)), get(chat), $chats(), untrack(() => get(idx) === 0 || get(idx) > 0 && get(chat).time_range !== $chats()[get(idx) - 1].time_range)) $$render(consequent_11);
                    });
                  }
                  var node_35 = sibling(node_34, 2);
                  {
                    let $02 = derived_safe_equal(() => (get(selectedChatId), get(chat), untrack(() => get(selectedChatId) === get(chat).id)));
                    ChatItem(node_35, {
                      className: "",
                      get id() {
                        return get(chat), untrack(() => get(chat).id);
                      },
                      get title() {
                        return get(chat), untrack(() => get(chat).title);
                      },
                      get shiftKey() {
                        return get(shiftKey);
                      },
                      get selected() {
                        return get($02);
                      },
                      $$events: {
                        select: () => {
                          set(selectedChatId, get(chat).id);
                        },
                        unselect: () => {
                          set(selectedChatId, null);
                        },
                        change: async () => {
                          initChatList();
                        },
                        tag: (e) => {
                          const { type, name } = e.detail;
                          tagEventHandler(type, name, get(chat).id);
                        }
                      }
                    });
                  }
                  append($$anchor5, fragment_12);
                });
                var node_36 = sibling(node_33, 2);
                {
                  var consequent_12 = ($$anchor5) => {
                    Loader($$anchor5, {
                      $$events: {
                        visible: (e) => {
                          if (!get(chatListLoading)) {
                            loadMoreChats();
                          }
                        }
                      },
                      children: ($$anchor6, $$slotProps2) => {
                        var div_42 = root_31();
                        var node_37 = child(div_42);
                        Spinner(node_37, { className: " size-4" });
                        var div_43 = sibling(node_37, 2);
                        var text_6 = child(div_43, true);
                        reset(div_43);
                        reset(div_42);
                        template_effect(($02) => set_text(text_6, $02), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                        append($$anchor6, div_42);
                      },
                      $$slots: { default: true }
                    });
                  };
                  if_block(node_36, ($$render) => {
                    if ($scrollPaginationEnabled() && !get(allChatsLoaded)) $$render(consequent_12);
                  });
                }
                append($$anchor4, fragment_11);
              };
              var alternate = ($$anchor4) => {
                var div_44 = root_32();
                var node_38 = child(div_44);
                Spinner(node_38, { className: " size-4" });
                var div_45 = sibling(node_38, 2);
                var text_7 = child(div_45, true);
                reset(div_45);
                reset(div_44);
                template_effect(($02) => set_text(text_7, $02), [() => ($i18n(), untrack(() => $i18n().t("Loading...")))]);
                append($$anchor4, div_44);
              };
              if_block(node_32, ($$render) => {
                if ($chats()) $$render(consequent_13);
                else $$render(alternate, false);
              });
            }
            reset(div_40);
            reset(div_39);
            append($$anchor3, fragment_9);
          },
          $$slots: { default: true }
        });
      }
      reset(div_19);
      var div_46 = sibling(div_19, 2);
      var div_47 = sibling(child(div_46), 2);
      var node_39 = child(div_47);
      {
        var consequent_14 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($user(), untrack(() => {
              var _a;
              return (_a = $user()) == null ? void 0 : _a.role;
            })));
            UserMenu($$anchor3, {
              get role() {
                return get($0);
              },
              $$events: {
                show: (e) => {
                  if (e.detail === "archived-chat") {
                    showArchivedChats.set(true);
                  }
                }
              },
              children: ($$anchor4, $$slotProps) => {
                var div_48 = root_34();
                var div_49 = child(div_48);
                var node_40 = child(div_49);
                Settings(node_40, { className: "size-6", strokeWidth: "1.5" });
                reset(div_49);
                var div_50 = sibling(div_49, 2);
                var text_8 = child(div_50, true);
                reset(div_50);
                reset(div_48);
                template_effect(() => set_text(text_8, ($user(), untrack(() => {
                  var _a;
                  return (_a = $user()) == null ? void 0 : _a.name;
                }))));
                append($$anchor4, div_48);
              },
              $$slots: { default: true }
            });
          }
        };
        if_block(node_39, ($$render) => {
          if ($user() !== void 0 && $user() !== null) $$render(consequent_14);
        });
      }
      reset(div_47);
      reset(div_46);
      reset(div_14);
      reset(div_13);
      bind_this(div_13, ($$value) => set(navElement, $$value), () => get(navElement));
      template_effect(
        ($0, $1, $2, $3) => {
          set_class(div_13, 1, `h-screen max-h-[100dvh] min-h-screen select-none w-[260px] ${$showSidebar() ? `${$mobile() ? "bg-gray-50 dark:bg-gray-950" : "bg-gray-50/70 dark:bg-gray-950/70"}` : ""} shrink-0 text-gray-900 dark:text-gray-200 text-sm overflow-x-hidden transition-all duration-300
        `);
          set_attribute(div_13, "data-state", $showSidebar());
          set_class(div_14, 1, ` my-auto flex flex-col justify-between h-screen max-h-[100dvh] w-[260px] overflow-x-hidden scrollbar-hidden z-50 ${$showSidebar() ? "" : "invisible"}`);
          set_text(text2, $WEBUI_NAME());
          set_class(div_18, 1, `${get(scrollTop) > 0 ? "visible" : "invisible"} sidebar-bg-gradient-to-b bg-linear-to-b from-gray-50 dark:from-gray-950 to-transparent from-50% pointer-events-none absolute inset-0 -z-10 -mb-6`);
          set_attribute(a_6, "aria-label", $0);
          set_text(text_1, $1);
          set_attribute(button_5, "aria-label", $2);
          set_text(text_2, $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("New Chat"))),
          () => ($i18n(), untrack(() => $i18n().t("New Chat"))),
          () => ($i18n(), untrack(() => $i18n().t("Search"))),
          () => ($i18n(), untrack(() => $i18n().t("Search")))
        ]
      );
      event("click", a_4, newChatHandler);
      event("click", a_5, newChatHandler);
      event("click", a_6, newChatHandler);
      event("click", button_5, () => {
        showSearch.set(true);
      });
      event("scroll", div_19, (e) => {
        if (e.target.scrollTop === 0) {
          set(scrollTop, 0);
        } else {
          set(scrollTop, e.target.scrollTop);
        }
      });
      transition(3, div_13, () => slide, () => ({ duration: 250, axis: "x" }));
      append($$anchor2, div_13);
    };
    if_block(node_15, ($$render) => {
      if ($showSidebar()) $$render(consequent_15);
    });
  }
  event("click", button, () => {
    goto("/");
    newChatHandler();
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$i = from_html(`<div class=" py-2.5 space-y-1.5"><div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><!></div></div> <div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><!></div></div> <div class="flex flex-col w-full"><div class=" mb-1 text-xs text-gray-500"> </div> <div class="flex-1"><!></div></div></div> <div class="mt-3 flex justify-end"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"> </button></div>`, 1);
var root$l = from_html(`<form class="flex flex-col text-sm"><div class="flex justify-between items-center text-sm"><div class="  font-medium"> </div> <button class=" text-xs font-medium text-gray-500" type="button"> </button></div> <!></form>`);
function UpdatePassword($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = mutable_source(false);
  let currentPassword = mutable_source("");
  let newPassword = mutable_source("");
  let newPasswordConfirm = mutable_source("");
  const updatePasswordHandler = async () => {
    if (get(newPassword) === get(newPasswordConfirm)) {
      const res = await updateUserPassword(localStorage.token, get(currentPassword), get(newPassword)).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      if (res) {
        toast.success($i18n().t("Successfully updated."));
      }
      set(currentPassword, "");
      set(newPassword, "");
      set(newPasswordConfirm, "");
    } else {
      toast.error($i18n().t("The passwords you entered don't quite match. Please double-check and try again."));
      set(newPassword, "");
      set(newPasswordConfirm, "");
    }
  };
  init();
  var form = root$l();
  var div = child(form);
  var div_1 = child(div);
  var text2 = child(div_1, true);
  reset(div_1);
  var button = sibling(div_1, 2);
  var text_1 = child(button, true);
  reset(button);
  reset(div);
  var node = sibling(div, 2);
  {
    var consequent = ($$anchor2) => {
      var fragment = root_1$i();
      var div_2 = first_child(fragment);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var text_2 = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var node_1 = child(div_5);
      {
        let $0 = derived_safe_equal(() => $i18n().t("Enter your current password"));
        SensitiveInput(node_1, {
          class: "w-full bg-transparent text-sm dark:text-gray-300 outline-hidden placeholder:opacity-30",
          type: "password",
          get placeholder() {
            return get($0);
          },
          autocomplete: "current-password",
          required: true,
          get value() {
            return get(currentPassword);
          },
          set value($$value) {
            set(currentPassword, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_5);
      reset(div_3);
      var div_6 = sibling(div_3, 2);
      var div_7 = child(div_6);
      var text_3 = child(div_7, true);
      reset(div_7);
      var div_8 = sibling(div_7, 2);
      var node_2 = child(div_8);
      {
        let $0 = derived_safe_equal(() => $i18n().t("Enter your new password"));
        SensitiveInput(node_2, {
          class: "w-full bg-transparent text-sm dark:text-gray-300 outline-hidden placeholder:opacity-30",
          type: "password",
          get placeholder() {
            return get($0);
          },
          autocomplete: "new-password",
          required: true,
          get value() {
            return get(newPassword);
          },
          set value($$value) {
            set(newPassword, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_8);
      reset(div_6);
      var div_9 = sibling(div_6, 2);
      var div_10 = child(div_9);
      var text_4 = child(div_10, true);
      reset(div_10);
      var div_11 = sibling(div_10, 2);
      var node_3 = child(div_11);
      {
        let $0 = derived_safe_equal(() => $i18n().t("Confirm your new password"));
        SensitiveInput(node_3, {
          class: "w-full bg-transparent text-sm dark:text-gray-300 outline-hidden placeholder:opacity-30",
          type: "password",
          get placeholder() {
            return get($0);
          },
          autocomplete: "off",
          required: true,
          get value() {
            return get(newPasswordConfirm);
          },
          set value($$value) {
            set(newPasswordConfirm, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_11);
      reset(div_9);
      reset(div_2);
      var div_12 = sibling(div_2, 2);
      var button_1 = child(div_12);
      var text_5 = child(button_1, true);
      reset(button_1);
      reset(div_12);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text_2, $0);
          set_text(text_3, $1);
          set_text(text_4, $2);
          set_text(text_5, $3);
        },
        [
          () => $i18n().t("Current Password"),
          () => $i18n().t("New Password"),
          () => $i18n().t("Confirm Password"),
          () => $i18n().t("Update password")
        ]
      );
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if (get(show)) $$render(consequent);
    });
  }
  reset(form);
  template_effect(
    ($0, $1) => {
      set_text(text2, $0);
      set_text(text_1, $1);
    },
    [
      () => $i18n().t("Change Password"),
      () => get(show) ? $i18n().t("Hide") : $i18n().t("Show")
    ]
  );
  event("click", button, () => {
    set(show, !get(show));
  });
  event("submit", form, preventDefault(() => {
    updatePasswordHandler();
  }));
  append($$anchor, form);
  pop();
  $$cleanup();
}
var root_1$h = from_html(`<input class="w-full text-sm dark:text-gray-300 bg-transparent outline-hidden mt-1" type="text" required/>`);
var root_2$f = from_html(`<div class="mt-2"><div class="flex flex-col w-full"><div class=" mb-1 text-xs font-medium"> </div> <div class="flex-1"><input class="w-full text-sm outline-hidden" type="url" required/></div></div></div>`);
var root_3$9 = from_html(`<div class="mt-2"><!></div>`);
var root_7$4 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg>`);
var root_8$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937V7A2.5 2.5 0 0 0 10 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3Zm1.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM4 11.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg>`);
var root_6$7 = from_html(`<div class="justify-between w-full mt-2"><div class="flex justify-between w-full"><div class="self-center text-xs font-medium mb-1"> </div></div> <div class="flex"><!> <button class="ml-1.5 px-1.5 py-1 dark:hover:bg-gray-850 transition rounded-lg"><!></button></div></div>`);
var root_10$2 = from_html(`<div class="flex justify-between w-full"><div class="self-center text-xs font-medium mb-1"> </div></div>`);
var root_12$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg>`);
var root_13$1 = from_svg(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M11.986 3H12a2 2 0 0 1 2 2v6a2 2 0 0 1-1.5 1.937V7A2.5 2.5 0 0 0 10 4.5H4.063A2 2 0 0 1 6 3h.014A2.25 2.25 0 0 1 8.25 1h1.5a2.25 2.25 0 0 1 2.236 2ZM10.5 4v-.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75V4h3Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M3 6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3Zm1.75 2.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5ZM4 11.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg>`);
var root_14$2 = from_html(`<button class=" px-1.5 py-1 dark:hover:bg-gray-850transition rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path></svg></button>`);
var root_11$2 = from_html(`<!> <button class="ml-1.5 px-1.5 py-1 dark:hover:bg-gray-850 transition rounded-lg"><!></button> <!>`, 1);
var root_15 = from_html(`<button class="flex gap-1.5 items-center font-medium px-3.5 py-1.5 rounded-lg bg-gray-100/70 hover:bg-gray-100 dark:bg-gray-850 dark:hover:bg-gray-850 transition"><!> </button>`);
var root_9$3 = from_html(`<div class="justify-between w-full mt-2"><!> <div class="flex"><!></div></div>`);
var root_5$9 = from_html(`<div class="flex flex-col"><!> <!></div>`);
var root_4$c = from_html(`<div class="flex justify-between items-center text-sm mt-2"><div class="  font-medium"> </div> <button class=" text-xs font-medium text-gray-500" type="button"> </button></div> <!>`, 1);
var root$k = from_html(`<div id="tab-account" class="flex flex-col h-full justify-between text-sm"><div class=" overflow-y-scroll max-h-[28rem] md:max-h-full"><div class="space-y-1"><div><div class="text-base font-medium"> </div> <div class="text-xs text-gray-500 mt-0.5"> </div></div> <div class="flex space-x-5 my-4"><!> <div class="flex flex-1 flex-col"><div class=" flex-1"><div class="flex flex-col w-full"><div class=" mb-1 text-xs font-medium"> </div> <div class="flex-1"><input class="w-full text-sm dark:text-gray-300 bg-transparent outline-hidden" type="text" required/></div></div> <div class="flex flex-col w-full mt-2"><div class=" mb-1 text-xs font-medium"> </div> <div class="flex-1"><!></div></div> <div class="flex flex-col w-full mt-2"><div class=" mb-1 text-xs font-medium"> </div> <div class="flex-1"><select class="w-full text-sm dark:text-gray-300 bg-transparent outline-hidden"><option selected> </option><option> </option><option> </option><option> </option></select></div> <!></div> <div class="flex flex-col w-full mt-2"><div class=" mb-1 text-xs font-medium"> </div> <div class="flex-1"><input class="w-full text-sm dark:text-gray-300 dark:placeholder:text-gray-300 bg-transparent outline-hidden" type="date" required/></div></div></div></div></div></div> <!> <hr class="border-gray-50 dark:border-gray-850 my-4"/> <!> <!></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"> </button></div></div>`);
function Account($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let saveHandler = prop($$props, "saveHandler", 8);
  let saveSettings = prop($$props, "saveSettings", 8);
  let profileImageUrl = mutable_source("");
  let name = mutable_source("");
  let bio = mutable_source("");
  let _gender = mutable_source("");
  let gender = mutable_source("");
  let dateOfBirth = mutable_source("");
  let webhookUrl = mutable_source("");
  let showAPIKeys = mutable_source(false);
  let JWTTokenCopied = mutable_source(false);
  let APIKey = mutable_source("");
  let APIKeyCopied = mutable_source(false);
  const submitHandler = async () => {
    var _a, _b, _c, _d;
    if (get(name) !== ((_a = $user()) == null ? void 0 : _a.name)) {
      if (get(profileImageUrl) === generateInitialsImage((_b = $user()) == null ? void 0 : _b.name) || get(profileImageUrl) === "") {
        set(profileImageUrl, generateInitialsImage(get(name)));
      }
    }
    if (get(webhookUrl) !== ((_d = (_c = $settings()) == null ? void 0 : _c.notifications) == null ? void 0 : _d.webhook_url)) {
      saveSettings()({
        notifications: { ...$settings().notifications, webhook_url: get(webhookUrl) }
      });
    }
    const updatedUser = await updateUserProfile(localStorage.token, {
      name: get(name),
      profile_image_url: get(profileImageUrl),
      bio: get(bio) ? get(bio) : null,
      gender: get(gender) ? get(gender) : null,
      date_of_birth: get(dateOfBirth) ? get(dateOfBirth) : null
    }).catch((error) => {
      toast.error(`${error}`);
    });
    if (updatedUser) {
      const sessionUser = await getSessionUser(localStorage.token).catch((error) => {
        toast.error(`${error}`);
        return null;
      });
      await user.set(sessionUser);
      return true;
    }
    return false;
  };
  const createAPIKeyHandler = async () => {
    set(APIKey, await createAPIKey(localStorage.token));
    if (get(APIKey)) {
      toast.success($i18n().t("API Key created."));
    } else {
      toast.error($i18n().t("Failed to create API Key."));
    }
  };
  onMount(async () => {
    var _a, _b;
    const user2 = await getSessionUser(localStorage.token).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (user2) {
      set(name, (user2 == null ? void 0 : user2.name) ?? "");
      set(profileImageUrl, (user2 == null ? void 0 : user2.profile_image_url) ?? "");
      set(bio, (user2 == null ? void 0 : user2.bio) ?? "");
      set(_gender, (user2 == null ? void 0 : user2.gender) ?? "");
      set(gender, get(_gender));
      set(dateOfBirth, (user2 == null ? void 0 : user2.date_of_birth) ?? "");
    }
    set(webhookUrl, ((_b = (_a = $settings()) == null ? void 0 : _a.notifications) == null ? void 0 : _b.webhook_url) ?? "");
    set(APIKey, await getAPIKey(localStorage.token).catch((error) => {
      console.log(error);
      return "";
    }));
  });
  init();
  var div = root$k();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var text2 = child(div_4, true);
  reset(div_4);
  var div_5 = sibling(div_4, 2);
  var text_1 = child(div_5, true);
  reset(div_5);
  reset(div_3);
  var div_6 = sibling(div_3, 2);
  var node = child(div_6);
  UserProfileImage(node, {
    get user() {
      return $user();
    },
    get profileImageUrl() {
      return get(profileImageUrl);
    },
    set profileImageUrl($$value) {
      set(profileImageUrl, $$value);
    },
    $$legacy: true
  });
  var div_7 = sibling(node, 2);
  var div_8 = child(div_7);
  var div_9 = child(div_8);
  var div_10 = child(div_9);
  var text_2 = child(div_10, true);
  reset(div_10);
  var div_11 = sibling(div_10, 2);
  var input = child(div_11);
  remove_input_defaults(input);
  reset(div_11);
  reset(div_9);
  var div_12 = sibling(div_9, 2);
  var div_13 = child(div_12);
  var text_3 = child(div_13, true);
  reset(div_13);
  var div_14 = sibling(div_13, 2);
  var node_1 = child(div_14);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Share your background and interests"))));
    Textarea(node_1, {
      className: "w-full text-sm dark:text-gray-300 bg-transparent outline-hidden",
      minSize: 60,
      get placeholder() {
        return get($0);
      },
      get value() {
        return get(bio);
      },
      set value($$value) {
        set(bio, $$value);
      },
      $$legacy: true
    });
  }
  reset(div_14);
  reset(div_12);
  var div_15 = sibling(div_12, 2);
  var div_16 = child(div_15);
  var text_4 = child(div_16, true);
  reset(div_16);
  var div_17 = sibling(div_16, 2);
  var select = child(div_17);
  template_effect(() => {
    get(_gender);
    invalidate_inner_signals(() => {
      get(gender);
      $i18n();
    });
  });
  var option = child(select);
  var text_5 = child(option, true);
  reset(option);
  option.value = option.__value = "";
  var option_1 = sibling(option);
  var text_6 = child(option_1, true);
  reset(option_1);
  option_1.value = option_1.__value = "male";
  var option_2 = sibling(option_1);
  var text_7 = child(option_2, true);
  reset(option_2);
  option_2.value = option_2.__value = "female";
  var option_3 = sibling(option_2);
  var text_8 = child(option_3, true);
  reset(option_3);
  option_3.value = option_3.__value = "custom";
  reset(select);
  reset(div_17);
  var node_2 = sibling(div_17, 2);
  {
    var consequent = ($$anchor2) => {
      var input_1 = root_1$h();
      remove_input_defaults(input_1);
      template_effect(($0) => set_attribute(input_1, "placeholder", $0), [
        () => ($i18n(), untrack(() => $i18n().t("Enter your gender")))
      ]);
      bind_value(input_1, () => get(gender), ($$value) => set(gender, $$value));
      append($$anchor2, input_1);
    };
    if_block(node_2, ($$render) => {
      if (get(_gender) === "custom") $$render(consequent);
    });
  }
  reset(div_15);
  var div_18 = sibling(div_15, 2);
  var div_19 = child(div_18);
  var text_9 = child(div_19, true);
  reset(div_19);
  var div_20 = sibling(div_19, 2);
  var input_2 = child(div_20);
  remove_input_defaults(input_2);
  reset(div_20);
  reset(div_18);
  reset(div_8);
  reset(div_7);
  reset(div_6);
  reset(div_2);
  var node_3 = sibling(div_2, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_21 = root_2$f();
      var div_22 = child(div_21);
      var div_23 = child(div_22);
      var text_10 = child(div_23, true);
      reset(div_23);
      var div_24 = sibling(div_23, 2);
      var input_3 = child(div_24);
      remove_input_defaults(input_3);
      reset(div_24);
      reset(div_22);
      reset(div_21);
      template_effect(
        ($0, $1) => {
          set_text(text_10, $0);
          set_attribute(input_3, "placeholder", $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Notification Webhook"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter your webhook URL")))
        ]
      );
      bind_value(input_3, () => get(webhookUrl), ($$value) => set(webhookUrl, $$value));
      append($$anchor2, div_21);
    };
    if_block(node_3, ($$render) => {
      if ($config(), untrack(() => {
        var _a, _b;
        return (_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_user_webhooks;
      })) $$render(consequent_1);
    });
  }
  var node_4 = sibling(node_3, 4);
  {
    var consequent_2 = ($$anchor2) => {
      var div_25 = root_3$9();
      var node_5 = child(div_25);
      UpdatePassword(node_5, {});
      reset(div_25);
      append($$anchor2, div_25);
    };
    if_block(node_4, ($$render) => {
      if ($config(), untrack(() => {
        var _a;
        return (_a = $config()) == null ? void 0 : _a.features.enable_login_form;
      })) $$render(consequent_2);
    });
  }
  var node_6 = sibling(node_4, 2);
  {
    var consequent_10 = ($$anchor2) => {
      var fragment = root_4$c();
      var div_26 = first_child(fragment);
      var div_27 = child(div_26);
      var text_11 = child(div_27, true);
      reset(div_27);
      var button = sibling(div_27, 2);
      var text_12 = child(button, true);
      reset(button);
      reset(div_26);
      var node_7 = sibling(div_26, 2);
      {
        var consequent_9 = ($$anchor3) => {
          var div_28 = root_5$9();
          var node_8 = child(div_28);
          {
            var consequent_4 = ($$anchor4) => {
              var div_29 = root_6$7();
              var div_30 = child(div_29);
              var div_31 = child(div_30);
              var text_13 = child(div_31, true);
              reset(div_31);
              reset(div_30);
              var div_32 = sibling(div_30, 2);
              var node_9 = child(div_32);
              SensitiveInput(node_9, { value: untrack(() => localStorage.token), readOnly: true });
              var button_1 = sibling(node_9, 2);
              var node_10 = child(button_1);
              {
                var consequent_3 = ($$anchor5) => {
                  var svg = root_7$4();
                  append($$anchor5, svg);
                };
                var alternate = ($$anchor5) => {
                  var svg_1 = root_8$1();
                  append($$anchor5, svg_1);
                };
                if_block(node_10, ($$render) => {
                  if (get(JWTTokenCopied)) $$render(consequent_3);
                  else $$render(alternate, false);
                });
              }
              reset(button_1);
              reset(div_32);
              reset(div_29);
              template_effect(($0) => set_text(text_13, $0), [() => ($i18n(), untrack(() => $i18n().t("JWT Token")))]);
              event("click", button_1, () => {
                copyToClipboard(localStorage.token);
                set(JWTTokenCopied, true);
                setTimeout(
                  () => {
                    set(JWTTokenCopied, false);
                  },
                  2e3
                );
              });
              append($$anchor4, div_29);
            };
            if_block(node_8, ($$render) => {
              if ($user(), untrack(() => {
                var _a;
                return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
              })) $$render(consequent_4);
            });
          }
          var node_11 = sibling(node_8, 2);
          {
            var consequent_8 = ($$anchor4) => {
              var div_33 = root_9$3();
              var node_12 = child(div_33);
              {
                var consequent_5 = ($$anchor5) => {
                  var div_34 = root_10$2();
                  var div_35 = child(div_34);
                  var text_14 = child(div_35, true);
                  reset(div_35);
                  reset(div_34);
                  template_effect(($0) => set_text(text_14, $0), [() => ($i18n(), untrack(() => $i18n().t("API Key")))]);
                  append($$anchor5, div_34);
                };
                if_block(node_12, ($$render) => {
                  if ($user(), untrack(() => {
                    var _a;
                    return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
                  })) $$render(consequent_5);
                });
              }
              var div_36 = sibling(node_12, 2);
              var node_13 = child(div_36);
              {
                var consequent_7 = ($$anchor5) => {
                  var fragment_1 = root_11$2();
                  var node_14 = first_child(fragment_1);
                  SensitiveInput(node_14, {
                    get value() {
                      return get(APIKey);
                    },
                    readOnly: true
                  });
                  var button_2 = sibling(node_14, 2);
                  var node_15 = child(button_2);
                  {
                    var consequent_6 = ($$anchor6) => {
                      var svg_2 = root_12$1();
                      append($$anchor6, svg_2);
                    };
                    var alternate_1 = ($$anchor6) => {
                      var svg_3 = root_13$1();
                      append($$anchor6, svg_3);
                    };
                    if_block(node_15, ($$render) => {
                      if (get(APIKeyCopied)) $$render(consequent_6);
                      else $$render(alternate_1, false);
                    });
                  }
                  reset(button_2);
                  var node_16 = sibling(button_2, 2);
                  {
                    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Create new key"))));
                    Tooltip(node_16, {
                      get content() {
                        return get($0);
                      },
                      children: ($$anchor6, $$slotProps) => {
                        var button_3 = root_14$2();
                        event("click", button_3, () => {
                          createAPIKeyHandler();
                        });
                        append($$anchor6, button_3);
                      },
                      $$slots: { default: true }
                    });
                  }
                  event("click", button_2, () => {
                    copyToClipboard(get(APIKey));
                    set(APIKeyCopied, true);
                    setTimeout(
                      () => {
                        set(APIKeyCopied, false);
                      },
                      2e3
                    );
                  });
                  append($$anchor5, fragment_1);
                };
                var alternate_2 = ($$anchor5) => {
                  var button_4 = root_15();
                  var node_17 = child(button_4);
                  Plus(node_17, { strokeWidth: "2", className: " size-3.5" });
                  var text_15 = sibling(node_17);
                  reset(button_4);
                  template_effect(($0) => set_text(text_15, ` ${$0 ?? ""}`), [
                    () => ($i18n(), untrack(() => $i18n().t("Create new secret key")))
                  ]);
                  event("click", button_4, () => {
                    createAPIKeyHandler();
                  });
                  append($$anchor5, button_4);
                };
                if_block(node_13, ($$render) => {
                  if (get(APIKey)) $$render(consequent_7);
                  else $$render(alternate_2, false);
                });
              }
              reset(div_36);
              reset(div_33);
              append($$anchor4, div_33);
            };
            if_block(node_11, ($$render) => {
              if ($config(), $user(), untrack(() => {
                var _a, _b, _c, _d, _e, _f;
                return (((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_api_keys) ?? true) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || (((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.api_keys) ?? false));
              })) $$render(consequent_8);
            });
          }
          reset(div_28);
          append($$anchor3, div_28);
        };
        if_block(node_7, ($$render) => {
          if (get(showAPIKeys)) $$render(consequent_9);
        });
      }
      template_effect(
        ($0, $1) => {
          set_text(text_11, $0);
          set_text(text_12, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("API keys"))),
          () => (get(showAPIKeys), $i18n(), untrack(() => get(showAPIKeys) ? $i18n().t("Hide") : $i18n().t("Show")))
        ]
      );
      event("click", button, () => {
        set(showAPIKeys, !get(showAPIKeys));
      });
      append($$anchor2, fragment);
    };
    if_block(node_6, ($$render) => {
      if ($config(), $user(), untrack(() => {
        var _a, _b, _c, _d, _e, _f;
        return (((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_api_keys) ?? true) && (((_c = $user()) == null ? void 0 : _c.role) === "admin" || (((_f = (_e = (_d = $user()) == null ? void 0 : _d.permissions) == null ? void 0 : _e.features) == null ? void 0 : _f.api_keys) ?? false));
      })) $$render(consequent_10);
    });
  }
  reset(div_1);
  var div_37 = sibling(div_1, 2);
  var button_5 = child(div_37);
  var text_16 = child(button_5, true);
  reset(button_5);
  reset(div_37);
  reset(div);
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) => {
      set_text(text2, $0);
      set_text(text_1, $1);
      set_text(text_2, $2);
      set_attribute(input, "placeholder", $3);
      set_text(text_3, $4);
      set_text(text_4, $5);
      set_text(text_5, $6);
      set_text(text_6, $7);
      set_text(text_7, $8);
      set_text(text_8, $9);
      set_text(text_9, $10);
      set_text(text_16, $11);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Your Account"))),
      () => ($i18n(), untrack(() => $i18n().t("Manage your account information."))),
      () => ($i18n(), untrack(() => $i18n().t("Name"))),
      () => ($i18n(), untrack(() => $i18n().t("Enter your name"))),
      () => ($i18n(), untrack(() => $i18n().t("Bio"))),
      () => ($i18n(), untrack(() => $i18n().t("Gender"))),
      () => ($i18n(), untrack(() => $i18n().t("Prefer not to say"))),
      () => ($i18n(), untrack(() => $i18n().t("Male"))),
      () => ($i18n(), untrack(() => $i18n().t("Female"))),
      () => ($i18n(), untrack(() => $i18n().t("Custom"))),
      () => ($i18n(), untrack(() => $i18n().t("Birth Date"))),
      () => ($i18n(), untrack(() => $i18n().t("Save")))
    ]
  );
  bind_value(input, () => get(name), ($$value) => set(name, $$value));
  bind_select_value(select, () => get(_gender), ($$value) => set(_gender, $$value));
  event("change", select, (e) => {
    console.log(get(_gender));
    if (get(_gender) === "custom") {
      set(gender, "");
    } else {
      set(gender, get(_gender));
    }
  });
  bind_value(input_2, () => get(dateOfBirth), ($$value) => set(dateOfBirth, $$value));
  event("click", button_5, async () => {
    const res = await submitHandler();
    if (res) {
      saveHandler()();
    }
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_2$e = from_html(`<a target="_blank"> </a>`);
var root_3$8 = from_html(`<button class=" text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 dark:bg-gray-850 dark:hover:bg-gray-800 transition rounded-lg font-medium"> </button>`);
var root_4$b = from_html(`<hr class=" border-gray-100 dark:border-gray-850"/> <div><div class=" mb-2.5 text-sm font-medium"> </div> <div class="flex w-full"><div class="flex-1 text-xs text-gray-700 dark:text-gray-200"> </div></div></div>`, 1);
var root_6$6 = from_html(`<span class=" text-gray-500 dark:text-gray-300 font-medium"> </span> -`, 1);
var root_5$8 = from_html(`<div class="mb-2 text-xs"><!> <span class=" capitalize"> </span> license purchased by <span class=" capitalize"> </span></div>`);
var root_7$3 = from_html(`<div class="flex space-x-1"><a href="https://discord.gg/5rJgQTnV4s" target="_blank"><img alt="Discord" src="https://img.shields.io/badge/Discord-Open_WebUI-blue?logo=discord&amp;logoColor=white"/></a> <a href="https://twitter.com/OpenWebUI" target="_blank"><img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/OpenWebUI"/></a> <a href="https://github.com/open-webui/open-webui" target="_blank"><img alt="Github Repo" src="https://img.shields.io/github/stars/open-webui/open-webui?style=social&amp;label=Star us on Github"/></a></div>`);
var root$j = from_html(`<div id="tab-about" class="flex flex-col h-full justify-between space-y-3 text-sm mb-6"><div class=" space-y-3 overflow-y-scroll max-h-[28rem] md:max-h-full"><div><div class=" mb-2.5 text-sm font-medium flex space-x-2 items-center"><div> </div></div> <div class="flex w-full justify-between items-center"><div class="flex flex-col text-xs text-gray-700 dark:text-gray-200"><div class="flex gap-1"><!> <!></div> <button class=" underline flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-500"><div> </div></button></div> <!></div></div> <!> <hr class=" border-gray-100 dark:border-gray-850"/> <!> <div class="mt-2 text-xs text-gray-400 dark:text-gray-500">Emoji graphics provided by <a href="https://github.com/jdecked/twemoji" target="_blank">Twemoji</a>, licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC-BY 4.0</a>.</div> <div><pre class="text-xs text-gray-400 dark:text-gray-500"> <a href="https://openwebui.com" target="_blank" class="underline">Open WebUI (Timothy Jaeryang Baek)</a>
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
	list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
	this list of conditions and the following disclaimer in the documentation
	and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
	contributors may be used to endorse or promote products derived from
	this software without specific prior written permission.

4. Notwithstanding any other provision of this License, and as a material condition of the rights granted herein, licensees are strictly prohibited from altering, removing, obscuring, or replacing any "Open WebUI" branding, including but not limited to the name, logo, or any visual, textual, or symbolic identifiers that distinguish the software and its interfaces, in any deployment or distribution, regardless of the number of users, except as explicitly set forth in Clauses 5 and 6 below.

5. The branding restriction enumerated in Clause 4 shall not apply in the following limited circumstances: (i) deployments or distributions where the total number of end users (defined as individual natural persons with direct access to the application) does not exceed fifty (50) within any rolling thirty (30) day period; (ii) cases in which the licensee is an official contributor to the codebase—with a substantive code change successfully merged into the main branch of the official codebase maintained by the copyright holder—who has obtained specific prior written permission for branding adjustment from the copyright holder; or (iii) where the licensee has obtained a duly executed enterprise license expressly permitting such modification. For all other cases, any removal or alteration of the "Open WebUI" branding shall constitute a material breach of license.

6. All code, modifications, or derivative works incorporated into this project prior to the incorporation of this branding clause remain licensed under the BSD 3-Clause License, and prior contributors retain all BSD-3 rights therein; if any such contributor requests the removal of their BSD-3-licensed code, the copyright holder will do so, and any replacement code will be licensed under the project's primary license then in effect. By contributing after this clause's adoption, you agree to the project's Contributor License Agreement (CLA) and to these updated terms for all new contributions.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
</pre></div> <div class="mt-2 text-xs text-gray-400 dark:text-gray-500"> <a class=" text-gray-500 dark:text-gray-300 font-medium" href="https://github.com/tjbck" target="_blank">Timothy J. Baek</a></div></div></div>`);
function About($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let ollamaVersion = mutable_source("");
  let updateAvailable = mutable_source(null);
  let version = mutable_source({ current: "", latest: "" });
  const checkForVersionUpdates = async () => {
    set(updateAvailable, null);
    set(version, await getVersionUpdates(localStorage.token).catch((error) => {
      return { current: WEBUI_VERSION, latest: WEBUI_VERSION };
    }));
    console.log(get(version));
    set(updateAvailable, compareVersion(get(version).latest, get(version).current));
    console.log(get(updateAvailable));
  };
  onMount(async () => {
    var _a, _b;
    set(ollamaVersion, await getOllamaVersion(localStorage.token).catch((error) => {
      return "";
    }));
    if ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_version_update_check) {
      checkForVersionUpdates();
    }
  });
  init();
  var div = root$j();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var text$1 = child(div_4);
  reset(div_4);
  reset(div_3);
  var div_5 = sibling(div_3, 2);
  var div_6 = child(div_5);
  var div_7 = child(div_6);
  var node = child(div_7);
  Tooltip(node, {
    get content() {
      return WEBUI_BUILD_HASH;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text();
      template_effect(() => set_text(text_1, `v${WEBUI_VERSION}`));
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  {
    var consequent = ($$anchor2) => {
      var a = root_2$e();
      var text_2 = child(a, true);
      reset(a);
      template_effect(
        ($0) => {
          set_attribute(a, "href", `https://github.com/open-webui/open-webui/releases/tag/v${get(version).latest ?? ""}`);
          set_text(text_2, $0);
        },
        [
          () => get(updateAvailable) === null ? $i18n().t("Checking for updates...") : get(updateAvailable) ? `(v${get(version).latest} ${$i18n().t("available!")})` : $i18n().t("(latest)")
        ]
      );
      append($$anchor2, a);
    };
    if_block(node_1, ($$render) => {
      var _a, _b;
      if ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_version_update_check) $$render(consequent);
    });
  }
  reset(div_7);
  var button = sibling(div_7, 2);
  var div_8 = child(button);
  var text_3 = child(div_8, true);
  reset(div_8);
  reset(button);
  reset(div_6);
  var node_2 = sibling(div_6, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var button_1 = root_3$8();
      var text_4 = child(button_1, true);
      reset(button_1);
      template_effect(($0) => set_text(text_4, $0), [() => $i18n().t("Check for updates")]);
      event("click", button_1, () => {
        checkForVersionUpdates();
      });
      append($$anchor2, button_1);
    };
    if_block(node_2, ($$render) => {
      var _a, _b;
      if ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_version_update_check) $$render(consequent_1);
    });
  }
  reset(div_5);
  reset(div_2);
  var node_3 = sibling(div_2, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment_1 = root_4$b();
      var div_9 = sibling(first_child(fragment_1), 2);
      var div_10 = child(div_9);
      var text_5 = child(div_10, true);
      reset(div_10);
      var div_11 = sibling(div_10, 2);
      var div_12 = child(div_11);
      var text_6 = child(div_12, true);
      reset(div_12);
      reset(div_11);
      reset(div_9);
      template_effect(
        ($0) => {
          set_text(text_5, $0);
          set_text(text_6, get(ollamaVersion) ?? "N/A");
        },
        [() => $i18n().t("Ollama Version")]
      );
      append($$anchor2, fragment_1);
    };
    if_block(node_3, ($$render) => {
      if (get(ollamaVersion)) $$render(consequent_2);
    });
  }
  var node_4 = sibling(node_3, 4);
  {
    var consequent_4 = ($$anchor2) => {
      var div_13 = root_5$8();
      var node_5 = child(div_13);
      {
        var consequent_3 = ($$anchor3) => {
          var fragment_2 = root_6$6();
          var span = first_child(fragment_2);
          var text_7 = child(span, true);
          reset(span);
          next();
          template_effect(() => set_text(text_7, $WEBUI_NAME()));
          append($$anchor3, fragment_2);
        };
        if_block(node_5, ($$render) => {
          if (!$WEBUI_NAME().includes("Open WebUI")) $$render(consequent_3);
        });
      }
      var span_1 = sibling(node_5, 2);
      var text_8 = child(span_1, true);
      reset(span_1);
      var span_2 = sibling(span_1, 2);
      var text_9 = child(span_2, true);
      reset(span_2);
      reset(div_13);
      template_effect(() => {
        var _a, _b, _c, _d;
        set_text(text_8, (_b = (_a = $config()) == null ? void 0 : _a.license_metadata) == null ? void 0 : _b.type);
        set_text(text_9, (_d = (_c = $config()) == null ? void 0 : _c.license_metadata) == null ? void 0 : _d.organization_name);
      });
      append($$anchor2, div_13);
    };
    var alternate = ($$anchor2) => {
      var div_14 = root_7$3();
      append($$anchor2, div_14);
    };
    if_block(node_4, ($$render) => {
      var _a;
      if ((_a = $config()) == null ? void 0 : _a.license_metadata) $$render(consequent_4);
      else $$render(alternate, false);
    });
  }
  var div_15 = sibling(node_4, 4);
  var pre = child(div_15);
  var text_10 = child(pre);
  next(2);
  reset(pre);
  reset(div_15);
  var div_16 = sibling(div_15, 2);
  var text_11 = child(div_16);
  next();
  reset(div_16);
  reset(div_1);
  reset(div);
  template_effect(
    ($0, $1, $2, $3) => {
      set_text(text$1, `${$WEBUI_NAME() ?? ""}
					${$0 ?? ""}`);
      set_text(text_3, $1);
      set_text(text_10, `Copyright (c) ${$2 ?? ""} `);
      set_text(text_11, `${$3 ?? ""} `);
    },
    [
      () => $i18n().t("Version"),
      () => $i18n().t("See what's new"),
      () => (/* @__PURE__ */ new Date()).getFullYear(),
      () => $i18n().t("Created by")
    ]
  );
  event("click", button, () => {
    showChangelog.set(true);
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_1$g = from_html(`<option> </option>`);
var root_2$d = from_html(`<div>Couldn't find your language? <a href="https://github.com/open-webui/open-webui/blob/main/docs/CONTRIBUTING.md#-translations-and-internationalization" target="_blank">Help us translate Open WebUI!</a></div>`);
var root_3$7 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_4$a = from_html(`<span class="ml-2 self-center"> </span>`);
var root_5$7 = from_html(`<hr class="border-gray-100/50 dark:border-gray-850 my-3"/> <div><div class=" my-2.5 text-sm font-medium"> </div> <!></div>`, 1);
var root_6$5 = from_html(`<div class="mt-2 space-y-3 pr-1.5"><div class="flex justify-between items-center text-sm"><div class="  font-medium"> </div> <button type="button"> </button></div> <!></div>`);
var root$i = from_html(`<div class="flex flex-col h-full justify-between text-sm" id="tab-general"><div class="  overflow-y-scroll max-h-[28rem] md:max-h-full"><div><div class=" mb-1 text-sm font-medium"> </div> <div class="flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <div class="flex items-center relative"><select><option> </option><option> </option><option> </option><option> </option><option>🌷 Her</option></select></div></div> <div class=" flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <div class="flex items-center relative"><select></select></div></div> <!> <div><div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div></div></div> <!> <!></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"> </button></div></div>`);
function General($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let saveSettings = prop($$props, "saveSettings", 8);
  prop($$props, "getModels", 8);
  let themes = ["dark", "light", "oled-dark"];
  let selectedTheme = mutable_source("system");
  let languages = mutable_source([]);
  let lang = mutable_source($i18n().language);
  let notificationEnabled = mutable_source(false);
  let system = mutable_source("");
  let showAdvanced = mutable_source(false);
  const toggleNotification = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      set(notificationEnabled, !get(notificationEnabled));
      saveSettings()({ notificationEnabled: get(notificationEnabled) });
    } else {
      toast.error($i18n().t("Response notifications cannot be activated as the website permissions have been denied. Please visit your browser settings to grant the necessary access."));
    }
  };
  let params = mutable_source({
    // Advanced
    stream_response: null,
    stream_delta_chunk_size: null,
    function_calling: null,
    seed: null,
    temperature: null,
    reasoning_effort: null,
    logit_bias: null,
    frequency_penalty: null,
    presence_penalty: null,
    repeat_penalty: null,
    repeat_last_n: null,
    mirostat: null,
    mirostat_eta: null,
    mirostat_tau: null,
    top_k: null,
    top_p: null,
    min_p: null,
    stop: null,
    tfs_z: null,
    num_ctx: null,
    num_batch: null,
    num_keep: null,
    max_tokens: null,
    num_gpu: null
  });
  const saveHandler = async () => {
    saveSettings()({
      system: get(system) !== "" ? get(system) : void 0,
      params: {
        stream_response: get(params).stream_response !== null ? get(params).stream_response : void 0,
        stream_delta_chunk_size: get(params).stream_delta_chunk_size !== null ? get(params).stream_delta_chunk_size : void 0,
        function_calling: get(params).function_calling !== null ? get(params).function_calling : void 0,
        seed: (get(params).seed !== null ? get(params).seed : void 0) ?? void 0,
        stop: get(params).stop ? get(params).stop.split(",").filter((e) => e) : void 0,
        temperature: get(params).temperature !== null ? get(params).temperature : void 0,
        reasoning_effort: get(params).reasoning_effort !== null ? get(params).reasoning_effort : void 0,
        logit_bias: get(params).logit_bias !== null ? get(params).logit_bias : void 0,
        frequency_penalty: get(params).frequency_penalty !== null ? get(params).frequency_penalty : void 0,
        presence_penalty: get(params).frequency_penalty !== null ? get(params).frequency_penalty : void 0,
        repeat_penalty: get(params).frequency_penalty !== null ? get(params).frequency_penalty : void 0,
        repeat_last_n: get(params).repeat_last_n !== null ? get(params).repeat_last_n : void 0,
        mirostat: get(params).mirostat !== null ? get(params).mirostat : void 0,
        mirostat_eta: get(params).mirostat_eta !== null ? get(params).mirostat_eta : void 0,
        mirostat_tau: get(params).mirostat_tau !== null ? get(params).mirostat_tau : void 0,
        top_k: get(params).top_k !== null ? get(params).top_k : void 0,
        top_p: get(params).top_p !== null ? get(params).top_p : void 0,
        min_p: get(params).min_p !== null ? get(params).min_p : void 0,
        tfs_z: get(params).tfs_z !== null ? get(params).tfs_z : void 0,
        num_ctx: get(params).num_ctx !== null ? get(params).num_ctx : void 0,
        num_batch: get(params).num_batch !== null ? get(params).num_batch : void 0,
        num_keep: get(params).num_keep !== null ? get(params).num_keep : void 0,
        max_tokens: get(params).max_tokens !== null ? get(params).max_tokens : void 0,
        use_mmap: get(params).use_mmap !== null ? get(params).use_mmap : void 0,
        use_mlock: get(params).use_mlock !== null ? get(params).use_mlock : void 0,
        num_thread: get(params).num_thread !== null ? get(params).num_thread : void 0,
        num_gpu: get(params).num_gpu !== null ? get(params).num_gpu : void 0,
        think: get(params).think !== null ? get(params).think : void 0,
        keep_alive: get(params).keep_alive !== null ? get(params).keep_alive : void 0,
        format: get(params).format !== null ? get(params).format : void 0
      }
    });
    dispatch("save");
  };
  onMount(async () => {
    var _a, _b, _c, _d;
    set(selectedTheme, localStorage.theme ?? "system");
    set(languages, await getLanguages());
    set(notificationEnabled, $settings().notificationEnabled ?? false);
    set(system, $settings().system ?? "");
    set(params, { ...get(params), ...$settings().params });
    mutate(params, get(params).stop = ((_b = (_a = $settings()) == null ? void 0 : _a.params) == null ? void 0 : _b.stop) ? (((_d = (_c = $settings()) == null ? void 0 : _c.params) == null ? void 0 : _d.stop) ?? []).join(",") : null);
  });
  const applyTheme = (_theme) => {
    let themeToApply = _theme === "oled-dark" ? "dark" : _theme === "her" ? "light" : _theme;
    if (_theme === "system") {
      themeToApply = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (themeToApply === "dark" && !_theme.includes("oled")) {
      document.documentElement.style.setProperty("--color-gray-800", "#333");
      document.documentElement.style.setProperty("--color-gray-850", "#262626");
      document.documentElement.style.setProperty("--color-gray-900", "#171717");
      document.documentElement.style.setProperty("--color-gray-950", "#0d0d0d");
    }
    themes.filter((e) => e !== themeToApply).forEach((e) => {
      e.split(" ").forEach((e2) => {
        document.documentElement.classList.remove(e2);
      });
    });
    themeToApply.split(" ").forEach((e) => {
      document.documentElement.classList.add(e);
    });
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      if (_theme.includes("system")) {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        console.log("Setting system meta theme color: " + systemTheme);
        metaThemeColor.setAttribute("content", systemTheme === "light" ? "#ffffff" : "#171717");
      } else {
        console.log("Setting meta theme color: " + _theme);
        metaThemeColor.setAttribute("content", _theme === "dark" ? "#171717" : _theme === "oled-dark" ? "#000000" : _theme === "her" ? "#983724" : "#ffffff");
      }
    }
    if (typeof window !== "undefined" && window.applyTheme) {
      window.applyTheme();
    }
    if (_theme.includes("oled")) {
      document.documentElement.style.setProperty("--color-gray-800", "#101010");
      document.documentElement.style.setProperty("--color-gray-850", "#050505");
      document.documentElement.style.setProperty("--color-gray-900", "#000000");
      document.documentElement.style.setProperty("--color-gray-950", "#000000");
      document.documentElement.classList.add("dark");
    }
    console.log(_theme);
  };
  const themeChangeHandler = (_theme) => {
    theme.set(_theme);
    localStorage.setItem("theme", _theme);
    applyTheme(_theme);
  };
  init();
  var div = root$i();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var text2 = child(div_3, true);
  reset(div_3);
  var div_4 = sibling(div_3, 2);
  var div_5 = child(div_4);
  var text_1 = child(div_5, true);
  reset(div_5);
  var div_6 = sibling(div_5, 2);
  var select = child(div_6);
  template_effect(() => {
    get(selectedTheme);
    invalidate_inner_signals(() => {
      $settings();
      $i18n();
    });
  });
  var option = child(select);
  var text_2 = child(option);
  reset(option);
  option.value = option.__value = "system";
  var option_1 = sibling(option);
  var text_3 = child(option_1);
  reset(option_1);
  option_1.value = option_1.__value = "dark";
  var option_2 = sibling(option_1);
  var text_4 = child(option_2);
  reset(option_2);
  option_2.value = option_2.__value = "oled-dark";
  var option_3 = sibling(option_2);
  var text_5 = child(option_3);
  reset(option_3);
  option_3.value = option_3.__value = "light";
  var option_4 = sibling(option_3);
  option_4.value = option_4.__value = "her";
  reset(select);
  reset(div_6);
  reset(div_4);
  var div_7 = sibling(div_4, 2);
  var div_8 = child(div_7);
  var text_6 = child(div_8, true);
  reset(div_8);
  var div_9 = sibling(div_8, 2);
  var select_1 = child(div_9);
  template_effect(() => {
    get(lang);
    invalidate_inner_signals(() => {
      $settings();
      $i18n();
      get(languages);
    });
  });
  each(select_1, 5, () => get(languages), index, ($$anchor2, language) => {
    var option_5 = root_1$g();
    var text_7 = child(option_5, true);
    reset(option_5);
    var option_5_value = {};
    template_effect(() => {
      set_text(text_7, (get(language), untrack(() => get(language)["title"])));
      if (option_5_value !== (option_5_value = (get(language), untrack(() => get(language)["code"])))) {
        option_5.value = (option_5.__value = (get(language), untrack(() => get(language)["code"]))) ?? "";
      }
    });
    append($$anchor2, option_5);
  });
  reset(select_1);
  reset(div_9);
  reset(div_7);
  var node = sibling(div_7, 2);
  {
    var consequent = ($$anchor2) => {
      var div_10 = root_2$d();
      var a = sibling(child(div_10));
      reset(div_10);
      template_effect(() => {
        set_class(div_10, 1, `mb-2 text-xs ${($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-400 dark:text-gray-500";
        })) ?? ""}`);
        set_class(a, 1, `font-medium underline ${($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-700 dark:text-gray-200" : "text-gray-300";
        })) ?? ""}`);
      });
      append($$anchor2, div_10);
    };
    if_block(node, ($$render) => {
      if ($i18n(), $config(), untrack(() => {
        var _a;
        return $i18n().language === "en-US" && !(((_a = $config()) == null ? void 0 : _a.license_metadata) ?? false);
      })) $$render(consequent);
    });
  }
  var div_11 = sibling(node, 2);
  var div_12 = child(div_11);
  var div_13 = child(div_12);
  var text_8 = child(div_13, true);
  reset(div_13);
  var button = sibling(div_13, 2);
  var node_1 = child(button);
  {
    var consequent_1 = ($$anchor2) => {
      var span = root_3$7();
      var text_9 = child(span, true);
      reset(span);
      template_effect(($0) => set_text(text_9, $0), [() => ($i18n(), untrack(() => $i18n().t("On")))]);
      append($$anchor2, span);
    };
    var alternate = ($$anchor2) => {
      var span_1 = root_4$a();
      var text_10 = child(span_1, true);
      reset(span_1);
      template_effect(($0) => set_text(text_10, $0), [() => ($i18n(), untrack(() => $i18n().t("Off")))]);
      append($$anchor2, span_1);
    };
    if_block(node_1, ($$render) => {
      if (get(notificationEnabled) === true) $$render(consequent_1);
      else $$render(alternate, false);
    });
  }
  reset(button);
  reset(div_12);
  reset(div_11);
  reset(div_2);
  var node_2 = sibling(div_2, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var fragment = root_5$7();
      var div_14 = sibling(first_child(fragment), 2);
      var div_15 = child(div_14);
      var text_11 = child(div_15, true);
      reset(div_15);
      var node_3 = sibling(div_15, 2);
      {
        let $0 = derived_safe_equal(() => ($settings(), untrack(() => "w-full text-sm outline-hidden resize-vertical" + ($settings().highContrastMode ? " p-2.5 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-gray-900 dark:text-gray-100 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 overflow-y-hidden" : "  dark:text-gray-300 "))));
        let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Enter system prompt here"))));
        Textarea(node_3, {
          get className() {
            return get($0);
          },
          rows: "4",
          get placeholder() {
            return get($1);
          },
          get value() {
            return get(system);
          },
          set value($$value) {
            set(system, $$value);
          },
          $$legacy: true
        });
      }
      reset(div_14);
      template_effect(($0) => set_text(text_11, $0), [() => ($i18n(), untrack(() => $i18n().t("System Prompt")))]);
      append($$anchor2, fragment);
    };
    if_block(node_2, ($$render) => {
      if ($user(), untrack(() => {
        var _a, _b, _c, _d, _e;
        return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user()) == null ? void 0 : _b.permissions.chat) == null ? void 0 : _c.controls) ?? true) && (((_e = (_d = $user()) == null ? void 0 : _d.permissions.chat) == null ? void 0 : _e.system_prompt) ?? true);
      })) $$render(consequent_2);
    });
  }
  var node_4 = sibling(node_2, 2);
  {
    var consequent_4 = ($$anchor2) => {
      var div_16 = root_6$5();
      var div_17 = child(div_16);
      var div_18 = child(div_17);
      var text_12 = child(div_18, true);
      reset(div_18);
      var button_1 = sibling(div_18, 2);
      var text_13 = child(button_1, true);
      reset(button_1);
      reset(div_17);
      var node_5 = sibling(div_17, 2);
      {
        var consequent_3 = ($$anchor3) => {
          {
            let $0 = derived_safe_equal(() => ($user(), untrack(() => {
              var _a;
              return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
            })));
            AdvancedParams($$anchor3, {
              get admin() {
                return get($0);
              },
              get params() {
                return get(params);
              },
              set params($$value) {
                set(params, $$value);
              },
              $$legacy: true
            });
          }
        };
        if_block(node_5, ($$render) => {
          if (get(showAdvanced)) $$render(consequent_3);
        });
      }
      reset(div_16);
      template_effect(
        ($0, $1) => {
          set_text(text_12, $0);
          set_class(button_1, 1, ` text-xs font-medium ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-400 dark:text-gray-500";
          })) ?? ""}`);
          set_text(text_13, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Advanced Parameters"))),
          () => (get(showAdvanced), $i18n(), untrack(() => get(showAdvanced) ? $i18n().t("Hide") : $i18n().t("Show")))
        ]
      );
      event("click", button_1, () => {
        set(showAdvanced, !get(showAdvanced));
      });
      append($$anchor2, div_16);
    };
    if_block(node_4, ($$render) => {
      if ($user(), untrack(() => {
        var _a, _b, _c, _d, _e;
        return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user()) == null ? void 0 : _b.permissions.chat) == null ? void 0 : _c.controls) ?? true) && (((_e = (_d = $user()) == null ? void 0 : _d.permissions.chat) == null ? void 0 : _e.params) ?? true);
      })) $$render(consequent_4);
    });
  }
  reset(div_1);
  var div_19 = sibling(div_1, 2);
  var button_2 = child(div_19);
  var text_14 = child(button_2, true);
  reset(button_2);
  reset(div_19);
  reset(div);
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) => {
      set_text(text2, $0);
      set_text(text_1, $1);
      set_class(select, 1, `dark:bg-gray-900 w-fit pr-8 rounded-sm py-2 px-2 text-xs bg-transparent text-right ${($settings(), untrack(() => $settings().highContrastMode ? "" : "outline-hidden")) ?? ""}`);
      set_attribute(select, "placeholder", $2);
      set_text(text_2, `⚙️ ${$3 ?? ""}`);
      set_text(text_3, `🌑 ${$4 ?? ""}`);
      set_text(text_4, `🌃 ${$5 ?? ""}`);
      set_text(text_5, `☀️ ${$6 ?? ""}`);
      set_text(text_6, $7);
      set_class(select_1, 1, `dark:bg-gray-900 w-fit pr-8 rounded-sm py-2 px-2 text-xs bg-transparent text-right ${($settings(), untrack(() => $settings().highContrastMode ? "" : "outline-hidden")) ?? ""}`);
      set_attribute(select_1, "placeholder", $8);
      set_text(text_8, $9);
      set_text(text_14, $10);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("WebUI Settings"))),
      () => ($i18n(), untrack(() => $i18n().t("Theme"))),
      () => ($i18n(), untrack(() => $i18n().t("Select a theme"))),
      () => ($i18n(), untrack(() => $i18n().t("System"))),
      () => ($i18n(), untrack(() => $i18n().t("Dark"))),
      () => ($i18n(), untrack(() => $i18n().t("OLED Dark"))),
      () => ($i18n(), untrack(() => $i18n().t("Light"))),
      () => ($i18n(), untrack(() => $i18n().t("Language"))),
      () => ($i18n(), untrack(() => $i18n().t("Select a language"))),
      () => ($i18n(), untrack(() => $i18n().t("Notifications"))),
      () => ($i18n(), untrack(() => $i18n().t("Save")))
    ]
  );
  bind_select_value(select, () => get(selectedTheme), ($$value) => set(selectedTheme, $$value));
  event("change", select, () => themeChangeHandler(get(selectedTheme)));
  bind_select_value(select_1, () => get(lang), ($$value) => set(lang, $$value));
  event("change", select_1, (e) => {
    changeLanguage(get(lang));
  });
  event("click", button, () => {
    toggleNotification();
  });
  event("click", button_2, () => {
    saveHandler();
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
const setTextScale = (scale) => {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.style.setProperty("--app-text-scale", `${scale}`);
};
var root_2$c = from_html(`<span> </span>`);
var root_3$6 = from_html(`<span> </span>`);
var root_4$9 = from_html(`<button type="button"><!></button>`);
var root_5$6 = from_html(`<div class="text-gray-500 dark:text-gray-400 text-xs w-full text-center py-5"> </div>`);
var root_7$2 = from_html(`<div class=" py-1 flex w-full justify-between items-start"><div class="flex flex-col items-start pr-2"><input class=" self-center text-xs outline-none w-20"/> <input class=" self-center text-xs outline-none w-20 text-gray-600 dark:text-gray-400"/></div> <div class="flex items-center gap-2 w-full"><!></div> <button class="pl-3 text-xs flex rounded-sm transition" type="button"><!></button></div> <hr class="border-gray-50 dark:border-gray-850 my-2"/>`, 1);
var root_1$f = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 pb-1.5"><h1 class="text-lg font-medium self-center font-primary"> </h1> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full px-1"><div><div class="text-xs flex items-center justify-between mb-2"><div class="font-medium"> </div> <div class="flex items-center gap-2 text-gray-700 dark:text-gray-300"><button type="button"><!></button> <!></div></div> <!></div> <div class="flex justify-end text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form></div></div></div>`);
function ManageFloatingActionButtonsModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let onSave = prop($$props, "onSave", 8, () => {
  });
  let floatingActionButtons = prop($$props, "floatingActionButtons", 12, null);
  const submitHandler = async () => {
    onSave()(floatingActionButtons());
    show(false);
  };
  onMount(() => {
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) ;
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$f();
      var div_1 = child(div);
      var h1 = child(div_1);
      var text2 = child(h1, true);
      reset(h1);
      var button_1 = sibling(h1, 2);
      var node = child(button_1);
      XMark(node, { className: "size-5" });
      reset(button_1);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var form = child(div_3);
      var div_4 = child(form);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var text_1 = child(div_6, true);
      reset(div_6);
      var div_7 = sibling(div_6, 2);
      var button_2 = child(div_7);
      var node_1 = child(button_2);
      {
        var consequent = ($$anchor3) => {
          var span = root_2$c();
          var text_2 = child(span, true);
          reset(span);
          template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
          append($$anchor3, span);
        };
        var alternate = ($$anchor3) => {
          var span_1 = root_3$6();
          var text_3 = child(span_1, true);
          reset(span_1);
          template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Custom")))]);
          append($$anchor3, span_1);
        };
        if_block(node_1, ($$render) => {
          if (floatingActionButtons() === null) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(button_2);
      var node_2 = sibling(button_2, 2);
      {
        var consequent_1 = ($$anchor3) => {
          var button_3 = root_4$9();
          var node_3 = child(button_3);
          Plus(node_3, { className: "size-4 " });
          reset(button_3);
          event("click", button_3, () => {
            let id = `new-button`;
            let idx = 0;
            while (floatingActionButtons().some((b) => b.id === id)) {
              idx++;
              id = `new-button-${idx}`;
            }
            floatingActionButtons([
              ...floatingActionButtons(),
              {
                id,
                label: `${$i18n().t("New Button")}`,
                input: true,
                prompt: `{{CONTENT}}


{{INPUT_CONTENT}}`
              }
            ]);
          });
          append($$anchor3, button_3);
        };
        if_block(node_2, ($$render) => {
          if (floatingActionButtons() !== null) $$render(consequent_1);
        });
      }
      reset(div_7);
      reset(div_5);
      var node_4 = sibling(div_5, 2);
      {
        var consequent_2 = ($$anchor3) => {
          var div_8 = root_5$6();
          var text_4 = child(div_8, true);
          reset(div_8);
          template_effect(($0) => set_text(text_4, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Default action buttons will be used.")))
          ]);
          append($$anchor3, div_8);
        };
        var alternate_1 = ($$anchor3) => {
          var fragment_1 = comment();
          var node_5 = first_child(fragment_1);
          each(node_5, 1, floatingActionButtons, index, ($$anchor4, button, buttonIdx) => {
            var fragment_2 = root_7$2();
            var div_9 = first_child(fragment_2);
            var div_10 = child(div_9);
            var input = child(div_10);
            remove_input_defaults(input);
            var input_1 = sibling(input, 2);
            remove_input_defaults(input_1);
            reset(div_10);
            var div_11 = sibling(div_10, 2);
            var node_6 = child(div_11);
            {
              let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Button Prompt"))));
              Textarea(node_6, {
                className: " self-center text-xs w-full outline-none",
                get placeholder() {
                  return get($0);
                },
                minSize: 30,
                get value() {
                  return get(button).prompt;
                },
                set value($$value) {
                  get(button).prompt = $$value, invalidate_inner_signals(() => floatingActionButtons());
                },
                $$legacy: true
              });
            }
            reset(div_11);
            var button_4 = sibling(div_11, 2);
            var node_7 = child(button_4);
            Minus(node_7, { className: "h-4 w-4" });
            reset(button_4);
            reset(div_9);
            next(2);
            template_effect(
              ($0, $1) => {
                set_attribute(input, "placeholder", $0);
                set_attribute(input_1, "placeholder", $1);
              },
              [
                () => ($i18n(), untrack(() => $i18n().t("Button Label"))),
                () => ($i18n(), untrack(() => $i18n().t("Button ID")))
              ]
            );
            bind_value(input, () => get(button).label, ($$value) => (get(button).label = $$value, invalidate_inner_signals(() => floatingActionButtons())));
            bind_value(input_1, () => get(button).id, ($$value) => (get(button).id = $$value, invalidate_inner_signals(() => floatingActionButtons())));
            event("click", button_4, () => {
              floatingActionButtons(floatingActionButtons().filter((b) => b.id !== get(button).id));
            });
            append($$anchor4, fragment_2);
          });
          append($$anchor3, fragment_1);
        };
        if_block(node_4, ($$render) => {
          if (deep_read_state(floatingActionButtons()), untrack(() => floatingActionButtons() === null || floatingActionButtons().length === 0)) $$render(consequent_2);
          else $$render(alternate_1, false);
        });
      }
      reset(div_4);
      var div_12 = sibling(div_4, 2);
      var button_5 = child(div_12);
      var text_5 = child(button_5, true);
      reset(button_5);
      reset(div_12);
      reset(form);
      reset(div_3);
      reset(div_2);
      reset(div);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text2, $0);
          set_attribute(button_1, "aria-label", $1);
          set_text(text_1, $2);
          set_text(text_5, $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Quick Actions"))),
          () => ($i18n(), untrack(() => $i18n().t("Close modal"))),
          () => ($i18n(), untrack(() => $i18n().t("Actions"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button_1, () => {
        show(false);
      });
      event("click", button_2, () => {
        if (floatingActionButtons() === null) {
          floatingActionButtons([
            {
              id: "ask",
              label: $i18n().t("Ask"),
              input: true,
              prompt: `{{SELECTED_CONTENT}}


{{INPUT_CONTENT}}`
            },
            {
              id: "explain",
              label: $i18n().t("Explain"),
              input: false,
              prompt: `{{SELECTED_CONTENT}}


${$i18n().t("Explain")}`
            }
          ]);
        } else {
          floatingActionButtons(null);
        }
      });
      event("submit", form, (e) => {
        e.preventDefault();
        submitHandler();
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_1$e = from_html(`<div><div class=" flex justify-between dark:text-gray-100 px-5 pt-4 pb-1.5"><h1 class="text-lg font-medium self-center font-primary"> </h1> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-4 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full px-1"><div><div><div class=" py-0.5 flex flex-col w-full text-sm"><div id="image-compression-size-label" class=" text-xs mb-2"> </div> <div class="p-1 flex-1 flex gap-2"><div class=" flex-1"><label class="sr-only" for="image-comp-width"> </label> <input type="number" aria-labelledby="image-comp-width" class="w-full bg-transparent outline-hidden text-center" min="0"/></div> <div class="self-center text-gray-500 dark:text-gray-400"><!></div> <div class="flex-1"><label class="sr-only" for="image-comp-height"> </label> <input type="number" aria-labelledby="image-comp-height" class="w-full bg-transparent outline-hidden text-center" min="0"/></div></div></div></div></div> <div class="flex justify-end text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form></div></div></div>`);
function ManageImageCompressionModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let size = prop($$props, "size", 12, null);
  let onSave = prop($$props, "onSave", 8, () => {
  });
  const submitHandler = async () => {
    onSave()(size());
    show(false);
  };
  onMount(() => {
  });
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$e();
      var div_1 = child(div);
      var h1 = child(div_1);
      var text2 = child(h1, true);
      reset(h1);
      var button = sibling(h1, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var div_3 = child(div_2);
      var form = child(div_3);
      var div_4 = child(form);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var div_7 = child(div_6);
      var text_1 = child(div_7, true);
      reset(div_7);
      var div_8 = sibling(div_7, 2);
      var div_9 = child(div_8);
      var label = child(div_9);
      var text_2 = child(label, true);
      reset(label);
      var input = sibling(label, 2);
      remove_input_defaults(input);
      reset(div_9);
      var div_10 = sibling(div_9, 2);
      var node_1 = child(div_10);
      XMark(node_1, {});
      reset(div_10);
      var div_11 = sibling(div_10, 2);
      var label_1 = child(div_11);
      var text_3 = child(label_1, true);
      reset(label_1);
      var input_1 = sibling(label_1, 2);
      remove_input_defaults(input_1);
      reset(div_11);
      reset(div_8);
      reset(div_6);
      reset(div_5);
      reset(div_4);
      var div_12 = sibling(div_4, 2);
      var button_1 = child(div_12);
      var text_4 = child(button_1, true);
      reset(button_1);
      reset(div_12);
      reset(form);
      reset(div_3);
      reset(div_2);
      reset(div);
      template_effect(
        ($0, $1, $2, $3, $4, $5, $6, $7) => {
          set_text(text2, $0);
          set_attribute(button, "aria-label", $1);
          set_text(text_1, $2);
          set_text(text_2, $3);
          set_attribute(input, "placeholder", $4);
          set_text(text_3, $5);
          set_attribute(input_1, "placeholder", $6);
          set_text(text_4, $7);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Manage"))),
          () => ($i18n(), untrack(() => $i18n().t("Close modal"))),
          () => ($i18n(), untrack(() => $i18n().t("Image Max Compression Size"))),
          () => ($i18n(), untrack(() => $i18n().t("Image Max Compression Size width"))),
          () => ($i18n(), untrack(() => $i18n().t("Width"))),
          () => ($i18n(), untrack(() => $i18n().t("Image Max Compression Size height"))),
          () => ($i18n(), untrack(() => $i18n().t("Height"))),
          () => ($i18n(), untrack(() => $i18n().t("Save")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input, () => size().width, ($$value) => size(size().width = $$value, true));
      bind_value(input_1, () => size().height, ($$value) => size(size().height = $$value, true));
      event("submit", form, (e) => {
        e.preventDefault();
        submitHandler();
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_1$d = from_html(`<span> </span>`);
var root_2$b = from_html(`<span> </span>`);
var root_3$5 = from_html(`<div class=" flex items-center gap-2 px-1 pb-1"><button type="button" class="rounded-lg p-1 transition outline-gray-200 hover:bg-gray-100 dark:outline-gray-700 dark:hover:bg-gray-800" aria-labelledby="ui-scale-label"><!></button> <div class="flex-1 flex items-center"><input id="ui-scale-slider" class="w-full" type="range" min="1" max="1.5" aria-labelledby="ui-scale-label" aria-valuemin="1" aria-valuemax="1.5"/></div> <button type="button" class="rounded-lg p-1 transition outline-gray-200 hover:bg-gray-100 dark:outline-gray-700 dark:hover:bg-gray-800" aria-labelledby="ui-scale-label"><!></button></div>`);
var root_4$8 = from_html(`<div><div class=" py-0.5 flex w-full justify-between"><div id="play-notification-sound-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div>`);
var root_5$5 = from_html(`<div><div class=" py-0.5 flex w-full justify-between"><div id="toast-notifications-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="whats-new-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div>`, 1);
var root_6$4 = from_html(`<div><div class=" py-0.5 flex w-full justify-between"><div id="chat-bubble-username-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div>`);
var root_7$1 = from_html(`<button class="text-xs text-gray-700 dark:text-gray-400 underline" type="button"> </button>`);
var root_8 = from_html(`<div><div class=" py-0.5 flex w-full justify-between"><div id="prompt-autocompletion-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div>`);
var root_9$2 = from_html(`<div><div class=" py-0.5 flex w-full justify-between"><div id="show-formatting-toolbar-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="insert-prompt-as-rich-text-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div>`, 1);
var root_10$1 = from_html(`<button class="text-xs text-gray-700 dark:text-gray-400 underline" type="button"> </button>`);
var root_11$1 = from_html(`<div><div class=" py-0.5 flex w-full justify-between"><div id="image-compression-in-channels-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div>`);
var root$h = from_html(`<!> <!> <form id="tab-interface" class="flex flex-col h-full justify-between space-y-3 text-sm"><input type="file" hidden="" accept="image/*"/> <div class=" space-y-3 overflow-y-scroll max-h-[28rem] md:max-h-full"><div><h1 class=" mb-2 text-sm font-medium"> </h1> <div><div class="py-0.5 flex w-full justify-between"><label id="ui-scale-label" class=" self-center text-xs" for="ui-scale-slider"> </label> <div class="flex items-center gap-2 p-1"><button class="text-xs" aria-live="polite" type="button"><!></button></div></div> <!></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="high-contrast-mode-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="use-chat-title-as-tab-title-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class="py-0.5 flex w-full justify-between"><div id="notification-sound-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <!> <div><div id="allow-user-location-label" class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="haptic-feedback-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="copy-formatted-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <!> <div class=" my-2 text-sm font-medium"> </div> <div><div class=" py-0.5 flex w-full justify-between"><div id="chat-direction-label" class=" self-center text-xs"> </div> <button aria-labelledby="chat-direction-label chat-direction-mode" class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><span class="ml-2 self-center" id="chat-direction-mode"> </span></button></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="landing-page-mode-label" class=" self-center text-xs"> </div> <button aria-labelledby="landing-page-mode-label notification-sound-state" class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><span class="ml-2 self-center" id="notification-sound-state"> </span></button></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="chat-background-label" class=" self-center text-xs"> </div> <button aria-labelledby="chat-background-label background-image-url-state" class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><span class="ml-2 self-center" id="background-image-url-state"> </span></button></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="chat-bubble-ui-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <!> <div><div class=" py-0.5 flex w-full justify-between"><div id="widescreen-mode-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="temp-chat-default-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="fade-streaming-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="auto-generation-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs" id="follow-up-auto-generation-label"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="chat-tags-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="auto-copy-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="insert-suggestion-prompt-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="keep-follow-up-prompts-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="insert-follow-up-prompt-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="regenerate-menu-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="always-collapse-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="always-expand-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="keep-followup-prompts-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="scroll-on-branch-change-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="stylized-pdf-export-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><label id="floating-action-buttons-label" class=" self-center text-xs"> </label> <div class="flex items-center gap-3 p-1"><!> <!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="web-search-in-chat-label" class=" self-center text-xs"> </div> <button aria-labelledby="web-search-in-chat-label web-search-state" class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><span class="ml-2 self-center" id="web-search-state"> </span></button></div></div> <div class=" my-2 text-sm font-medium"> </div> <div><div class=" py-0.5 flex w-full justify-between"><div id="enter-key-behavior-label ctrl-enter-to-send-state" class=" self-center text-xs"> </div> <button aria-labelledby="enter-key-behavior-label" class="p-1 px-3 text-xs flex rounded transition" type="button"><span class="ml-2 self-center" id="ctrl-enter-to-send-state"> </span></button></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="rich-input-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <!> <!> <div><div class=" py-0.5 flex w-full justify-between"><div id="paste-large-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div class=" my-2 text-sm font-medium"> </div> <div><div class=" py-0.5 flex w-full justify-between"><div id="detect-artifacts-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="iframe-sandbox-allow-same-origin-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="iframe-sandbox-allow-forms-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div class=" my-2 text-sm font-medium"> </div> <div><div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs" id="allow-voice-interruption-in-call-label"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div><div class=" py-0.5 flex w-full justify-between"><div id="display-emoji-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-2 p-1"><!></div></div></div> <div class=" my-2 text-sm font-medium"> </div> <div><div class=" py-0.5 flex w-full justify-between"><div id="image-compression-label" class=" self-center text-xs"> </div> <div class="flex items-center gap-3 p-1"><!> <!></div></div></div> <!></div></div> <div class="flex justify-end text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form>`, 1);
function Interface($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let saveSettings = prop($$props, "saveSettings", 8);
  let backgroundImageUrl = mutable_source(null);
  let inputFiles = mutable_source(null);
  let filesInputElement = mutable_source();
  let titleAutoGenerate = mutable_source(true);
  let autoFollowUps = mutable_source(true);
  let autoTags = mutable_source(true);
  let responseAutoCopy = mutable_source(false);
  let widescreenMode = mutable_source(false);
  let scrollOnBranchChange = mutable_source(true);
  let userLocation = mutable_source(false);
  let defaultModelId = "";
  let showUsername = mutable_source(false);
  let notificationSound = mutable_source(true);
  let notificationSoundAlways = mutable_source(false);
  let highContrastMode = mutable_source(false);
  let detectArtifacts = mutable_source(true);
  let displayMultiModelResponsesInTabs = mutable_source(false);
  let richTextInput = mutable_source(true);
  let showFormattingToolbar = mutable_source(false);
  let insertPromptAsRichText = mutable_source(false);
  let promptAutocomplete = mutable_source(false);
  let largeTextAsFile = mutable_source(false);
  let insertSuggestionPrompt = mutable_source(false);
  let keepFollowUpPrompts = mutable_source(false);
  let insertFollowUpPrompt = mutable_source(false);
  let regenerateMenu = mutable_source(true);
  let landingPageMode = mutable_source("");
  let chatBubble = mutable_source(true);
  let chatDirection = mutable_source("auto");
  let ctrlEnterToSend = mutable_source(false);
  let copyFormatted = mutable_source(false);
  let temporaryChatByDefault = mutable_source(false);
  let chatFadeStreamingText = mutable_source(true);
  let collapseCodeBlocks = mutable_source(false);
  let expandDetails = mutable_source(false);
  let showChatTitleInTab = mutable_source(true);
  let showFloatingActionButtons = mutable_source(true);
  let floatingActionButtons = mutable_source(null);
  let imageCompression = mutable_source(false);
  let imageCompressionSize = mutable_source({ width: "", height: "" });
  let imageCompressionInChannels = mutable_source(true);
  let stylizedPdfExport = mutable_source(true);
  let showUpdateToast = mutable_source(true);
  let showChangelog2 = mutable_source(true);
  let showEmojiInCall = mutable_source(false);
  let voiceInterruption = mutable_source(false);
  let hapticFeedback = mutable_source(false);
  let webSearch = mutable_source(null);
  let iframeSandboxAllowSameOrigin = mutable_source(false);
  let iframeSandboxAllowForms = mutable_source(false);
  let showManageFloatingActionButtonsModal = mutable_source(false);
  let showManageImageCompressionModal = mutable_source(false);
  let textScale = mutable_source(null);
  const toggleLandingPageMode = async () => {
    set(landingPageMode, get(landingPageMode) === "" ? "chat" : "");
    saveSettings()({ landingPageMode: get(landingPageMode) });
  };
  const toggleUserLocation = async () => {
    if (get(userLocation)) {
      const position = await getUserPosition().catch((error) => {
        toast.error(error.message);
        return null;
      });
      if (position) {
        await updateUserInfo(localStorage.token, { location: position });
        toast.success($i18n().t("User location successfully retrieved."));
      } else {
        set(userLocation, false);
      }
    }
    saveSettings()({ userLocation: get(userLocation) });
  };
  const toggleTitleAutoGenerate = async () => {
    saveSettings()({
      title: { ...$settings().title, auto: get(titleAutoGenerate) }
    });
  };
  const toggleResponseAutoCopy = async () => {
    const permission = await navigator.clipboard.readText().then(() => {
      return "granted";
    }).catch(() => {
      return "";
    });
    if (permission === "granted") {
      saveSettings()({ responseAutoCopy: get(responseAutoCopy) });
    } else {
      set(responseAutoCopy, false);
      toast.error($i18n().t("Clipboard write permission denied. Please check your browser settings to grant the necessary access."));
    }
  };
  const toggleChangeChatDirection = async () => {
    if (get(chatDirection) === "auto") {
      set(chatDirection, "LTR");
    } else if (get(chatDirection) === "LTR") {
      set(chatDirection, "RTL");
    } else if (get(chatDirection) === "RTL") {
      set(chatDirection, "auto");
    }
    saveSettings()({ chatDirection: get(chatDirection) });
  };
  const togglectrlEnterToSend = async () => {
    set(ctrlEnterToSend, !get(ctrlEnterToSend));
    saveSettings()({ ctrlEnterToSend: get(ctrlEnterToSend) });
  };
  const updateInterfaceHandler = async () => {
    saveSettings()({
      models: [defaultModelId],
      imageCompressionSize: get(imageCompressionSize)
    });
  };
  const toggleWebSearch = async () => {
    set(webSearch, get(webSearch) === null ? "always" : null);
    saveSettings()({ webSearch: get(webSearch) });
  };
  const setTextScaleHandler = (scale) => {
    set(textScale, scale);
    setTextScale(get(textScale));
    if (get(textScale) === 1) {
      set(textScale, null);
    }
    saveSettings()({ textScale: get(textScale) });
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __;
    set(titleAutoGenerate, ((_b = (_a = $settings()) == null ? void 0 : _a.title) == null ? void 0 : _b.auto) ?? true);
    set(autoTags, ((_c = $settings()) == null ? void 0 : _c.autoTags) ?? true);
    set(autoFollowUps, ((_d = $settings()) == null ? void 0 : _d.autoFollowUps) ?? true);
    set(highContrastMode, ((_e = $settings()) == null ? void 0 : _e.highContrastMode) ?? false);
    set(detectArtifacts, ((_f = $settings()) == null ? void 0 : _f.detectArtifacts) ?? true);
    set(responseAutoCopy, ((_g = $settings()) == null ? void 0 : _g.responseAutoCopy) ?? false);
    set(showUsername, ((_h = $settings()) == null ? void 0 : _h.showUsername) ?? false);
    set(showUpdateToast, ((_i = $settings()) == null ? void 0 : _i.showUpdateToast) ?? true);
    set(showChangelog2, ((_j = $settings()) == null ? void 0 : _j.showChangelog) ?? true);
    set(showEmojiInCall, ((_k = $settings()) == null ? void 0 : _k.showEmojiInCall) ?? false);
    set(voiceInterruption, ((_l = $settings()) == null ? void 0 : _l.voiceInterruption) ?? false);
    set(displayMultiModelResponsesInTabs, ((_m = $settings()) == null ? void 0 : _m.displayMultiModelResponsesInTabs) ?? false);
    set(chatFadeStreamingText, ((_n = $settings()) == null ? void 0 : _n.chatFadeStreamingText) ?? true);
    set(richTextInput, ((_o = $settings()) == null ? void 0 : _o.richTextInput) ?? true);
    set(showFormattingToolbar, ((_p = $settings()) == null ? void 0 : _p.showFormattingToolbar) ?? false);
    set(insertPromptAsRichText, ((_q = $settings()) == null ? void 0 : _q.insertPromptAsRichText) ?? false);
    set(promptAutocomplete, ((_r = $settings()) == null ? void 0 : _r.promptAutocomplete) ?? false);
    set(insertSuggestionPrompt, ((_s = $settings()) == null ? void 0 : _s.insertSuggestionPrompt) ?? false);
    set(keepFollowUpPrompts, ((_t = $settings()) == null ? void 0 : _t.keepFollowUpPrompts) ?? false);
    set(insertFollowUpPrompt, ((_u = $settings()) == null ? void 0 : _u.insertFollowUpPrompt) ?? false);
    set(regenerateMenu, ((_v = $settings()) == null ? void 0 : _v.regenerateMenu) ?? true);
    set(largeTextAsFile, ((_w = $settings()) == null ? void 0 : _w.largeTextAsFile) ?? false);
    set(copyFormatted, ((_x = $settings()) == null ? void 0 : _x.copyFormatted) ?? false);
    set(collapseCodeBlocks, ((_y = $settings()) == null ? void 0 : _y.collapseCodeBlocks) ?? false);
    set(expandDetails, ((_z = $settings()) == null ? void 0 : _z.expandDetails) ?? false);
    set(landingPageMode, ((_A = $settings()) == null ? void 0 : _A.landingPageMode) ?? "");
    set(chatBubble, ((_B = $settings()) == null ? void 0 : _B.chatBubble) ?? true);
    set(widescreenMode, ((_C = $settings()) == null ? void 0 : _C.widescreenMode) ?? false);
    ((_D = $settings()) == null ? void 0 : _D.splitLargeChunks) ?? false;
    set(scrollOnBranchChange, ((_E = $settings()) == null ? void 0 : _E.scrollOnBranchChange) ?? true);
    set(temporaryChatByDefault, ((_F = $settings()) == null ? void 0 : _F.temporaryChatByDefault) ?? false);
    set(chatDirection, ((_G = $settings()) == null ? void 0 : _G.chatDirection) ?? "auto");
    set(userLocation, ((_H = $settings()) == null ? void 0 : _H.userLocation) ?? false);
    set(showChatTitleInTab, ((_I = $settings()) == null ? void 0 : _I.showChatTitleInTab) ?? true);
    set(notificationSound, ((_J = $settings()) == null ? void 0 : _J.notificationSound) ?? true);
    set(notificationSoundAlways, ((_K = $settings()) == null ? void 0 : _K.notificationSoundAlways) ?? false);
    set(iframeSandboxAllowSameOrigin, ((_L = $settings()) == null ? void 0 : _L.iframeSandboxAllowSameOrigin) ?? false);
    set(iframeSandboxAllowForms, ((_M = $settings()) == null ? void 0 : _M.iframeSandboxAllowForms) ?? false);
    set(stylizedPdfExport, ((_N = $settings()) == null ? void 0 : _N.stylizedPdfExport) ?? true);
    set(hapticFeedback, ((_O = $settings()) == null ? void 0 : _O.hapticFeedback) ?? false);
    set(ctrlEnterToSend, ((_P = $settings()) == null ? void 0 : _P.ctrlEnterToSend) ?? false);
    set(showFloatingActionButtons, ((_Q = $settings()) == null ? void 0 : _Q.showFloatingActionButtons) ?? true);
    set(floatingActionButtons, ((_R = $settings()) == null ? void 0 : _R.floatingActionButtons) ?? null);
    set(imageCompression, ((_S = $settings()) == null ? void 0 : _S.imageCompression) ?? false);
    set(imageCompressionSize, ((_T = $settings()) == null ? void 0 : _T.imageCompressionSize) ?? { width: "", height: "" });
    set(imageCompressionInChannels, ((_U = $settings()) == null ? void 0 : _U.imageCompressionInChannels) ?? true);
    defaultModelId = ((_W = (_V = $settings()) == null ? void 0 : _V.models) == null ? void 0 : _W.at(0)) ?? "";
    if ((_X = $config()) == null ? void 0 : _X.default_models) {
      defaultModelId = $config().default_models.split(",")[0];
    }
    set(backgroundImageUrl, ((_Y = $settings()) == null ? void 0 : _Y.backgroundImageUrl) ?? null);
    set(webSearch, ((_Z = $settings()) == null ? void 0 : _Z.webSearch) ?? null);
    set(textScale, ((__ = $settings()) == null ? void 0 : __.textScale) ?? null);
  });
  init();
  var fragment = root$h();
  var node = first_child(fragment);
  ManageFloatingActionButtonsModal(node, {
    get floatingActionButtons() {
      return get(floatingActionButtons);
    },
    onSave: (buttons) => {
      set(floatingActionButtons, buttons);
      saveSettings()({ floatingActionButtons: get(floatingActionButtons) });
    },
    get show() {
      return get(showManageFloatingActionButtonsModal);
    },
    set show($$value) {
      set(showManageFloatingActionButtonsModal, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  ManageImageCompressionModal(node_1, {
    get size() {
      return get(imageCompressionSize);
    },
    onSave: (size) => {
      saveSettings()({ imageCompressionSize: size });
    },
    get show() {
      return get(showManageImageCompressionModal);
    },
    set show($$value) {
      set(showManageImageCompressionModal, $$value);
    },
    $$legacy: true
  });
  var form = sibling(node_1, 2);
  var input = child(form);
  bind_this(input, ($$value) => set(filesInputElement, $$value), () => get(filesInputElement));
  var div = sibling(input, 2);
  var div_1 = child(div);
  var h1 = child(div_1);
  var text2 = child(h1, true);
  reset(h1);
  var div_2 = sibling(h1, 2);
  var div_3 = child(div_2);
  var label = child(div_3);
  var text_1 = child(label, true);
  reset(label);
  var div_4 = sibling(label, 2);
  var button = child(div_4);
  var node_2 = child(button);
  {
    var consequent = ($$anchor2) => {
      var span = root_1$d();
      var text_2 = child(span, true);
      reset(span);
      template_effect(($0) => set_text(text_2, $0), [() => ($i18n(), untrack(() => $i18n().t("Default")))]);
      append($$anchor2, span);
    };
    var alternate = ($$anchor2) => {
      var span_1 = root_2$b();
      var text_3 = child(span_1);
      reset(span_1);
      template_effect(() => set_text(text_3, `${get(textScale) ?? ""}x`));
      append($$anchor2, span_1);
    };
    if_block(node_2, ($$render) => {
      if (get(textScale) === null) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(button);
  reset(div_4);
  reset(div_3);
  var node_3 = sibling(div_3, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_5 = root_3$5();
      var button_1 = child(div_5);
      var node_4 = child(button_1);
      Minus(node_4, { className: "h-3.5 w-3.5" });
      reset(button_1);
      var div_6 = sibling(button_1, 2);
      var input_1 = child(div_6);
      remove_input_defaults(input_1);
      set_attribute(input_1, "step", 0.01);
      reset(div_6);
      var button_2 = sibling(div_6, 2);
      var node_5 = child(button_2);
      Plus(node_5, { className: "h-3.5 w-3.5" });
      reset(button_2);
      reset(div_5);
      template_effect(
        ($0, $1) => {
          set_attribute(button_1, "aria-label", $0);
          set_attribute(input_1, "aria-valuenow", get(textScale));
          set_attribute(input_1, "aria-valuetext", `${get(textScale)}x`);
          set_attribute(button_2, "aria-label", $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Decrease UI Scale"))),
          () => ($i18n(), untrack(() => $i18n().t("Increase UI Scale")))
        ]
      );
      event("click", button_1, () => {
        set(textScale, Math.max(1, get(textScale)));
        setTextScaleHandler(get(textScale));
      });
      bind_value(input_1, () => get(textScale), ($$value) => set(textScale, $$value));
      event("change", input_1, () => {
        setTextScaleHandler(get(textScale));
      });
      event("click", button_2, () => {
        set(textScale, Math.min(1.5, get(textScale)));
        setTextScaleHandler(get(textScale));
      });
      append($$anchor2, div_5);
    };
    if_block(node_3, ($$render) => {
      if (get(textScale) !== null) $$render(consequent_1);
    });
  }
  reset(div_2);
  var div_7 = sibling(div_2, 2);
  var div_8 = child(div_7);
  var div_9 = child(div_8);
  var text_4 = child(div_9);
  reset(div_9);
  var div_10 = sibling(div_9, 2);
  var node_6 = child(div_10);
  Switch_1(node_6, {
    ariaLabelledbyId: "high-contrast-mode-label",
    tooltip: true,
    get state() {
      return get(highContrastMode);
    },
    set state($$value) {
      set(highContrastMode, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ highContrastMode: get(highContrastMode) });
      }
    },
    $$legacy: true
  });
  reset(div_10);
  reset(div_8);
  reset(div_7);
  var div_11 = sibling(div_7, 2);
  var div_12 = child(div_11);
  var div_13 = child(div_12);
  var text_5 = child(div_13, true);
  reset(div_13);
  var div_14 = sibling(div_13, 2);
  var node_7 = child(div_14);
  Switch_1(node_7, {
    ariaLabelledbyId: "use-chat-title-as-tab-title-label",
    tooltip: true,
    get state() {
      return get(showChatTitleInTab);
    },
    set state($$value) {
      set(showChatTitleInTab, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ showChatTitleInTab: get(showChatTitleInTab) });
      }
    },
    $$legacy: true
  });
  reset(div_14);
  reset(div_12);
  reset(div_11);
  var div_15 = sibling(div_11, 2);
  var div_16 = child(div_15);
  var div_17 = child(div_16);
  var text_6 = child(div_17, true);
  reset(div_17);
  var div_18 = sibling(div_17, 2);
  var node_8 = child(div_18);
  Switch_1(node_8, {
    ariaLabelledbyId: "notification-sound-label",
    tooltip: true,
    get state() {
      return get(notificationSound);
    },
    set state($$value) {
      set(notificationSound, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ notificationSound: get(notificationSound) });
      }
    },
    $$legacy: true
  });
  reset(div_18);
  reset(div_16);
  reset(div_15);
  var node_9 = sibling(div_15, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_19 = root_4$8();
      var div_20 = child(div_19);
      var div_21 = child(div_20);
      var text_7 = child(div_21, true);
      reset(div_21);
      var div_22 = sibling(div_21, 2);
      var node_10 = child(div_22);
      Switch_1(node_10, {
        ariaLabelledbyId: "play-notification-sound-label",
        tooltip: true,
        get state() {
          return get(notificationSoundAlways);
        },
        set state($$value) {
          set(notificationSoundAlways, $$value);
        },
        $$events: {
          change: () => {
            saveSettings()({ notificationSoundAlways: get(notificationSoundAlways) });
          }
        },
        $$legacy: true
      });
      reset(div_22);
      reset(div_20);
      reset(div_19);
      template_effect(($0) => set_text(text_7, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Always Play Notification Sound")))
      ]);
      append($$anchor2, div_19);
    };
    if_block(node_9, ($$render) => {
      if (get(notificationSound)) $$render(consequent_2);
    });
  }
  var div_23 = sibling(node_9, 2);
  var div_24 = child(div_23);
  var div_25 = child(div_24);
  var text_8 = child(div_25, true);
  reset(div_25);
  var div_26 = sibling(div_25, 2);
  var node_11 = child(div_26);
  Switch_1(node_11, {
    ariaLabelledbyId: "allow-user-location-label",
    tooltip: true,
    get state() {
      return get(userLocation);
    },
    set state($$value) {
      set(userLocation, $$value);
    },
    $$events: {
      change: () => {
        toggleUserLocation();
      }
    },
    $$legacy: true
  });
  reset(div_26);
  reset(div_24);
  reset(div_23);
  var div_27 = sibling(div_23, 2);
  var div_28 = child(div_27);
  var div_29 = child(div_28);
  var text_9 = child(div_29);
  reset(div_29);
  var div_30 = sibling(div_29, 2);
  var node_12 = child(div_30);
  Switch_1(node_12, {
    ariaLabelledbyId: "haptic-feedback-label",
    tooltip: true,
    get state() {
      return get(hapticFeedback);
    },
    set state($$value) {
      set(hapticFeedback, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ hapticFeedback: get(hapticFeedback) });
      }
    },
    $$legacy: true
  });
  reset(div_30);
  reset(div_28);
  reset(div_27);
  var div_31 = sibling(div_27, 2);
  var div_32 = child(div_31);
  var div_33 = child(div_32);
  var text_10 = child(div_33, true);
  reset(div_33);
  var div_34 = sibling(div_33, 2);
  var node_13 = child(div_34);
  Switch_1(node_13, {
    ariaLabelledbyId: "copy-formatted-label",
    tooltip: true,
    get state() {
      return get(copyFormatted);
    },
    set state($$value) {
      set(copyFormatted, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ copyFormatted: get(copyFormatted) });
      }
    },
    $$legacy: true
  });
  reset(div_34);
  reset(div_32);
  reset(div_31);
  var node_14 = sibling(div_31, 2);
  {
    var consequent_3 = ($$anchor2) => {
      var fragment_1 = root_5$5();
      var div_35 = first_child(fragment_1);
      var div_36 = child(div_35);
      var div_37 = child(div_36);
      var text_11 = child(div_37, true);
      reset(div_37);
      var div_38 = sibling(div_37, 2);
      var node_15 = child(div_38);
      Switch_1(node_15, {
        ariaLabelledbyId: "toast-notifications-label",
        tooltip: true,
        get state() {
          return get(showUpdateToast);
        },
        set state($$value) {
          set(showUpdateToast, $$value);
        },
        $$events: {
          change: () => {
            saveSettings()({ showUpdateToast: get(showUpdateToast) });
          }
        },
        $$legacy: true
      });
      reset(div_38);
      reset(div_36);
      reset(div_35);
      var div_39 = sibling(div_35, 2);
      var div_40 = child(div_39);
      var div_41 = child(div_40);
      var text_12 = child(div_41, true);
      reset(div_41);
      var div_42 = sibling(div_41, 2);
      var node_16 = child(div_42);
      Switch_1(node_16, {
        ariaLabelledbyId: "whats-new-label",
        tooltip: true,
        get state() {
          return get(showChangelog2);
        },
        set state($$value) {
          set(showChangelog2, $$value);
        },
        $$events: {
          change: () => {
            saveSettings()({ showChangelog: get(showChangelog2) });
          }
        },
        $$legacy: true
      });
      reset(div_42);
      reset(div_40);
      reset(div_39);
      template_effect(
        ($0, $1) => {
          set_text(text_11, $0);
          set_text(text_12, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Toast notifications for new updates"))),
          () => ($i18n(), untrack(() => $i18n().t(`Show "What's New" modal on login`)))
        ]
      );
      append($$anchor2, fragment_1);
    };
    if_block(node_14, ($$render) => {
      if ($user(), untrack(() => {
        var _a;
        return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
      })) $$render(consequent_3);
    });
  }
  var div_43 = sibling(node_14, 2);
  var text_13 = child(div_43, true);
  reset(div_43);
  var div_44 = sibling(div_43, 2);
  var div_45 = child(div_44);
  var div_46 = child(div_45);
  var text_14 = child(div_46, true);
  reset(div_46);
  var button_3 = sibling(div_46, 2);
  var span_2 = child(button_3);
  var text_15 = child(span_2, true);
  reset(span_2);
  reset(button_3);
  reset(div_45);
  reset(div_44);
  var div_47 = sibling(div_44, 2);
  var div_48 = child(div_47);
  var div_49 = child(div_48);
  var text_16 = child(div_49, true);
  reset(div_49);
  var button_4 = sibling(div_49, 2);
  var span_3 = child(button_4);
  var text_17 = child(span_3, true);
  reset(span_3);
  reset(button_4);
  reset(div_48);
  reset(div_47);
  var div_50 = sibling(div_47, 2);
  var div_51 = child(div_50);
  var div_52 = child(div_51);
  var text_18 = child(div_52, true);
  reset(div_52);
  var button_5 = sibling(div_52, 2);
  var span_4 = child(button_5);
  var text_19 = child(span_4, true);
  reset(span_4);
  reset(button_5);
  reset(div_51);
  reset(div_50);
  var div_53 = sibling(div_50, 2);
  var div_54 = child(div_53);
  var div_55 = child(div_54);
  var text_20 = child(div_55, true);
  reset(div_55);
  var div_56 = sibling(div_55, 2);
  var node_17 = child(div_56);
  Switch_1(node_17, {
    tooltip: true,
    ariaLabelledbyId: "chat-bubble-ui-label",
    get state() {
      return get(chatBubble);
    },
    set state($$value) {
      set(chatBubble, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ chatBubble: get(chatBubble) });
      }
    },
    $$legacy: true
  });
  reset(div_56);
  reset(div_54);
  reset(div_53);
  var node_18 = sibling(div_53, 2);
  {
    var consequent_4 = ($$anchor2) => {
      var div_57 = root_6$4();
      var div_58 = child(div_57);
      var div_59 = child(div_58);
      var text_21 = child(div_59, true);
      reset(div_59);
      var div_60 = sibling(div_59, 2);
      var node_19 = child(div_60);
      Switch_1(node_19, {
        ariaLabelledbyId: "chat-bubble-username-label",
        tooltip: true,
        get state() {
          return get(showUsername);
        },
        set state($$value) {
          set(showUsername, $$value);
        },
        $$events: {
          change: () => {
            saveSettings()({ showUsername: get(showUsername) });
          }
        },
        $$legacy: true
      });
      reset(div_60);
      reset(div_58);
      reset(div_57);
      template_effect(($0) => set_text(text_21, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Display the username instead of You in the Chat")))
      ]);
      append($$anchor2, div_57);
    };
    if_block(node_18, ($$render) => {
      if ($settings(), untrack(() => !$settings().chatBubble)) $$render(consequent_4);
    });
  }
  var div_61 = sibling(node_18, 2);
  var div_62 = child(div_61);
  var div_63 = child(div_62);
  var text_22 = child(div_63, true);
  reset(div_63);
  var div_64 = sibling(div_63, 2);
  var node_20 = child(div_64);
  Switch_1(node_20, {
    ariaLabelledbyId: "widescreen-mode-label",
    tooltip: true,
    get state() {
      return get(widescreenMode);
    },
    set state($$value) {
      set(widescreenMode, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ widescreenMode: get(widescreenMode) });
      }
    },
    $$legacy: true
  });
  reset(div_64);
  reset(div_62);
  reset(div_61);
  var div_65 = sibling(div_61, 2);
  var div_66 = child(div_65);
  var div_67 = child(div_66);
  var text_23 = child(div_67, true);
  reset(div_67);
  var div_68 = sibling(div_67, 2);
  var node_21 = child(div_68);
  Switch_1(node_21, {
    ariaLabelledbyId: "temp-chat-default-label",
    tooltip: true,
    get state() {
      return get(temporaryChatByDefault);
    },
    set state($$value) {
      set(temporaryChatByDefault, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ temporaryChatByDefault: get(temporaryChatByDefault) });
      }
    },
    $$legacy: true
  });
  reset(div_68);
  reset(div_66);
  reset(div_65);
  var div_69 = sibling(div_65, 2);
  var div_70 = child(div_69);
  var div_71 = child(div_70);
  var text_24 = child(div_71, true);
  reset(div_71);
  var div_72 = sibling(div_71, 2);
  var node_22 = child(div_72);
  Switch_1(node_22, {
    ariaLabelledbyId: "fade-streaming-label",
    tooltip: true,
    get state() {
      return get(chatFadeStreamingText);
    },
    set state($$value) {
      set(chatFadeStreamingText, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ chatFadeStreamingText: get(chatFadeStreamingText) });
      }
    },
    $$legacy: true
  });
  reset(div_72);
  reset(div_70);
  reset(div_69);
  var div_73 = sibling(div_69, 2);
  var div_74 = child(div_73);
  var div_75 = child(div_74);
  var text_25 = child(div_75, true);
  reset(div_75);
  var div_76 = sibling(div_75, 2);
  var node_23 = child(div_76);
  Switch_1(node_23, {
    ariaLabelledbyId: "auto-generation-label",
    tooltip: true,
    get state() {
      return get(titleAutoGenerate);
    },
    set state($$value) {
      set(titleAutoGenerate, $$value);
    },
    $$events: {
      change: () => {
        toggleTitleAutoGenerate();
      }
    },
    $$legacy: true
  });
  reset(div_76);
  reset(div_74);
  reset(div_73);
  var div_77 = sibling(div_73, 2);
  var div_78 = child(div_77);
  var div_79 = child(div_78);
  var text_26 = child(div_79, true);
  reset(div_79);
  var div_80 = sibling(div_79, 2);
  var node_24 = child(div_80);
  Switch_1(node_24, {
    ariaLabelledbyId: "follow-up-auto-generation-label",
    tooltip: true,
    get state() {
      return get(autoFollowUps);
    },
    set state($$value) {
      set(autoFollowUps, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ autoFollowUps: get(autoFollowUps) });
      }
    },
    $$legacy: true
  });
  reset(div_80);
  reset(div_78);
  reset(div_77);
  var div_81 = sibling(div_77, 2);
  var div_82 = child(div_81);
  var div_83 = child(div_82);
  var text_27 = child(div_83, true);
  reset(div_83);
  var div_84 = sibling(div_83, 2);
  var node_25 = child(div_84);
  Switch_1(node_25, {
    ariaLabelledbyId: "chat-tags-label",
    tooltip: true,
    get state() {
      return get(autoTags);
    },
    set state($$value) {
      set(autoTags, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ autoTags: get(autoTags) });
      }
    },
    $$legacy: true
  });
  reset(div_84);
  reset(div_82);
  reset(div_81);
  var div_85 = sibling(div_81, 2);
  var div_86 = child(div_85);
  var div_87 = child(div_86);
  var text_28 = child(div_87, true);
  reset(div_87);
  var div_88 = sibling(div_87, 2);
  var node_26 = child(div_88);
  Switch_1(node_26, {
    ariaLabelledbyId: "auto-copy-label",
    tooltip: true,
    get state() {
      return get(responseAutoCopy);
    },
    set state($$value) {
      set(responseAutoCopy, $$value);
    },
    $$events: {
      change: () => {
        toggleResponseAutoCopy();
      }
    },
    $$legacy: true
  });
  reset(div_88);
  reset(div_86);
  reset(div_85);
  var div_89 = sibling(div_85, 2);
  var div_90 = child(div_89);
  var div_91 = child(div_90);
  var text_29 = child(div_91, true);
  reset(div_91);
  var div_92 = sibling(div_91, 2);
  var node_27 = child(div_92);
  Switch_1(node_27, {
    ariaLabelledbyId: "insert-suggestion-prompt-label",
    tooltip: true,
    get state() {
      return get(insertSuggestionPrompt);
    },
    set state($$value) {
      set(insertSuggestionPrompt, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ insertSuggestionPrompt: get(insertSuggestionPrompt) });
      }
    },
    $$legacy: true
  });
  reset(div_92);
  reset(div_90);
  reset(div_89);
  var div_93 = sibling(div_89, 2);
  var div_94 = child(div_93);
  var div_95 = child(div_94);
  var text_30 = child(div_95, true);
  reset(div_95);
  var div_96 = sibling(div_95, 2);
  var node_28 = child(div_96);
  Switch_1(node_28, {
    ariaLabelledbyId: "keep-follow-up-prompts-label",
    tooltip: true,
    get state() {
      return get(keepFollowUpPrompts);
    },
    set state($$value) {
      set(keepFollowUpPrompts, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ keepFollowUpPrompts: get(keepFollowUpPrompts) });
      }
    },
    $$legacy: true
  });
  reset(div_96);
  reset(div_94);
  reset(div_93);
  var div_97 = sibling(div_93, 2);
  var div_98 = child(div_97);
  var div_99 = child(div_98);
  var text_31 = child(div_99, true);
  reset(div_99);
  var div_100 = sibling(div_99, 2);
  var node_29 = child(div_100);
  Switch_1(node_29, {
    ariaLabelledbyId: "insert-follow-up-prompt-label",
    tooltip: true,
    get state() {
      return get(insertFollowUpPrompt);
    },
    set state($$value) {
      set(insertFollowUpPrompt, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ insertFollowUpPrompt: get(insertFollowUpPrompt) });
      }
    },
    $$legacy: true
  });
  reset(div_100);
  reset(div_98);
  reset(div_97);
  var div_101 = sibling(div_97, 2);
  var div_102 = child(div_101);
  var div_103 = child(div_102);
  var text_32 = child(div_103, true);
  reset(div_103);
  var div_104 = sibling(div_103, 2);
  var node_30 = child(div_104);
  Switch_1(node_30, {
    ariaLabelledbyId: "regenerate-menu-label",
    tooltip: true,
    get state() {
      return get(regenerateMenu);
    },
    set state($$value) {
      set(regenerateMenu, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ regenerateMenu: get(regenerateMenu) });
      }
    },
    $$legacy: true
  });
  reset(div_104);
  reset(div_102);
  reset(div_101);
  var div_105 = sibling(div_101, 2);
  var div_106 = child(div_105);
  var div_107 = child(div_106);
  var text_33 = child(div_107, true);
  reset(div_107);
  var div_108 = sibling(div_107, 2);
  var node_31 = child(div_108);
  Switch_1(node_31, {
    ariaLabelledbyId: "always-collapse-label",
    tooltip: true,
    get state() {
      return get(collapseCodeBlocks);
    },
    set state($$value) {
      set(collapseCodeBlocks, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ collapseCodeBlocks: get(collapseCodeBlocks) });
      }
    },
    $$legacy: true
  });
  reset(div_108);
  reset(div_106);
  reset(div_105);
  var div_109 = sibling(div_105, 2);
  var div_110 = child(div_109);
  var div_111 = child(div_110);
  var text_34 = child(div_111, true);
  reset(div_111);
  var div_112 = sibling(div_111, 2);
  var node_32 = child(div_112);
  Switch_1(node_32, {
    ariaLabelledbyId: "always-expand-label",
    tooltip: true,
    get state() {
      return get(expandDetails);
    },
    set state($$value) {
      set(expandDetails, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ expandDetails: get(expandDetails) });
      }
    },
    $$legacy: true
  });
  reset(div_112);
  reset(div_110);
  reset(div_109);
  var div_113 = sibling(div_109, 2);
  var div_114 = child(div_113);
  var div_115 = child(div_114);
  var text_35 = child(div_115, true);
  reset(div_115);
  var div_116 = sibling(div_115, 2);
  var node_33 = child(div_116);
  Switch_1(node_33, {
    ariaLabelledbyId: "keep-followup-prompts-label",
    tooltip: true,
    get state() {
      return get(displayMultiModelResponsesInTabs);
    },
    set state($$value) {
      set(displayMultiModelResponsesInTabs, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({
          displayMultiModelResponsesInTabs: get(displayMultiModelResponsesInTabs)
        });
      }
    },
    $$legacy: true
  });
  reset(div_116);
  reset(div_114);
  reset(div_113);
  var div_117 = sibling(div_113, 2);
  var div_118 = child(div_117);
  var div_119 = child(div_118);
  var text_36 = child(div_119, true);
  reset(div_119);
  var div_120 = sibling(div_119, 2);
  var node_34 = child(div_120);
  Switch_1(node_34, {
    ariaLabelledbyId: "scroll-on-branch-change-label",
    tooltip: true,
    get state() {
      return get(scrollOnBranchChange);
    },
    set state($$value) {
      set(scrollOnBranchChange, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ scrollOnBranchChange: get(scrollOnBranchChange) });
      }
    },
    $$legacy: true
  });
  reset(div_120);
  reset(div_118);
  reset(div_117);
  var div_121 = sibling(div_117, 2);
  var div_122 = child(div_121);
  var div_123 = child(div_122);
  var text_37 = child(div_123, true);
  reset(div_123);
  var div_124 = sibling(div_123, 2);
  var node_35 = child(div_124);
  Switch_1(node_35, {
    ariaLabelledbyId: "stylized-pdf-export-label",
    tooltip: true,
    get state() {
      return get(stylizedPdfExport);
    },
    set state($$value) {
      set(stylizedPdfExport, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ stylizedPdfExport: get(stylizedPdfExport) });
      }
    },
    $$legacy: true
  });
  reset(div_124);
  reset(div_122);
  reset(div_121);
  var div_125 = sibling(div_121, 2);
  var div_126 = child(div_125);
  var label_1 = child(div_126);
  var text_38 = child(label_1, true);
  reset(label_1);
  var div_127 = sibling(label_1, 2);
  var node_36 = child(div_127);
  {
    var consequent_5 = ($$anchor2) => {
      var button_6 = root_7$1();
      var text_39 = child(button_6, true);
      reset(button_6);
      template_effect(
        ($0, $1) => {
          set_attribute(button_6, "aria-label", $0);
          set_text(text_39, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Open Modal To Manage Floating Quick Actions"))),
          () => ($i18n(), untrack(() => $i18n().t("Manage")))
        ]
      );
      event("click", button_6, () => {
        set(showManageFloatingActionButtonsModal, true);
      });
      append($$anchor2, button_6);
    };
    if_block(node_36, ($$render) => {
      if (get(showFloatingActionButtons)) $$render(consequent_5);
    });
  }
  var node_37 = sibling(node_36, 2);
  Switch_1(node_37, {
    ariaLabelledbyId: "floating-action-buttons-label",
    tooltip: true,
    get state() {
      return get(showFloatingActionButtons);
    },
    set state($$value) {
      set(showFloatingActionButtons, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ showFloatingActionButtons: get(showFloatingActionButtons) });
      }
    },
    $$legacy: true
  });
  reset(div_127);
  reset(div_126);
  reset(div_125);
  var div_128 = sibling(div_125, 2);
  var div_129 = child(div_128);
  var div_130 = child(div_129);
  var text_40 = child(div_130, true);
  reset(div_130);
  var button_7 = sibling(div_130, 2);
  var span_5 = child(button_7);
  var text_41 = child(span_5, true);
  reset(span_5);
  reset(button_7);
  reset(div_129);
  reset(div_128);
  var div_131 = sibling(div_128, 2);
  var text_42 = child(div_131, true);
  reset(div_131);
  var div_132 = sibling(div_131, 2);
  var div_133 = child(div_132);
  var div_134 = child(div_133);
  var text_43 = child(div_134, true);
  reset(div_134);
  var button_8 = sibling(div_134, 2);
  var span_6 = child(button_8);
  var text_44 = child(span_6, true);
  reset(span_6);
  reset(button_8);
  reset(div_133);
  reset(div_132);
  var div_135 = sibling(div_132, 2);
  var div_136 = child(div_135);
  var div_137 = child(div_136);
  var text_45 = child(div_137, true);
  reset(div_137);
  var div_138 = sibling(div_137, 2);
  var node_38 = child(div_138);
  Switch_1(node_38, {
    tooltip: true,
    ariaLabelledbyId: "rich-input-label",
    get state() {
      return get(richTextInput);
    },
    set state($$value) {
      set(richTextInput, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ richTextInput: get(richTextInput) });
      }
    },
    $$legacy: true
  });
  reset(div_138);
  reset(div_136);
  reset(div_135);
  var node_39 = sibling(div_135, 2);
  {
    var consequent_6 = ($$anchor2) => {
      var div_139 = root_8();
      var div_140 = child(div_139);
      var div_141 = child(div_140);
      var text_46 = child(div_141, true);
      reset(div_141);
      var div_142 = sibling(div_141, 2);
      var node_40 = child(div_142);
      Switch_1(node_40, {
        ariaLabelledbyId: "prompt-autocompletion-label",
        tooltip: true,
        get state() {
          return get(promptAutocomplete);
        },
        set state($$value) {
          set(promptAutocomplete, $$value);
        },
        $$events: {
          change: () => {
            saveSettings()({ promptAutocomplete: get(promptAutocomplete) });
          }
        },
        $$legacy: true
      });
      reset(div_142);
      reset(div_140);
      reset(div_139);
      template_effect(($0) => set_text(text_46, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Prompt Autocompletion")))
      ]);
      append($$anchor2, div_139);
    };
    if_block(node_39, ($$render) => {
      if ($config(), untrack(() => {
        var _a, _b;
        return (_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_autocomplete_generation;
      })) $$render(consequent_6);
    });
  }
  var node_41 = sibling(node_39, 2);
  {
    var consequent_7 = ($$anchor2) => {
      var fragment_2 = root_9$2();
      var div_143 = first_child(fragment_2);
      var div_144 = child(div_143);
      var div_145 = child(div_144);
      var text_47 = child(div_145, true);
      reset(div_145);
      var div_146 = sibling(div_145, 2);
      var node_42 = child(div_146);
      Switch_1(node_42, {
        ariaLabelledbyId: "show-formatting-toolbar-label",
        tooltip: true,
        get state() {
          return get(showFormattingToolbar);
        },
        set state($$value) {
          set(showFormattingToolbar, $$value);
        },
        $$events: {
          change: () => {
            saveSettings()({ showFormattingToolbar: get(showFormattingToolbar) });
          }
        },
        $$legacy: true
      });
      reset(div_146);
      reset(div_144);
      reset(div_143);
      var div_147 = sibling(div_143, 2);
      var div_148 = child(div_147);
      var div_149 = child(div_148);
      var text_48 = child(div_149, true);
      reset(div_149);
      var div_150 = sibling(div_149, 2);
      var node_43 = child(div_150);
      Switch_1(node_43, {
        ariaLabelledbyId: "insert-prompt-as-rich-text-label",
        tooltip: true,
        get state() {
          return get(insertPromptAsRichText);
        },
        set state($$value) {
          set(insertPromptAsRichText, $$value);
        },
        $$events: {
          change: () => {
            saveSettings()({ insertPromptAsRichText: get(insertPromptAsRichText) });
          }
        },
        $$legacy: true
      });
      reset(div_150);
      reset(div_148);
      reset(div_147);
      template_effect(
        ($0, $1) => {
          set_text(text_47, $0);
          set_text(text_48, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Show Formatting Toolbar"))),
          () => ($i18n(), untrack(() => $i18n().t("Insert Prompt as Rich Text")))
        ]
      );
      append($$anchor2, fragment_2);
    };
    if_block(node_41, ($$render) => {
      if (get(richTextInput)) $$render(consequent_7);
    });
  }
  var div_151 = sibling(node_41, 2);
  var div_152 = child(div_151);
  var div_153 = child(div_152);
  var text_49 = child(div_153, true);
  reset(div_153);
  var div_154 = sibling(div_153, 2);
  var node_44 = child(div_154);
  Switch_1(node_44, {
    tooltip: true,
    ariaLabelledbyId: "paste-large-label",
    get state() {
      return get(largeTextAsFile);
    },
    set state($$value) {
      set(largeTextAsFile, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ largeTextAsFile: get(largeTextAsFile) });
      }
    },
    $$legacy: true
  });
  reset(div_154);
  reset(div_152);
  reset(div_151);
  var div_155 = sibling(div_151, 2);
  var text_50 = child(div_155, true);
  reset(div_155);
  var div_156 = sibling(div_155, 2);
  var div_157 = child(div_156);
  var div_158 = child(div_157);
  var text_51 = child(div_158, true);
  reset(div_158);
  var div_159 = sibling(div_158, 2);
  var node_45 = child(div_159);
  Switch_1(node_45, {
    ariaLabelledbyId: "detect-artifacts-label",
    tooltip: true,
    get state() {
      return get(detectArtifacts);
    },
    set state($$value) {
      set(detectArtifacts, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ detectArtifacts: get(detectArtifacts) });
      }
    },
    $$legacy: true
  });
  reset(div_159);
  reset(div_157);
  reset(div_156);
  var div_160 = sibling(div_156, 2);
  var div_161 = child(div_160);
  var div_162 = child(div_161);
  var text_52 = child(div_162, true);
  reset(div_162);
  var div_163 = sibling(div_162, 2);
  var node_46 = child(div_163);
  Switch_1(node_46, {
    ariaLabelledbyId: "iframe-sandbox-allow-same-origin-label",
    tooltip: true,
    get state() {
      return get(iframeSandboxAllowSameOrigin);
    },
    set state($$value) {
      set(iframeSandboxAllowSameOrigin, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({
          iframeSandboxAllowSameOrigin: get(iframeSandboxAllowSameOrigin)
        });
      }
    },
    $$legacy: true
  });
  reset(div_163);
  reset(div_161);
  reset(div_160);
  var div_164 = sibling(div_160, 2);
  var div_165 = child(div_164);
  var div_166 = child(div_165);
  var text_53 = child(div_166, true);
  reset(div_166);
  var div_167 = sibling(div_166, 2);
  var node_47 = child(div_167);
  Switch_1(node_47, {
    ariaLabelledbyId: "iframe-sandbox-allow-forms-label",
    tooltip: true,
    get state() {
      return get(iframeSandboxAllowForms);
    },
    set state($$value) {
      set(iframeSandboxAllowForms, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ iframeSandboxAllowForms: get(iframeSandboxAllowForms) });
      }
    },
    $$legacy: true
  });
  reset(div_167);
  reset(div_165);
  reset(div_164);
  var div_168 = sibling(div_164, 2);
  var text_54 = child(div_168, true);
  reset(div_168);
  var div_169 = sibling(div_168, 2);
  var div_170 = child(div_169);
  var div_171 = child(div_170);
  var text_55 = child(div_171, true);
  reset(div_171);
  var div_172 = sibling(div_171, 2);
  var node_48 = child(div_172);
  Switch_1(node_48, {
    ariaLabelledbyId: "allow-voice-interruption-in-call-label",
    tooltip: true,
    get state() {
      return get(voiceInterruption);
    },
    set state($$value) {
      set(voiceInterruption, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ voiceInterruption: get(voiceInterruption) });
      }
    },
    $$legacy: true
  });
  reset(div_172);
  reset(div_170);
  reset(div_169);
  var div_173 = sibling(div_169, 2);
  var div_174 = child(div_173);
  var div_175 = child(div_174);
  var text_56 = child(div_175, true);
  reset(div_175);
  var div_176 = sibling(div_175, 2);
  var node_49 = child(div_176);
  Switch_1(node_49, {
    ariaLabelledbyId: "display-emoji-label",
    tooltip: true,
    get state() {
      return get(showEmojiInCall);
    },
    set state($$value) {
      set(showEmojiInCall, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ showEmojiInCall: get(showEmojiInCall) });
      }
    },
    $$legacy: true
  });
  reset(div_176);
  reset(div_174);
  reset(div_173);
  var div_177 = sibling(div_173, 2);
  var text_57 = child(div_177, true);
  reset(div_177);
  var div_178 = sibling(div_177, 2);
  var div_179 = child(div_178);
  var div_180 = child(div_179);
  var text_58 = child(div_180, true);
  reset(div_180);
  var div_181 = sibling(div_180, 2);
  var node_50 = child(div_181);
  {
    var consequent_8 = ($$anchor2) => {
      var button_9 = root_10$1();
      var text_59 = child(button_9, true);
      reset(button_9);
      template_effect(
        ($0, $1) => {
          set_attribute(button_9, "aria-label", $0);
          set_text(text_59, $1);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Open Modal To Manage Image Compression"))),
          () => ($i18n(), untrack(() => $i18n().t("Manage")))
        ]
      );
      event("click", button_9, () => {
        set(showManageImageCompressionModal, true);
      });
      append($$anchor2, button_9);
    };
    if_block(node_50, ($$render) => {
      if (get(imageCompression)) $$render(consequent_8);
    });
  }
  var node_51 = sibling(node_50, 2);
  Switch_1(node_51, {
    ariaLabelledbyId: "image-compression-label",
    tooltip: true,
    get state() {
      return get(imageCompression);
    },
    set state($$value) {
      set(imageCompression, $$value);
    },
    $$events: {
      change: () => {
        saveSettings()({ imageCompression: get(imageCompression) });
      }
    },
    $$legacy: true
  });
  reset(div_181);
  reset(div_179);
  reset(div_178);
  var node_52 = sibling(div_178, 2);
  {
    var consequent_9 = ($$anchor2) => {
      var div_182 = root_11$1();
      var div_183 = child(div_182);
      var div_184 = child(div_183);
      var text_60 = child(div_184, true);
      reset(div_184);
      var div_185 = sibling(div_184, 2);
      var node_53 = child(div_185);
      Switch_1(node_53, {
        ariaLabelledbyId: "image-compression-in-channels-label",
        tooltip: true,
        get state() {
          return get(imageCompressionInChannels);
        },
        set state($$value) {
          set(imageCompressionInChannels, $$value);
        },
        $$events: {
          change: () => {
            saveSettings()({
              imageCompressionInChannels: get(imageCompressionInChannels)
            });
          }
        },
        $$legacy: true
      });
      reset(div_185);
      reset(div_183);
      reset(div_182);
      template_effect(($0) => set_text(text_60, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Compress Images in Channels")))
      ]);
      append($$anchor2, div_182);
    };
    if_block(node_52, ($$render) => {
      if (get(imageCompression)) $$render(consequent_9);
    });
  }
  reset(div_1);
  reset(div);
  var div_186 = sibling(div, 2);
  var button_10 = child(div_186);
  var text_61 = child(button_10, true);
  reset(button_10);
  reset(div_186);
  reset(form);
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51) => {
      set_text(text2, $0);
      set_text(text_1, $1);
      set_text(text_4, `${$2 ?? ""} (${$3 ?? ""})`);
      set_text(text_5, $4);
      set_text(text_6, $5);
      set_text(text_8, $6);
      set_text(text_9, `${$7 ?? ""} (${$8 ?? ""})`);
      set_text(text_10, $9);
      set_text(text_13, $10);
      set_text(text_14, $11);
      set_text(text_15, $12);
      set_text(text_16, $13);
      set_text(text_17, $14);
      set_text(text_18, $15);
      set_text(text_19, $16);
      set_text(text_20, $17);
      set_text(text_22, $18);
      set_text(text_23, $19);
      set_text(text_24, $20);
      set_text(text_25, $21);
      set_text(text_26, $22);
      set_text(text_27, $23);
      set_text(text_28, $24);
      set_text(text_29, $25);
      set_text(text_30, $26);
      set_text(text_31, $27);
      set_text(text_32, $28);
      set_text(text_33, $29);
      set_text(text_34, $30);
      set_text(text_35, $31);
      set_text(text_36, $32);
      set_text(text_37, $33);
      set_text(text_38, $34);
      set_text(text_40, $35);
      set_text(text_41, $36);
      set_text(text_42, $37);
      set_text(text_43, $38);
      set_text(text_44, $39);
      set_text(text_45, $40);
      set_text(text_49, $41);
      set_text(text_50, $42);
      set_text(text_51, $43);
      set_text(text_52, $44);
      set_text(text_53, $45);
      set_text(text_54, $46);
      set_text(text_55, $47);
      set_text(text_56, $48);
      set_text(text_57, $49);
      set_text(text_58, $50);
      set_text(text_61, $51);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("UI"))),
      () => ($i18n(), untrack(() => $i18n().t("UI Scale"))),
      () => ($i18n(), untrack(() => $i18n().t("High Contrast Mode"))),
      () => ($i18n(), untrack(() => $i18n().t("Beta"))),
      () => ($i18n(), untrack(() => $i18n().t("Display chat title in tab"))),
      () => ($i18n(), untrack(() => $i18n().t("Notification Sound"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow User Location"))),
      () => ($i18n(), untrack(() => $i18n().t("Haptic Feedback"))),
      () => ($i18n(), untrack(() => $i18n().t("Android"))),
      () => ($i18n(), untrack(() => $i18n().t("Copy Formatted Text"))),
      () => ($i18n(), untrack(() => $i18n().t("Chat"))),
      () => ($i18n(), untrack(() => $i18n().t("Chat direction"))),
      () => (get(chatDirection), $i18n(), untrack(() => get(chatDirection) === "LTR" ? $i18n().t("LTR") : get(chatDirection) === "RTL" ? $i18n().t("RTL") : $i18n().t("Auto"))),
      () => ($i18n(), untrack(() => $i18n().t("Landing Page Mode"))),
      () => (get(landingPageMode), $i18n(), untrack(() => get(landingPageMode) === "" ? $i18n().t("Default") : $i18n().t("Chat"))),
      () => ($i18n(), untrack(() => $i18n().t("Chat Background Image"))),
      () => (get(backgroundImageUrl), $i18n(), untrack(() => get(backgroundImageUrl) !== null ? $i18n().t("Reset") : $i18n().t("Upload"))),
      () => ($i18n(), untrack(() => $i18n().t("Chat Bubble UI"))),
      () => ($i18n(), untrack(() => $i18n().t("Widescreen Mode"))),
      () => ($i18n(), untrack(() => $i18n().t("Temporary Chat by Default"))),
      () => ($i18n(), untrack(() => $i18n().t("Fade Effect for Streaming Text"))),
      () => ($i18n(), untrack(() => $i18n().t("Title Auto-Generation"))),
      () => ($i18n(), untrack(() => $i18n().t("Follow-Up Auto-Generation"))),
      () => ($i18n(), untrack(() => $i18n().t("Chat Tags Auto-Generation"))),
      () => ($i18n(), untrack(() => $i18n().t("Auto-Copy Response to Clipboard"))),
      () => ($i18n(), untrack(() => $i18n().t("Insert Suggestion Prompt to Input"))),
      () => ($i18n(), untrack(() => $i18n().t("Keep Follow-Up Prompts in Chat"))),
      () => ($i18n(), untrack(() => $i18n().t("Insert Follow-Up Prompt to Input"))),
      () => ($i18n(), untrack(() => $i18n().t("Regenerate Menu"))),
      () => ($i18n(), untrack(() => $i18n().t("Always Collapse Code Blocks"))),
      () => ($i18n(), untrack(() => $i18n().t("Always Expand Details"))),
      () => ($i18n(), untrack(() => $i18n().t("Display Multi-model Responses in Tabs"))),
      () => ($i18n(), untrack(() => $i18n().t("Scroll On Branch Change"))),
      () => ($i18n(), untrack(() => $i18n().t("Stylized PDF Export"))),
      () => ($i18n(), untrack(() => $i18n().t("Floating Quick Actions"))),
      () => ($i18n(), untrack(() => $i18n().t("Web Search in Chat"))),
      () => (get(webSearch), $i18n(), untrack(() => get(webSearch) === "always" ? $i18n().t("Always") : $i18n().t("Default"))),
      () => ($i18n(), untrack(() => $i18n().t("Input"))),
      () => ($i18n(), untrack(() => $i18n().t("Enter Key Behavior"))),
      () => (get(ctrlEnterToSend), $i18n(), untrack(() => get(ctrlEnterToSend) === true ? $i18n().t("Ctrl+Enter to Send") : $i18n().t("Enter to Send"))),
      () => ($i18n(), untrack(() => $i18n().t("Rich Text Input for Chat"))),
      () => ($i18n(), untrack(() => $i18n().t("Paste Large Text as File"))),
      () => ($i18n(), untrack(() => $i18n().t("Artifacts"))),
      () => ($i18n(), untrack(() => $i18n().t("Detect Artifacts Automatically"))),
      () => ($i18n(), untrack(() => $i18n().t("iframe Sandbox Allow Same Origin"))),
      () => ($i18n(), untrack(() => $i18n().t("iframe Sandbox Allow Forms"))),
      () => ($i18n(), untrack(() => $i18n().t("Voice"))),
      () => ($i18n(), untrack(() => $i18n().t("Allow Voice Interruption in Call"))),
      () => ($i18n(), untrack(() => $i18n().t("Display Emoji in Call"))),
      () => ($i18n(), untrack(() => $i18n().t("File"))),
      () => ($i18n(), untrack(() => $i18n().t("Image Compression"))),
      () => ($i18n(), untrack(() => $i18n().t("Save")))
    ]
  );
  bind_files(input, () => get(inputFiles), ($$value) => set(inputFiles, $$value));
  event("change", input, () => {
    let reader = new FileReader();
    reader.onload = (event2) => {
      let originalImageUrl = `${event2.target.result}`;
      set(backgroundImageUrl, originalImageUrl);
      saveSettings()({ backgroundImageUrl: get(backgroundImageUrl) });
    };
    if (get(inputFiles) && get(inputFiles).length > 0 && ["image/gif", "image/webp", "image/jpeg", "image/png"].includes(get(inputFiles)[0]["type"])) {
      reader.readAsDataURL(get(inputFiles)[0]);
    } else {
      console.log(`Unsupported File Type '${get(inputFiles)[0]["type"]}'.`);
      set(inputFiles, null);
    }
  });
  event("click", button, () => {
    if (get(textScale) === null) {
      set(textScale, 1);
    } else {
      set(textScale, null);
      setTextScaleHandler(1);
    }
  });
  event("click", button_3, toggleChangeChatDirection);
  event("click", button_4, () => {
    toggleLandingPageMode();
  });
  event("click", button_5, () => {
    if (get(backgroundImageUrl) !== null) {
      set(backgroundImageUrl, null);
      saveSettings()({ backgroundImageUrl: get(backgroundImageUrl) });
    } else {
      get(filesInputElement).click();
    }
  });
  event("click", button_7, () => {
    toggleWebSearch();
  });
  event("click", button_8, () => {
    togglectrlEnterToSend();
  });
  event("submit", form, preventDefault(() => {
    updateInterfaceHandler();
    dispatch("save");
  }));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$a = from_html(`<input type="text" class=" text-sm text-right bg-transparent dark:text-gray-300 outline-hidden"/>`);
var root_1$c = from_html(`<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <div class="flex items-center relative"><select class="dark:bg-gray-900 w-fit pr-8 rounded-sm px-2 p-1 text-xs bg-transparent outline-hidden text-right"><option> </option><option> </option></select></div></div> <div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <div class="flex items-center relative text-xs px-3"><!></div></div>`, 1);
var root_3$4 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_4$7 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_5$4 = from_html(`<div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <div class="flex items-center relative"><select class="dark:bg-gray-900 w-fit pr-8 rounded-sm px-2 p-1 text-xs bg-transparent outline-hidden text-right"><option disabled selected> </option><option>fp32</option><option>fp16</option><option>q8</option><option>q4</option></select></div></div>`);
var root_6$3 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_7 = from_html(`<span class="ml-2 self-center"> </span>`);
var root_10 = from_html(`<option> </option>`);
var root_9$1 = from_html(`<div><div class=" mb-2.5 text-sm font-medium"> </div> <div class="flex w-full"><div class="flex-1"><input list="voice-list" class="w-full text-sm bg-transparent dark:text-gray-300 outline-hidden"/> <datalist id="voice-list"></datalist></div></div></div>`);
var root_11 = from_html(`<div><div class=" mb-2.5 text-sm font-medium flex gap-2 items-center"><!> <div class=" text-sm font-medium shimmer"> </div></div> <div class="text-xs text-gray-500"> </div></div>`);
var root_14$1 = from_html(`<option class="bg-gray-100 dark:bg-gray-700"> </option>`);
var root_13 = from_html(`<div><div class=" mb-2.5 text-sm font-medium"> </div> <div class="flex w-full"><div class="flex-1"><select class="w-full text-sm bg-transparent dark:text-gray-300 outline-hidden"><option> </option><!></select></div></div> <div class="flex items-center justify-between my-1.5"><div class="text-xs"> </div> <div class="mt-1"><!></div></div></div>`);
var root_17 = from_html(`<option> </option>`);
var root_16$1 = from_html(`<div><div class=" mb-2.5 text-sm font-medium"> </div> <div class="flex w-full"><div class="flex-1"><input list="voice-list" class="w-full text-sm bg-transparent dark:text-gray-300 outline-hidden"/> <datalist id="voice-list"></datalist></div></div></div>`);
var root$g = from_html(`<form id="tab-audio" class="flex flex-col h-full justify-between space-y-3 text-sm"><div class=" space-y-3 overflow-y-scroll max-h-[28rem] md:max-h-full"><div><div class=" mb-1 text-sm font-medium"> </div> <!> <div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div></div> <div><div class=" mb-1 text-sm font-medium"> </div> <div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <div class="flex items-center relative"><select class="dark:bg-gray-900 w-fit pr-8 rounded-sm px-2 p-1 text-xs bg-transparent outline-hidden text-right"><option> </option><option> </option></select></div></div> <!> <div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <button class="p-1 px-3 text-xs flex rounded-sm transition" type="button"><!></button></div> <div class=" py-0.5 flex w-full justify-between"><div class=" self-center text-xs font-medium"> </div> <div class="flex items-center relative text-xs px-3"><input type="number" min="0" step="0.01" class=" text-sm text-right bg-transparent dark:text-gray-300 outline-hidden"/> x</div></div></div> <hr class=" border-gray-100 dark:border-gray-850"/> <!></div> <div class="flex justify-end text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form>`);
function Audio($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let saveSettings = prop($$props, "saveSettings", 8);
  let speechAutoSend = mutable_source(false);
  let responseAutoPlayback = mutable_source(false);
  let nonLocalVoices = mutable_source(false);
  let STTEngine = mutable_source("");
  let STTLanguage = mutable_source("");
  let TTSEngine = mutable_source("");
  let TTSEngineConfig = mutable_source({});
  let TTSModel = mutable_source(null);
  let TTSModelProgress = mutable_source(null);
  let voices = mutable_source([]);
  let voice = mutable_source("");
  let playbackRate = mutable_source(1);
  const getVoices$1 = async () => {
    if (get(TTSEngine) === "browser-kokoro") {
      if (!get(TTSModel)) {
        await loadKokoro();
      }
      set(voices, Object.entries(get(TTSModel).voices).map(([key, value]) => {
        return { id: key, name: value.name, localService: false };
      }));
    } else {
      if ($config().audio.tts.engine === "") {
        const getVoicesLoop = setInterval(
          async () => {
            set(voices, await speechSynthesis.getVoices());
            if (get(voices).length > 0) {
              clearInterval(getVoicesLoop);
            }
          },
          100
        );
      } else {
        const res = await getVoices(localStorage.token).catch((e) => {
          toast.error(`${e}`);
        });
        if (res) {
          console.log(res);
          set(voices, res.voices);
        }
      }
    }
  };
  const toggleResponseAutoPlayback = async () => {
    set(responseAutoPlayback, !get(responseAutoPlayback));
    saveSettings()({ responseAutoPlayback: get(responseAutoPlayback) });
  };
  const toggleSpeechAutoSend = async () => {
    set(speechAutoSend, !get(speechAutoSend));
    saveSettings()({ speechAutoSend: get(speechAutoSend) });
  };
  onMount(async () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
    set(playbackRate, ((_b = (_a = $settings().audio) == null ? void 0 : _a.tts) == null ? void 0 : _b.playbackRate) ?? 1);
    $settings().conversationMode ?? false;
    set(speechAutoSend, $settings().speechAutoSend ?? false);
    set(responseAutoPlayback, $settings().responseAutoPlayback ?? false);
    set(STTEngine, ((_e = (_d = (_c = $settings()) == null ? void 0 : _c.audio) == null ? void 0 : _d.stt) == null ? void 0 : _e.engine) ?? "");
    set(STTLanguage, ((_h = (_g = (_f = $settings()) == null ? void 0 : _f.audio) == null ? void 0 : _g.stt) == null ? void 0 : _h.language) ?? "");
    set(TTSEngine, ((_k = (_j = (_i = $settings()) == null ? void 0 : _i.audio) == null ? void 0 : _j.tts) == null ? void 0 : _k.engine) ?? "");
    set(TTSEngineConfig, ((_n = (_m = (_l = $settings()) == null ? void 0 : _l.audio) == null ? void 0 : _m.tts) == null ? void 0 : _n.engineConfig) ?? {});
    if (((_q = (_p = (_o = $settings()) == null ? void 0 : _o.audio) == null ? void 0 : _p.tts) == null ? void 0 : _q.defaultVoice) === $config().audio.tts.voice) {
      set(voice, ((_t = (_s = (_r = $settings()) == null ? void 0 : _r.audio) == null ? void 0 : _s.tts) == null ? void 0 : _t.voice) ?? $config().audio.tts.voice ?? "");
    } else {
      set(voice, $config().audio.tts.voice ?? "");
    }
    set(nonLocalVoices, ((_v = (_u = $settings().audio) == null ? void 0 : _u.tts) == null ? void 0 : _v.nonLocalVoices) ?? false);
    await getVoices$1();
  });
  const onTTSEngineChange = async () => {
    if (get(TTSEngine) === "browser-kokoro") {
      await loadKokoro();
    }
  };
  const loadKokoro = async () => {
    var _a;
    if (get(TTSEngine) === "browser-kokoro") {
      set(voices, []);
      if ((_a = get(TTSEngineConfig)) == null ? void 0 : _a.dtype) {
        set(TTSModel, null);
        set(TTSModelProgress, null);
        const model_id = "onnx-community/Kokoro-82M-v1.0-ONNX";
        const { KokoroTTS } = await __vitePreload(async () => {
          const { KokoroTTS: KokoroTTS2 } = await import("../chunks/C7w8oddz.js");
          return { KokoroTTS: KokoroTTS2 };
        }, true ? __vite__mapDeps([3,4,5,1,6,7]) : void 0, import.meta.url);
        set(TTSModel, await KokoroTTS.from_pretrained(model_id, {
          dtype: get(
            TTSEngineConfig
            // Options: "fp32", "fp16", "q8", "q4", "q4f16"
          ).dtype,
          device: !!(navigator == null ? void 0 : navigator.gpu) ? "webgpu" : "wasm",
          // Detect WebGPU
          progress_callback: (e) => {
            set(TTSModelProgress, e);
            console.log(e);
          }
        }));
        await getVoices$1();
      }
    }
  };
  legacy_pre_effect(() => (get(TTSEngine), get(TTSEngineConfig)), () => {
    if (get(TTSEngine) && get(TTSEngineConfig)) {
      onTTSEngineChange();
    }
  });
  legacy_pre_effect_reset();
  init();
  var form = root$g();
  var div = child(form);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var text2 = child(div_2, true);
  reset(div_2);
  var node = sibling(div_2, 2);
  {
    var consequent = ($$anchor2) => {
      var fragment = root_1$c();
      var div_3 = first_child(fragment);
      var div_4 = child(div_3);
      var text_1 = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 2);
      var select = child(div_5);
      template_effect(() => {
        get(STTEngine);
        invalidate_inner_signals(() => {
          $i18n();
        });
      });
      var option = child(select);
      var text_2 = child(option, true);
      reset(option);
      option.value = option.__value = "";
      var option_1 = sibling(option);
      var text_3 = child(option_1, true);
      reset(option_1);
      option_1.value = option_1.__value = "web";
      reset(select);
      reset(div_5);
      reset(div_3);
      var div_6 = sibling(div_3, 2);
      var div_7 = child(div_6);
      var text_4 = child(div_7, true);
      reset(div_7);
      var div_8 = sibling(div_7, 2);
      var node_1 = child(div_8);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("The language of the input audio. Supplying the input language in ISO-639-1 (e.g. en) format will improve accuracy and latency. Leave blank to automatically detect the language."))));
        Tooltip(node_1, {
          get content() {
            return get($0);
          },
          placement: "top",
          children: ($$anchor3, $$slotProps) => {
            var input = root_2$a();
            remove_input_defaults(input);
            template_effect(($02) => set_attribute(input, "placeholder", $02), [() => ($i18n(), untrack(() => $i18n().t("e.g. en")))]);
            bind_value(input, () => get(STTLanguage), ($$value) => set(STTLanguage, $$value));
            append($$anchor3, input);
          },
          $$slots: { default: true }
        });
      }
      reset(div_8);
      reset(div_6);
      template_effect(
        ($0, $1, $2, $3, $4) => {
          set_text(text_1, $0);
          set_attribute(select, "placeholder", $1);
          set_text(text_2, $2);
          set_text(text_3, $3);
          set_text(text_4, $4);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Speech-to-Text Engine"))),
          () => ($i18n(), untrack(() => $i18n().t("Select an engine"))),
          () => ($i18n(), untrack(() => $i18n().t("Default"))),
          () => ($i18n(), untrack(() => $i18n().t("Web API"))),
          () => ($i18n(), untrack(() => $i18n().t("Language")))
        ]
      );
      bind_select_value(select, () => get(STTEngine), ($$value) => set(STTEngine, $$value));
      append($$anchor2, fragment);
    };
    if_block(node, ($$render) => {
      if ($config(), untrack(() => $config().audio.stt.engine !== "web")) $$render(consequent);
    });
  }
  var div_9 = sibling(node, 2);
  var div_10 = child(div_9);
  var text_5 = child(div_10, true);
  reset(div_10);
  var button = sibling(div_10, 2);
  var node_2 = child(button);
  {
    var consequent_1 = ($$anchor2) => {
      var span = root_3$4();
      var text_6 = child(span, true);
      reset(span);
      template_effect(($0) => set_text(text_6, $0), [() => ($i18n(), untrack(() => $i18n().t("On")))]);
      append($$anchor2, span);
    };
    var alternate = ($$anchor2) => {
      var span_1 = root_4$7();
      var text_7 = child(span_1, true);
      reset(span_1);
      template_effect(($0) => set_text(text_7, $0), [() => ($i18n(), untrack(() => $i18n().t("Off")))]);
      append($$anchor2, span_1);
    };
    if_block(node_2, ($$render) => {
      if (get(speechAutoSend) === true) $$render(consequent_1);
      else $$render(alternate, false);
    });
  }
  reset(button);
  reset(div_9);
  reset(div_1);
  var div_11 = sibling(div_1, 2);
  var div_12 = child(div_11);
  var text_8 = child(div_12, true);
  reset(div_12);
  var div_13 = sibling(div_12, 2);
  var div_14 = child(div_13);
  var text_9 = child(div_14, true);
  reset(div_14);
  var div_15 = sibling(div_14, 2);
  var select_1 = child(div_15);
  template_effect(() => {
    get(TTSEngine);
    invalidate_inner_signals(() => {
      $i18n();
    });
  });
  var option_2 = child(select_1);
  var text_10 = child(option_2, true);
  reset(option_2);
  option_2.value = option_2.__value = "";
  var option_3 = sibling(option_2);
  var text_11 = child(option_3, true);
  reset(option_3);
  option_3.value = option_3.__value = "browser-kokoro";
  reset(select_1);
  reset(div_15);
  reset(div_13);
  var node_3 = sibling(div_13, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_16 = root_5$4();
      var div_17 = child(div_16);
      var text_12 = child(div_17, true);
      reset(div_17);
      var div_18 = sibling(div_17, 2);
      var select_2 = child(div_18);
      template_effect(() => {
        get(TTSEngineConfig);
        invalidate_inner_signals(() => {
          $i18n();
        });
      });
      var option_4 = child(select_2);
      var text_13 = child(option_4, true);
      reset(option_4);
      option_4.value = option_4.__value = "";
      var option_5 = sibling(option_4);
      option_5.value = option_5.__value = "fp32";
      var option_6 = sibling(option_5);
      option_6.value = option_6.__value = "fp16";
      var option_7 = sibling(option_6);
      option_7.value = option_7.__value = "q8";
      var option_8 = sibling(option_7);
      option_8.value = option_8.__value = "q4";
      reset(select_2);
      reset(div_18);
      reset(div_16);
      template_effect(
        ($0, $1, $2) => {
          set_text(text_12, $0);
          set_attribute(select_2, "placeholder", $1);
          set_text(text_13, $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Kokoro.js Dtype"))),
          () => ($i18n(), untrack(() => $i18n().t("Select dtype"))),
          () => ($i18n(), untrack(() => $i18n().t("Select dtype")))
        ]
      );
      bind_select_value(select_2, () => get(TTSEngineConfig).dtype, ($$value) => mutate(TTSEngineConfig, get(TTSEngineConfig).dtype = $$value));
      append($$anchor2, div_16);
    };
    if_block(node_3, ($$render) => {
      if (get(TTSEngine) === "browser-kokoro") $$render(consequent_2);
    });
  }
  var div_19 = sibling(node_3, 2);
  var div_20 = child(div_19);
  var text_14 = child(div_20, true);
  reset(div_20);
  var button_1 = sibling(div_20, 2);
  var node_4 = child(button_1);
  {
    var consequent_3 = ($$anchor2) => {
      var span_2 = root_6$3();
      var text_15 = child(span_2, true);
      reset(span_2);
      template_effect(($0) => set_text(text_15, $0), [() => ($i18n(), untrack(() => $i18n().t("On")))]);
      append($$anchor2, span_2);
    };
    var alternate_1 = ($$anchor2) => {
      var span_3 = root_7();
      var text_16 = child(span_3, true);
      reset(span_3);
      template_effect(($0) => set_text(text_16, $0), [() => ($i18n(), untrack(() => $i18n().t("Off")))]);
      append($$anchor2, span_3);
    };
    if_block(node_4, ($$render) => {
      if (get(responseAutoPlayback) === true) $$render(consequent_3);
      else $$render(alternate_1, false);
    });
  }
  reset(button_1);
  reset(div_19);
  var div_21 = sibling(div_19, 2);
  var div_22 = child(div_21);
  var text_17 = child(div_22, true);
  reset(div_22);
  var div_23 = sibling(div_22, 2);
  var input_1 = child(div_23);
  remove_input_defaults(input_1);
  next();
  reset(div_23);
  reset(div_21);
  reset(div_11);
  var node_5 = sibling(div_11, 4);
  {
    var consequent_5 = ($$anchor2) => {
      var fragment_1 = comment();
      var node_6 = first_child(fragment_1);
      {
        var consequent_4 = ($$anchor3) => {
          var div_24 = root_9$1();
          var div_25 = child(div_24);
          var text_18 = child(div_25, true);
          reset(div_25);
          var div_26 = sibling(div_25, 2);
          var div_27 = child(div_26);
          var input_2 = child(div_27);
          remove_input_defaults(input_2);
          var datalist = sibling(input_2, 2);
          each(datalist, 5, () => get(voices), index, ($$anchor4, voice2, $$index, $$array) => {
            var option_9 = root_10();
            var text_19 = child(option_9, true);
            reset(option_9);
            var option_9_value = {};
            template_effect(() => {
              set_text(text_19, (get(voice2), untrack(() => get(voice2).name)));
              if (option_9_value !== (option_9_value = (get(voice2), untrack(() => get(voice2).id)))) {
                option_9.value = (option_9.__value = (get(voice2), untrack(() => get(voice2).id))) ?? "";
              }
            });
            append($$anchor4, option_9);
          });
          reset(datalist);
          reset(div_27);
          reset(div_26);
          reset(div_24);
          template_effect(
            ($0, $1) => {
              set_text(text_18, $0);
              set_attribute(input_2, "placeholder", $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Set Voice"))),
              () => ($i18n(), untrack(() => $i18n().t("Select a voice")))
            ]
          );
          bind_value(input_2, () => get(voice), ($$value) => set(voice, $$value));
          append($$anchor3, div_24);
        };
        var alternate_2 = ($$anchor3) => {
          var div_28 = root_11();
          var div_29 = child(div_28);
          var node_7 = child(div_29);
          Spinner(node_7, { className: "size-4" });
          var div_30 = sibling(node_7, 2);
          var text_20 = child(div_30);
          reset(div_30);
          reset(div_29);
          var div_31 = sibling(div_29, 2);
          var text_21 = child(div_31, true);
          reset(div_31);
          reset(div_28);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_20, `${$0 ?? ""}
							${$1 ?? ""}`);
              set_text(text_21, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Loading Kokoro.js..."))),
              () => (get(TTSModelProgress), untrack(() => get(TTSModelProgress) && get(TTSModelProgress).status === "progress" ? `(${Math.round(get(TTSModelProgress).progress * 10) / 10}%)` : "")),
              () => ($i18n(), untrack(() => $i18n().t("Please do not close the settings page while loading the model.")))
            ]
          );
          append($$anchor3, div_28);
        };
        if_block(node_6, ($$render) => {
          if (get(TTSModel)) $$render(consequent_4);
          else $$render(alternate_2, false);
        });
      }
      append($$anchor2, fragment_1);
    };
    var alternate_4 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_8 = first_child(fragment_2);
      {
        var consequent_6 = ($$anchor3) => {
          var div_32 = root_13();
          var div_33 = child(div_32);
          var text_22 = child(div_33, true);
          reset(div_33);
          var div_34 = sibling(div_33, 2);
          var div_35 = child(div_34);
          var select_3 = child(div_35);
          template_effect(() => {
            get(voice);
            invalidate_inner_signals(() => {
              $i18n();
              get(voices);
              get(nonLocalVoices);
            });
          });
          var option_10 = child(select_3);
          var text_23 = child(option_10, true);
          reset(option_10);
          option_10.value = option_10.__value = "";
          var node_9 = sibling(option_10);
          each(
            node_9,
            1,
            () => (get(voices), get(nonLocalVoices), untrack(() => get(voices).filter((v) => get(nonLocalVoices) || v.localService === true))),
            index,
            ($$anchor4, _voice) => {
              var option_11 = root_14$1();
              var text_24 = child(option_11, true);
              reset(option_11);
              var option_11_value = {};
              template_effect(() => {
                set_selected(option_11, (get(voice), get(_voice), untrack(() => get(voice) === get(_voice).name)));
                set_text(text_24, (get(_voice), untrack(() => get(_voice).name)));
                if (option_11_value !== (option_11_value = (get(_voice), untrack(() => get(_voice).name)))) {
                  option_11.value = (option_11.__value = (get(_voice), untrack(() => get(_voice).name))) ?? "";
                }
              });
              append($$anchor4, option_11);
            }
          );
          reset(select_3);
          reset(div_35);
          reset(div_34);
          var div_36 = sibling(div_34, 2);
          var div_37 = child(div_36);
          var text_25 = child(div_37, true);
          reset(div_37);
          var div_38 = sibling(div_37, 2);
          var node_10 = child(div_38);
          Switch_1(node_10, {
            get state() {
              return get(nonLocalVoices);
            },
            set state($$value) {
              set(nonLocalVoices, $$value);
            },
            $$legacy: true
          });
          reset(div_38);
          reset(div_36);
          reset(div_32);
          template_effect(
            ($0, $1, $2) => {
              set_text(text_22, $0);
              set_selected(option_10, get(voice) !== "");
              set_text(text_23, $1);
              set_text(text_25, $2);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Set Voice"))),
              () => ($i18n(), untrack(() => $i18n().t("Default"))),
              () => ($i18n(), untrack(() => $i18n().t("Allow non-local voices")))
            ]
          );
          bind_select_value(select_3, () => get(voice), ($$value) => set(voice, $$value));
          append($$anchor3, div_32);
        };
        var alternate_3 = ($$anchor3) => {
          var fragment_3 = comment();
          var node_11 = first_child(fragment_3);
          {
            var consequent_7 = ($$anchor4) => {
              var div_39 = root_16$1();
              var div_40 = child(div_39);
              var text_26 = child(div_40, true);
              reset(div_40);
              var div_41 = sibling(div_40, 2);
              var div_42 = child(div_41);
              var input_3 = child(div_42);
              remove_input_defaults(input_3);
              var datalist_1 = sibling(input_3, 2);
              each(datalist_1, 5, () => get(voices), index, ($$anchor5, voice2, $$index_2, $$array_1) => {
                var option_12 = root_17();
                var text_27 = child(option_12, true);
                reset(option_12);
                var option_12_value = {};
                template_effect(() => {
                  set_text(text_27, (get(voice2), untrack(() => get(voice2).name)));
                  if (option_12_value !== (option_12_value = (get(voice2), untrack(() => get(voice2).id)))) {
                    option_12.value = (option_12.__value = (get(voice2), untrack(() => get(voice2).id))) ?? "";
                  }
                });
                append($$anchor5, option_12);
              });
              reset(datalist_1);
              reset(div_42);
              reset(div_41);
              reset(div_39);
              template_effect(
                ($0, $1) => {
                  set_text(text_26, $0);
                  set_attribute(input_3, "placeholder", $1);
                },
                [
                  () => ($i18n(), untrack(() => $i18n().t("Set Voice"))),
                  () => ($i18n(), untrack(() => $i18n().t("Select a voice")))
                ]
              );
              bind_value(input_3, () => get(voice), ($$value) => set(voice, $$value));
              append($$anchor4, div_39);
            };
            if_block(
              node_11,
              ($$render) => {
                if ($config(), untrack(() => $config().audio.tts.engine !== "")) $$render(consequent_7);
              },
              true
            );
          }
          append($$anchor3, fragment_3);
        };
        if_block(
          node_8,
          ($$render) => {
            if ($config(), untrack(() => $config().audio.tts.engine === "")) $$render(consequent_6);
            else $$render(alternate_3, false);
          },
          true
        );
      }
      append($$anchor2, fragment_2);
    };
    if_block(node_5, ($$render) => {
      if (get(TTSEngine) === "browser-kokoro") $$render(consequent_5);
      else $$render(alternate_4, false);
    });
  }
  reset(div);
  var div_43 = sibling(div, 2);
  var button_2 = child(div_43);
  var text_28 = child(button_2, true);
  reset(button_2);
  reset(div_43);
  reset(form);
  template_effect(
    ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) => {
      set_text(text2, $0);
      set_text(text_5, $1);
      set_text(text_8, $2);
      set_text(text_9, $3);
      set_attribute(select_1, "placeholder", $4);
      set_text(text_10, $5);
      set_text(text_11, $6);
      set_text(text_14, $7);
      set_text(text_17, $8);
      set_text(text_28, $9);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("STT Settings"))),
      () => ($i18n(), untrack(() => $i18n().t("Instant Auto-Send After Voice Transcription"))),
      () => ($i18n(), untrack(() => $i18n().t("TTS Settings"))),
      () => ($i18n(), untrack(() => $i18n().t("Text-to-Speech Engine"))),
      () => ($i18n(), untrack(() => $i18n().t("Select an engine"))),
      () => ($i18n(), untrack(() => $i18n().t("Default"))),
      () => ($i18n(), untrack(() => $i18n().t("Kokoro.js (Browser)"))),
      () => ($i18n(), untrack(() => $i18n().t("Auto-playback response"))),
      () => ($i18n(), untrack(() => $i18n().t("Speech Playback Speed"))),
      () => ($i18n(), untrack(() => $i18n().t("Save")))
    ]
  );
  event("click", button, () => {
    toggleSpeechAutoSend();
  });
  bind_select_value(select_1, () => get(TTSEngine), ($$value) => set(TTSEngine, $$value));
  event("click", button_1, () => {
    toggleResponseAutoPlayback();
  });
  bind_value(input_1, () => get(playbackRate), ($$value) => set(playbackRate, $$value));
  event("submit", form, preventDefault(async () => {
    var _a, _b, _c;
    saveSettings()({
      audio: {
        stt: {
          engine: get(STTEngine) !== "" ? get(STTEngine) : void 0,
          language: get(STTLanguage) !== "" ? get(STTLanguage) : void 0
        },
        tts: {
          engine: get(TTSEngine) !== "" ? get(TTSEngine) : void 0,
          engineConfig: get(TTSEngineConfig),
          playbackRate: get(playbackRate),
          voice: get(voice) !== "" ? get(voice) : void 0,
          defaultVoice: ((_c = (_b = (_a = $config()) == null ? void 0 : _a.audio) == null ? void 0 : _b.tts) == null ? void 0 : _c.voice) ?? "",
          nonLocalVoices: $config().audio.tts.engine === "" ? get(nonLocalVoices) : void 0
        }
      }
    });
    dispatch("save");
  }));
  append($$anchor, form);
  pop();
  $$cleanup();
}
var root_1$b = from_html(`<button class=" flex rounded-md py-2 px-3.5 w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><div class=" self-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4 3.5a.75.75 0 0 1 .75.75v2.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72V6.25A.75.75 0 0 1 8 5.5Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center text-sm font-medium"> </div></button>`);
var root_2$9 = from_html(`<div class="flex justify-between rounded-md items-center py-2 px-3.5 w-full transition"><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z"></path><path fill-rule="evenodd" d="M13 6H3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6ZM5.72 7.47a.75.75 0 0 1 1.06 0L8 8.69l1.22-1.22a.75.75 0 1 1 1.06 1.06L9.06 9.75l1.22 1.22a.75.75 0 1 1-1.06 1.06L8 10.81l-1.22 1.22a.75.75 0 0 1-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg> <span> </span></div> <div class="flex space-x-1.5 items-center"><button class="hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg></button> <button class="hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div></div>`);
var root_3$3 = from_html(`<button class=" flex rounded-md py-2 px-3.5 w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><div class=" self-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"></path><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center text-sm font-medium"> </div></button>`);
var root_4$6 = from_html(`<div class="flex justify-between rounded-md items-center py-2 px-3.5 w-full transition"><div class="flex items-center space-x-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path d="M2 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z"></path><path fill-rule="evenodd" d="M13 6H3v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6ZM5.72 7.47a.75.75 0 0 1 1.06 0L8 8.69l1.22-1.22a.75.75 0 1 1 1.06 1.06L9.06 9.75l1.22 1.22a.75.75 0 1 1-1.06 1.06L8 10.81l-1.22 1.22a.75.75 0 0 1-1.06-1.06l1.22-1.22-1.22-1.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg> <span> </span></div> <div class="flex space-x-1.5 items-center"><button class="hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd"></path></svg></button> <button class="hover:text-white transition"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div></div>`);
var root_5$3 = from_html(`<button class=" flex rounded-md py-2 px-3.5 w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><div class=" self-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm7 7a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h4.5A.75.75 0 0 1 11 9Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center text-sm font-medium"> </div></button>`);
var root$f = from_html(`<!> <div id="tab-chats" class="flex flex-col h-full justify-between space-y-3 text-sm"><div class=" space-y-2 overflow-y-scroll max-h-[28rem] md:max-h-full"><div class="flex flex-col"><input id="chat-import-input" type="file" accept=".json" hidden=""/> <button class=" flex rounded-md py-2 px-3.5 w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><div class=" self-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm4 9.5a.75.75 0 0 1-.75-.75V8.06l-.72.72a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72v2.69a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center text-sm font-medium"> </div></button> <!></div> <hr class=" border-gray-100 dark:border-gray-850"/> <div class="flex flex-col"><button class=" flex rounded-md py-2 px-3.5 w-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"><div class=" self-center mr-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z"></path><path fill-rule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087ZM12 10.5a.75.75 0 0 1 .75.75v4.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72v-4.94a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"></path></svg></div> <div class=" self-center text-sm font-medium"> </div></button> <!> <!></div></div></div>`, 1);
function DataControls($$anchor, $$props) {
  push($$props, false);
  const $currentChatPage = () => store_get(currentChatPage, "$currentChatPage", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  prop($$props, "saveSettings", 8);
  let importFiles = mutable_source();
  let showArchiveConfirm = mutable_source(false);
  let showDeleteConfirm = mutable_source(false);
  let showArchivedChatsModal = mutable_source(false);
  let chatImportInputElement = mutable_source();
  const importChatsHandler = async (_chats) => {
    const res = await importChats(localStorage.token, _chats.map((chat) => {
      if (chat.chat) {
        return {
          chat: chat.chat,
          meta: chat.meta ?? {},
          pinned: false,
          folder_id: (chat == null ? void 0 : chat.folder_id) ?? null,
          created_at: (chat == null ? void 0 : chat.created_at) ?? null,
          updated_at: (chat == null ? void 0 : chat.updated_at) ?? null
        };
      } else {
        return {
          chat,
          meta: {},
          pinned: false,
          folder_id: null,
          created_at: (chat == null ? void 0 : chat.created_at) ?? null,
          updated_at: (chat == null ? void 0 : chat.updated_at) ?? null
        };
      }
    }));
    if (res) {
      toast.success(`Successfully imported ${res.length} chats.`);
    }
    currentChatPage.set(1);
    await chats.set(await getChatList(localStorage.token, $currentChatPage()));
    pinnedChats.set(await getPinnedChatList(localStorage.token));
    scrollPaginationEnabled.set(true);
  };
  const exportChats = async () => {
    let blob = new Blob([JSON.stringify(await getAllChats(localStorage.token))], { type: "application/json" });
    saveAs(blob, `chat-export-${Date.now()}.json`);
  };
  const archiveAllChatsHandler = async () => {
    await goto("/");
    await archiveAllChats(localStorage.token).catch((error) => {
      toast.error(`${error}`);
    });
    currentChatPage.set(1);
    await chats.set(await getChatList(localStorage.token, $currentChatPage()));
    pinnedChats.set([]);
    scrollPaginationEnabled.set(true);
  };
  const deleteAllChatsHandler = async () => {
    await goto("/");
    await deleteAllChats(localStorage.token).catch((error) => {
      toast.error(`${error}`);
    });
    currentChatPage.set(1);
    await chats.set(await getChatList(localStorage.token, $currentChatPage()));
    scrollPaginationEnabled.set(true);
  };
  const handleArchivedChatsChange = async () => {
    currentChatPage.set(1);
    await chats.set(await getChatList(localStorage.token, $currentChatPage()));
    scrollPaginationEnabled.set(true);
  };
  legacy_pre_effect(() => (get(importFiles), convertOpenAIChats), () => {
    if (get(importFiles)) {
      console.log(get(importFiles));
      let reader = new FileReader();
      reader.onload = (event2) => {
        let chats2 = JSON.parse(event2.target.result);
        console.log(chats2);
        if (getImportOrigin(chats2) == "openai") {
          try {
            chats2 = convertOpenAIChats(chats2);
          } catch (error) {
            console.log("Unable to import chats:", error);
          }
        }
        importChatsHandler(chats2);
      };
      if (get(importFiles).length > 0) {
        reader.readAsText(get(importFiles)[0]);
      }
    }
  });
  legacy_pre_effect_reset();
  init();
  var fragment = root$f();
  var node = first_child(fragment);
  ArchivedChatsModal(node, {
    onUpdate: (
      // Legacy format
      handleArchivedChatsChange
    ),
    get show() {
      return get(showArchivedChatsModal);
    },
    set show($$value) {
      set(showArchivedChatsModal, $$value);
    },
    $$legacy: true
  });
  var div = sibling(node, 2);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var input = child(div_2);
  bind_this(input, ($$value) => set(chatImportInputElement, $$value), () => get(chatImportInputElement));
  var button = sibling(input, 2);
  var div_3 = sibling(child(button), 2);
  var text2 = child(div_3, true);
  reset(div_3);
  reset(button);
  var node_1 = sibling(button, 2);
  {
    var consequent = ($$anchor2) => {
      var button_1 = root_1$b();
      var div_4 = sibling(child(button_1), 2);
      var text_1 = child(div_4, true);
      reset(div_4);
      reset(button_1);
      template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Export Chats")))]);
      event("click", button_1, () => {
        exportChats();
      });
      append($$anchor2, button_1);
    };
    if_block(node_1, ($$render) => {
      if ($user(), untrack(() => {
        var _a, _b, _c;
        return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || (((_c = (_b = $user().permissions) == null ? void 0 : _b.chat) == null ? void 0 : _c.export) ?? true);
      })) $$render(consequent);
    });
  }
  reset(div_2);
  var div_5 = sibling(div_2, 4);
  var button_2 = child(div_5);
  var div_6 = sibling(child(button_2), 2);
  var text_2 = child(div_6, true);
  reset(div_6);
  reset(button_2);
  var node_2 = sibling(button_2, 2);
  {
    var consequent_1 = ($$anchor2) => {
      var div_7 = root_2$9();
      var div_8 = child(div_7);
      var span = sibling(child(div_8), 2);
      var text_3 = child(span, true);
      reset(span);
      reset(div_8);
      var div_9 = sibling(div_8, 2);
      var button_3 = child(div_9);
      var button_4 = sibling(button_3, 2);
      reset(div_9);
      reset(div_7);
      template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Are you sure?")))]);
      event("click", button_3, () => {
        archiveAllChatsHandler();
        set(showArchiveConfirm, false);
      });
      event("click", button_4, () => {
        set(showArchiveConfirm, false);
      });
      append($$anchor2, div_7);
    };
    var alternate = ($$anchor2) => {
      var button_5 = root_3$3();
      var div_10 = sibling(child(button_5), 2);
      var text_4 = child(div_10, true);
      reset(div_10);
      reset(button_5);
      template_effect(($0) => set_text(text_4, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Archive All Chats")))
      ]);
      event("click", button_5, () => {
        set(showArchiveConfirm, true);
      });
      append($$anchor2, button_5);
    };
    if_block(node_2, ($$render) => {
      if (get(showArchiveConfirm)) $$render(consequent_1);
      else $$render(alternate, false);
    });
  }
  var node_3 = sibling(node_2, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_11 = root_4$6();
      var div_12 = child(div_11);
      var span_1 = sibling(child(div_12), 2);
      var text_5 = child(span_1, true);
      reset(span_1);
      reset(div_12);
      var div_13 = sibling(div_12, 2);
      var button_6 = child(div_13);
      var button_7 = sibling(button_6, 2);
      reset(div_13);
      reset(div_11);
      template_effect(($0) => set_text(text_5, $0), [() => ($i18n(), untrack(() => $i18n().t("Are you sure?")))]);
      event("click", button_6, () => {
        deleteAllChatsHandler();
        set(showDeleteConfirm, false);
      });
      event("click", button_7, () => {
        set(showDeleteConfirm, false);
      });
      append($$anchor2, div_11);
    };
    var alternate_1 = ($$anchor2) => {
      var button_8 = root_5$3();
      var div_14 = sibling(child(button_8), 2);
      var text_6 = child(div_14, true);
      reset(div_14);
      reset(button_8);
      template_effect(($0) => set_text(text_6, $0), [
        () => ($i18n(), untrack(() => $i18n().t("Delete All Chats")))
      ]);
      event("click", button_8, () => {
        set(showDeleteConfirm, true);
      });
      append($$anchor2, button_8);
    };
    if_block(node_3, ($$render) => {
      if (get(showDeleteConfirm)) $$render(consequent_2);
      else $$render(alternate_1, false);
    });
  }
  reset(div_5);
  reset(div_1);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text2, $0);
      set_text(text_2, $1);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("Import Chats"))),
      () => ($i18n(), untrack(() => $i18n().t("Archived Chats")))
    ]
  );
  bind_files(input, () => get(importFiles), ($$value) => set(importFiles, $$value));
  event("click", button, () => {
    get(chatImportInputElement).click();
  });
  event("click", button_2, () => {
    set(showArchivedChatsModal, true);
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
const getMemories = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/memories/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const addNewMemory = async (token, content) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/memories/add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      content
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateMemoryById = async (token, id, content) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/memories/${id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      content
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteMemoryById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/memories/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteMemoriesByUserId = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/memories/delete/user`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
var root_2$8 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1$a = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div><textarea class=" bg-transparent w-full text-sm rounded-xl p-3 outline outline-1 outline-gray-100 dark:outline-gray-800" rows="6" style="resize: vertical;"></textarea> <div class="text-xs text-gray-500"> </div></div> <div class="flex justify-end pt-1 text-sm font-medium"><button type="submit"> <!></button></div></form></div></div></div>`);
function AddMemoryModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12);
  const i18n = getContext("i18n");
  let loading = mutable_source(false);
  let content = mutable_source("");
  const submitHandler = async () => {
    set(loading, true);
    const res = await addNewMemory(localStorage.token, get(content)).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      console.log(res);
      toast.success($i18n().t("Memory added successfully"));
      set(content, "");
      show(false);
      dispatch("save");
    }
    set(loading, false);
  };
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$a();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var form = child(div_4);
      var div_5 = child(form);
      var textarea = child(div_5);
      remove_textarea_child(textarea);
      var div_6 = sibling(textarea, 2);
      var text_1 = child(div_6);
      reset(div_6);
      reset(div_5);
      var div_7 = sibling(div_5, 2);
      var button_1 = child(div_7);
      var text_2 = child(button_1);
      var node_1 = sibling(text_2);
      {
        var consequent = ($$anchor3) => {
          var div_8 = root_2$8();
          var node_2 = child(div_8);
          Spinner(node_2, {});
          reset(div_8);
          append($$anchor3, div_8);
        };
        if_block(node_1, ($$render) => {
          if (get(loading)) $$render(consequent);
        });
      }
      reset(button_1);
      reset(div_7);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text2, $0);
          set_attribute(textarea, "placeholder", $1);
          set_text(text_1, `ⓘ ${$2 ?? ""}`);
          set_class(button_1, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_1.disabled = get(loading);
          set_text(text_2, `${$3 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Add Memory"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter a detail about yourself for your LLMs to recall"))),
          () => ($i18n(), untrack(() => $i18n().t('Refer to yourself as "User" (e.g., "User is learning Spanish")'))),
          () => ($i18n(), untrack(() => $i18n().t("Add")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(textarea, () => get(content), ($$value) => set(content, $$value));
      event("submit", form, preventDefault(() => {
        submitHandler();
      }));
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_2$7 = from_html(`<div class="ml-2 self-center"><!></div>`);
var root_1$9 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-2"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full px-5 pb-4 md:space-x-4 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6"><form class="flex flex-col w-full"><div><textarea class=" bg-transparent w-full text-sm rounded-xl p-3 outline outline-1 outline-gray-100 dark:outline-gray-800" rows="6" style="resize: vertical;"></textarea> <div class="text-xs text-gray-500"> </div></div> <div class="flex justify-end pt-1 text-sm font-medium"><button type="submit"> <!></button></div></form></div></div></div>`);
function EditMemoryModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  let show = prop($$props, "show", 12);
  let memory = prop($$props, "memory", 24, () => ({}));
  const i18n = getContext("i18n");
  let loading = mutable_source(false);
  let content = mutable_source("");
  const setContent = () => {
    set(content, memory().content);
  };
  const submitHandler = async () => {
    set(loading, true);
    const res = await updateMemoryById(localStorage.token, memory().id, get(content)).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res) {
      console.log(res);
      toast.success($i18n().t("Memory updated successfully"));
      dispatch("save");
      show(false);
    }
    set(loading, false);
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      setContent();
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "sm",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$9();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "size-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var form = child(div_4);
      var div_5 = child(form);
      var textarea = child(div_5);
      remove_textarea_child(textarea);
      var div_6 = sibling(textarea, 2);
      var text_1 = child(div_6);
      reset(div_6);
      reset(div_5);
      var div_7 = sibling(div_5, 2);
      var button_1 = child(div_7);
      var text_2 = child(button_1);
      var node_1 = sibling(text_2);
      {
        var consequent = ($$anchor3) => {
          var div_8 = root_2$7();
          var node_2 = child(div_8);
          Spinner(node_2, {});
          reset(div_8);
          append($$anchor3, div_8);
        };
        if_block(node_1, ($$render) => {
          if (get(loading)) $$render(consequent);
        });
      }
      reset(button_1);
      reset(div_7);
      reset(form);
      reset(div_4);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text2, $0);
          set_attribute(textarea, "placeholder", $1);
          set_text(text_1, `ⓘ ${$2 ?? ""}`);
          set_class(button_1, 1, `px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full ${get(loading) ? " cursor-not-allowed" : ""}`);
          button_1.disabled = get(loading);
          set_text(text_2, `${$3 ?? ""} `);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Edit Memory"))),
          () => ($i18n(), untrack(() => $i18n().t("Enter a detail about yourself for your LLMs to recall"))),
          () => ($i18n(), untrack(() => $i18n().t('Refer to yourself as "User" (e.g., "User is learning Spanish")'))),
          () => ($i18n(), untrack(() => $i18n().t("Update")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(textarea, () => get(content), ($$value) => set(content, $$value));
      event("submit", form, preventDefault(() => {
        submitHandler();
      }));
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_4$5 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 s-FoVA_WMOgxUD"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" class="s-FoVA_WMOgxUD"></path></svg></button>`);
var root_5$2 = from_html(`<button class="self-center w-fit text-sm px-2 py-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg></button>`);
var root_3$2 = from_html(`<tr class="border-b border-gray-50 dark:border-gray-850 items-center"><td class="px-3 py-1"><div class="line-clamp-1"> </div></td><td class=" px-3 py-1 hidden md:flex h-[2.5rem]"><div class="my-auto whitespace-nowrap"> </div></td><td class="px-3 py-1"><div class="flex justify-end w-full"><!> <!></div></td></tr>`);
var root_2$6 = from_html(`<div class="text-left text-sm w-full mb-4 overflow-y-scroll"><div class="relative overflow-x-auto"><table class="w-full text-sm text-left text-gray-600 dark:text-gray-400 table-auto"><thead class="text-xs text-gray-700 uppercase bg-transparent dark:text-gray-200 border-b-2 border-gray-50 dark:border-gray-850"><tr><th scope="col" class="px-3 py-2"> </th><th scope="col" class="px-3 py-2 hidden md:flex"> </th><th scope="col" class="px-3 py-2 text-right"></th></tr></thead><tbody></tbody></table></div></div>`);
var root_6$2 = from_html(`<div class="text-center flex h-full text-sm w-full"><div class=" my-auto pb-10 px-4 w-full text-gray-500"> </div></div>`);
var root_1$8 = from_html(`<div><div class=" flex justify-between dark:text-gray-300 px-5 pt-4 pb-1"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg></button></div> <div class="flex flex-col w-full px-5 pb-5 dark:text-gray-200"><div class=" flex flex-col w-full sm:flex-row sm:justify-center sm:space-x-6 h-[28rem] max-h-screen rounded-xl mb-4 mt-1"><!></div> <div class="flex text-sm font-medium gap-1.5"><button class=" px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-100 dark:outline-gray-800 rounded-3xl"> </button> <button class=" px-3.5 py-1.5 font-medium text-red-500 hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-red-100 dark:outline-red-800 rounded-3xl"> </button></div></div></div>`);
var root$e = from_html(`<!> <!> <!> <!>`, 1);
function ManageModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  createEventDispatcher();
  const i18n = getContext("i18n");
  dayjs2.extend(localizedFormat);
  let show = prop($$props, "show", 12, false);
  let memories = mutable_source([]);
  let loading = mutable_source(true);
  let showAddMemoryModal = mutable_source(false);
  let showEditMemoryModal = mutable_source(false);
  let selectedMemory = mutable_source(null);
  let showClearConfirmDialog = mutable_source(false);
  let onClearConfirmed = async () => {
    const res = await deleteMemoriesByUserId(localStorage.token).catch((error) => {
      toast.error(`${error}`);
      return null;
    });
    if (res && get(memories).length > 0) {
      toast.success($i18n().t("Memory cleared successfully"));
      set(memories, []);
    }
    set(showClearConfirmDialog, false);
  };
  legacy_pre_effect(
    () => (deep_read_state(show()), get(memories), get(loading), getMemories),
    () => {
      if (show() && get(memories).length === 0 && get(loading)) {
        (async () => {
          set(memories, await getMemories(localStorage.token));
          set(loading, false);
        })();
      }
    }
  );
  legacy_pre_effect_reset();
  init();
  var fragment = root$e();
  var node = first_child(fragment);
  Modal(node, {
    size: "lg",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$8();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var node_1 = child(div_4);
      {
        var consequent = ($$anchor3) => {
          var div_5 = root_2$6();
          var div_6 = child(div_5);
          var table = child(div_6);
          var thead = child(table);
          var tr = child(thead);
          var th = child(tr);
          var text_1 = child(th, true);
          reset(th);
          var th_1 = sibling(th);
          var text_2 = child(th_1, true);
          reset(th_1);
          next();
          reset(tr);
          reset(thead);
          var tbody = sibling(thead);
          each(tbody, 5, () => get(memories), index, ($$anchor4, memory) => {
            var tr_1 = root_3$2();
            var td = child(tr_1);
            var div_7 = child(td);
            var text_3 = child(div_7, true);
            reset(div_7);
            reset(td);
            var td_1 = sibling(td);
            var div_8 = child(td_1);
            var text_4 = child(div_8, true);
            reset(div_8);
            reset(td_1);
            var td_2 = sibling(td_1);
            var div_9 = child(td_2);
            var node_2 = child(div_9);
            Tooltip(node_2, {
              content: "Edit",
              children: ($$anchor5, $$slotProps2) => {
                var button_1 = root_4$5();
                event("click", button_1, () => {
                  set(selectedMemory, get(memory));
                  set(showEditMemoryModal, true);
                });
                append($$anchor5, button_1);
              },
              $$slots: { default: true }
            });
            var node_3 = sibling(node_2, 2);
            Tooltip(node_3, {
              content: "Delete",
              children: ($$anchor5, $$slotProps2) => {
                var button_2 = root_5$2();
                event("click", button_2, async () => {
                  const res = await deleteMemoryById(localStorage.token, get(memory).id).catch((error) => {
                    toast.error(`${error}`);
                    return null;
                  });
                  if (res) {
                    toast.success($i18n().t("Memory deleted successfully"));
                    set(memories, await getMemories(localStorage.token));
                  }
                });
                append($$anchor5, button_2);
              },
              $$slots: { default: true }
            });
            reset(div_9);
            reset(td_2);
            reset(tr_1);
            template_effect(
              ($0) => {
                set_text(text_3, (get(memory), untrack(() => get(memory).content)));
                set_text(text_4, $0);
              },
              [
                () => (deep_read_state(dayjs2), get(memory), untrack(() => dayjs2(get(memory).updated_at * 1e3).format("LLL")))
              ]
            );
            append($$anchor4, tr_1);
          });
          reset(tbody);
          reset(table);
          reset(div_6);
          reset(div_5);
          template_effect(
            ($0, $1) => {
              set_text(text_1, $0);
              set_text(text_2, $1);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Name"))),
              () => ($i18n(), untrack(() => $i18n().t("Last Modified")))
            ]
          );
          append($$anchor3, div_5);
        };
        var alternate = ($$anchor3) => {
          var div_10 = root_6$2();
          var div_11 = child(div_10);
          var text_5 = child(div_11, true);
          reset(div_11);
          reset(div_10);
          template_effect(($0) => set_text(text_5, $0), [
            () => ($i18n(), untrack(() => $i18n().t("Memories accessible by LLMs will be shown here.")))
          ]);
          append($$anchor3, div_10);
        };
        if_block(node_1, ($$render) => {
          if (get(memories), untrack(() => get(memories).length > 0)) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_4);
      var div_12 = sibling(div_4, 2);
      var button_3 = child(div_12);
      var text_6 = child(button_3, true);
      reset(button_3);
      var button_4 = sibling(button_3, 2);
      var text_7 = child(button_4, true);
      reset(button_4);
      reset(div_12);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2) => {
          set_text(text2, $0);
          set_text(text_6, $1);
          set_text(text_7, $2);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Memory"))),
          () => ($i18n(), untrack(() => $i18n().t("Add Memory"))),
          () => ($i18n(), untrack(() => $i18n().t("Clear memory")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      event("click", button_3, () => {
        set(showAddMemoryModal, true);
      });
      event("click", button_4, () => {
        if (get(memories).length > 0) {
          set(showClearConfirmDialog, true);
        } else {
          toast.error($i18n().t("No memories to clear"));
        }
      });
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  var node_4 = sibling(node, 2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Clear Memory"))));
    let $1 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Are you sure you want to clear all memories? This action cannot be undone."))));
    ConfirmDialog(node_4, {
      get title() {
        return get($0);
      },
      get message() {
        return get($1);
      },
      get show() {
        return get(showClearConfirmDialog);
      },
      $$events: {
        confirm: onClearConfirmed,
        cancel: () => {
          set(showClearConfirmDialog, false);
        }
      }
    });
  }
  var node_5 = sibling(node_4, 2);
  AddMemoryModal(node_5, {
    get show() {
      return get(showAddMemoryModal);
    },
    set show($$value) {
      set(showAddMemoryModal, $$value);
    },
    $$events: {
      save: async () => {
        set(memories, await getMemories(localStorage.token));
      }
    },
    $$legacy: true
  });
  var node_6 = sibling(node_5, 2);
  EditMemoryModal(node_6, {
    get memory() {
      return get(selectedMemory);
    },
    get show() {
      return get(showEditMemoryModal);
    },
    set show($$value) {
      set(showEditMemoryModal, $$value);
    },
    $$events: {
      save: async () => {
        set(memories, await getMemories(localStorage.token));
      }
    },
    $$legacy: true
  });
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_1$7 = from_html(`<div class="text-sm font-medium"> <span class=" text-xs text-gray-500"> </span></div>`);
var root$d = from_html(`<!> <form id="tab-personalization" class="flex flex-col h-full justify-between space-y-3 text-sm"><div class="py-1 overflow-y-scroll max-h-[28rem] md:max-h-full"><div><div class="flex items-center justify-between mb-1"><!> <div><!></div></div></div> <div class="text-xs text-gray-600 dark:text-gray-400"><div> </div></div> <div class="mt-3 mb-1 ml-1"><button type="button" class=" px-3.5 py-1.5 font-medium hover:bg-black/5 dark:hover:bg-white/5 outline outline-1 outline-gray-300 dark:outline-gray-800 rounded-3xl"> </button></div></div> <div class="flex justify-end text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form>`, 1);
function Personalization($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const dispatch = createEventDispatcher();
  const i18n = getContext("i18n");
  let saveSettings = prop($$props, "saveSettings", 8);
  let showManageModal = mutable_source(false);
  let enableMemory = mutable_source(false);
  onMount(async () => {
    var _a;
    set(enableMemory, ((_a = $settings()) == null ? void 0 : _a.memory) ?? false);
  });
  init();
  var fragment = root$d();
  var node = first_child(fragment);
  ManageModal(node, {
    get show() {
      return get(showManageModal);
    },
    set show($$value) {
      set(showManageModal, $$value);
    },
    $$legacy: true
  });
  var form = sibling(node, 2);
  var div = child(form);
  var div_1 = child(div);
  var div_2 = child(div_1);
  var node_1 = child(div_2);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("This is an experimental feature, it may not function as expected and is subject to change at any time."))));
    Tooltip(node_1, {
      get content() {
        return get($0);
      },
      children: ($$anchor2, $$slotProps) => {
        var div_3 = root_1$7();
        var text2 = child(div_3);
        var span = sibling(text2);
        var text_1 = child(span);
        reset(span);
        reset(div_3);
        template_effect(
          ($02, $1) => {
            set_text(text2, `${$02 ?? ""} `);
            set_text(text_1, `(${$1 ?? ""})`);
          },
          [
            () => ($i18n(), untrack(() => $i18n().t("Memory"))),
            () => ($i18n(), untrack(() => $i18n().t("Experimental")))
          ]
        );
        append($$anchor2, div_3);
      },
      $$slots: { default: true }
    });
  }
  var div_4 = sibling(node_1, 2);
  var node_2 = child(div_4);
  Switch_1(node_2, {
    get state() {
      return get(enableMemory);
    },
    set state($$value) {
      set(enableMemory, $$value);
    },
    $$events: {
      change: async () => {
        saveSettings()({ memory: get(enableMemory) });
      }
    },
    $$legacy: true
  });
  reset(div_4);
  reset(div_2);
  reset(div_1);
  var div_5 = sibling(div_1, 2);
  var div_6 = child(div_5);
  var text_2 = child(div_6, true);
  reset(div_6);
  reset(div_5);
  var div_7 = sibling(div_5, 2);
  var button = child(div_7);
  var text_3 = child(button, true);
  reset(button);
  reset(div_7);
  reset(div);
  var div_8 = sibling(div, 2);
  var button_1 = child(div_8);
  var text_4 = child(button_1, true);
  reset(button_1);
  reset(div_8);
  reset(form);
  template_effect(
    ($0, $1, $2) => {
      set_text(text_2, $0);
      set_text(text_3, $1);
      set_text(text_4, $2);
    },
    [
      () => ($i18n(), untrack(() => $i18n().t("You can personalize your interactions with LLMs by adding memories through the 'Manage' button below, making them more helpful and tailored to you."))),
      () => ($i18n(), untrack(() => $i18n().t("Manage"))),
      () => ($i18n(), untrack(() => $i18n().t("Save")))
    ]
  );
  event("click", button, () => {
    set(showManageModal, true);
  });
  event("submit", form, preventDefault(() => {
    dispatch("save");
  }));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$5 = from_html(`<div class="absolute top-0 bottom-0 left-0 right-0 opacity-60 bg-white dark:bg-gray-900 z-10"></div>`);
var root_1$6 = from_html(`<!> <div class="flex w-full gap-2"><div class="flex-1 relative"><input autocomplete="off"/></div></div>`, 1);
var root_3$1 = from_html(`<button class="self-center p-1 bg-transparent hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-850 rounded-lg transition" type="button"><!></button>`);
var root$c = from_html(`<!> <!> <div class="flex w-full gap-2 items-center"><!> <div class="flex gap-1"><!></div></div>`, 1);
function Connection($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let onDelete = prop($$props, "onDelete", 8, () => {
  });
  let onSubmit = prop($$props, "onSubmit", 8, () => {
  });
  let pipeline = prop($$props, "pipeline", 8, false);
  let url = prop($$props, "url", 12, "");
  let key = prop($$props, "key", 12, "");
  let config2 = prop($$props, "config", 28, () => ({}));
  let showConfigModal = mutable_source(false);
  let showDeleteConfirmDialog = mutable_source(false);
  init();
  var fragment = root$c();
  var node = first_child(fragment);
  {
    let $0 = derived_safe_equal(() => ({ url: url(), key: key(), config: config2() }));
    AddConnectionModal(node, {
      edit: true,
      direct: true,
      get connection() {
        return get($0);
      },
      onDelete: () => {
        set(showDeleteConfirmDialog, true);
      },
      onSubmit: (connection) => {
        url(connection.url);
        key(connection.key);
        config2(connection.config);
        onSubmit()(connection);
      },
      get show() {
        return get(showConfigModal);
      },
      set show($$value) {
        set(showConfigModal, $$value);
      },
      $$legacy: true
    });
  }
  var node_1 = sibling(node, 2);
  ConfirmDialog(node_1, {
    get show() {
      return get(showDeleteConfirmDialog);
    },
    set show($$value) {
      set(showDeleteConfirmDialog, $$value);
    },
    $$events: {
      confirm: () => {
        onDelete()();
        set(showConfigModal, false);
      }
    },
    $$legacy: true
  });
  var div = sibling(node_1, 2);
  var node_2 = child(div);
  {
    let $0 = derived_safe_equal(() => ($i18n(), deep_read_state(url()), untrack(() => $i18n().t(`WebUI will make requests to "{{url}}/chat/completions"`, { url: url() }))));
    Tooltip(node_2, {
      className: "w-full relative",
      get content() {
        return get($0);
      },
      placement: "top-start",
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_1$6();
        var node_3 = first_child(fragment_1);
        {
          var consequent = ($$anchor3) => {
            var div_1 = root_2$5();
            append($$anchor3, div_1);
          };
          if_block(node_3, ($$render) => {
            if (deep_read_state(config2()), untrack(() => {
              var _a;
              return !(((_a = config2()) == null ? void 0 : _a.enable) ?? true);
            })) $$render(consequent);
          });
        }
        var div_2 = sibling(node_3, 2);
        var div_3 = child(div_2);
        var input = child(div_3);
        remove_input_defaults(input);
        reset(div_3);
        reset(div_2);
        template_effect(
          ($02) => {
            set_class(input, 1, ($settings(), deep_read_state(pipeline()), untrack(() => {
              var _a;
              return `w-full bg-transparent ${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "" : "outline-hidden"} ${pipeline() ? "pr-8" : ""}`;
            })));
            set_attribute(input, "placeholder", $02);
          },
          [() => ($i18n(), untrack(() => $i18n().t("API Base URL")))]
        );
        bind_value(input, url);
        append($$anchor2, fragment_1);
      },
      $$slots: { default: true }
    });
  }
  var div_4 = sibling(node_2, 2);
  var node_4 = child(div_4);
  {
    let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t("Configure"))));
    Tooltip(node_4, {
      get content() {
        return get($0);
      },
      className: "self-start",
      children: ($$anchor2, $$slotProps) => {
        var button = root_3$1();
        var node_5 = child(button);
        Cog6(node_5, {});
        reset(button);
        template_effect(($02) => set_attribute(button, "aria-label", $02), [
          () => ($i18n(), untrack(() => $i18n().t("Open modal to configure connection")))
        ]);
        event("click", button, () => {
          set(showConfigModal, true);
        });
        append($$anchor2, button);
      },
      $$slots: { default: true }
    });
  }
  reset(div_4);
  reset(div);
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$4 = from_html(`<button class="px-1" type="button"><!></button>`);
var root_1$5 = from_html(`<div><div class="pr-1.5"><div><div class="flex justify-between items-center mb-0.5"><div class="font-medium"> </div> <!></div> <div class="flex flex-col gap-1.5"></div></div> <div class="my-1.5"><div> <br/> </div></div></div></div>`);
var root_4$4 = from_html(`<div class="flex h-full justify-center"><div class="my-auto"><!></div></div>`);
var root$b = from_html(`<!> <form id="tab-connections" class="flex flex-col h-full justify-between text-sm"><div class=" overflow-y-scroll scrollbar-hidden h-full"><!></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form>`, 1);
function Connections($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  createEventDispatcher();
  const i18n = getContext("i18n");
  let saveSettings = prop($$props, "saveSettings", 8);
  let config2 = mutable_source(null);
  let showConnectionModal = mutable_source(false);
  const addConnectionHandler = async (connection) => {
    get(config2).OPENAI_API_BASE_URLS.push(connection.url);
    get(config2).OPENAI_API_KEYS.push(connection.key);
    mutate(config2, get(config2).OPENAI_API_CONFIGS[get(config2).OPENAI_API_BASE_URLS.length - 1] = connection.config);
    await updateHandler();
  };
  const updateHandler = async () => {
    mutate(config2, get(config2).OPENAI_API_BASE_URLS = get(config2).OPENAI_API_BASE_URLS.map((url) => url.replace(/\/$/, "")));
    if (get(config2).OPENAI_API_KEYS.length !== get(config2).OPENAI_API_BASE_URLS.length) {
      if (get(config2).OPENAI_API_KEYS.length > get(config2).OPENAI_API_BASE_URLS.length) {
        mutate(config2, get(config2).OPENAI_API_KEYS = get(config2).OPENAI_API_KEYS.slice(0, get(config2).OPENAI_API_BASE_URLS.length));
      }
      if (get(config2).OPENAI_API_KEYS.length < get(config2).OPENAI_API_BASE_URLS.length) {
        const diff = get(config2).OPENAI_API_BASE_URLS.length - get(config2).OPENAI_API_KEYS.length;
        for (let i = 0; i < diff; i++) {
          get(config2).OPENAI_API_KEYS.push("");
        }
      }
    }
    await saveSettings()({ directConnections: get(config2) });
  };
  onMount(async () => {
    var _a;
    set(config2, ((_a = $settings()) == null ? void 0 : _a.directConnections) ?? {
      OPENAI_API_BASE_URLS: [],
      OPENAI_API_KEYS: [],
      OPENAI_API_CONFIGS: {}
    });
  });
  init();
  var fragment = root$b();
  var node = first_child(fragment);
  AddConnectionModal(node, {
    direct: true,
    onSubmit: addConnectionHandler,
    get show() {
      return get(showConnectionModal);
    },
    set show($$value) {
      set(showConnectionModal, $$value);
    },
    $$legacy: true
  });
  var form = sibling(node, 2);
  var div = child(form);
  var node_1 = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root_1$5();
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var text2 = child(div_5, true);
      reset(div_5);
      var node_2 = sibling(div_5, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t(`Add Connection`))));
        Tooltip(node_2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button = root_2$4();
            var node_3 = child(button);
            Plus(node_3, {});
            reset(button);
            event("click", button, () => {
              set(showConnectionModal, true);
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
      reset(div_4);
      var div_6 = sibling(div_4, 2);
      each(
        div_6,
        5,
        () => (get(config2), untrack(() => {
          var _a;
          return ((_a = get(config2)) == null ? void 0 : _a.OPENAI_API_BASE_URLS) ?? [];
        })),
        index,
        ($$anchor3, url, idx) => {
          Connection($$anchor3, {
            onSubmit: () => {
              updateHandler();
            },
            onDelete: () => {
              mutate(config2, get(config2).OPENAI_API_BASE_URLS = get(config2).OPENAI_API_BASE_URLS.filter((url2, urlIdx) => idx !== urlIdx));
              mutate(config2, get(config2).OPENAI_API_KEYS = get(config2).OPENAI_API_KEYS.filter((key, keyIdx) => idx !== keyIdx));
              let newConfig = {};
              get(config2).OPENAI_API_BASE_URLS.forEach((url2, newIdx) => {
                newConfig[newIdx] = get(config2).OPENAI_API_CONFIGS[newIdx < idx ? newIdx : newIdx + 1];
              });
              mutate(config2, get(config2).OPENAI_API_CONFIGS = newConfig);
            },
            get url() {
              return (get(config2), untrack(() => {
                var _a;
                return ((_a = get(config2)) == null ? void 0 : _a.OPENAI_API_BASE_URLS) ?? [];
              }))[idx];
            },
            set url($$value) {
              (get(config2), untrack(() => {
                var _a;
                return ((_a = get(config2)) == null ? void 0 : _a.OPENAI_API_BASE_URLS) ?? [];
              }))[idx] = $$value, invalidate_inner_signals(() => get(config2));
            },
            get key() {
              return get(config2).OPENAI_API_KEYS[idx];
            },
            set key($$value) {
              mutate(config2, get(config2).OPENAI_API_KEYS[idx] = $$value);
            },
            get config() {
              return get(config2).OPENAI_API_CONFIGS[idx];
            },
            set config($$value) {
              mutate(config2, get(config2).OPENAI_API_CONFIGS[idx] = $$value);
            },
            $$legacy: true
          });
        }
      );
      reset(div_6);
      reset(div_3);
      var div_7 = sibling(div_3, 2);
      var div_8 = child(div_7);
      var text_1 = child(div_8);
      var text_2 = sibling(text_1, 2);
      reset(div_8);
      reset(div_7);
      reset(div_2);
      reset(div_1);
      template_effect(
        ($0, $1, $2) => {
          set_text(text2, $0);
          set_class(div_8, 1, `text-xs ${($settings(), untrack(() => {
            var _a;
            return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500";
          })) ?? ""}`);
          set_text(text_1, `${$1 ?? ""} `);
          set_text(text_2, ` ${$2 ?? ""}`);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Manage Direct Connections"))),
          () => ($i18n(), untrack(() => $i18n().t("Connect to your own OpenAI compatible API endpoints."))),
          () => ($i18n(), untrack(() => $i18n().t("CORS must be properly configured by the provider to allow requests from Open WebUI.")))
        ]
      );
      append($$anchor2, div_1);
    };
    var alternate = ($$anchor2) => {
      var div_9 = root_4$4();
      var div_10 = child(div_9);
      var node_4 = child(div_10);
      Spinner(node_4, { className: "size-6" });
      reset(div_10);
      reset(div_9);
      append($$anchor2, div_9);
    };
    if_block(node_1, ($$render) => {
      if (get(config2) !== null) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div);
  var div_11 = sibling(div, 2);
  var button_1 = child(div_11);
  var text_3 = child(button_1, true);
  reset(button_1);
  reset(div_11);
  reset(form);
  template_effect(($0) => set_text(text_3, $0), [() => ($i18n(), untrack(() => $i18n().t("Save")))]);
  event("submit", form, preventDefault(() => {
    updateHandler();
  }));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root_2$3 = from_html(`<button class="px-1" type="button"><!></button>`);
var root_1$4 = from_html(`<div><div class="pr-1.5"><div><div class="flex justify-between items-center mb-0.5"><div class="font-medium"> </div> <!></div> <div class="flex flex-col gap-1.5"></div></div> <div class="my-1.5"><div> <br/> </div></div> <div class=" text-xs text-gray-600 dark:text-gray-300 mb-2"><a class="underline" href="https://github.com/open-webui/openapi-servers" target="_blank"> </a></div></div></div>`);
var root_4$3 = from_html(`<div class="flex h-full justify-center"><div class="my-auto"><!></div></div>`);
var root$a = from_html(`<!> <form id="tab-tools" class="flex flex-col h-full justify-between text-sm"><div class=" overflow-y-scroll scrollbar-hidden h-full"><!></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full" type="submit"> </button></div></form>`, 1);
function Tools($$anchor, $$props) {
  push($$props, false);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  createEventDispatcher();
  const i18n = getContext("i18n");
  let saveSettings = prop($$props, "saveSettings", 8);
  let servers = mutable_source(null);
  let showConnectionModal = mutable_source(false);
  const addConnectionHandler = async (server) => {
    set(servers, [...get(servers), server]);
    await updateHandler();
  };
  const updateHandler = async () => {
    var _a;
    await saveSettings()({ toolServers: get(servers) });
    let toolServersData = await getToolServersData(((_a = $settings()) == null ? void 0 : _a.toolServers) ?? []);
    toolServersData = toolServersData.filter((data) => {
      if (data.error) {
        toast.error($i18n().t(`Failed to connect to {{URL}} OpenAPI tool server`, { URL: data == null ? void 0 : data.url }));
        return false;
      }
      return true;
    });
    toolServers.set(toolServersData);
  };
  onMount(async () => {
    var _a;
    set(servers, ((_a = $settings()) == null ? void 0 : _a.toolServers) ?? []);
  });
  init();
  var fragment = root$a();
  var node = first_child(fragment);
  AddToolServerModal(node, {
    onSubmit: addConnectionHandler,
    direct: true,
    get show() {
      return get(showConnectionModal);
    },
    set show($$value) {
      set(showConnectionModal, $$value);
    },
    $$legacy: true
  });
  var form = sibling(node, 2);
  var div = child(form);
  var node_1 = child(div);
  {
    var consequent = ($$anchor2) => {
      var div_1 = root_1$4();
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var text2 = child(div_5, true);
      reset(div_5);
      var node_2 = sibling(div_5, 2);
      {
        let $0 = derived_safe_equal(() => ($i18n(), untrack(() => $i18n().t(`Add Connection`))));
        Tooltip(node_2, {
          get content() {
            return get($0);
          },
          children: ($$anchor3, $$slotProps) => {
            var button = root_2$3();
            var node_3 = child(button);
            Plus(node_3, {});
            reset(button);
            template_effect(($02) => set_attribute(button, "aria-label", $02), [
              () => ($i18n(), untrack(() => $i18n().t(`Add Connection`)))
            ]);
            event("click", button, () => {
              set(showConnectionModal, true);
            });
            append($$anchor3, button);
          },
          $$slots: { default: true }
        });
      }
      reset(div_4);
      var div_6 = sibling(div_4, 2);
      each(div_6, 5, () => get(servers), index, ($$anchor3, server, idx) => {
        Connection$1($$anchor3, {
          direct: true,
          onSubmit: () => {
            updateHandler();
          },
          onDelete: () => {
            set(servers, get(servers).filter((_, i) => i !== idx));
            updateHandler();
          },
          get connection() {
            return get(servers)[idx];
          },
          set connection($$value) {
            get(servers)[idx] = $$value, invalidate_inner_signals(() => get(servers));
          },
          $$legacy: true
        });
      });
      reset(div_6);
      reset(div_3);
      var div_7 = sibling(div_3, 2);
      var div_8 = child(div_7);
      var text_1 = child(div_8);
      var text_2 = sibling(text_1, 2);
      reset(div_8);
      reset(div_7);
      var div_9 = sibling(div_7, 2);
      var a = child(div_9);
      var text_3 = child(a, true);
      reset(a);
      reset(div_9);
      reset(div_2);
      reset(div_1);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text2, $0);
          set_class(div_8, 1, ($settings(), untrack(() => {
            var _a;
            return `text-xs 
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "text-gray-800 dark:text-gray-100" : "text-gray-500"}`;
          })));
          set_text(text_1, `${$1 ?? ""} `);
          set_text(text_2, ` ${$2 ?? ""}`);
          set_text(text_3, $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Manage Tool Servers"))),
          () => ($i18n(), untrack(() => $i18n().t("Connect to your own OpenAPI compatible external tool servers."))),
          () => ($i18n(), untrack(() => $i18n().t("CORS must be properly configured by the provider to allow requests from Open WebUI."))),
          () => ($i18n(), untrack(() => $i18n().t("Learn more about OpenAPI tool servers.")))
        ]
      );
      append($$anchor2, div_1);
    };
    var alternate = ($$anchor2) => {
      var div_10 = root_4$3();
      var div_11 = child(div_10);
      var node_4 = child(div_11);
      Spinner(node_4, { className: "size-6" });
      reset(div_11);
      reset(div_10);
      append($$anchor2, div_10);
    };
    if_block(node_1, ($$render) => {
      if (get(servers) !== null) $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div);
  var div_12 = sibling(div, 2);
  var button_1 = child(div_12);
  var text_4 = child(button_1, true);
  reset(button_1);
  reset(div_12);
  reset(form);
  template_effect(($0) => set_text(text_4, $0), [() => ($i18n(), untrack(() => $i18n().t("Save")))]);
  event("submit", form, preventDefault(() => {
    updateHandler();
  }));
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
var root$9 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6V12C4 12 4 15 11 15C18 15 18 12 18 12V6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 3C18 3 18 6 18 6C18 6 18 9 11 9C4 9 4 6 4 6C4 6 4 3 11 3Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21C4 21 4 18 4 18V12" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C18.6357 17 18.2942 17.0974 18 17.2676C17.4022 17.6134 17 18.2597 17 19C17 19.7403 17.4022 20.3866 18 20.7324C18.2942 20.9026 18.6357 21 19 21Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.3 2"></path></svg>`);
function DatabaseSettings($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$9();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$8 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function SettingsAlt($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$8();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$7 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function UserCircle($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$7();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$6 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z"></path><path d="M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function SoundHigh($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$6();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$5 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 11.5V16.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 7.51L12.01 7.49889" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function InfoCircle($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$5();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$4 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 8L16 10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 8L8 10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 16C9 16 10 17 12 17C14 17 15 16 15 16" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 8L12 13L11 13" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function Face($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$4();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$3 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 12V15C21 18.3137 18.3137 21 15 21H9C5.68629 21 3 18.3137 3 15V9C3 5.68629 5.68629 3 9 3H12" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function AppNotification($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$3();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root$2 = from_svg(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M2 20V19C2 15.134 5.13401 12 9 12V12" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.8038 12.3135C16.4456 11.6088 17.5544 11.6088 18.1962 12.3135V12.3135C18.5206 12.6697 18.9868 12.8628 19.468 12.8403V12.8403C20.4201 12.7958 21.2042 13.5799 21.1597 14.532V14.532C21.1372 15.0132 21.3303 15.4794 21.6865 15.8038V15.8038C22.3912 16.4456 22.3912 17.5544 21.6865 18.1962V18.1962C21.3303 18.5206 21.1372 18.9868 21.1597 19.468V19.468C21.2042 20.4201 20.4201 21.2042 19.468 21.1597V21.1597C18.9868 21.1372 18.5206 21.3303 18.1962 21.6865V21.6865C17.5544 22.3912 16.4456 22.3912 15.8038 21.6865V21.6865C15.4794 21.3303 15.0132 21.1372 14.532 21.1597V21.1597C13.5799 21.2042 12.7958 20.4201 12.8403 19.468V19.468C12.8628 18.9868 12.6697 18.5206 12.3135 18.1962V18.1962C11.6088 17.5544 11.6088 16.4456 12.3135 15.8038V15.8038C12.6697 15.4794 12.8628 15.0132 12.8403 14.532V14.532C12.7958 13.5799 13.5799 12.7958 14.532 12.8403V12.8403C15.0132 12.8628 15.4794 12.6697 15.8038 12.3135V12.3135Z"></path><path d="M15.3636 17L16.4546 18.0909L18.6364 15.9091" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12C11.2091 12 13 10.2091 13 8C13 5.79086 11.2091 4 9 4C6.79086 4 5 5.79086 5 8C5 10.2091 6.79086 12 9 12Z" stroke-linecap="round" stroke-linejoin="round"></path></svg>`);
function UserBadgeCheck($$anchor, $$props) {
  let className = prop($$props, "className", 8, "w-4 h-4");
  let strokeWidth = prop($$props, "strokeWidth", 8, "1.5");
  var svg = root$2();
  template_effect(() => {
    set_class(svg, 0, clsx(className()));
    set_attribute(svg, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
}
var root_4$2 = from_html(`<button role="tab" aria-controls="tab-general"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_6$1 = from_html(`<button role="tab" aria-controls="tab-interface"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_9 = from_html(`<button role="tab" aria-controls="tab-connections"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_12 = from_html(`<button role="tab" aria-controls="tab-tools"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_14 = from_html(`<button role="tab" aria-controls="tab-personalization"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_16 = from_html(`<button role="tab" aria-controls="tab-audio"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_18 = from_html(`<button role="tab" aria-controls="tab-data-controls"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_20 = from_html(`<button role="tab" aria-controls="tab-account"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_22 = from_html(`<button role="tab" aria-controls="tab-about"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></button>`);
var root_23 = from_html(`<div class="text-center text-gray-500 mt-4"> </div>`);
var root_24 = from_html(`<a href="/admin/settings"><div class=" self-center mr-2"><!></div> <div class=" self-center"> </div></a>`);
var root_1$3 = from_html(`<div class="text-gray-700 dark:text-gray-100 mx-1"><div class=" flex justify-between dark:text-gray-300 px-4 md:px-4.5 pt-4.5 pb-0.5 md:pb-2.5"><div class=" text-lg font-medium self-center"> </div> <button class="self-center"><!></button></div> <div class="flex flex-col md:flex-row w-full pt-1 pb-4"><div role="tablist" id="settings-tabs-container" class="tabs flex flex-row overflow-x-auto gap-2.5 mx-3 md:pr-4 md:gap-1 md:flex-col flex-1 md:flex-none md:w-50 md:min-h-[36rem] md:max-h-[36rem] dark:text-gray-200 text-sm text-left mb-1 md:mb-0 -translate-y-1 svelte-12km1ip"><div class="hidden md:flex w-full rounded-full px-2.5 gap-2 bg-gray-100/80 dark:bg-gray-850/80 backdrop-blur-2xl my-1 mb-1.5" id="settings-search"><div class="self-center rounded-l-xl bg-transparent"><!></div> <label class="sr-only" for="search-input-settings-modal"> </label> <input id="search-input-settings-modal"/></div> <!> <!></div> <div class="flex-1 px-3.5 md:pl-0 md:pr-4.5 md:min-h-[36rem] max-h-[36rem]"><!></div></div></div>`);
function SettingsModal($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $user = () => store_get(user, "$user", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  const allSettings = [
    {
      id: "general",
      title: "General",
      keywords: [
        "advancedparams",
        "advancedparameters",
        "advanced params",
        "advanced parameters",
        "configuration",
        "defaultparameters",
        "default parameters",
        "defaultsettings",
        "default settings",
        "general",
        "keepalive",
        "keep alive",
        "languages",
        "notifications",
        "requestmode",
        "request mode",
        "systemparameters",
        "system parameters",
        "systemprompt",
        "system prompt",
        "systemsettings",
        "system settings",
        "theme",
        "translate",
        "webuisettings",
        "webui settings"
      ]
    },
    {
      id: "interface",
      title: "Interface",
      keywords: [
        "allow user location",
        "allow voice interruption in call",
        "allowuserlocation",
        "allowvoiceinterruptionincall",
        "always collapse codeblocks",
        "always collapse code blocks",
        "always expand details",
        "always on web search",
        "always play notification sound",
        "alwayscollapsecodeblocks",
        "alwaysexpanddetails",
        "alwaysonwebsearch",
        "alwaysplaynotificationsound",
        "android",
        "auto chat tags",
        "auto copy response to clipboard",
        "auto title",
        "autochattags",
        "autocopyresponsetoclipboard",
        "autotitle",
        "beta",
        "call",
        "chat background image",
        "chat bubble ui",
        "chat direction",
        "chat tags autogen",
        "chat tags autogeneration",
        "chat ui",
        "chatbackgroundimage",
        "chatbubbleui",
        "chatdirection",
        "chat tags autogeneration",
        "chattagsautogeneration",
        "chatui",
        "copy formatted text",
        "copyformattedtext",
        "default model",
        "defaultmodel",
        "design",
        "detect artifacts automatically",
        "detectartifactsautomatically",
        "display emoji in call",
        "display username",
        "displayemojiincall",
        "displayusername",
        "enter key behavior",
        "enterkeybehavior",
        "expand mode",
        "expandmode",
        "file",
        "followup autogeneration",
        "followupautogeneration",
        "fullscreen",
        "fullwidthmode",
        "full width mode",
        "haptic feedback",
        "hapticfeedback",
        "high contrast mode",
        "highcontrastmode",
        "iframe sandbox allow forms",
        "iframe sandbox allow same origin",
        "iframesandboxallowforms",
        "iframesandboxallowsameorigin",
        "imagecompression",
        "image compression",
        "imagemaxcompressionsize",
        "image max compression size",
        "interface customization",
        "interface options",
        "interfacecustomization",
        "interfaceoptions",
        "landing page mode",
        "landingpagemode",
        "layout",
        "left to right",
        "left-to-right",
        "lefttoright",
        "ltr",
        "paste large text as file",
        "pastelargetextasfile",
        "reset background",
        "resetbackground",
        "response auto copy",
        "responseautocopy",
        "rich text input for chat",
        "richtextinputforchat",
        "right to left",
        "right-to-left",
        "righttoleft",
        "rtl",
        "scroll behavior",
        "scroll on branch change",
        "scrollbehavior",
        "scrollonbranchchange",
        "select model",
        "selectmodel",
        "settings",
        "show username",
        "showusername",
        "stream large chunks",
        "streamlargechunks",
        "stylized pdf export",
        "stylizedpdfexport",
        "title autogeneration",
        "titleautogeneration",
        "toast notifications for new updates",
        "toastnotificationsfornewupdates",
        "upload background",
        "uploadbackground",
        "user interface",
        "user location access",
        "userinterface",
        "userlocationaccess",
        "vibration",
        "voice control",
        "voicecontrol",
        "widescreen mode",
        "widescreenmode",
        "whatsnew",
        "whats new",
        "websearchinchat",
        "web search in chat"
      ]
    },
    {
      id: "connections",
      title: "Connections",
      keywords: [
        "addconnection",
        "add connection",
        "manageconnections",
        "manage connections",
        "manage direct connections",
        "managedirectconnections",
        "settings"
      ]
    },
    {
      id: "tools",
      title: "External Tools",
      keywords: [
        "addconnection",
        "add connection",
        "managetools",
        "manage tools",
        "manage tool servers",
        "managetoolservers",
        "settings"
      ]
    },
    {
      id: "personalization",
      title: "Personalization",
      keywords: [
        "account preferences",
        "account settings",
        "accountpreferences",
        "accountsettings",
        "custom settings",
        "customsettings",
        "experimental",
        "memories",
        "memory",
        "personalization",
        "personalize",
        "personal settings",
        "personalsettings",
        "profile",
        "user preferences",
        "userpreferences"
      ]
    },
    {
      id: "audio",
      title: "Audio",
      keywords: [
        "audio config",
        "audio control",
        "audio features",
        "audio input",
        "audio output",
        "audio playback",
        "audio voice",
        "audioconfig",
        "audiocontrol",
        "audiofeatures",
        "audioinput",
        "audiooutput",
        "audioplayback",
        "audiovoice",
        "auto playback response",
        "autoplaybackresponse",
        "auto transcribe",
        "autotranscribe",
        "instant auto send after voice transcription",
        "instantautosendaftervoicetranscription",
        "language",
        "non local voices",
        "nonlocalvoices",
        "save settings",
        "savesettings",
        "set voice",
        "setvoice",
        "sound settings",
        "soundsettings",
        "speech config",
        "speech mode",
        "speech playback speed",
        "speech rate",
        "speech recognition",
        "speech settings",
        "speech speed",
        "speech synthesis",
        "speech to text engine",
        "speechconfig",
        "speechmode",
        "speechplaybackspeed",
        "speechrate",
        "speechrecognition",
        "speechsettings",
        "speechspeed",
        "speechsynthesis",
        "speechtotextengine",
        "speedch playback rate",
        "speedchplaybackrate",
        "stt settings",
        "sttsettings",
        "text to speech engine",
        "text to speech",
        "textospeechengine",
        "texttospeech",
        "texttospeechvoice",
        "text to speech voice",
        "voice control",
        "voice modes",
        "voice options",
        "voice playback",
        "voice recognition",
        "voice speed",
        "voicecontrol",
        "voicemodes",
        "voiceoptions",
        "voiceplayback",
        "voicerecognition",
        "voicespeed",
        "volume"
      ]
    },
    {
      id: "data_controls",
      title: "Data Controls",
      keywords: [
        "archive all chats",
        "archive chats",
        "archiveallchats",
        "archivechats",
        "archived chats",
        "archivedchats",
        "chat activity",
        "chat history",
        "chat settings",
        "chatactivity",
        "chathistory",
        "chatsettings",
        "conversation activity",
        "conversation history",
        "conversationactivity",
        "conversationhistory",
        "conversations",
        "convos",
        "delete all chats",
        "delete chats",
        "deleteallchats",
        "deletechats",
        "export chats",
        "exportchats",
        "import chats",
        "importchats",
        "message activity",
        "message archive",
        "message history",
        "messagearchive",
        "messagehistory"
      ]
    },
    {
      id: "account",
      title: "Account",
      keywords: [
        "account preferences",
        "account settings",
        "accountpreferences",
        "accountsettings",
        "api keys",
        "apikeys",
        "change password",
        "changepassword",
        "jwt token",
        "jwttoken",
        "login",
        "new password",
        "newpassword",
        "notification webhook url",
        "notificationwebhookurl",
        "personal settings",
        "personalsettings",
        "privacy settings",
        "privacysettings",
        "profileavatar",
        "profile avatar",
        "profile details",
        "profile image",
        "profile picture",
        "profiledetails",
        "profileimage",
        "profilepicture",
        "security settings",
        "securitysettings",
        "update account",
        "update password",
        "updateaccount",
        "updatepassword",
        "user account",
        "user data",
        "user preferences",
        "user profile",
        "useraccount",
        "userdata",
        "username",
        "userpreferences",
        "userprofile",
        "webhook url",
        "webhookurl"
      ]
    },
    {
      id: "about",
      title: "About",
      keywords: [
        "about app",
        "about me",
        "about open webui",
        "about page",
        "about us",
        "aboutapp",
        "aboutme",
        "aboutopenwebui",
        "aboutpage",
        "aboutus",
        "check for updates",
        "checkforupdates",
        "contact",
        "copyright",
        "details",
        "discord",
        "documentation",
        "github",
        "help",
        "information",
        "license",
        "redistributions",
        "release",
        "see whats new",
        "seewhatsnew",
        "settings",
        "software info",
        "softwareinfo",
        "support",
        "terms and conditions",
        "terms of use",
        "termsandconditions",
        "termsofuse",
        "timothy jae ryang baek",
        "timothy j baek",
        "timothyjaeryangbaek",
        "timothyjbaek",
        "twitter",
        "update info",
        "updateinfo",
        "version info",
        "versioninfo"
      ]
    }
  ];
  let availableSettings = [];
  let filteredSettings = mutable_source([]);
  let search = mutable_source("");
  let searchDebounceTimeout;
  const getAvailableSettings = () => {
    return allSettings.filter((tab) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (tab.id === "connections") {
        return (_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections;
      }
      if (tab.id === "tools") {
        return ((_c = $user()) == null ? void 0 : _c.role) === "admin" || ((_d = $user()) == null ? void 0 : _d.role) === "user" && ((_g = (_f = (_e = $user()) == null ? void 0 : _e.permissions) == null ? void 0 : _f.features) == null ? void 0 : _g.direct_tool_servers);
      }
      return true;
    });
  };
  const setFilteredSettings = () => {
    set(filteredSettings, availableSettings.filter((tab) => {
      return get(search) === "" || tab.title.toLowerCase().includes(get(search).toLowerCase().trim()) || tab.keywords.some((keyword) => keyword.includes(get(search).toLowerCase().trim()));
    }).map((tab) => tab.id));
    if (get(filteredSettings).length > 0 && !get(filteredSettings).includes(get(selectedTab))) {
      set(selectedTab, get(filteredSettings)[0]);
    }
  };
  const searchDebounceHandler = () => {
    if (searchDebounceTimeout) {
      clearTimeout(searchDebounceTimeout);
    }
    searchDebounceTimeout = setTimeout(
      () => {
        setFilteredSettings();
      },
      100
    );
  };
  const saveSettings = async (updated) => {
    console.log(updated);
    await settings.set({ ...$settings(), ...updated });
    await models.set(await getModels$1());
    await updateUserSettings(localStorage.token, { ui: $settings() });
  };
  const getModels$1 = async () => {
    var _a, _b, _c;
    return await getModels(localStorage.token, ((_b = (_a = $config()) == null ? void 0 : _a.features) == null ? void 0 : _b.enable_direct_connections) && (((_c = $settings()) == null ? void 0 : _c.directConnections) ?? null));
  };
  let selectedTab = mutable_source("general");
  const scrollHandler = (event2) => {
    const settingsTabsContainer = document.getElementById("settings-tabs-container");
    if (settingsTabsContainer) {
      event2.preventDefault();
      settingsTabsContainer.scrollLeft += event2.deltaY;
    }
  };
  const addScrollListener = async () => {
    await tick();
    const settingsTabsContainer = document.getElementById("settings-tabs-container");
    if (settingsTabsContainer) {
      settingsTabsContainer.addEventListener("wheel", scrollHandler);
    }
  };
  const removeScrollListener = async () => {
    await tick();
    const settingsTabsContainer = document.getElementById("settings-tabs-container");
    if (settingsTabsContainer) {
      settingsTabsContainer.removeEventListener("wheel", scrollHandler);
    }
  };
  onMount(() => {
    availableSettings = getAvailableSettings();
    setFilteredSettings();
    config.subscribe((configData) => {
      availableSettings = getAvailableSettings();
      setFilteredSettings();
    });
  });
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      addScrollListener();
    } else {
      removeScrollListener();
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "xl",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var div = root_1$3();
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2, true);
      reset(div_2);
      var button = sibling(div_2, 2);
      var node = child(button);
      XMark(node, { className: "w-5 h-5" });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var div_5 = child(div_4);
      var div_6 = child(div_5);
      var node_1 = child(div_6);
      {
        let $0 = derived_safe_equal(() => ($settings(), untrack(() => {
          var _a;
          return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "3" : "1.5";
        })));
        Search$1(node_1, {
          className: "size-3.5",
          get strokeWidth() {
            return get($0);
          }
        });
      }
      reset(div_6);
      var label = sibling(div_6, 2);
      var text_1 = child(label, true);
      reset(label);
      var input = sibling(label, 2);
      remove_input_defaults(input);
      reset(div_5);
      var node_2 = sibling(div_5, 2);
      {
        var consequent_11 = ($$anchor3) => {
          var fragment_1 = comment();
          var node_3 = first_child(fragment_1);
          each(node_3, 1, () => get(filteredSettings), (tabId) => tabId, ($$anchor4, tabId) => {
            var fragment_2 = comment();
            var node_4 = first_child(fragment_2);
            {
              var consequent = ($$anchor5) => {
                var button_1 = root_4$2();
                var div_7 = child(button_1);
                var node_5 = child(div_7);
                SettingsAlt(node_5, { strokeWidth: "2" });
                reset(div_7);
                var div_8 = sibling(div_7, 2);
                var text_2 = child(div_8, true);
                reset(div_8);
                reset(button_1);
                template_effect(
                  ($0) => {
                    set_attribute(button_1, "aria-selected", get(selectedTab) === "general");
                    set_class(
                      button_1,
                      1,
                      (get(selectedTab), $settings(), untrack(() => {
                        var _a, _b;
                        return `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none flex text-left transition
								${get(selectedTab) === "general" ? ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:bg-gray-800 bg-gray-200" : "" : ((_b = $settings()) == null ? void 0 : _b.highContrastMode) ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`;
                      })),
                      "svelte-12km1ip"
                    );
                    set_text(text_2, $0);
                  },
                  [() => ($i18n(), untrack(() => $i18n().t("General")))]
                );
                event("click", button_1, () => {
                  set(selectedTab, "general");
                });
                append($$anchor5, button_1);
              };
              var alternate_7 = ($$anchor5) => {
                var fragment_3 = comment();
                var node_6 = first_child(fragment_3);
                {
                  var consequent_1 = ($$anchor6) => {
                    var button_2 = root_6$1();
                    var div_9 = child(button_2);
                    var node_7 = child(div_9);
                    AppNotification(node_7, { strokeWidth: "2" });
                    reset(div_9);
                    var div_10 = sibling(div_9, 2);
                    var text_3 = child(div_10, true);
                    reset(div_10);
                    reset(button_2);
                    template_effect(
                      ($0) => {
                        set_attribute(button_2, "aria-selected", get(selectedTab) === "interface");
                        set_class(
                          button_2,
                          1,
                          (get(selectedTab), $settings(), untrack(() => {
                            var _a, _b;
                            return `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none flex text-left transition
								${get(selectedTab) === "interface" ? ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:bg-gray-800 bg-gray-200" : "" : ((_b = $settings()) == null ? void 0 : _b.highContrastMode) ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`;
                          })),
                          "svelte-12km1ip"
                        );
                        set_text(text_3, $0);
                      },
                      [() => ($i18n(), untrack(() => $i18n().t("Interface")))]
                    );
                    event("click", button_2, () => {
                      set(selectedTab, "interface");
                    });
                    append($$anchor6, button_2);
                  };
                  var alternate_6 = ($$anchor6) => {
                    var fragment_4 = comment();
                    var node_8 = first_child(fragment_4);
                    {
                      var consequent_3 = ($$anchor7) => {
                        var fragment_5 = comment();
                        var node_9 = first_child(fragment_5);
                        {
                          var consequent_2 = ($$anchor8) => {
                            var button_3 = root_9();
                            var div_11 = child(button_3);
                            var node_10 = child(div_11);
                            Link(node_10, { strokeWidth: "2" });
                            reset(div_11);
                            var div_12 = sibling(div_11, 2);
                            var text_4 = child(div_12, true);
                            reset(div_12);
                            reset(button_3);
                            template_effect(
                              ($0) => {
                                set_attribute(button_3, "aria-selected", get(selectedTab) === "connections");
                                set_class(
                                  button_3,
                                  1,
                                  (get(selectedTab), $settings(), untrack(() => {
                                    var _a, _b;
                                    return `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none flex text-left transition
								${get(selectedTab) === "connections" ? ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:bg-gray-800 bg-gray-200" : "" : ((_b = $settings()) == null ? void 0 : _b.highContrastMode) ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`;
                                  })),
                                  "svelte-12km1ip"
                                );
                                set_text(text_4, $0);
                              },
                              [() => ($i18n(), untrack(() => $i18n().t("Connections")))]
                            );
                            event("click", button_3, () => {
                              set(selectedTab, "connections");
                            });
                            append($$anchor8, button_3);
                          };
                          if_block(node_9, ($$render) => {
                            if ($user(), $config(), untrack(() => {
                              var _a, _b, _c, _d;
                              return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_b = $user()) == null ? void 0 : _b.role) === "user" && ((_d = (_c = $config()) == null ? void 0 : _c.features) == null ? void 0 : _d.enable_direct_connections);
                            })) $$render(consequent_2);
                          });
                        }
                        append($$anchor7, fragment_5);
                      };
                      var alternate_5 = ($$anchor7) => {
                        var fragment_6 = comment();
                        var node_11 = first_child(fragment_6);
                        {
                          var consequent_5 = ($$anchor8) => {
                            var fragment_7 = comment();
                            var node_12 = first_child(fragment_7);
                            {
                              var consequent_4 = ($$anchor9) => {
                                var button_4 = root_12();
                                var div_13 = child(button_4);
                                var node_13 = child(div_13);
                                WrenchAlt(node_13, { strokeWidth: "2" });
                                reset(div_13);
                                var div_14 = sibling(div_13, 2);
                                var text_5 = child(div_14, true);
                                reset(div_14);
                                reset(button_4);
                                template_effect(
                                  ($0) => {
                                    set_attribute(button_4, "aria-selected", get(selectedTab) === "tools");
                                    set_class(
                                      button_4,
                                      1,
                                      (get(selectedTab), $settings(), untrack(() => {
                                        var _a, _b;
                                        return `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none flex text-left transition
								${get(selectedTab) === "tools" ? ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:bg-gray-800 bg-gray-200" : "" : ((_b = $settings()) == null ? void 0 : _b.highContrastMode) ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`;
                                      })),
                                      "svelte-12km1ip"
                                    );
                                    set_text(text_5, $0);
                                  },
                                  [
                                    () => ($i18n(), untrack(() => $i18n().t("External Tools")))
                                  ]
                                );
                                event("click", button_4, () => {
                                  set(selectedTab, "tools");
                                });
                                append($$anchor9, button_4);
                              };
                              if_block(node_12, ($$render) => {
                                if ($user(), untrack(() => {
                                  var _a, _b, _c, _d, _e;
                                  return ((_a = $user()) == null ? void 0 : _a.role) === "admin" || ((_b = $user()) == null ? void 0 : _b.role) === "user" && ((_e = (_d = (_c = $user()) == null ? void 0 : _c.permissions) == null ? void 0 : _d.features) == null ? void 0 : _e.direct_tool_servers);
                                })) $$render(consequent_4);
                              });
                            }
                            append($$anchor8, fragment_7);
                          };
                          var alternate_4 = ($$anchor8) => {
                            var fragment_8 = comment();
                            var node_14 = first_child(fragment_8);
                            {
                              var consequent_6 = ($$anchor9) => {
                                var button_5 = root_14();
                                var div_15 = child(button_5);
                                var node_15 = child(div_15);
                                Face(node_15, { strokeWidth: "2" });
                                reset(div_15);
                                var div_16 = sibling(div_15, 2);
                                var text_6 = child(div_16, true);
                                reset(div_16);
                                reset(button_5);
                                template_effect(
                                  ($0) => {
                                    set_attribute(button_5, "aria-selected", get(selectedTab) === "personalization");
                                    set_class(
                                      button_5,
                                      1,
                                      (get(selectedTab), $settings(), untrack(() => {
                                        var _a, _b;
                                        return `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none flex text-left transition
								${get(selectedTab) === "personalization" ? ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:bg-gray-800 bg-gray-200" : "" : ((_b = $settings()) == null ? void 0 : _b.highContrastMode) ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`;
                                      })),
                                      "svelte-12km1ip"
                                    );
                                    set_text(text_6, $0);
                                  },
                                  [
                                    () => ($i18n(), untrack(() => $i18n().t("Personalization")))
                                  ]
                                );
                                event("click", button_5, () => {
                                  set(selectedTab, "personalization");
                                });
                                append($$anchor9, button_5);
                              };
                              var alternate_3 = ($$anchor9) => {
                                var fragment_9 = comment();
                                var node_16 = first_child(fragment_9);
                                {
                                  var consequent_7 = ($$anchor10) => {
                                    var button_6 = root_16();
                                    var div_17 = child(button_6);
                                    var node_17 = child(div_17);
                                    SoundHigh(node_17, { strokeWidth: "2" });
                                    reset(div_17);
                                    var div_18 = sibling(div_17, 2);
                                    var text_7 = child(div_18, true);
                                    reset(div_18);
                                    reset(button_6);
                                    template_effect(
                                      ($0) => {
                                        set_attribute(button_6, "aria-selected", get(selectedTab) === "audio");
                                        set_class(
                                          button_6,
                                          1,
                                          (get(selectedTab), $settings(), untrack(() => {
                                            var _a, _b;
                                            return `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none flex text-left transition
								${get(selectedTab) === "audio" ? ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:bg-gray-800 bg-gray-200" : "" : ((_b = $settings()) == null ? void 0 : _b.highContrastMode) ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`;
                                          })),
                                          "svelte-12km1ip"
                                        );
                                        set_text(text_7, $0);
                                      },
                                      [() => ($i18n(), untrack(() => $i18n().t("Audio")))]
                                    );
                                    event("click", button_6, () => {
                                      set(selectedTab, "audio");
                                    });
                                    append($$anchor10, button_6);
                                  };
                                  var alternate_2 = ($$anchor10) => {
                                    var fragment_10 = comment();
                                    var node_18 = first_child(fragment_10);
                                    {
                                      var consequent_8 = ($$anchor11) => {
                                        var button_7 = root_18();
                                        var div_19 = child(button_7);
                                        var node_19 = child(div_19);
                                        DatabaseSettings(node_19, { strokeWidth: "2" });
                                        reset(div_19);
                                        var div_20 = sibling(div_19, 2);
                                        var text_8 = child(div_20, true);
                                        reset(div_20);
                                        reset(button_7);
                                        template_effect(
                                          ($0) => {
                                            set_attribute(button_7, "aria-selected", get(selectedTab) === "data_controls");
                                            set_class(
                                              button_7,
                                              1,
                                              (get(selectedTab), $settings(), untrack(() => {
                                                var _a, _b;
                                                return `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none flex text-left transition
								${get(selectedTab) === "data_controls" ? ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:bg-gray-800 bg-gray-200" : "" : ((_b = $settings()) == null ? void 0 : _b.highContrastMode) ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`;
                                              })),
                                              "svelte-12km1ip"
                                            );
                                            set_text(text_8, $0);
                                          },
                                          [() => ($i18n(), untrack(() => $i18n().t("Data Controls")))]
                                        );
                                        event("click", button_7, () => {
                                          set(selectedTab, "data_controls");
                                        });
                                        append($$anchor11, button_7);
                                      };
                                      var alternate_1 = ($$anchor11) => {
                                        var fragment_11 = comment();
                                        var node_20 = first_child(fragment_11);
                                        {
                                          var consequent_9 = ($$anchor12) => {
                                            var button_8 = root_20();
                                            var div_21 = child(button_8);
                                            var node_21 = child(div_21);
                                            UserCircle(node_21, { strokeWidth: "2" });
                                            reset(div_21);
                                            var div_22 = sibling(div_21, 2);
                                            var text_9 = child(div_22, true);
                                            reset(div_22);
                                            reset(button_8);
                                            template_effect(
                                              ($0) => {
                                                set_attribute(button_8, "aria-selected", get(selectedTab) === "account");
                                                set_class(
                                                  button_8,
                                                  1,
                                                  (get(selectedTab), $settings(), untrack(() => {
                                                    var _a, _b;
                                                    return `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none flex text-left transition
								${get(selectedTab) === "account" ? ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:bg-gray-800 bg-gray-200" : "" : ((_b = $settings()) == null ? void 0 : _b.highContrastMode) ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`;
                                                  })),
                                                  "svelte-12km1ip"
                                                );
                                                set_text(text_9, $0);
                                              },
                                              [() => ($i18n(), untrack(() => $i18n().t("Account")))]
                                            );
                                            event("click", button_8, () => {
                                              set(selectedTab, "account");
                                            });
                                            append($$anchor12, button_8);
                                          };
                                          var alternate = ($$anchor12) => {
                                            var fragment_12 = comment();
                                            var node_22 = first_child(fragment_12);
                                            {
                                              var consequent_10 = ($$anchor13) => {
                                                var button_9 = root_22();
                                                var div_23 = child(button_9);
                                                var node_23 = child(div_23);
                                                InfoCircle(node_23, { strokeWidth: "2" });
                                                reset(div_23);
                                                var div_24 = sibling(div_23, 2);
                                                var text_10 = child(div_24, true);
                                                reset(div_24);
                                                reset(button_9);
                                                template_effect(
                                                  ($0) => {
                                                    set_attribute(button_9, "aria-selected", get(selectedTab) === "about");
                                                    set_class(
                                                      button_9,
                                                      1,
                                                      (get(selectedTab), $settings(), untrack(() => {
                                                        var _a, _b;
                                                        return `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none flex text-left transition
								${get(selectedTab) === "about" ? ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "dark:bg-gray-800 bg-gray-200" : "" : ((_b = $settings()) == null ? void 0 : _b.highContrastMode) ?? false ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white"}`;
                                                      })),
                                                      "svelte-12km1ip"
                                                    );
                                                    set_text(text_10, $0);
                                                  },
                                                  [() => ($i18n(), untrack(() => $i18n().t("About")))]
                                                );
                                                event("click", button_9, () => {
                                                  set(selectedTab, "about");
                                                });
                                                append($$anchor13, button_9);
                                              };
                                              if_block(
                                                node_22,
                                                ($$render) => {
                                                  if (get(tabId) === "about") $$render(consequent_10);
                                                },
                                                true
                                              );
                                            }
                                            append($$anchor12, fragment_12);
                                          };
                                          if_block(
                                            node_20,
                                            ($$render) => {
                                              if (get(tabId) === "account") $$render(consequent_9);
                                              else $$render(alternate, false);
                                            },
                                            true
                                          );
                                        }
                                        append($$anchor11, fragment_11);
                                      };
                                      if_block(
                                        node_18,
                                        ($$render) => {
                                          if (get(tabId) === "data_controls") $$render(consequent_8);
                                          else $$render(alternate_1, false);
                                        },
                                        true
                                      );
                                    }
                                    append($$anchor10, fragment_10);
                                  };
                                  if_block(
                                    node_16,
                                    ($$render) => {
                                      if (get(tabId) === "audio") $$render(consequent_7);
                                      else $$render(alternate_2, false);
                                    },
                                    true
                                  );
                                }
                                append($$anchor9, fragment_9);
                              };
                              if_block(
                                node_14,
                                ($$render) => {
                                  if (get(tabId) === "personalization") $$render(consequent_6);
                                  else $$render(alternate_3, false);
                                },
                                true
                              );
                            }
                            append($$anchor8, fragment_8);
                          };
                          if_block(
                            node_11,
                            ($$render) => {
                              if (get(tabId) === "tools") $$render(consequent_5);
                              else $$render(alternate_4, false);
                            },
                            true
                          );
                        }
                        append($$anchor7, fragment_6);
                      };
                      if_block(
                        node_8,
                        ($$render) => {
                          if (get(tabId) === "connections") $$render(consequent_3);
                          else $$render(alternate_5, false);
                        },
                        true
                      );
                    }
                    append($$anchor6, fragment_4);
                  };
                  if_block(
                    node_6,
                    ($$render) => {
                      if (get(tabId) === "interface") $$render(consequent_1);
                      else $$render(alternate_6, false);
                    },
                    true
                  );
                }
                append($$anchor5, fragment_3);
              };
              if_block(node_4, ($$render) => {
                if (get(tabId) === "general") $$render(consequent);
                else $$render(alternate_7, false);
              });
            }
            append($$anchor4, fragment_2);
          });
          append($$anchor3, fragment_1);
        };
        var alternate_8 = ($$anchor3) => {
          var div_25 = root_23();
          var text_11 = child(div_25, true);
          reset(div_25);
          template_effect(($0) => set_text(text_11, $0), [
            () => ($i18n(), untrack(() => $i18n().t("No results found")))
          ]);
          append($$anchor3, div_25);
        };
        if_block(node_2, ($$render) => {
          if (get(filteredSettings), untrack(() => get(filteredSettings).length > 0)) $$render(consequent_11);
          else $$render(alternate_8, false);
        });
      }
      var node_24 = sibling(node_2, 2);
      {
        var consequent_12 = ($$anchor3) => {
          var a = root_24();
          var div_26 = child(a);
          var node_25 = child(div_26);
          UserBadgeCheck(node_25, { strokeWidth: "2" });
          reset(div_26);
          var div_27 = sibling(div_26, 2);
          var text_12 = child(div_27, true);
          reset(div_27);
          reset(a);
          template_effect(
            ($0) => {
              set_class(a, 1, `px-0.5 md:px-2.5 py-1 min-w-fit rounded-xl flex-1 md:flex-none md:mt-auto flex text-left transition ${($settings(), untrack(() => {
                var _a;
                return ((_a = $settings()) == null ? void 0 : _a.highContrastMode) ? "hover:bg-gray-200 dark:hover:bg-gray-800" : "text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-white";
              })) ?? ""}`);
              set_text(text_12, $0);
            },
            [
              () => ($i18n(), untrack(() => $i18n().t("Admin Settings")))
            ]
          );
          event("click", a, async (e) => {
            e.preventDefault();
            await goto("/admin/settings");
            show(false);
          });
          append($$anchor3, a);
        };
        if_block(node_24, ($$render) => {
          if ($user(), untrack(() => {
            var _a;
            return ((_a = $user()) == null ? void 0 : _a.role) === "admin";
          })) $$render(consequent_12);
        });
      }
      reset(div_4);
      var div_28 = sibling(div_4, 2);
      var node_26 = child(div_28);
      {
        var consequent_13 = ($$anchor3) => {
          General($$anchor3, {
            getModels: getModels$1,
            saveSettings,
            $$events: {
              save: () => {
                toast.success($i18n().t("Settings saved successfully!"));
              }
            }
          });
        };
        var alternate_16 = ($$anchor3) => {
          var fragment_14 = comment();
          var node_27 = first_child(fragment_14);
          {
            var consequent_14 = ($$anchor4) => {
              Interface($$anchor4, {
                saveSettings,
                $$events: {
                  save: () => {
                    toast.success($i18n().t("Settings saved successfully!"));
                  }
                }
              });
            };
            var alternate_15 = ($$anchor4) => {
              var fragment_16 = comment();
              var node_28 = first_child(fragment_16);
              {
                var consequent_15 = ($$anchor5) => {
                  Connections($$anchor5, {
                    saveSettings: async (updated) => {
                      await saveSettings(updated);
                      toast.success($i18n().t("Settings saved successfully!"));
                    }
                  });
                };
                var alternate_14 = ($$anchor5) => {
                  var fragment_18 = comment();
                  var node_29 = first_child(fragment_18);
                  {
                    var consequent_16 = ($$anchor6) => {
                      Tools($$anchor6, {
                        saveSettings: async (updated) => {
                          await saveSettings(updated);
                          toast.success($i18n().t("Settings saved successfully!"));
                        }
                      });
                    };
                    var alternate_13 = ($$anchor6) => {
                      var fragment_20 = comment();
                      var node_30 = first_child(fragment_20);
                      {
                        var consequent_17 = ($$anchor7) => {
                          Personalization($$anchor7, {
                            saveSettings,
                            $$events: {
                              save: () => {
                                toast.success($i18n().t("Settings saved successfully!"));
                              }
                            }
                          });
                        };
                        var alternate_12 = ($$anchor7) => {
                          var fragment_22 = comment();
                          var node_31 = first_child(fragment_22);
                          {
                            var consequent_18 = ($$anchor8) => {
                              Audio($$anchor8, {
                                saveSettings,
                                $$events: {
                                  save: () => {
                                    toast.success($i18n().t("Settings saved successfully!"));
                                  }
                                }
                              });
                            };
                            var alternate_11 = ($$anchor8) => {
                              var fragment_24 = comment();
                              var node_32 = first_child(fragment_24);
                              {
                                var consequent_19 = ($$anchor9) => {
                                  DataControls($$anchor9, { saveSettings });
                                };
                                var alternate_10 = ($$anchor9) => {
                                  var fragment_26 = comment();
                                  var node_33 = first_child(fragment_26);
                                  {
                                    var consequent_20 = ($$anchor10) => {
                                      Account($$anchor10, {
                                        saveSettings,
                                        saveHandler: () => {
                                          toast.success($i18n().t("Settings saved successfully!"));
                                        }
                                      });
                                    };
                                    var alternate_9 = ($$anchor10) => {
                                      var fragment_28 = comment();
                                      var node_34 = first_child(fragment_28);
                                      {
                                        var consequent_21 = ($$anchor11) => {
                                          About($$anchor11, {});
                                        };
                                        if_block(
                                          node_34,
                                          ($$render) => {
                                            if (get(selectedTab) === "about") $$render(consequent_21);
                                          },
                                          true
                                        );
                                      }
                                      append($$anchor10, fragment_28);
                                    };
                                    if_block(
                                      node_33,
                                      ($$render) => {
                                        if (get(selectedTab) === "account") $$render(consequent_20);
                                        else $$render(alternate_9, false);
                                      },
                                      true
                                    );
                                  }
                                  append($$anchor9, fragment_26);
                                };
                                if_block(
                                  node_32,
                                  ($$render) => {
                                    if (get(selectedTab) === "data_controls") $$render(consequent_19);
                                    else $$render(alternate_10, false);
                                  },
                                  true
                                );
                              }
                              append($$anchor8, fragment_24);
                            };
                            if_block(
                              node_31,
                              ($$render) => {
                                if (get(selectedTab) === "audio") $$render(consequent_18);
                                else $$render(alternate_11, false);
                              },
                              true
                            );
                          }
                          append($$anchor7, fragment_22);
                        };
                        if_block(
                          node_30,
                          ($$render) => {
                            if (get(selectedTab) === "personalization") $$render(consequent_17);
                            else $$render(alternate_12, false);
                          },
                          true
                        );
                      }
                      append($$anchor6, fragment_20);
                    };
                    if_block(
                      node_29,
                      ($$render) => {
                        if (get(selectedTab) === "tools") $$render(consequent_16);
                        else $$render(alternate_13, false);
                      },
                      true
                    );
                  }
                  append($$anchor5, fragment_18);
                };
                if_block(
                  node_28,
                  ($$render) => {
                    if (get(selectedTab) === "connections") $$render(consequent_15);
                    else $$render(alternate_14, false);
                  },
                  true
                );
              }
              append($$anchor4, fragment_16);
            };
            if_block(
              node_27,
              ($$render) => {
                if (get(selectedTab) === "interface") $$render(consequent_14);
                else $$render(alternate_15, false);
              },
              true
            );
          }
          append($$anchor3, fragment_14);
        };
        if_block(node_26, ($$render) => {
          if (get(selectedTab) === "general") $$render(consequent_13);
          else $$render(alternate_16, false);
        });
      }
      reset(div_28);
      reset(div_3);
      reset(div);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text2, $0);
          set_attribute(button, "aria-label", $1);
          set_text(text_1, $2);
          set_class(
            input,
            1,
            ($settings(), untrack(() => {
              var _a;
              return `w-full py-1 text-sm bg-transparent dark:text-gray-300 outline-hidden
								${((_a = $settings()) == null ? void 0 : _a.highContrastMode) ?? false ? "placeholder-gray-800" : ""}`;
            })),
            "svelte-12km1ip"
          );
          set_attribute(input, "placeholder", $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("Settings"))),
          () => ($i18n(), untrack(() => $i18n().t("Close settings modal"))),
          () => ($i18n(), untrack(() => $i18n().t("Search"))),
          () => ($i18n(), untrack(() => $i18n().t("Search")))
        ]
      );
      event("click", button, () => {
        show(false);
      });
      bind_value(input, () => get(search), ($$value) => set(search, $$value));
      event("input", input, searchDebounceHandler);
      append($$anchor2, div);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_2$2 = from_html(`<div class="confetti svelte-rtt661"></div>`);
var root_1$2 = from_html(`<div></div>`);
function Confetti($$anchor, $$props) {
  push($$props, false);
  let size = prop($$props, "size", 8, 10);
  let x = prop($$props, "x", 24, () => [-0.5, 0.5]);
  let y = prop($$props, "y", 24, () => [0.25, 1]);
  let duration = prop($$props, "duration", 8, 2e3);
  let infinite = prop($$props, "infinite", 8, false);
  let delay = prop($$props, "delay", 24, () => [0, 50]);
  let colorRange = prop($$props, "colorRange", 24, () => [0, 360]);
  let colorArray = prop($$props, "colorArray", 24, () => []);
  let amount = prop($$props, "amount", 8, 50);
  let iterationCount = prop($$props, "iterationCount", 8, 1);
  let fallDistance = prop($$props, "fallDistance", 8, "100px");
  let rounded = prop($$props, "rounded", 8, false);
  let cone = prop($$props, "cone", 8, false);
  let noGravity = prop($$props, "noGravity", 8, false);
  let xSpread = prop($$props, "xSpread", 8, 0.15);
  let destroyOnComplete = prop($$props, "destroyOnComplete", 8, true);
  let disableForReducedMotion = prop($$props, "disableForReducedMotion", 8, false);
  let complete = mutable_source(false);
  onMount(() => {
    if (!destroyOnComplete() || infinite() || iterationCount() == "infinite") return;
    setTimeout(() => set(complete, true), (duration() + delay()[1]) * iterationCount());
  });
  function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  function getColor() {
    if (colorArray().length) return colorArray()[Math.round(Math.random() * (colorArray().length - 1))];
    else return `hsl(${Math.round(randomBetween(colorRange()[0], colorRange()[1]))}, 75%, 50%)`;
  }
  init();
  var fragment = comment();
  var node = first_child(fragment);
  {
    var consequent = ($$anchor2) => {
      var div = root_1$2();
      let classes;
      each(div, 5, () => ({ length: amount() }), index, ($$anchor3, _) => {
        var div_1 = root_2$2();
        template_effect(
          ($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) => set_style(div_1, `
        --fall-distance: ${fallDistance() ?? ""};
        --size: ${size() ?? ""}px;
        --color: ${$0 ?? ""};
        --skew: ${$1 ?? ""}deg,${$2 ?? ""}deg;
        --rotation-xyz: ${$3 ?? ""}, ${$4 ?? ""}, ${$5 ?? ""};
        --rotation-deg: ${$6 ?? ""}deg;
        --translate-y-multiplier: ${$7 ?? ""};
        --translate-x-multiplier: ${$8 ?? ""};
        --scale: ${$9 ?? ""};
        --transition-duration: ${infinite() ? `calc(${duration()}ms * var(--scale))` : `${duration()}ms`};
        --transition-delay: ${$10 ?? ""}ms;
        --transition-iteration-count: ${(infinite() ? "infinite" : iterationCount()) ?? ""};
        --x-spread: ${1 - xSpread()}`),
          [
            () => untrack(getColor),
            () => untrack(() => randomBetween(-45, 45)),
            () => untrack(() => randomBetween(-45, 45)),
            () => untrack(() => randomBetween(-10, 10)),
            () => untrack(() => randomBetween(-10, 10)),
            () => untrack(() => randomBetween(-10, 10)),
            () => untrack(() => randomBetween(0, 360)),
            () => (deep_read_state(y()), untrack(() => randomBetween(y()[0], y()[1]))),
            () => (deep_read_state(x()), untrack(() => randomBetween(x()[0], x()[1]))),
            () => untrack(() => 0.1 * randomBetween(2, 10)),
            () => (deep_read_state(delay()), untrack(() => randomBetween(delay()[0], delay()[1])))
          ]
        );
        append($$anchor3, div_1);
      });
      reset(div);
      template_effect(() => classes = set_class(div, 1, "confetti-holder svelte-rtt661", null, classes, {
        rounded: rounded(),
        cone: cone(),
        "no-gravity": noGravity(),
        "reduced-motion": disableForReducedMotion()
      }));
      append($$anchor2, div);
    };
    if_block(node, ($$render) => {
      if (!get(complete)) $$render(consequent);
    });
  }
  append($$anchor, fragment);
  pop();
}
var root_2$1 = from_html(`<p class="sr-only"> </p>`);
var root_6 = from_html(`<div class="my-2"><!></div>`);
var root_5$1 = from_html(`<div class="w-full"><div> </div> <div class="my-2.5 px-1.5 markdown-prose-sm !list-none !w-full !max-w-none"></div></div>`);
var root_4$1 = from_html(`<div class=" mb-3 pr-2"><div class="font-semibold text-xl mb-1 dark:text-white"> </div> <hr class="border-gray-50/50 dark:border-gray-850/50 my-2"/> <!></div>`);
var root_1$1 = from_html(`<div class="px-6 pt-5 dark:text-white text-black"><div class="flex justify-between items-start"><div class="text-xl font-medium"> <!></div> <button class="self-center"><!></button></div> <div class="flex items-center mt-1"><div class="text-sm dark:text-gray-200"> </div> <div class="flex self-center w-[1px] h-6 mx-2.5 bg-gray-50/50 dark:bg-gray-850/50"></div> <div class="text-sm dark:text-gray-200"> </div></div></div> <div class=" w-full p-4 px-5 text-gray-700 dark:text-gray-100"><div class=" overflow-y-scroll max-h-[30rem] scrollbar-hidden"><div class="mb-3"><!></div></div> <div class="flex justify-end pt-3 text-sm font-medium"><button class="px-3.5 py-1.5 text-sm font-medium bg-black hover:bg-gray-900 text-white dark:bg-white dark:text-black dark:hover:bg-gray-100 transition rounded-full"><span class="relative"> </span></button></div></div>`, 1);
function ChangelogModal($$anchor, $$props) {
  push($$props, false);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const $WEBUI_NAME = () => store_get(WEBUI_NAME, "$WEBUI_NAME", $$stores);
  const $config = () => store_get(config, "$config", $$stores);
  const $settings = () => store_get(settings, "$settings", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let show = prop($$props, "show", 12, false);
  let changelog = mutable_source(null);
  const init$1 = async () => {
    set(changelog, await getChangelog());
  };
  legacy_pre_effect(() => deep_read_state(show()), () => {
    if (show()) {
      init$1();
    }
  });
  legacy_pre_effect_reset();
  init();
  Modal($$anchor, {
    size: "xl",
    get show() {
      return show();
    },
    set show($$value) {
      show($$value);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var div = first_child(fragment_1);
      var div_1 = child(div);
      var div_2 = child(div_1);
      var text2 = child(div_2);
      var node = sibling(text2);
      Confetti(node, { x: [-1, -0.25], y: [0, 0.5] });
      reset(div_2);
      var button = sibling(div_2, 2);
      var node_1 = child(button);
      XMark(node_1, {
        className: "size-5",
        children: ($$anchor3, $$slotProps2) => {
          var p = root_2$1();
          var text_1 = child(p, true);
          reset(p);
          template_effect(($0) => set_text(text_1, $0), [() => ($i18n(), untrack(() => $i18n().t("Close")))]);
          append($$anchor3, p);
        },
        $$slots: { default: true }
      });
      reset(button);
      reset(div_1);
      var div_3 = sibling(div_1, 2);
      var div_4 = child(div_3);
      var text_2 = child(div_4, true);
      reset(div_4);
      var div_5 = sibling(div_4, 4);
      var text_3 = child(div_5);
      reset(div_5);
      reset(div_3);
      reset(div);
      var div_6 = sibling(div, 2);
      var div_7 = child(div_6);
      var div_8 = child(div_7);
      var node_2 = child(div_8);
      {
        var consequent = ($$anchor3) => {
          var fragment_2 = comment();
          var node_3 = first_child(fragment_2);
          each(
            node_3,
            1,
            () => (get(changelog), untrack(() => Object.keys(get(changelog)))),
            index,
            ($$anchor4, version) => {
              var div_9 = root_4$1();
              var div_10 = child(div_9);
              var text_4 = child(div_10);
              reset(div_10);
              var node_4 = sibling(div_10, 4);
              each(
                node_4,
                1,
                () => (get(changelog), get(version), untrack(() => Object.keys(get(changelog)[get(version)]).filter((section) => section !== "date"))),
                index,
                ($$anchor5, section) => {
                  var div_11 = root_5$1();
                  var div_12 = child(div_11);
                  var text_5 = child(div_12, true);
                  reset(div_12);
                  var div_13 = sibling(div_12, 2);
                  each(
                    div_13,
                    5,
                    () => (get(changelog), get(version), get(section), untrack(() => get(changelog)[get(version)][get(section)])),
                    index,
                    ($$anchor6, entry) => {
                      var div_14 = root_6();
                      var node_5 = child(div_14);
                      html(node_5, () => (deep_read_state(purify), get(entry), untrack(() => {
                        var _a;
                        return purify.sanitize((_a = get(entry)) == null ? void 0 : _a.raw);
                      })));
                      reset(div_14);
                      append($$anchor6, div_14);
                    }
                  );
                  reset(div_13);
                  reset(div_11);
                  template_effect(() => {
                    set_class(div_12, 1, `font-semibold uppercase text-xs ${get(section) === "added" ? "bg-blue-500/20 text-blue-700 dark:text-blue-200" : get(section) === "fixed" ? "bg-green-500/20 text-green-700 dark:text-green-200" : get(section) === "changed" ? "bg-yellow-500/20 text-yellow-700 dark:text-yellow-200" : get(section) === "removed" ? "bg-red-500/20 text-red-700 dark:text-red-200" : ""}  w-fit rounded-xl px-2 my-2.5`);
                    set_text(text_5, get(section));
                  });
                  append($$anchor5, div_11);
                }
              );
              reset(div_9);
              template_effect(() => set_text(text_4, `v${get(version) ?? ""} - ${(get(changelog), get(version), untrack(() => get(changelog)[get(version)].date)) ?? ""}`));
              append($$anchor4, div_9);
            }
          );
          append($$anchor3, fragment_2);
        };
        if_block(node_2, ($$render) => {
          if (get(changelog)) $$render(consequent);
        });
      }
      reset(div_8);
      reset(div_7);
      var div_15 = sibling(div_7, 2);
      var button_1 = child(div_15);
      var span = child(button_1);
      var text_6 = child(span, true);
      reset(span);
      reset(button_1);
      reset(div_15);
      reset(div_6);
      template_effect(
        ($0, $1, $2, $3) => {
          set_text(text2, `${$0 ?? ""}
				${$WEBUI_NAME() ?? ""} `);
          set_attribute(button, "aria-label", $1);
          set_text(text_2, $2);
          set_text(text_3, `v${WEBUI_VERSION}`);
          set_text(text_6, $3);
        },
        [
          () => ($i18n(), untrack(() => $i18n().t("What's New in"))),
          () => ($i18n(), untrack(() => $i18n().t("Close"))),
          () => ($i18n(), untrack(() => $i18n().t("Release Notes"))),
          () => ($i18n(), untrack(() => $i18n().t("Okay, Let's Go!")))
        ]
      );
      event("click", button, () => {
        localStorage.version = $config().version;
        show(false);
      });
      event("click", button_1, async () => {
        localStorage.version = $config().version;
        await settings.set({ ...$settings(), ...{ version: $config().version } });
        await updateUserSettings(localStorage.token, { ui: $settings() });
        show(false);
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true },
    $$legacy: true
  });
  pop();
  $$cleanup();
}
var root_2 = from_html(` <br/> `, 1);
var root_5 = from_html(`<div class="mt-4 text-sm font-medium text-center"><div> </div></div>`);
var root$1 = from_html(`<div class="fixed w-full h-full flex z-999"><div class="absolute w-full h-full backdrop-blur-lg bg-white/10 dark:bg-gray-900/50 flex justify-center"><div class="m-auto pb-10 flex flex-col justify-center"><div class="max-w-md"><div class="text-center dark:text-white text-2xl font-medium z-50" style="white-space: pre-wrap;"><!></div> <div class=" mt-4 text-center text-sm dark:text-gray-200 w-full" style="white-space: pre-wrap;"><!></div> <!> <div class=" mt-6 mx-auto relative group w-fit"><button class="relative z-20 flex px-5 py-2 rounded-full bg-white border border-gray-100 dark:border-none hover:bg-gray-100 text-gray-700 transition font-medium text-sm"> </button> <button class="text-xs text-center w-full mt-2 text-gray-400 underline"> </button></div></div></div></div></div>`);
function AccountPending($$anchor, $$props) {
  push($$props, false);
  const $config = () => store_get(config, "$config", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const i18n = getContext("i18n");
  let adminDetails = mutable_source(null);
  onMount(async () => {
    set(adminDetails, await getAdminDetails(localStorage.token).catch((err) => {
      console.error(err);
      return null;
    }));
  });
  init();
  var div = root$1();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var div_3 = child(div_2);
  var div_4 = child(div_3);
  var node = child(div_4);
  {
    var consequent = ($$anchor2) => {
      var text$1 = text();
      template_effect(() => set_text(text$1, $config().ui.pending_user_overlay_title));
      append($$anchor2, text$1);
    };
    var alternate = ($$anchor2) => {
      var fragment_1 = root_2();
      var text_1 = first_child(fragment_1, true);
      var text_2 = sibling(text_1, 2);
      template_effect(
        ($0, $1) => {
          set_text(text_1, $0);
          set_text(text_2, ` ${$1 ?? ""}`);
        },
        [
          () => $i18n().t("Account Activation Pending"),
          () => $i18n().t("Contact Admin for WebUI Access")
        ]
      );
      append($$anchor2, fragment_1);
    };
    if_block(node, ($$render) => {
      var _a, _b;
      if ((((_b = (_a = $config()) == null ? void 0 : _a.ui) == null ? void 0 : _b.pending_user_overlay_title) ?? "").trim() !== "") $$render(consequent);
      else $$render(alternate, false);
    });
  }
  reset(div_4);
  var div_5 = sibling(div_4, 2);
  var node_1 = child(div_5);
  {
    var consequent_1 = ($$anchor2) => {
      var fragment_2 = comment();
      var node_2 = first_child(fragment_2);
      html(node_2, () => {
        var _a, _b;
        return marked.parse(purify.sanitize((((_b = (_a = $config()) == null ? void 0 : _a.ui) == null ? void 0 : _b.pending_user_overlay_content) ?? "").replace(/\n/g, "<br>")));
      });
      append($$anchor2, fragment_2);
    };
    var alternate_1 = ($$anchor2) => {
      var text_3 = text();
      template_effect(
        ($0, $1) => set_text(text_3, `${$0 ?? ""}
${$1 ?? ""}`),
        [
          () => $i18n().t("Your account status is currently pending activation."),
          () => $i18n().t("To access the WebUI, please reach out to the administrator. Admins can manage user statuses from the Admin Panel.")
        ]
      );
      append($$anchor2, text_3);
    };
    if_block(node_1, ($$render) => {
      var _a, _b;
      if ((((_b = (_a = $config()) == null ? void 0 : _a.ui) == null ? void 0 : _b.pending_user_overlay_content) ?? "").trim() !== "") $$render(consequent_1);
      else $$render(alternate_1, false);
    });
  }
  reset(div_5);
  var node_3 = sibling(div_5, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div_6 = root_5();
      var div_7 = child(div_6);
      var text_4 = child(div_7);
      reset(div_7);
      reset(div_6);
      template_effect(($0) => set_text(text_4, `${$0 ?? ""}: ${get(adminDetails).name ?? ""} (${get(adminDetails).email ?? ""})`), [() => $i18n().t("Admin")]);
      append($$anchor2, div_6);
    };
    if_block(node_3, ($$render) => {
      if (get(adminDetails)) $$render(consequent_2);
    });
  }
  var div_8 = sibling(node_3, 2);
  var button = child(div_8);
  var text_5 = child(button, true);
  reset(button);
  var button_1 = sibling(button, 2);
  var text_6 = child(button_1, true);
  reset(button_1);
  reset(div_8);
  reset(div_3);
  reset(div_2);
  reset(div_1);
  reset(div);
  template_effect(
    ($0, $1) => {
      set_text(text_5, $0);
      set_text(text_6, $1);
    },
    [() => $i18n().t("Check Again"), () => $i18n().t("Sign Out")]
  );
  event("click", button, async () => {
    location.href = "/";
  });
  event("click", button_1, async () => {
    localStorage.removeItem("token");
    location.href = "/auth";
  });
  append($$anchor, div);
  pop();
  $$cleanup();
}
var root_4 = from_html(`<div class="fixed w-full h-full flex z-50"><div class="absolute w-full h-full backdrop-blur-md bg-white/20 dark:bg-gray-900/50 flex justify-center"><div class="m-auto pb-44 flex flex-col justify-center"><div class="max-w-md"><div class="text-center dark:text-white text-2xl font-medium z-50"> <br/> </div> <div class=" mt-4 text-center text-sm dark:text-gray-200 w-full"> <span class="font-medium dark:text-white"> </span> </div> <div class=" mt-6 mx-auto relative group w-fit"><button class="relative z-20 flex px-5 py-2 rounded-full bg-white border border-gray-100 dark:border-none hover:bg-gray-100 transition font-medium text-sm"> </button> <button class="text-xs text-center w-full mt-2 text-gray-400 underline"> </button></div></div></div></div></div>`);
var root_3 = from_html(`<!> <!> <div class="flex-1 overflow-auto"><!></div>`, 1);
var root_1 = from_html(`<div class="app relative"><div class="text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900 h-screen max-h-[100dvh] overflow-hidden flex flex-row"><!></div></div>`);
var root = from_html(`<!> <!> <!>`, 1);
function _layout($$anchor, $$props) {
  push($$props, false);
  const $user = () => store_get(user, "$user", $$stores);
  const $showSearch = () => store_get(showSearch, "$showSearch", $$stores);
  const $showSidebar = () => store_get(showSidebar, "$showSidebar", $$stores);
  const $showSettings = () => store_get(showSettings, "$showSettings", $$stores);
  const $showShortcuts = () => store_get(showShortcuts, "$showShortcuts", $$stores);
  const $temporaryChatEnabled = () => store_get(temporaryChatEnabled, "$temporaryChatEnabled", $$stores);
  const $page = () => store_get(page, "$page", $$stores);
  const $showChangelog = () => store_get(showChangelog, "$showChangelog", $$stores);
  const $i18n = () => store_get(i18n, "$i18n", $$stores);
  const [$$stores, $$cleanup] = setup_stores();
  const { saveAs } = fileSaver;
  const i18n = getContext("i18n");
  let DB = mutable_source(null);
  let localDBChats = mutable_source([]);
  const clearChatInputStorage = () => {
    const chatInputKeys = Object.keys(localStorage).filter((key) => key.startsWith("chat-input"));
    if (chatInputKeys.length > 0) {
      chatInputKeys.forEach((key) => {
        localStorage.removeItem(key);
      });
    }
  };
  const checkLocalDBChats = async () => {
    try {
      set(DB, await openDB("Chats", 1));
      if (!get(DB)) {
        return;
      }
      const chats2 = await get(DB).getAllFromIndex("chats", "timestamp");
      set(localDBChats, chats2.map((item, idx) => chats2[chats2.length - 1 - idx]));
      if (get(localDBChats).length === 0) {
        await deleteDB("Chats");
      }
    } catch (error) {
    }
  };
  onMount(async () => {
    var _a;
    if ($user() === void 0 || $user() === null) {
      return;
    }
    if (!["user", "admin"].includes((_a = $user()) == null ? void 0 : _a.role)) {
      return;
    }
    clearChatInputStorage();
    await checkLocalDBChats();
    tools.set([]);
    functions.set([]);
    tags.set([]);
    banners.set([]);
    toolServers.set([]);
    const isShortcutMatch = (event2, shortcut) => {
      const keys = (shortcut == null ? void 0 : shortcut.keys) || [];
      const normalized = keys.map((k) => k.toLowerCase());
      const needCtrl = normalized.includes("ctrl") || normalized.includes("mod");
      const needShift = normalized.includes("shift");
      const needAlt = normalized.includes("alt");
      const mainKeys = normalized.filter((k) => !["ctrl", "shift", "alt", "mod"].includes(k));
      const keyPressed = event2.key.toLowerCase();
      if (needShift && !event2.shiftKey) return false;
      if (needCtrl && !(event2.ctrlKey || event2.metaKey)) return false;
      if (!needCtrl && (event2.ctrlKey || event2.metaKey)) return false;
      if (needAlt && !event2.altKey) return false;
      if (!needAlt && event2.altKey) return false;
      if (mainKeys.length && !mainKeys.includes(keyPressed)) return false;
      return true;
    };
    const setupKeyboardShortcuts = () => {
      document.addEventListener("keydown", async (event2) => {
        var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
        if (isShortcutMatch(event2, shortcuts[Shortcut.SEARCH])) {
          console.log("Shortcut triggered: SEARCH");
          event2.preventDefault();
          showSearch.set(!$showSearch());
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.NEW_CHAT])) {
          console.log("Shortcut triggered: NEW_CHAT");
          event2.preventDefault();
          (_a2 = document.getElementById("sidebar-new-chat-button")) == null ? void 0 : _a2.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.FOCUS_INPUT])) {
          console.log("Shortcut triggered: FOCUS_INPUT");
          event2.preventDefault();
          (_b = document.getElementById("chat-input")) == null ? void 0 : _b.focus();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.COPY_LAST_CODE_BLOCK])) {
          console.log("Shortcut triggered: COPY_LAST_CODE_BLOCK");
          event2.preventDefault();
          (_d = (_c = [...document.getElementsByClassName("copy-code-button")]) == null ? void 0 : _c.at(-1)) == null ? void 0 : _d.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.COPY_LAST_RESPONSE])) {
          console.log("Shortcut triggered: COPY_LAST_RESPONSE");
          event2.preventDefault();
          (_f = (_e = [...document.getElementsByClassName("copy-response-button")]) == null ? void 0 : _e.at(-1)) == null ? void 0 : _f.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.TOGGLE_SIDEBAR])) {
          console.log("Shortcut triggered: TOGGLE_SIDEBAR");
          event2.preventDefault();
          showSidebar.set(!$showSidebar());
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.DELETE_CHAT])) {
          console.log("Shortcut triggered: DELETE_CHAT");
          event2.preventDefault();
          (_g = document.getElementById("delete-chat-button")) == null ? void 0 : _g.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.OPEN_SETTINGS])) {
          console.log("Shortcut triggered: OPEN_SETTINGS");
          event2.preventDefault();
          showSettings.set(!$showSettings());
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.SHOW_SHORTCUTS])) {
          console.log("Shortcut triggered: SHOW_SHORTCUTS");
          event2.preventDefault();
          showShortcuts.set(!$showShortcuts());
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.CLOSE_MODAL])) {
          console.log("Shortcut triggered: CLOSE_MODAL");
          event2.preventDefault();
          showSettings.set(false);
          showShortcuts.set(false);
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.NEW_TEMPORARY_CHAT])) {
          console.log("Shortcut triggered: NEW_TEMPORARY_CHAT");
          event2.preventDefault();
          if (((_h = $user()) == null ? void 0 : _h.role) !== "admin" && ((_k = (_j = (_i = $user()) == null ? void 0 : _i.permissions) == null ? void 0 : _j.chat) == null ? void 0 : _k.temporary_enforced)) {
            temporaryChatEnabled.set(true);
          } else {
            temporaryChatEnabled.set(!$temporaryChatEnabled());
          }
          await goto("/");
          setTimeout(
            () => {
              var _a3;
              (_a3 = document.getElementById("new-chat-button")) == null ? void 0 : _a3.click();
            },
            0
          );
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.GENERATE_MESSAGE_PAIR])) {
          console.log("Shortcut triggered: GENERATE_MESSAGE_PAIR");
          event2.preventDefault();
          (_l = document.getElementById("generate-message-pair-button")) == null ? void 0 : _l.click();
        } else if (isShortcutMatch(event2, shortcuts[Shortcut.REGENERATE_RESPONSE])) {
          console.log("Shortcut triggered: REGENERATE_RESPONSE");
          event2.preventDefault();
          (_n = (_m = [
            ...document.getElementsByClassName("regenerate-response-button")
          ]) == null ? void 0 : _m.at(-1)) == null ? void 0 : _n.click();
        }
      });
    };
    setupKeyboardShortcuts();
    if ($page().url.searchParams.get("temporary-chat") === "true") {
      temporaryChatEnabled.set(true);
    }
    await tick();
  });
  init();
  var fragment = root();
  var node = first_child(fragment);
  SettingsModal(node, {
    get show() {
      mark_store_binding();
      return $showSettings();
    },
    set show($$value) {
      store_set(showSettings, $$value);
    },
    $$legacy: true
  });
  var node_1 = sibling(node, 2);
  ChangelogModal(node_1, {
    get show() {
      mark_store_binding();
      return $showChangelog();
    },
    set show($$value) {
      store_set(showChangelog, $$value);
    },
    $$legacy: true
  });
  var node_2 = sibling(node_1, 2);
  {
    var consequent_2 = ($$anchor2) => {
      var div = root_1();
      var div_1 = child(div);
      var node_3 = child(div_1);
      {
        var consequent = ($$anchor3) => {
          AccountPending($$anchor3, {});
        };
        var alternate = ($$anchor3) => {
          var fragment_2 = root_3();
          var node_4 = first_child(fragment_2);
          {
            var consequent_1 = ($$anchor4) => {
              var div_2 = root_4();
              var div_3 = child(div_2);
              var div_4 = child(div_3);
              var div_5 = child(div_4);
              var div_6 = child(div_5);
              var text2 = child(div_6, true);
              var text_1 = sibling(text2, 2);
              reset(div_6);
              var div_7 = sibling(div_6, 2);
              var text_2 = child(div_7);
              var span = sibling(text_2);
              var text_3 = child(span);
              reset(span);
              var text_4 = sibling(span);
              reset(div_7);
              var div_8 = sibling(div_7, 2);
              var button = child(div_8);
              var text_5 = child(button, true);
              reset(button);
              var button_1 = sibling(button, 2);
              var text_6 = child(button_1, true);
              reset(button_1);
              reset(div_8);
              reset(div_5);
              reset(div_4);
              reset(div_3);
              reset(div_2);
              template_effect(
                ($0, $1, $2, $3, $4, $5, $6, $7, $8) => {
                  set_text(text2, $0);
                  set_text(text_1, ` ${$1 ?? ""}`);
                  set_text(text_2, `${$2 ?? ""} `);
                  set_text(text_3, `${$3 ?? ""} > ${$4 ?? ""} > ${$5 ?? ""}`);
                  set_text(text_4, `. ${$6 ?? ""}`);
                  set_text(text_5, $7);
                  set_text(text_6, $8);
                },
                [
                  () => $i18n().t("Important Update"),
                  () => $i18n().t("Action Required for Chat Log Storage"),
                  () => $i18n().t("Saving chat logs directly to your browser's storage is no longer supported. Please take a moment to download and delete your chat logs by clicking the button below. Don't worry, you can easily re-import your chat logs to the backend through"),
                  () => $i18n().t("Settings"),
                  () => $i18n().t("Chats"),
                  () => $i18n().t("Import Chats"),
                  () => $i18n().t("This ensures that your valuable conversations are securely saved to your backend database. Thank you!"),
                  () => $i18n().t("Download & Delete"),
                  () => $i18n().t("Close")
                ]
              );
              event("click", button, async () => {
                let blob = new Blob([JSON.stringify(get(localDBChats))], { type: "application/json" });
                saveAs(blob, `chat-export-${Date.now()}.json`);
                const tx = get(DB).transaction("chats", "readwrite");
                await Promise.all([tx.store.clear(), tx.done]);
                await deleteDB("Chats");
                set(localDBChats, []);
              });
              event("click", button_1, async () => {
                set(localDBChats, []);
              });
              append($$anchor4, div_2);
            };
            if_block(node_4, ($$render) => {
              if (get(localDBChats).length > 0) $$render(consequent_1);
            });
          }
          var node_5 = sibling(node_4, 2);
          Sidebar_1(node_5, {});
          var div_9 = sibling(node_5, 2);
          var node_6 = child(div_9);
          slot(node_6, $$props, "default", {}, null);
          reset(div_9);
          append($$anchor3, fragment_2);
        };
        if_block(node_3, ($$render) => {
          var _a;
          if (!["user", "admin"].includes((_a = $user()) == null ? void 0 : _a.role)) $$render(consequent);
          else $$render(alternate, false);
        });
      }
      reset(div_1);
      reset(div);
      append($$anchor2, div);
    };
    if_block(node_2, ($$render) => {
      if ($user()) $$render(consequent_2);
    });
  }
  append($$anchor, fragment);
  pop();
  $$cleanup();
}
export {
  _layout as component
};
