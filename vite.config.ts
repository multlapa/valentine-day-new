import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [svgr({ include: '**/*.svg' }), react(), viteTsconfigPaths()],
    base: '/valentine-day/',
    resolve: {
        alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
        port: 9000,
    },
});