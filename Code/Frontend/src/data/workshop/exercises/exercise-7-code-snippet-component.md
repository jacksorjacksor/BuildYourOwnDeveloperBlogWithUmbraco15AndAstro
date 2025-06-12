---
title: '7 - Code Snippets'
description: 'Add a Code Snippet component to the blog article'
sortOrder: 7
branchInfo:
  name: 'checkpoint/exercise-7'
  url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

Now that we have Block List component rendering, lets look at adding a Code Snippet block.

Umbraco has already been setup with the Document Type called:

`Code Snippet Component`

This is using [Contentment](https://marketplace.umbraco.com/package/umbraco.community.contentment) and implementing the [Code Snippet](https://github.com/leekelleher/umbraco-contentment/blob/develop/docs/editors/code-editor.md) property type.

### Create a Code Snippet astro component

In the `.src/components/blocks` directory, open the empty `CodeSnippetComponent.astro` file.

Use the following snippet in the file:

```js title=".src/components/blocks"
---
import type { BundledLanguage } from 'shiki';
import { Code } from 'astro-expressive-code/components';
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

<div class="my-6 bg-[#282A36]">
  <Code code={codeSnippet || ''} lang={syntax || 'js'} />
</div>

```

Here we are using the built in Astro code [Syntax Highlighting](https://docs.astro.build/en/guides/syntax-highlighting/) component which utilises [Shiki](https://shiki.matsu.io/)

The syntax is set in the component using a dropdown in the CMS.

### Extending the Block Grid

Open the `./src/components/BlockList.astro` file that is used for rendering the Blocks.

Notice this uses a simple map to render the correct block. Extend the component map with:

```js title="./src/components/BlockList.astro" ins="codeSnippetComponent: CodeSnippetComponent,"
const COMPONENT_MAP = {
  ...
  codeSnippetComponent: CodeSnippetComponent,
};
```

### Add a Code Snippet to an Article

In Umbraco, add a Code Snippet to a new or existing article.

Publish and re-run Astro to see the component rendering 🤓

---

> 💁‍♀️ Offer help to anyone who might be finding it difficult.

> ✅ Let Rich or Adam know once you've finished.

> ⏱️ Please wait for the next demo before starting the next exercise.
