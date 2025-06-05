---
title: '1 - Astro Familiarisation'
description: ''
sortOrder: 1
branchInfo:
    name: 'checkpoint/start'
    url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

In this exercise, you'll be setting up a basic Astro project and getting it running with a simple 'Hello World' example.

## Warm-up Exercise

Familiarise yourself with the Astro syntax and project structure.

Open the `index.astro` ⭐ at the route of the `/pages/` directory file in your editor.

```
.
└── Code/
    └── Frontend/
        └── src/
            └── pages/
                └── index.astro ⭐
```

Use the imported Layout component and render some simple HTML content within it.

> 💡Hint
>
> Use `<Layout>` element in the markup

Here are some sample [Tailwind classes](https://tailwindcss.com/docs/styling-with-utility-classes) for a header:

```html title = "./Code.Frontend/src/pages/index.astro"
<h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">Welcome to my blog! 🚀</h1>
```


Run Astro using <code>npm run dev</code> to view your changes, observing hot reloading in action:

```bash title = "Code/Frontend"
npm run dev
```
