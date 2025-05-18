---
title: '7 - Code Snippets'
description: 'Add a Code Snippet component to the blog article'
sortOrder: 7
branchInfo:
    name: 'checkpoint/exercise-7'
    url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

Now we know the importance of sharing code, lets look at extending our Block List implementation with a Code Snippet block.

Our repo's backend, using Umbraco v15, has been setup with the Document Type called:

`Code Snippet Component`

This is using [Contentment](https://marketplace.umbraco.com/package/umbraco.community.contentment) and implementing the [Code Snippet](https://github.com/leekelleher/umbraco-contentment/blob/develop/docs/editors/code-editor.md) property type.

### Create a Code Snippet astro component

In the `.src/components/blocks` directory, create a new file called `CodeSnippetComponent.astro` (🆕):

```
.
└── Code/
    └── Frontend/
        └── src/
            └── components/
                └── blocks/
                    ├── CodeSnippetComponent.astro 🆕
                    ├── ImageComponent.astro
                    ├── QuoteComponent.astro
                    └── RichTextComponent.astro
```

Use the following snippet in the file:

```astro title=./Code/Frontend/src/components/blocks/CodeSnippetComponent.astro
---
import type { BundledLanguage } from 'shiki';
import { Code } from 'astro:components';
import type {
  ApiBlockListModelItemsItem,
  CodeSnippetComponentElementModel,
} from '../../umbraco-client/model';

interface Props {
  block: ApiBlockListModelItemsItem;
}

const { block } = Astro.props;

const content = block.content as CodeSnippetComponentElementModel;
const syntax = content.properties?.codeSnippetSyntax as BundledLanguage;
const codeSnippet = content.properties?.codeSnippet;
---

<div class="p-6 bg-[#282A36]">
  <Code code={codeSnippet || ''} lang={syntax || 'js'} theme="dracula" />
</div>

```

Here we are using the built in Astro code [Syntax Highlighting](https://docs.astro.build/en/guides/syntax-highlighting/) component which utilises [Shiki](https://shiki.matsu.io/)

The syntax is set in the component using a dropdown in the CMS.

### Extending the Block Grid

Open the `./src/components/BlockList.astro` (⭐) file that is used for rendering the Blocks.

```
.
└── Code/
    └── Frontend/
        └── src/
            └── components/
                └── BlockList.astro ⭐
```

Notice this uses a simple map to intergrate the content type of the element and render the correct block.

extend the component map with:


```ts title=./Code/Frontend/src/components/BlockList.astro
const COMPONENT_MAP = {
  ...
  codeSnippetComponent: CodeSnippetComponent,
};
```

### Add a Code Snippet to an Article

In Umbraco, add a Code Snippet to a new or existing article.

Publish and re-run Astro to see the component rendering 🤓


🔥 HOTKEY! You can refresh Astro's Content Layer, which accesses the Umbraco data, by going to the terminal running Astro and pressing `s + enter`! 
📚 [`astro dev` hot keys](https://docs.astro.build/en/reference/cli-reference/#astro-dev)