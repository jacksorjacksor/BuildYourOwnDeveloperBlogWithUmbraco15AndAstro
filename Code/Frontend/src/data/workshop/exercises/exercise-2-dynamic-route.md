---
title: '2 - Dynamic Route'
description: 'Astro Familiarisation'
sortOrder: 2
branchInfo:
  name: 'checkpoint/exercise-2'
  url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

Now that you're more familiar with Astro, we'll next set up a dynamic route file.

Within the `Frontend` project, open `pages/blog/[slug].astro` ⭐:

```
.
└── Code/
    └── Frontend/
        └── src/
            └── pages/
                ├── blog/
                │   └── [slug].astro ⭐
                └── exercises/
```

This will be the [Dynamic Route](https://docs.astro.build/en/guides/routing/#dynamic-routes) page for the blog articles.

The file comes pre-filled with some hardcoded data to simulate blog article content.

Complete the `getStaticPaths()` function by **setting the URL** for the dynamic page and **passing the data through as a prop** so it can be rendered on the page.

> 💡Hint
>
> Use:
>
> ```js title=.Code/Frontend/src/pages/blog/[slug].astro
> params: {
>   slug: article.slug
> },
> ```
>
> and also
>
> ```js title=.Code/Frontend/src/pages/blog/[slug].astro
> props: {
>  date: article.date,
>  title: article.title,
>  properties: article.properties,
> }
> ```

Run the Astro application and browse to one of the articles to see the data rendering:

```bash title = "Code/Frontend"
npm run dev
```

Browse to [http://localhost:4321/blog/hello-world](http://localhost:4321/blog/hello-world) to see one of the hardcoded articles.

---

> 💁‍♀️ Offer help to anyone who might be finding it difficult.

> ✅ Let Rich or Adam know once you've finished.

> ⏱️ Please wait for the next demo before starting the next exercise.
