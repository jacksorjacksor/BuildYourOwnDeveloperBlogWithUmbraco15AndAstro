import { isNullOrWhiteSpace } from "../helpers/AppHelpers";
import { 
  getContent20, 
  getContentItemById20, 
  getContentItemByPath20, 
  type ApiContentResponseModel, 
  type PagedIApiContentResponseModel 
} from "../umbraco-client/content/api";

/**
 * Retrieves page content based on the provided URL.
 * If the URL is null, empty or only white space, it defaults to the root ('/').
 * 
 * @param url - The URL path for which to retrieve content.
 * @returns A promise resolving to an ApiContentResponseModel.
 */
export async function getPageContent(url: string): Promise<ApiContentResponseModel> {
    if (isNullOrWhiteSpace(url)) {
        url = '/'; // Default to root if URL is not provided.
    }

    const response = await getContentItemByPath20({
        path: { path: url }, // Wrap the URL string in an object
        query: { expand: 'properties[$all]' } 
    });

    if (response.error) {
        throw response.error;
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
export async function getContentById(id?: string): Promise<ApiContentResponseModel | null> {
    if (!id) {
        return null;
    }

    const response = await getContentItemById20({
        path: { id: id },
        query: { expand: 'properties[$all]' }
    });

    if (response.error) {
        throw response.error;
    }

    if (!response.data) {
        throw new Error(`No data returned from Umbraco API for id: ${id}`);
    }

    return response.data;
}

/**
 * Retrieves a paged list of content items filtered by the provided content type.
 * This allows you to fetch all items of a given type (e.g. 'blogArticlePage') from any area.
 * 
 * @param contentType - The content type to filter by.
 * @param skip - The number of items to skip (for pagination).
 * @param take - The number of items to take (for pagination).
 * @returns A promise resolving to a PagedIApiContentResponseModel.
 */
export async function getContentByType(
    contentType: string,
    skip: number,
    take: number
): Promise<PagedIApiContentResponseModel> {

    //console.log(`Calling getContentByType fpr contentType '${contentType}' skip: ${skip} take: ${take}`)

    if (isNullOrWhiteSpace(contentType)) {
        throw new Error('Content type must be provided.');
    }

    const filter = [`contentType:${contentType}`];

    const response = await getContent20({
        query: {
            filter: filter,
            sort: ['createDate:desc'],
            fields: 'properties[$all]',
            skip: skip,
            take: take
        }
    });

    if (response.error) {
        throw response.error;
    }

    if (!response.data) {
        throw new Error(`No data returned from Umbraco API for content type: ${contentType}`);
    }

    return response.data;
}
