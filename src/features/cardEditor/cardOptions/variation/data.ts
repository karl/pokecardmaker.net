import { Variation } from '@cardEditor/cardOptions/variation';
import { rainbow } from '../rarity';
import { basic, stage1, stage2, vmax } from '../subtype';

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

export const light: Variation = {
  id: 3,
  slug: 'light',
  displayName: 'Light',
  subtypes: [basic.id, stage1.id, stage2.id],
  rarities: [],
};

export const variations: Variation[] = [dynamax, gigantamax, light];
