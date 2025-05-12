import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Imports for Exercise 5
//import { getAllContentByType } from './services/ContentService';
//import type { ZodType } from 'astro/zod';
//import type { BlogArticlePageContentModel } from './umbraco-client/model';

const workshopExercise = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/workshop/exercises' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    sortOrder: z.number(),
  }),
});

// Exercise 5 - Implement Blog Content Collection here

export const collections = { workshopExercise };
