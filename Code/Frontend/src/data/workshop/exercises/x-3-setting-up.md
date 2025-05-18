---
title: 'Appendix C - Setup'
description: 'Setting up'
sortOrder: 130
---

If you have made it this far you have already checked out the repository - well done and welcome!

Next we will finish up the set up by installing dependencies and making sure everything is working.

## 1. Install Frontend Dependencies

From the route of the frontend project `./Code/Frontend/`

Please run the following:

```bash title=Code/Frontend
npm install
```

## 2. Run the Umbraco to setup the CMS

From the route of the backend project `./Code/Backend/DeveloperBlog.Umbraco`

Please run the following:

```bash title=Code/Backend/DeveloperBlog.Umbraco/
dotnet run
```

## 3. Run Astro

From the route of the backend project `./Code/Frontend`

Please run the following:

```bash title=Code/Frontend
npm run dev
```

Now browse to: [http://localhost:4321](http://localhost:4321/)
