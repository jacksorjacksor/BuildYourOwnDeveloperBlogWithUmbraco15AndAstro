---
title: '9 -Deploy to Vercel'
description: 'Deploy to Vercel'
sortOrder: 9
---

## WIP Notes

**Important!** - The below is draft only. Do not follow along in it's current state.

The below is just a scaffold from an LLM and will need re-working

We will also need to run this from a standing start with now Vercel account setup so we can detail how to setup and connect via thw CLI tool.

It is also likely that we will have it installed as part of the initial `npm i`

We will also likely have a Vercel config file set up so that there is little configuration to do.

Ideally we want it to just be:

- Have Vercel account set up before attending (back up instructions for people to be able to do that during this exercise if needed - also fine for them to just listen and learn and action in future)
- Link Vercel CLI to account via command line call
- Run a deploy script

## Introduction

In this exercise, you will learn how to deploy the Astro application to Vercel using the Vercel CLI.

By the end, you will have a reproducible, cost-efficient workflow that publishes only the static output to Vercel’s global CDN.

## 1. Install Vercel CLI locally

Open a terminal in your Astro project directory.

Run the following command to add Vercel CLI as a dev dependency:

npm install --save-dev vercel

This ensures every workshop participant uses the same CLI version without global installs.

## 2. Initialise Vercel in your project

In the project root, run:

```bash
npx vercel
```

When prompted:

**Link to existing project?**

Select `Link to existing project` if you have one, or `Create a new project`.

Give it a name (for example, `my-astro-blog`) and choose your account or team scope.

**Which directory is your code in?**

Press Enter to accept `./`.

**What’s your build command?**

Enter `npm run build`.

**Which directory is your build output located in?**

Enter `dist/`.

A `vercel.json` file and a hidden `.vercel/` folder will appear, linking your local folder to the Vercel project.

## 3. Add a deploy script

Open `package.json` and update the scripts section:

```json
{
    "scripts": {
        "build": "astro build",
        "deploy": "npm run build && npx vercel --prod --prebuilt --confirm"
    }
}
```

Explanation:

- `npm run build` runs Astro’s static build.
- `npx vercel --prod --prebuilt --confirm` tells Vercel to deploy the prebuilt `dist/` folder to production, skipping interactive prompts.

## 4. Review or customise vercel.json

A minimal `vercel.json` looks like:

```json
{
    "builds": [
        { 
            "src": "package.json", 
            "use": "@vercel/static-build" 
        }
    ],
    "routes": [
        { 
            "handle": "filesystem" 
        },
        {
            "src": "/.*", 
            "dest": "/index.html" 
        }
    ]
}
```

- `@vercel/static-build` uses your build script to generate static assets.
- `routes` serves files directly and falls back to `index.html` for client-side routing.

## 5. Deploy to Vercel

Whenever you’re ready, in your terminal run:

```bash
npm run deploy
```

You will see logs as Vercel uploads `dist/` and publishes your site to a live URL.

## 6. Summary

- A local Vercel CLI installation ensures consistency and no global pollution.
- Initialization links your repo to a Vercel project and generates configuration.
- A single deploy script builds and publishes your Astro site.
- Only static assets are hosted, keeping costs minimal.

Now you’re all set to experiment: update your local CMS content, run `npm run deploy` again, and watch your changes go live instantly on Vercel!
