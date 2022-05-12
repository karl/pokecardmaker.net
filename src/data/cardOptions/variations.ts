import { Variation } from '@interfaces/cardOptions/variation';
import { rainbow } from './rarities';
import { vmax } from './subtypes';

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

const variations: Variation[] = [dynamax, gigantamax];

export default variations;
