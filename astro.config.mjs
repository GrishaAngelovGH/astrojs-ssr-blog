import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import tailwind from "@astrojs/tailwind";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  vite: {
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
