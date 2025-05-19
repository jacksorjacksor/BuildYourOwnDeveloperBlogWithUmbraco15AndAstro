---
title: '2 - Dynamic Route'
description: 'Astro Familiarisation'
sortOrder: 2
branchInfo:
    name: 'checkpoint/exercise-2'
    url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

Now that you're more familiar with Astro, we'll next set up a dynamic route file.

Within the `Frontend` project, open `pages/blog/[slug].astro`:

```
.
└── Code/
    └── Frontend/
        └── src/
            └── pages/
                ├── blog/
                │   └── [slug].astro ⬅️
                └── exercises/ ⚠️ not this folder!
```


This will be the [Dynamic Route](https://docs.astro.build/en/guides/routing/#dynamic-routes) page for the blog articles.

The file comes pre-filled with some hardcoded data to simulate blog article content.

Firstly, lets browse to one of these articles in a broken state.

Browse to [http://localhost:4321/blog/hello-world](http://localhost:4321/blog/hello-world)

Now let's fix it by implementing the following.

Complete the `getStaticPaths()` function by **setting the URL** for the dynamic page and **passing the data through as a prop** so it can be rendered on the page.

>💡Hint
>
> Use `params: { slug: article.slug  }`
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

Run the Astro application and browse to one of the articles to see the data rendering.
