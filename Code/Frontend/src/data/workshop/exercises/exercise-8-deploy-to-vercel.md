---
title: '8 - Deploy to Vercel'
description: 'Deploy to Vercel'
sortOrder: 8
branchInfo:
    name: 'checkpoint/exercise-8'
    url: 'https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/tree/checkpoint/start'
---

Now that we have a working Astro blog powered by Umbraco, we can look at hosting it.

For this, we are going to use the cloud platform provider [Vercel](https://vercel.com/)

This will be free for youy to host up to a certain limit (likely ample for a blog).

## Creare a Vercel account

If you have not already done so, create an accrount with Vercel.

## Login to Vercel via the CLI

If you do not already use Vercel, you will need to login to your Vercel account via the command line.

To do this run:

```bash title=Code/Frontend
vercel login
```

The `vercel.json` file is already set up at the root of the project with the basic settings we need.

## Link the blog project to Vercel

Once logged in, you next need to link this project to Vercel.

To do this, run the pre-configured script from the `package.json` file:

```bash title=Code/Frontend
npm run vercel-link
```

When prompted:

**Link to existing project?**

Select `Link to existing project` if you have one, or `Create a new project`.

Give it a name (for example, `my-astro-blog`) and choose your account or team scope.

**Which directory is your code in?**

Press Enter to accept `./`.

**What’s your build command?**

Leave this empty as we will be pre-building the project.

**Which directory is your build output located in?**

Enter `dist/`.

A `vercel.json` file and a hidden `.vercel/` folder will appear, linking your local folder to the Vercel project.

This will create a project in Vercel.

Browse to the Vercel dashboard to see the project.

It will also create a `.vercel/project.json` file that is used to create the on-going link to the project.

## Deploy to Vercel

Now that you have linked the project, let's deploy what we have so far!

To do this, run the pre-configured script:

```bash title=Code/Frontend
npm run deploy
```

This will build the project and then push the changes to Vercel.

Once complete, browse to the Vercel dashboard and click on the link to see you live blog 🙌

### Note

For this set up the Umbraco instance will continue to be locally managed. We are only deploying the static assets built by Astro.

If you would like to host the CMS too - you can look at doing this in Azure / Umbraco Cloud or similar as an extra curricular activity.

If you do continue down the locally hosted route - make sure you consider some redundency for your data.
