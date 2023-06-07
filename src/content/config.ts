import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z
      .string()
      .max(155, 'For optimum SEO, the description should be 155 ch or less.'),
    author: z.string(),
    isDraft: z.boolean(),
    publishedDate: z.date(),
    tags: z.array(z.string()),
    image: z.object({
      src: z.string().url().optional(),
      alt: z.string().optional(),
    }),
    canonicalURL: z.string().url(),
  }),
});

export const collections = {
  blog: blogCollection,
};
