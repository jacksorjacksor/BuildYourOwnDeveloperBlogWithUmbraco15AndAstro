---
title: 'Bonus - Add a custom component'
description: 'Add a custom component'
sortOrder: 10
---

Let’s push things a little further by adding your own custom block to the blog editor. You’ll be extending the current Umbraco Block List, and wiring it into Astro using the existing rendering flow.

## Step 1 – Use an existing Block as a guide

Take a look at the current block setup in the Umbraco backoffice. Use one of the existing items (like Quote or Code Snippet) as your reference point.

Create a new block type in Umbraco and give it some basic fields – something visual is ideal so you can easily spot it working. Think along the lines of a callout, feature card, or even a testimonial.

Make sure to generate the TypeScript types when you have added it to Umbraco

```bash title = "Code/Frontend"
npm run umb-ts-generate
```

## Step 2 – Build the matching Astro component

Now jump over to the Frontend project and create a new `.astro` component file in the `components/blocks/` directory:

```
.
└── Code/
    └── Frontend/
        └── src/
            └── components/
                └── blocks/
                    └── CustomComponent.astro ⭐
```

Use one of the existing components (like `QuoteComponent.astro`) as a starting point. You’ll receive a block prop – destructure it and render out whatever you need.

Want to avoid styling headaches? Grab a pre-built Tailwind UI component from [HyperUI](https://www.hyperui.dev/).

This will save you a load of CSS work.

## Step 3 – Register your component in the renderer

Open up `BlockList.astro` – this is where blocks are mapped to their components.

At the top, import your new component:

```ts
import CustomComponent from './blocks/CustomComponent.astro';
```

Then add it to the `COMPONENT_MAP`:

```ts
const COMPONENT_MAP = {
  // ...existing entries
  customComponent: CustomComponent,
};
```

## Step 4 – Run it and test

```bash
npm run dev
```

Then add your new custom block in the Umbraco CMS and refresh the page on the front-end. You should see your new block rendered using your shiny new Astro component.
