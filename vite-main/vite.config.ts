import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
        plugins: [
                sveltekit(),
                viteStaticCopy({
                        targets: [
                                {
                                        src: 'node_modules/onnxruntime-web/dist/*.jsep.*',
                                        dest: 'wasm'
                                }
                        ]
                })
        ],
        define: {
                APP_VERSION: JSON.stringify(process.env.npm_package_version),
                APP_BUILD_HASH: JSON.stringify(process.env.APP_BUILD_HASH || 'dev-build')
        },
        build: {
                sourcemap: false,
                minify: false
        },
        worker: {
                format: 'es'
        },
        server: {
                host: '0.0.0.0',
                port: 5000,
                allowedHosts: true,
                cors: true,
                strictPort: false,
                hmr: true,
                headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
                        'Pragma': 'no-cache',
                        'Expires': '0'
                }
        }
});
