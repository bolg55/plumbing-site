import { defineConfig, sharpImageService } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import prefetch from '@astrojs/prefetch';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), prefetch(), image()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
