import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const workshopExercise = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/workshop/exercises' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { workshopExercise };
