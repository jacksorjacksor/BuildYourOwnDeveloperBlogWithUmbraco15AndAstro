---
title: '8 - Deploy to Vercel'
description: 'Deploy to Vercel'
sortOrder: 8
branchInfo:
  name: 'checkpoint/exercise-8'
  url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

Let's now look to get our blog hosted.

For this, we are going to use the cloud platform provider [Vercel](https://vercel.com/)

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

For this set up the Umbraco instance will continue to be locally managed. We are only deploying the static assets built by Astro.

If you would like to host the CMS too - you can look at doing this in Azure / Umbraco Cloud or similar as an extra curricular activity.

If you do continue down the locally hosted route - make sure you consider some redundency for your data.
