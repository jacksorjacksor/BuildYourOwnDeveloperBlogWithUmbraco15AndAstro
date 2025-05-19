---
title: '3 - Content Delivery API'
description: 'Basic content fetch from the Content Delivery API'
sortOrder: 3
branchInfo:
    name: 'checkpoint/exercise-3'
    url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

In this exercise you will integrate the [Umbraco Content Delivery API](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api) directly into your Astro project using JavaScript `fetch` requests.

This is a quick exercise to observe a direct Content Delivery API integration via a simple `fetch` request.

This has been preconfigured for you in the example file `fetch-example.astro` in the `/blog` directory.

> 💡Make sure the backend CMS is running
>
> ```powershell title=".Code/Backend/DeveloperBlog.Umbraco/"
> dotnet run
> ```

### Open the Fetch Example File

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


- Observe how simple it is to set up direct API calls in Astro.

```javascript wrap title=.Code/Frontend/src/pages/blog/index.astro
let data = await fetch(
  'http://localhost:48006/umbraco/delivery/api/v2/content?take=100&filter=contentType:blogArticlePage'
);

- Think about the limitations of this direct-fetch approach - we will next implement a more robust approach.

### Run the Fetch Example

Run the Astro project (make sure the Umbraco project is also running).

```
npm run dev
```

Now browse to: [http://localhost:4321/blog/fetch-example](http://localhost:4321/blog/fetch-example)

Note: This file is for demonstration purposes and can be deleted for your actual blog.
