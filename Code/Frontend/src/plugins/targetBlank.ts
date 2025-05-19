import type { RehypePlugin } from '@astrojs/markdown-remark';
import { visit } from 'unist-util-visit';
import type { Element } from 'hast';

export const targetBlank: RehypePlugin = () => {
  return (tree) => {
    visit(tree, 'element', (e: Element) => {
      if (
        e.tagName === 'a' &&
        e.properties?.href
      ) {
        e.properties!['target'] = '_blank';
      }
    });
  };
};