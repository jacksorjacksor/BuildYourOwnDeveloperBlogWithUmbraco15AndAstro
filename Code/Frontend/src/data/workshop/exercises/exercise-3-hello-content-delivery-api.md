---
title: '3 - Content Delivery API'
description: 'Basic content fetch from the Content Delivery API'
sortOrder: 3
branchInfo:
  name: 'checkpoint/exercise-3'
  url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

In this exercise you will look at the [Umbraco Content Delivery API](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api) integrated directly into your Astro project using JavaScript `fetch` requests.

This is a quick exercise to observe a direct Content Delivery API integration via a simple `fetch` request.

This has been preconfigured for you in the example file `fetch-example.astro` in the `/blog` directory.

### Open the Fetch Example File

Open `blog/fetch-example.astro` in your editor:

```
.
└── Code/
    └── Frontend/
        └── src/
            └── pages/
                └── blog/
                    └── fetch-example.astro ⬅️
```

- Observe how simple it is to set up direct API calls in Astro.

- Think about the limitations of this direct-fetch approach - we will next implement a more robust approach.

### Run the Fetch Example

Make sure the backend CMS is running

```powershell title=".Code/Backend/DeveloperBlog.Umbraco/"
dotnet run
```

Run the Astro project (make sure the Umbraco project is also running).

```
npm run dev
```

Now browse to: [http://localhost:4321/blog/fetch-example](http://localhost:4321/blog/fetch-example)

Note: This file is for demonstration purposes and can be deleted for your actual blog.
