<script>
        import { Toaster } from 'svelte-sonner';

        import { onMount, setContext } from 'svelte';
        import {
                config,
                user,
                settings,
                theme,
                WEBUI_NAME,
                mobile,
                isApp,
                models
        } from '$lib/stores';

        import i18n, { initI18n } from '$lib/i18n';

        import '../tailwind.css';
        import '../app.css';

        import { WEBUI_BASE_URL } from '$lib/constants';

        setContext('i18n', i18n);

        let loaded = true;

        const BREAKPOINT = 768;

        const mockConfig = {
                status: true,
                name: 'Open WebUI',
                version: '0.6.40',
                default_locale: 'pl-PL',
                default_models: '',
                default_prompt_suggestions: [
                        { content: 'Help me study', title: ['Help me study', 'vocabulary for a college entrance exam'] },
                        { content: 'Give me ideas', title: ['Give me ideas', 'for what to do with my kids art'] },
                        { content: 'Tell me a fun fact', title: ['Tell me a fun fact', 'about the Roman Empire'] },
                        { content: 'Show me a code snippet', title: ['Show me a code snippet', 'of a website sticky header'] }
                ],
                features: {
                        auth: false,
                        auth_trusted_header: false,
                        enable_api_keys: true,
                        enable_signup: true,
                        enable_login_form: true,
                        enable_web_search: true,
                        enable_google_drive_integration: false,
                        enable_onedrive_integration: false,
                        enable_image_generation: true,
                        enable_admin_export: true,
                        enable_admin_chat_access: true,
                        enable_community_sharing: true,
                        enable_autocomplete_generation: true,
                        enable_direct_connections: true,
                        enable_version_update_check: false
                },
                oauth: {
                        providers: {}
                }
        };

        const mockUser = {
                id: 'local-user',
                email: 'user@localhost',
                name: 'Local User',
                role: 'admin',
                profile_image_url: '/static/favicon.png',
                permissions: {
                        chat: {
                                temporary_enforced: false,
                                multiple_models: true
                        },
                        features: {
                                image_generation: true,
                                code_interpreter: true,
                                web_search: true
                        }
                }
        };

        const mockModels = [
                {
                        id: 'gpt-4',
                        name: 'GPT-4',
                        owned_by: 'openai',
                        external: true
                },
                {
                        id: 'gpt-3.5-turbo',
                        name: 'GPT-3.5 Turbo',
                        owned_by: 'openai',
                        external: true
                },
                {
                        id: 'llama2',
                        name: 'Llama 2',
                        owned_by: 'ollama',
                        details: {
                                parent_model: '',
                                format: 'gguf',
                                family: 'llama',
                                families: ['llama'],
                                parameter_size: '7B',
                                quantization_level: 'Q4_0'
                        },
                        size: 3800000000,
                        description: 'Llama 2 is a collection of pretrained and fine-tuned generative text models.',
                        model: 'llama2:latest',
                        modified_at: '2024-01-01T00:00:00Z',
                        digest: 'abc123'
                }
        ];

        config.set(mockConfig);
        WEBUI_NAME.set(mockConfig.name);
        user.set(mockUser);
        models.set(mockModels);

        theme.set(localStorage.theme || 'dark');
        mobile.set(typeof window !== 'undefined' ? window.innerWidth < BREAKPOINT : false);

        onMount(() => {
                settings.set(JSON.parse(localStorage.getItem('settings') ?? '{}'));
                initI18n(localStorage?.locale);

                const onResize = () => mobile.set(window.innerWidth < BREAKPOINT);
                window.addEventListener('resize', onResize);
                return () => window.removeEventListener('resize', onResize);
        });
</script>

<svelte:head>
        <title>{$WEBUI_NAME}</title>
        <link crossorigin="anonymous" rel="icon" href="{WEBUI_BASE_URL}/static/favicon.png" />
</svelte:head>

<slot />

<Toaster theme="dark" richColors position="top-right" />
