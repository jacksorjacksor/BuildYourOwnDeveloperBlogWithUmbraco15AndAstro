---
title: '3 - Content Delivery API'
description: 'Basic content fetch from the Content Delivery API'
sortOrder: 3
branchInfo:
    name: 'checkpoint/exercise-3'
    url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

In this exercise you will integrate the [Umbraco Content Delivery API](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api) directly into your Astro project using JavaScript `fetch` requests.

> 💡Make sure Umbraco is running
>
> ```powershell title=".Code/Backend/DeveloperBlog.Umbraco/"
> dotnet run
> ```

### Implement the Fetch Request

Open `blog/index.astro` in your editor:

```
.
└── Code/
    └── Frontend/
        └── src/
            └── pages/
                └── blog/
                    └── index.astro ⬅️
```

At the top of the file, add a fetch call inside the Astro [Component Script](https://docs.astro.build/en/basics/astro-components/#the-component-script):

```javascript wrap title=.Code/Frontend/src/pages/blog/index.astro
let data = await fetch(
  'http://localhost:48006/umbraco/delivery/api/v2/content?take=100&filter=contentType:blogArticlePage'
);

let blogs = await data.json();
```

### 🤔💭

- Observe how simple it is to set up direct API calls in Astro.

- Evaluate the limitations of this direct-fetch approach before moving on to more robust patterns.
