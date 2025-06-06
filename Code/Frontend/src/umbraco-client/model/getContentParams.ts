/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * Umbraco Delivery API
 * You can find out more about the Umbraco Delivery API in [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api).
 * OpenAPI spec version: Latest
 */

export type GetContentParams = {
/**
 * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
 */
fetch?: string;
/**
 * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
 */
filter?: string[];
/**
 * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
 */
sort?: string[];
/**
 * Specifies the number of found content items to skip. Use this to control pagination of the response.
 */
skip?: number;
/**
 * Specifies the number of found content items to take. Use this to control pagination of the response.
 */
take?: number;
/**
 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
 */
expand?: string;
};
