import { defineCollection, z } from 'astro:content';

const docsCollection = defineCollection({
  type: 'content', // v2.5.0+
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  'docs': docsCollection,
};