import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';
import { peerDependencies, dependencies } from './package.json';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isLibMode = mode === 'lib';

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(isLibMode
        ? [
            dts({
              insertTypesEntry: true,
              include: ['lib/**/*.{ts,tsx}'],
            }),
          ]
        : []),
    ],
    build: isLibMode
      ? {
          lib: {
            entry: path.resolve(__dirname, 'lib/index.ts'),
            name: 'CoreReactUI',
            formats: ['es', 'umd'],
            fileName: (format) => `core-react-ui-component-library.${format}.js`,
          },
          rollupOptions: {
            // Externalize deps that shouldn't be bundled
            external: (id) => {
              // Externalize all react and react-dom imports (including subpaths)
              return (
                id === 'react' ||
                id === 'react-dom' ||
                id.startsWith('react/') ||
                id.startsWith('react-dom/') ||
                Object.keys(peerDependencies).includes(id) ||
                Object.keys(dependencies).includes(id)
              );
            },
            output: {
              // Global vars to use in UMD build for externalized deps
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
              },
            },
          },
          outDir: 'dist',
          sourcemap: false,
          // Don't minify for better readability
          minify: false,
        }
      : {
          // App build configuration
          outDir: 'dist',
          sourcemap: true,
        },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@lib': path.resolve(__dirname, './lib'),
        components: path.resolve(__dirname, './lib/components'),
      },
    },
  };
});
