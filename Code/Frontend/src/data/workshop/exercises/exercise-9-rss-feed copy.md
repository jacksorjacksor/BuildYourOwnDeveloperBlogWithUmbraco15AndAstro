---
title: 'Bonus - RSS Feed'
description: 'Add an RSS feed'
sortOrder: 9
---

Let’s give our blog a little something extra – an RSS feed so readers can subscribe to updates.

We’ll be using Astro's RSS plugin support for generating RSS feeds.

Install the Astro plugin

```
npm install @astrojs/rss
```

Create a new file called rss.xml.ts inside the pages directory:

```
.
└── Code/
    └── Frontend/
        └── src/
            └── pages/
                ├── rss.xml.ts ⭐
                └── blog/

```

From there, follow the official Astro docs to wire things up:

👉 [Generating an RSS Feed](https://docs.astro.build/en/recipes/rss/)
