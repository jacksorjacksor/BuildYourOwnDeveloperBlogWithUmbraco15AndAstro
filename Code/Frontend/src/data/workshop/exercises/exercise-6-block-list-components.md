---
title: '6 - Block List Components'
description: 'Add Block List components to the blog article'
sortOrder: 6
branchInfo:
  name: 'checkpoint/exercise-6'
  url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

At the moment, we're only rendering some basic Rich Text from the CMS - which is a bit dull 😴

Next, we're going to take our blog up a notch by introducing Block List components.

### Pre Configured Code

We have created 3 components already:

- RichText
- Quote
- Image

These can be found in the `./src/components/blocks` directory.

We've also built a Block List renderer, located in `./src/components/BlockList.astro`.

We'll make use of these by extending our `[slug].astro` dynamic route.

### Implementing The Block List

In our `[slug].astro` file, we want to add in another property called `components` to explicitly set our Block List.

Where we are seting the `props` in the `getStaticPaths` function, add the following:

```ts title=./Code/Frontend/src/pages/blog/[slug].astro ins="components: article.data.content.properties?.components?.items,"
props: {
    // Keep existing props - just add in the line below
    components: article.data.content.properties?.components?.items,
}
```

We then want to deconstuct for use in the markup with:

```ts title=./Code/Frontend/src/pages/blog/[slug].astro ins="components"
const { date, title, components, properties } = Astro.props;
```

In the markup, replace where we are currently rendering the Rich Text property with the following:

```ts title=./Code/Frontend/src/pages/blog/[slug].astro
{components && <BlockList blocks={components} />}
```

Make sure you import the required modules. Eg:

```ts title=./Code/Frontend/src/pages/blog/[slug].astro
import BlockList from '../../components/BlockList.astro';
```

In VS code you should be able to do this by:

1. Hovering your cursor over the red-underline error indicator
2. Pressing **[CTRL] + [.]**

### Run Astro

Run the Astro application again - you should now have blocks rendering!
