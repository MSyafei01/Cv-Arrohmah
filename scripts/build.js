    import { defineConfig } from 'vite';
    import reactRefresh from '@vitejs/plugin-react-refresh';
    import svgr from 'vite-plugin-svgr';

    export default defineConfig({
        plugins: [reactRefresh(), svgr()],
        build: {
            outDir: 'public',
            rollupOptions: {
                input: {
                    index: './src/index.html',
                    about: './src/about.html',
                    products: './src/products.html',
                    testimonials: './src/testimonials.html',
                    contact: './src/contact.html'
                }
            },
            cssCodeSplit: true,
            minify: 'esbuild'
        },
        server: {
            port: 3000
        }
    });
