---
title: '4 - Content Delivery API'
description: 'Basic content fetch from the Content Delivery API'
sortOrder: 4
---

In this exercise you will integrate the Umbraco Content Delivery API directly into your Astro project using JavaScript `fetch` requests.

### Objectives

- Scaffold a basic Astro file from the cloned repository.

- Use the `fetch` API within an `.astro` component to retrieve content from Umbraco.

- Render the fetched data in your page template.

- Observe how simple it is to set up direct API calls in Astro.

- Evaluate the limitations of this direct-fetch approach before moving on to more robust patterns.

### Implement the Fetch Request

Open `blog/index.astro` in your editor.

At the top of the file, add a fetch call inside the Astro [Component Script](https://docs.astro.build/en/basics/astro-components/#the-component-script):

```js
let data = await fetch(
  'http://localhost:48006/umbraco/delivery/api/v2/content?take=100&filter=contentType:blogArticlePage'
);

let blogs = await data.json();
```
