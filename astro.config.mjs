import { defineConfig, sharpImageService } from 'astro/config';
import { remarkReadingTime } from './src/utils/';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import prefetch from '@astrojs/prefetch';
import image from '@astrojs/image';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), prefetch(), image(), sitemap()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  site: 'https://cooperadlys.ca',
});
