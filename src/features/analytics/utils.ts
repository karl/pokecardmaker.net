import { RelationsInterface } from '@cardEditor';

/**
 * Assign dataLayer to the global window scope
 */
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Datalayer push helper
 */
export const pushToDataLayer = (
  event: string,
  data: Record<string, unknown>,
) => {
  window.dataLayer = window?.dataLayer || [];

  window.dataLayer.push({
    event,
    ...data,
  });
};

export const relationsToSlugs = (
  relations: Pick<
    RelationsInterface,
    'baseSet' | 'supertype' | 'type' | 'subtype' | 'variation' | 'rarity'
  >,
) => {
  const slugs: Record<string, string | undefined> = {};
  Object.entries(relations).forEach(([key, value]) => {
    slugs[key] = value?.slug;
  });
  return slugs;
};
