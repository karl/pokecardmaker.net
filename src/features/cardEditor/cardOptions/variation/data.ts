import { Variation } from '@cardEditor/cardOptions/variation/types';
import { rainbow } from '../rarity/data';
import { vmax } from '../subtype/data';

export const dynamax: Variation = {
  id: 1,
  slug: 'dynamax',
  displayName: 'Dynamax',
  subtypes: [vmax.id],
  rarities: [rainbow.id],
};

export const gigantamax: Variation = {
  id: 2,
  slug: 'gigantamax',
  displayName: 'Gigantamax',
  subtypes: [vmax.id],
  rarities: [rainbow.id],
};

export const variations: Variation[] = [dynamax, gigantamax];
