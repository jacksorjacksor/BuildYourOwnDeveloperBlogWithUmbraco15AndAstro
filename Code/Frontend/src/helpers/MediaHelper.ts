import type { IApiMediaWithCropsModel } from '../umbraco-client/model';
import type { ImageMetadata } from 'astro';

export function mapToImage(
  mediaPicker: IApiMediaWithCropsModel[] | null | undefined
): ImageMetadata {
  // NOTE: This is an experimental implementation

  // Grab every image file under /src/assets/media into a map
  // Experimental: If this wasn't statically generated we may be concerned about the performance of this
  const images = import.meta.glob<{ default: ImageMetadata }>(
    '/src/assets/media/**/*.{jpg,png,webp}',
    { eager: true }
  );

  // Extract the relative URL from our CMS data
  const imageRelPath = mediaPicker?.[0]?.url;

  // Build the matching key for our map
  const key = `/src/assets${imageRelPath}`;

  // Fetch the actual image metadata so Astro can make responsive sizes
  return images[key]?.default;
}
