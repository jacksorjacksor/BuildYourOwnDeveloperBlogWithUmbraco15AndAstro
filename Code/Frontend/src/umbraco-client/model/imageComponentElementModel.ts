/**
 * Generated by orval v7.8.0 🍺
 * Do not edit manually.
 * Umbraco Delivery API
 * You can find out more about the Umbraco Delivery API in [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api).
 * OpenAPI spec version: Latest
 */
import type { IApiElementModelBase } from './iApiElementModelBase';
import type { ImageComponentPropertiesModel } from './imageComponentPropertiesModel';
import type { ImageComponentElementModelContentType } from './imageComponentElementModelContentType';

export type ImageComponentElementModel = Omit<IApiElementModelBase, 'contentType'> & {
  properties?: ImageComponentPropertiesModel;
  contentType: ImageComponentElementModelContentType;
};
