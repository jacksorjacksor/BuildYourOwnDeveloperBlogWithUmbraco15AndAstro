# Process Map

## Goal: Mermaid diagram showing how everything fits together

### Technologies used

- Umbraco (v15.3.1 - [.csproj](https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/blob/b12733b9e6a2999049b2b2bade01a50c8452fe01/Code/Backend/DeveloperBlog.Umbraco/DeveloperBlog.Umbraco.csproj#L12))
  - uSync (v15.1.5)
  - Umbraco.Community.DeliveryApiExtensions (v15.0.1)
  - Contentment (v6.0.0-alpha007) [Are we using this?]
- Astro (v5.7.9 - [package.json](https://github.com/jacksorjacksor/BuildYourOwnDeveloperBlogWithUmbraco15AndAstro/blob/b12733b9e6a2999049b2b2bade01a50c8452fe01/Code/Frontend/package.json))
  - Tailwind (v4.1.4)
  - Orval (v7.8.0)
  - Prettier (v3.5.3) [Does this need to be in the project?]
  - Vercel (v41.6.2)


### Rough steps

#### Dev:
- Umb: Create editors/models

#### Authoring:
- Umb: Create content
- Umb: Publish content
- Umb: [Webhook to Astro? Or locally building?] 
- 



```mermaid
flowchart TD
  Umb["Umbraco"}
        A(["Start"])
        A --> B{"Decision"}
        B --> C["Option A"]
        B --> D["Option B"]

```
