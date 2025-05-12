---
title: '3 - Content Delivery API'
description: 'Basic content fetch from the Content Delivery API'
sortOrder: 3
---

You can checkout `checkpoint/exersise-3` if needed.

-

In this exercise you will integrate the Umbraco Content Delivery API directly into your Astro project using JavaScript `fetch` requests.

> 💡Make sure the backend CMS is running
>
> `dotnet run` from `./Code/Backend/DeveloperBlog.Umbraco`

### Implement the Fetch Request

Open `blog/index.astro` in your editor.

At the top of the file, add a fetch call inside the Astro [Component Script](https://docs.astro.build/en/basics/astro-components/#the-component-script):

```
let data = await fetch(
  'http://localhost:48006/umbraco/delivery/api/v2/content?take=100&filter=contentType:blogArticlePage'
);

let blogs = await data.json();
```

### 🤔💭

- Observe how simple it is to set up direct API calls in Astro.

- Evaluate the limitations of this direct-fetch approach before moving on to more robust patterns.
