# Build Your Own Developer Blog with Umbraco 15 & Astro

# Setup

If you have made it this far you have already checked out the repository - well done and welcome! 👋

## 1. Checkout Workshop Start Branch

Make sure you are on the workshop start branch `checkpoint/start`

```
git checkout checkpoint/start
```

Next we will install dependencies and making sure everything is working.

## 2. Install Frontend Dependencies

From the root of the frontend project directory `./Code/Frontend`

Please run the following:

```
npm install
```

## 3. Run the Umbraco to setup the CMS

From the route of the backend project directory `./Code/Backend/DeveloperBlog.Umbraco`

Please run the following:

```
dotnet run
```

This will build and run Umbraco.

## 4. Login to Umbraco

Login to the Umbraco instance on [https://localhost:44385/umbraco/](https://localhost:44385/umbraco/)

**Credentials**

- admin@example.com
- 1234567890

## 5. Import uSync

Your Umbraco instance should be populated with some sample articles due to uSync's "Import on Startup" functionality - but if this doesn't work...

... you can import from the uSync Dashboard in Settings

[https://localhost:44385/umbraco/section/settings/workspace/usync-root](https://localhost:44385/umbraco/section/settings/workspace/usync-root)

Run **Import Everything**

## 6. Run Astro

From the route of the frontend project `./Code/Frontend`

Please run the following:

```
npm run dev
```

Now browse to the exercises page: [http://localhost:4321/exercises](http://localhost:4321/exercises)

You will be following along the exercise content in the Astro application.

## 7. VS Code Extensions: "Astro" and "Tailwind CSS IntelliSense"

If you are using VS Code, you can install:

- [Astro Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) for syntax highlighting.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for Tailwind usage support.

## 8. Tell the teacher you are done 🙋‍♀️

... also, help anyone else who may be having issues 😊
