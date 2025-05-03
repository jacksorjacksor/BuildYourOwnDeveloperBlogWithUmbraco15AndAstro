import { isNullOrWhiteSpace } from '../helpers/AppHelpers';
import {
  getContent20,
  getContentItemById20,
  getContentItemByPath20,
} from '../umbraco-client/content/content';
import type {
  IApiContentResponseModel,
  PagedIApiContentResponseModel,
} from '../umbraco-client/model';

/**
 * Retrieves page content based on the provided URL.
 * If the URL is null, empty or only white space, it defaults to the root ('/').
 *
 * @param url - The URL path for which to retrieve content.
 * @returns A promise resolving to an ApiContentResponseModel.
 */
export async function getPageContent(url: string): Promise<IApiContentResponseModel> {
  if (isNullOrWhiteSpace(url)) {
    url = '/'; // Default to root if URL is not provided.
  }

  const response = await getContentItemByPath20(url, {
    expand: 'properties[$all]',
  });

  if (response.status != 200) {
    throw new Error(`Error with Umbraco API request: ${url}`);
  }

  if (!response.data) {
    throw new Error(`No data returned from Umbraco API for path: ${url}`);
  }

  return response.data;
}

/**
 * Retrieves content based on the provided ID.
 * If the ID is null, empty or only white space, it returns null.
 *
 * @param id - The identifier of the content.
 * @returns A promise resolving to an ApiContentResponseModel or null.
 */
export async function getContentById(id?: string): Promise<IApiContentResponseModel | null> {
  if (!id) {
    return null;
  }

  const response = await getContentItemById20(id, {
    expand: 'properties[$all]',
  });

  if (response.status != 200) {
    throw new Error(`Error with Umbraco API request: ${id}`);
  }

  if (!response.data) {
    throw new Error(`No data returned from Umbraco API for id: ${id}`);
  }

  return response.data;
}

/**
 * Retrieves all content items filtered by the provided content type by repeatedly calling
 * getPagedContentByType and concatenating the results. This abstracts the pagination logic away from
 * the calling code, enabling you to work with a simple array of IApiContentResponseModel.
 *
 * @param contentType - The content type to filter by (e.g. 'blogArticlePage').
 * @returns A promise resolving to an array of IApiContentResponseModel items.
 */
export async function getAllContentByType(
  contentType: string
): Promise<IApiContentResponseModel[]> {
  if (isNullOrWhiteSpace(contentType)) {
    throw new Error('Content type must be provided.');
  }

  const take = 100;
  let skip = 0;
  let allItems: IApiContentResponseModel[] = [];
  let total = 0;

  // Continue fetching until we have retrieved all items.
  do {
    const response = await getPagedContentByType(contentType, skip, take);

    // Update the total number of items (for loop control only).
    total = response.total;

    // Accumulate items from the current batch.
    allItems = allItems.concat(response.items);

    // Increment the skip counter.
    skip += take;
  } while (skip < total);

  return allItems;
}

/**
 * Retrieves a paged list of content items filtered by the provided content type.
 * This fetches a subset of items (defined by skip and take) for a given type (e.g. 'blogArticlePage').
 *
 * @param contentType - The content type to filter by.
 * @param skip - The number of items to skip (for pagination).
 * @param take - The number of items to take (for pagination).
 * @returns A promise resolving to a PagedIApiContentResponseModel containing the items and total count.
 */
export async function getPagedContentByType(
  contentType: string,
  skip: number,
  take: number
): Promise<PagedIApiContentResponseModel> {
  if (isNullOrWhiteSpace(contentType)) {
    throw new Error('Content type must be provided.');
  }

  const filter = [`contentType:${contentType}`];

  const response = await getContent20({
    filter: filter,
    sort: ['createDate:desc'],
    fields: 'properties[$all]',
    skip: skip,
    take: take,
  });

  if (response.status != 200) {
    throw new Error(`Error with Umbraco API request`);
  }

  if (!response.data) {
    throw new Error(`No data returned from Umbraco API for content type: ${contentType}`);
  }

  return response.data;
}
