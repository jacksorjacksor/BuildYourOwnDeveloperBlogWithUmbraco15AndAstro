---
title: 'Appendix A'
description: 'Serving Media'
sortOrder: 100
---

## WIP Notes

We are going to explore 2 ways of serving media.

The first is a little experimental (that's what these workshops are good for right! 😄).

## Option 1 (experimental)

_We'll use this for the workshop to cut down on pre-requisites and dependencies on Azure._

Moving the default Umbraco media directory to live in the Astro assets directory - a little wild I know!

This set up is ideal if you are not fussed about hosting the Umbraco backend.

In this set up, everything, media and all will get deployed to Astro.

Stay with me... there is method in this madness.

It will allow us to explore the (currently experimental) Astro feature of [Image cropping support](https://astro.build/blog/astro-5/#experimental-image-cropping-support)

Configuration for Astro responsive images can be found [here](https://docs.astro.build/en/reference/experimental-flags/responsive-images/)

## Option 2 (better for hosted backend)

In a nutshell... host the media in Azure blob storage and manage the media endpoint in an Astro [environment variable](https://docs.astro.build/en/guides/environment-variables/)

## Good to know

### Explaining the dynamic glob import

```
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/media/**/*.{jpg,png,webp}',
  { eager: true }
);
```

This scans the project's /src/assets/media folder for any .jpg, .png or .webp file and creates an object where each file path is a key.

The generic `{ default: ImageMetadata }` Tells TypeScript that each module it finds will export a default value matching Astro's ImageMetadata type, so you get full compile-time safety.

`{ eager: true }` Forces Vite/Astro to import every matched file immediately at build time (not lazily), giving you a ready-to-use map rather than promises.

Using an eager glob to pull in metadata for every image does carry a few trade-offs:

Build-time overhead:
Every matched file is parsed and its metadata bundled at build time, so the more images you have, the longer your build and memory usage will be.

Runtime performance notes:
Once the site is built, looking up images[key].default is just a quick object property access – it has virtually zero cost in the browser. Your actual image downloads and <Image> processing happen exactly as before.

Alternatives for scale:
Switch to non-eager globs (import.meta.glob without eager) so you only load metadata for images you actually reference at runtime.

Split large asset folders into smaller chunks and import only what each page needs.

In practice, for a few dozen or even a few hundred images, you’ll barely notice any slowdown. It only becomes worth optimising once you’re bundling thousands of metadata entries.
