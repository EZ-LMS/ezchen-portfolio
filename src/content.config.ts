import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    tech: z.array(z.string()),
    demoUrl: z.string().url().optional(),
    demoNote: z.string().optional(),
    repoUrl: z.string().url().optional(),
    thumbnail: z.string(),
    featured: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
