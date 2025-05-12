---
title: '2 - Dynamic Route'
description: 'Astro Familiarisation'
sortOrder: 2
---

Now that you're more familiar with Astro, we'll next set up a dynamic route file.

Open the `[slug].astro` file in the **Blog** directory `/pages/blog/`

(**Not** the exercises directory)

This will be the [Dynamic Route](https://docs.astro.build/en/guides/routing/#dynamic-routes) page for the blog articles.

The file comes pre-filled with some hardcoded data to simulate blog article content.

Complete the `getStaticPaths()` function by **setting the URL** for the dynamic page and **passing the data through as a prop** so it can be rendered on the page.

> 💡Hint
>
> Use `params: { slug: article.slug  }`
>
> and also
>
> `props: { article }`

Run the Astro application and browse to one of the articles to see the data rendering
