import tailwindPostcss from '@tailwindcss/postcss';
import tailwindVite from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindVite()],
    css: {
      postcss: {
        plugins: [tailwindPostcss()]
      }
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@utils': path.resolve(__dirname, 'src/utils.ts'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
      }
    }
  }
});
