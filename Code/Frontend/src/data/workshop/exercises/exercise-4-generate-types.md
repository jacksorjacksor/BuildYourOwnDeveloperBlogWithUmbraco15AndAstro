---
title: '4 - Generate TypeScript'
description: 'Generate TypeScript definations'
sortOrder: 4
branchInfo:
    name: 'checkpoint/exercise-4'
    url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

> 💡Make sure Umbraco is running
>
> ```powershell title=".Code/Backend/DeveloperBlog.Umbraco/"
> dotnet run
> ```

We will next be generating our TypeScript definitions.

Think of this as Umbraco Models Builder, but for TypeScript

### Orval

[Orval](https://orval.dev/) a RESTful client generator, and in this repo is already set up for you.

In the future, you can refer to the [Orval documentaion](https://orval.dev/overview) for further exploration.

You can see the Orval configuration in the `orval.config.js` 1️⃣ file.

Orval is called via an NPM script in the `package.json` 2️⃣ file.

```
.
└── Code/
    └── Frontend/
        ├── orval.config.js 1️⃣
        └── package.json 2️⃣
```

The command you need to run the NPM script which generates the TypeScript definitions is:

```bash title = "Code/Frontend"
npm run umb-ts-generate
``` 

Ensure Umbraco is running before executing.

Once run, this will generate TypeScript Types and Services in `src/umbraco-client`

The Types are located under `src/umbraco-client/model`

An example of a generated type safe service can be found in `src/umbraco-client/content/content.ts` ⭐

```
.
└── Code/
    └── Frontend/
        └── src/
            └── umbraco-client/
                ├── content/
                │   └── content.ts ⭐
                ├── media
                └── model
```

---

🤯 Imagine writing all that by hand!

This approach is genuinely a game changer when working headlessly with Umbraco.
