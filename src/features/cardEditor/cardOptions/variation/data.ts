import { Variation } from '@cardEditor/cardOptions/variation';
import { rainbow } from '../rarity';
import { vmax } from '../subtype';

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
