# Build Your Own Developer Blog: Setup

If you have made it this far you have already checked out the repository - well done and welcome! 👋

Next we will finish up the set up by installing dependencies and making sure everything is working.

## 1. Install Frontend Dependencies

From the route of the frontend project `./Code/Frontend`

Please run the following:

```
npm install
```

## 2. Run the Umbraco to setup the CMS

From the route of the backend project `./Code/Backend/DeveloperBlog.Umbraco`

Please run the following:

```
dotnet run
```

## 3. Run the Umbraco to setup the CMS

Login to the Umbraco instance on [https://localhost:44385/umbraco/](https://localhost:44385/umbraco/)

**Credentials**<br>
admin@example.com<br>
1234567890

## 4. Import uSync

From the uSync Dashboard in Settings

[https://localhost:44385/umbraco/section/settings/workspace/usync-root](https://localhost:44385/umbraco/section/settings/workspace/usync-root)

Run **Import Everything**

## 5. Run Astro

From the route of the backend project `./Code/Frontend`

Please run the following:

```
npm run dev
```

Now browse to: [http://localhost:4321](http://localhost:4321/)

## 6. Tell the teacher you are done 🙋‍♀️

... also help anyone else who might have issues 😊

## NOTE

For the next exercises you will be following along the content in the Astro application [http://localhost:4321/exercises](http://localhost:4321/exercises)
