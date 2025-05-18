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

In the repo you'll find three blocks already written for you:

- `ImageComponent.astro`
- `QuoteComponent.astro`
- `RichTextComponent.astro`

These can be found in the `./src/components/blocks` directory.

We've also built a Block List renderer, located in `./src/components/BlockList.astro`.

We'll make use of these by extending our `[slug].astro` dynamic route.

```
.
└── Code/
    └── Frontend/
        └── src/
            ├── components/
            │   ├── BlockList.astro
            │   └── blocks/
            │       ├── ImageComponent.astro
            │       ├── QuoteComponent.astro
            │       └── RichTextComponent.astro
            └── pages/
                └── blog/
                    └── [slug].astro    
```

### Implementing The Block List

In our `[slug].astro` file, we want to add in another property called `components` to explicitly set our Block List.

Where we are seting the `props` in the `getStaticPaths` function, add the following:

```ts title=./Code/Frontend/src/pages/blog/[slug.astro]
props: {
    // Keep existing props - just add in the line below
    components: article.data.content.properties?.components?.items,
}
```

We then want to deconstruct for use in the markup with:

```ts title=./Code/Frontend/src/pages/blog/[slug.astro]
const { date, title, components, properties } = Astro.props;
```

In the markup, replace where we are currently rendering the Rich Text property with the following:

```ts title=./Code/Frontend/src/pages/blog/[slug.astro] del={1} ins={2}
<div set:html={properties.richtext.markup} />
{components && <BlockList blocks={components} />}
```

Make sure you import the required blocklist components using syntax such as:

```ts title=.Code/Frontend/src/pages/blog/[slug.astro]
import BlockList from '../../components/BlockList.astro';
```

In VS Code you should be able to do this by **CTRL + .** while the cursor is over the red-underline error indicator.

### Run Astro

Run the Astro application again - you should now have blocks rendering!

```bash title = "Code/Frontend"
npm run dev
```