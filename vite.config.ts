import react from '@vitejs/plugin-react';
import {defineConfig, loadEnv} from 'vite';
import {dynamicBase} from 'vite-plugin-dynamic-base';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd());

    return {
        build: {
            outDir: env.VITE_BUILD_OUT_DIR
        },
        plugins: [
            react(),
            dynamicBase({
                transformIndexHtml: true
            })
        ],
        base: '/__dynamic_base__/'
    };
});
