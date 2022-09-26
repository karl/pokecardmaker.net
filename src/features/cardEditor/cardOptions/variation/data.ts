import { Variation } from '@cardEditor/cardOptions/variation';
import { swordAndShield } from '../baseSet';
import { rainbow } from '../rarity';
import { basic, stage1, stage2, vmax } from '../subtype';

let id = 1;

export const dynamax: Variation = {
  id: id++,
  slug: 'dynamax',
  displayName: 'Dynamax',
  baseSetDependencies: {
    [swordAndShield.id]: {
      subtypes: [vmax.id],
      rarities: [rainbow.id],
    },
  },
};

export const gigantamax: Variation = {
  id: id++,
  slug: 'gigantamax',
  displayName: 'Gigantamax',
  baseSetDependencies: {
    [swordAndShield.id]: {
      subtypes: [vmax.id],
      rarities: [rainbow.id],
    },
  },
};

export const light: Variation = {
  id: id++,
  slug: 'light',
  displayName: 'Light',
  baseSetDependencies: {
    [swordAndShield.id]: {
      subtypes: [basic.id, stage1.id, stage2.id],
      rarities: [],
    },
  },
};

export const dark: Variation = {
  id: id++,
  slug: 'dark',
  displayName: 'Dark',
  styles: {
    rarityIconColor: 'white',
    cardInfoTextColor: 'black',
    cardInfoOutline: 'white',
    typeBarTextColor: 'black',
    typeBarOutline: 'white',
    dexStatsTextColor: 'black',
    dexStatsOutline: 'white',
  },
  baseSetDependencies: {
    [swordAndShield.id]: {
      subtypes: [basic.id, stage1.id, stage2.id],
      rarities: [],
    },
  },
};

export const ex: Variation = {
  id: id++,
  slug: 'ex',
  displayName: 'ex',
  logic: {
    hasDexEntry: false,
  },
  styles: {
    nameSymbol: 'ex',
    typeBarTextColor: 'white',
    dexStatsTextColor: 'white',
  },
  baseSetDependencies: {
    [swordAndShield.id]: {
      subtypes: [basic.id, stage1.id, stage2.id],
      rarities: [],
    },
  },
};

export const variations: Variation[] = [dynamax, gigantamax, light, dark, ex];
