import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { getAllContentByType } from "./services/ContentService";
import type { ZodType } from "astro/zod";
import type { BlogArticlePageContentModel } from "./umbraco-client/model";

const workshopExercise = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/data/workshop/exercises"}),
    schema: z.object({
        title: z.string(),
        description: z.string()
      })
})

const blog = defineCollection({
    loader: async () => {
        const response = await getAllContentByType('blogArticlePage');
        return response.map((article) => ({
            id: article.id,
            slug: article.route.path,
            content: article,
        }));
    },
    schema: z.object({
        slug: z.string(),
        content: z.any() as ZodType<BlogArticlePageContentModel>, // An 'anything goes' Zod type that we cast to our genertated interface
    })
})



export const collections = { workshopExercise, blog };