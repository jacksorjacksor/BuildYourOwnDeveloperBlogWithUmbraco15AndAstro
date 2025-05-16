# Build Your Own Developer Blog with Umbraco 15 & Astro

# Build Your Own Developer Blog: Setup

If you have made it this far you have already checked out the repository - well done and welcome! 👋

Next we will finish up the set up by installing dependencies and making sure everything is working.

## 1. Install Frontend Dependencies

From the route of the frontend project directory `./Code/Frontend`

Please run the following:

```
npm install
```

## 2. Run the Umbraco to setup the CMS

From the route of the backend project directory `./Code/Backend/DeveloperBlog.Umbraco`

Please run the following:

```
dotnet run
```

This will build and run Umbraco.

## 3. Login to Umbraco

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

... also, help anyone else who may nbe having issues 😊

## NOTE

For the next exercises you will be following along the content in the Astro application [http://localhost:4321/exercises](http://localhost:4321/exercises)

---

## Sample Blogs

### Theo's Blog
https://t3.gg/blog

### Scott Hanselman
https://www.hanselman.com/blog/

### Kenn Jacobsen
https://kjac.dev/

### Owain Jones
https://www.owainjones.dev/

### Rick Butterfield
https://rickbutterfield.dev/

## HexMaster
https://hexmaster.nl/

## RSS Feeds / Umbraco Blogs

### Umbraco: How to add your own blog posts to the blog feed
https://community.umbraco.com/learn-about-the-community/blog-posts/how-to-add-your-own-blog-post/

### Astro: Add an RSS feed:
https://docs.astro.build/en/recipes/rss/
