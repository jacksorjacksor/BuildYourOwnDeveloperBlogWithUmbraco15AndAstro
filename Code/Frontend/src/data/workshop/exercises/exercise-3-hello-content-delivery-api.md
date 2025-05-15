---
title: '3 - Content Delivery API'
description: 'Basic content fetch from the Content Delivery API'
sortOrder: 3
---

This is a quick exercise to observe a direct Content Delivery API integration via a simple `fetch` request.

This has been preconfigured for you in the example file `fetch-example.astro` in the `/blog` directory.

> 💡Make sure the backend CMS is running
>
> `dotnet run` from `./Code/Backend/DeveloperBlog.Umbraco`

### Open the Fetch Example File

Open `blog/fetch-example.astro` in your editor.

- Observe how simple it is to set up direct API calls in Astro.

- Think about the limitations of this direct-fetch approach - we will next implement a more robust approach.

### Run the Fetch Example

Run the Astro project (make sure the Umbraco project is also running).

```
npm run dev
```

Now browse to: [http://localhost:4321/blog/fetch-example](http://localhost:4321/blog/fetch-example)

Note: This file is for demonstration purposes and can be deleted for your actual blog.
