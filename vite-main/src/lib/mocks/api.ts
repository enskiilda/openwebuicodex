const STORAGE_KEY = 'mock_chats';
let installed = false;

const baseChat = () => ({
        id: crypto.randomUUID(),
        title: 'Demo Chat',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        folder_id: null,
        pinned: false,
        tags: [],
        chat: {
                title: 'Demo Chat',
                models: ['gpt-4'],
                params: {},
                files: [],
                history: {
                        messages: {
                                welcome: {
                                        id: 'welcome',
                                        parentId: null,
                                        childrenIds: [],
                                        role: 'assistant',
                                        content: 'Witaj w trybie demonstracyjnym! Tutaj wszystko działa lokalnie bez backendu.',
                                        timestamp: Math.floor(Date.now() / 1000)
                                }
                        },
                        currentId: 'welcome'
                }
        }
});

const loadChats = () => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
                        try {
                                return JSON.parse(saved);
                        } catch (err) {
                                console.error('Nie można odczytać zapisanych konwersacji', err);
                        }
        }
        const initial = [baseChat()];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        return initial;
};

const saveChats = (chats) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
};

const jsonResponse = (body, status = 200) =>
        new Response(JSON.stringify(body), {
                status,
                headers: { 'Content-Type': 'application/json' }
        });

const findChat = (id) => loadChats().find((chat) => chat.id === id);

const extractBody = async (init) => {
        if (!init?.body) return {};
        if (typeof init.body === 'string') {
                try {
                        return JSON.parse(init.body);
                } catch (err) {
                        return {};
                }
        }
        return init.body;
};

const getLastUserPrompt = (payload) => {
        const messages = payload?.messages ?? [];
        const last = messages.filter((msg) => msg.role === 'user').at(-1);
        if (Array.isArray(last?.content)) {
                const textPart = last.content.find((part) => typeof part?.text === 'string');
                return textPart?.text ?? 'Dziękuję za wiadomość!';
        }
        return last?.content ?? 'Dziękuję za wiadomość!';
};

export const setupMockApi = () => {
        if (installed || typeof window === 'undefined') return;
        installed = true;

        const originalFetch = window.fetch.bind(window);

        window.fetch = async (input, init = {}) => {
                const url = typeof input === 'string' ? input : input.url;
                const parsed = new URL(url, window.location.origin);
                const { pathname } = parsed;

                const isApi = pathname.startsWith('/api');

                if (!isApi) {
                        return originalFetch(input, init);
                }

                if (pathname === '/api/v1/chats/new' && init.method === 'POST') {
                        const payload = await extractBody(init);
                        const chats = loadChats();
                        const chatData = payload?.chat ?? {};
                        const newChat = {
                                ...baseChat(),
                                ...chatData,
                                id: crypto.randomUUID(),
                                title: chatData?.title ?? 'Nowy czat',
                                chat: {
                                        ...baseChat().chat,
                                        ...chatData,
                                        history: chatData?.history ?? baseChat().chat.history
                                }
                        };
                        chats.unshift(newChat);
                        saveChats(chats);
                        return jsonResponse(newChat, 201);
                }

                if (pathname.startsWith('/api/v1/chats/') && init.method === 'GET') {
                        const id = pathname.split('/').at(-1);
                        const chat = findChat(id);
                        if (!chat) {
                                return jsonResponse({ detail: 'Not Found' }, 404);
                        }
                        return jsonResponse({ id: chat.id, chat, title: chat.title });
                }

                if (pathname.startsWith('/api/v1/chats') && init.method === 'GET') {
                        const chats = loadChats().map((chat) => ({
                                ...chat,
                                time_range: 'just now'
                        }));
                        return jsonResponse(chats);
                }

                if (pathname === '/api/v1/chats/pinned' && init.method === 'GET') {
                        return jsonResponse(loadChats().filter((chat) => chat.pinned));
                }

                if (pathname === '/api/v1/chats/tags' && init.method === 'POST') {
                        const payload = await extractBody(init);
                        const tag = payload?.name;
                        return jsonResponse(loadChats().filter((chat) => chat.tags?.includes(tag)));
                }

                if (pathname === '/api/v1/chats/all/tags' && init.method === 'GET') {
                        const tagSet = new Set();
                        loadChats().forEach((chat) => (chat.tags ?? []).forEach((tag) => tagSet.add(tag)));
                        return jsonResponse(Array.from(tagSet).map((tag) => ({ name: tag })));
                }

                if (pathname.includes('/api/v1/chats') && init.method === 'POST') {
                        const payload = await extractBody(init);
                        const chats = loadChats();
                        const id = payload?.id ?? parsed.searchParams.get('id');
                        const chatIndex = chats.findIndex((chat) => chat.id === id);
                        if (chatIndex !== -1) {
                                chats[chatIndex] = { ...chats[chatIndex], ...payload };
                                saveChats(chats);
                                return jsonResponse(chats[chatIndex]);
                        }
                        return jsonResponse({ detail: 'Not Found' }, 404);
                }

                if (pathname === '/api/v1/users/settings' && init.method === 'GET') {
                        return jsonResponse({ params: {}, temporaryChatByDefault: true });
                }

                if (pathname === '/api/v1/users/location' && init.method === 'GET') {
                        return jsonResponse({ city: 'Lokalnie', country: 'Offline' });
                }

                if (pathname.startsWith('/api/v1/tools') && init.method === 'GET') {
                        return jsonResponse([]);
                }

                if (pathname.startsWith('/api/v1/functions') && init.method === 'GET') {
                        return jsonResponse([]);
                }

                if (pathname.startsWith('/api/v1/files') && init.method === 'POST') {
                        return jsonResponse({ id: crypto.randomUUID(), ...((await extractBody(init)) ?? {}) });
                }

                if (pathname.includes('/api/chat/completions') && init.method === 'POST') {
                        const payload = await extractBody(init);
                        const content = `Offline odpowiedź: ${getLastUserPrompt(payload)}`;
                        return jsonResponse({
                                id: crypto.randomUUID(),
                                choices: [
                                        {
                                                index: 0,
                                                message: { role: 'assistant', content },
                                                finish_reason: 'stop'
                                        }
                                ],
                                usage: {
                                        prompt_tokens: 0,
                                        completion_tokens: content.length,
                                        total_tokens: content.length
                                }
                        });
                }

                if (pathname.startsWith('/api/v1')) {
                        return jsonResponse({});
                }

                return originalFetch(input, init);
        };
};
