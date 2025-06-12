---
title: '8 - Deploy to Vercel'
description: 'Deploy to Vercel'
sortOrder: 8
branchInfo:
  name: 'checkpoint/exercise-8'
  url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

Next we'll look to get our blog hosted 🚀

At this point, it might be a good idea to switch to the `main` branch, which contains a fully configured blog.

This can then serve as a solid foundation for you to build on going forward.

You can still deploy this workshop exercise branch as an initial test – it's easy enough to tweak and redeploy later.

## Create a Vercel account

If you have not already done so, create an accrount with [Vercel](https://vercel.com/).

We recommend creating a user with you GitHub account.

## Install Vercel CLI

We are going to be using the [Vercel CLI](https://vercel.com/docs/cli) tool to deploy our site.

You can install it by running:

```
npm i -g vercel
```

## Login to Vercel via the CLI

If you do not already use Vercel, you will need to login to your Vercel account via the command line.

To do this run:

```
vercel login
```

## Link the blog project to Vercel

Note: A `vercel.json` file is already set up at the root of the project with the basic settings we need.

Once logged in, you next need to link this project to Vercel.

To do this, run the pre-configured script from the `package.json` file:

```
npm run vercel-link
```

## Deploy to Vercel

Now that you have linked the project, let's deploy what we have so far!

To do this, run the pre-configured script:

```
npm run deploy
```

This will build the project and then push the changes to Vercel.

Once complete, browse to the Vercel dashboard and click on the link to see you live blog 🙌

### Note

For this setup, the Umbraco instance will continue to be managed locally. We're only deploying the static assets built by Astro.

If you'd like to host the CMS as well, you could look into doing this via Azure, Umbraco Cloud or something similar as an extra-curricular activity.

If you do stick with the locally hosted route, just make sure you consider some redundancy for your data.

---

> 💁‍♀️ Offer help to anyone who might be finding it difficult.

> ✅ Let Rich or Adam know once you've finished.
