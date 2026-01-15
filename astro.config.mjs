import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';

export default defineConfig({
  // El orden importa: Tailwind primero para que procese los estilos de Vue si es necesario
  integrations: [tailwind(), vue()],
});