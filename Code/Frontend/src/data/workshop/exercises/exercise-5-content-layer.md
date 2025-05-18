---
title: '5 - Blog Content Collection'
description: ''
sortOrder: 5
branchInfo:
    name: 'checkpoint/exercise-5'
    url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

Now that we have TypeScript types to work with, we can look to update our Umbraco implementation with something more robust.

Although the `fetch` requests demonstrated the simplicity of getting content rendering in Astro, it is not the best in terms of maintainability and ease of use.

There is a better way!

### Content Collections

Before we call to the Umbraco Content Delivery API (via our newly generated service), we firstly want to create a reusable collection in Astro.

For this we will be leveraging Astro [Content Collections](https://docs.astro.build/en/guides/content-collections/)

Content Collections allow us to organise and query data, and enable Intellisense and type checking.

### Configuring a Blog Content Collection

The collections are configured in `content.config.ts` localed in the route of the `src` directory

```
.
└── Code/
    └── Frontend/
        └── src/
            └── content.config.ts
```

Notice that there is already a collection set up for the Exercise content you have been using.

This collection used an Astro `[glob](https://docs.astro.build/en/reference/content-loader-reference/#glob-loader)` loader to load data from markdown files. More details about this process can be found in the [Astro Content Loader API](https://docs.astro.build/en/reference/content-loader-reference/) docs.

We will be using a different loader that makes a call to get content from Umbraco.

> 💡Hint
>
> Content Collections act as interfaces of a sort.
>
> So Astro files are not aware of where the content came from.
>
> This has the benefit of being able to switch the source with little effort.

### Implement the Blog Content Collection

Use the following snippet to add in the Blog Content Collection into the `content.config.ts` file.

```ts title=./Code/Frontend/src/content.config.ts
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
    content: z.any() as ZodType<BlogArticlePageContentModel>,
  }),
});
```

Once this has been added, be sure to a export it for use in other files:

```ts title=.Code/Frontend/src/content.config.ts
export const collections = { workshopExercise, blog };
```

### Custom Content Service

Rather than calling the generated TypeScript services directly, notice that we've introduced an interim layer in the form of the `services/ContentService.ts` file.

```
.
└── Code/
    └── Frontend/
        └── src/
            └── services/
                └── ContentService.ts ⬅️
```

This hides some of the more confusing generated names and also allows us to fetch all pages by type, with pagination handled using a 'do'-'while' loop.

This has a function called `getAllContentByType` which we are using to get all the blog articles.

This is all setup and ready for you to use.

### Good to know

Notice we are setting a property called `slug` to `article.route.path`.

This is were the page URL is in the Content Delivery API.

The `schema` is also using [Zod](https://zod.dev/) to ensure we have type safety when using the Content Collection.

### Update The Blog Listing

Replace the Component Script in the blog `index.astro` with:

```ts title=./Code/Frontend/src/pages/blog/index.astro
import Layout from '../../layouts/Layout.astro';
import { getCollection } from 'astro:content';
const blogs = await getCollection('blog');
```

So much cleaner ☺️

### Update The Dynamic Blog Page

Replace the Component Script in the blog `[slug].astro` with:

```ts title=./Code/Frontend/src/pages/blog/[slug].astro
import Layout from '../../layouts/Layout.astro';
import { getFinalUrlSegment } from '../../helpers/AppHelpers';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const blogCollection = await getCollection('blog');

  const blogArticles = blogCollection.map((article) => {
    return {
      params: { slug: getFinalUrlSegment(article.data.slug) },
      props: {
        date: article.data.content.createDate,
        title: article.data.content.properties?.title,
        properties: article.data.content.properties,
      },
    };
  });

  return blogArticles;
}

const { date, title, properties } = Astro.props;
```

Notice we are using a `getFinalUrlSegment` to get only the last segment of the path.

This is because Astro is already aware of the `/blog/` segment due to the `blog` directory informing the routing.
