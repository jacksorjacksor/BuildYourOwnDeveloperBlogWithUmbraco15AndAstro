---
title: '4 - Generate TypeScript'
description: 'Generate TypeScript definations'
sortOrder: 4
---

> 💡Make sure the backend CMS is running
>
> `dotnet run` from `./Code/Backend/DeveloperBlog.Umbraco`

We will next be generating our TypeScript definitions.

Think of this as Umbraco Models Builder, but for TypeScript

### Orval

Orval is already set up for you.

You can see the Orval configuration in the `orval.config.js` file.

In the future, you can refer to the [Orval documentaion](https://orval.dev/overview) for further exploration.

Orval is called via an NPM script in the `package.json` file.

The script you need to run to generate you TypeScript definitions is:

```
npm run umb-ts-generate
```

Ensure Umbraco is running before executing.

Once run, this will generate TypeScript Types and Services in `src/umbraco-client`

The Types are located under `src/umbraco-client/model`

An example of a generated type safe service can be found in `src/umbraco-client/content/content.ts`

---

🤯 Imagine writing all that by hand!

This approach is genuinely a game changer when working headlessly with Umbraco.
