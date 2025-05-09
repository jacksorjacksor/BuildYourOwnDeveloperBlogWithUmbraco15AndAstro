---
title: '2 - Dynamic Route'
description: 'Astro Familiarisation'
sortOrder: 2
---

Now that you are more familiar with Astro, we will be setting up a dynamic route file ready for us to output our CMS content in coming exercises.

Open the `[slug].astro` file in the `/pages/blog/` directory

(**Not** the exercises directory)

This will be out [Dynamic Route](https://docs.astro.build/en/guides/routing/#dynamic-routes) page for the blog articles

The file is pre-set with some hardcoded data that will simulate some blog article data.

Complete the `getStaticPaths()` function by setting the URL for the dynamic page

and passing the data down to be rendered in the page

> 💡Hint
>
> Use `params: { slug: urlSegment }`
>
> and also
>
> `props: { article }`

Run the Astro application and browse to one of the articles to see the data rendering
