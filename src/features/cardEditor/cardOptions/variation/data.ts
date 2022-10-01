import { Variation } from '@cardEditor/cardOptions/variation';
import { sunAndMoon, swordAndShield } from '../baseSet';
import { fullArt, rainbow } from '../rarity';
import {
  basic,
  gxBasic,
  gxStage1,
  gxStage2,
  stage1,
  stage2,
  vmax,
} from '../subtype';
import { item, special, stadium, supporter } from '../type';

let id = 1;

export const dynamax: Variation = {
  id: id++,
  slug: 'dynamax',
  displayName: 'Dynamax',
  baseSetDependencies: {
    [swordAndShield.id]: {
      subtypes: {
        [vmax.id]: {
          rarities: [rainbow.id],
        },
      },
    },
  },
};

export const gigantamax: Variation = {
  id: id++,
  slug: 'gigantamax',
  displayName: 'Gigantamax',
  baseSetDependencies: {
    [swordAndShield.id]: {
      subtypes: {
        [vmax.id]: {
          rarities: [rainbow.id],
        },
      },
    },
  },
};

export const light: Variation = {
  id: id++,
  slug: 'light',
  displayName: 'Light',
  baseSetDependencies: {
    [swordAndShield.id]: {
      subtypes: {
        [basic.id]: {
          rarities: [],
        },
        [stage1.id]: {
          rarities: [],
        },
        [stage2.id]: {
          rarities: [],
        },
      },
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
      subtypes: {
        [basic.id]: {
          rarities: [],
        },
        [stage1.id]: {
          rarities: [],
        },
        [stage2.id]: {
          rarities: [],
        },
      },
    },
  },
};

export const ex: Variation = {
  id: id++,
  slug: 'ex',
  displayName: 'ex',
  logic: {
    hasDexEntry: false,
    hasNameSymbol: true,
  },
  styles: {
    nameSymbol: 'ex',
    typeBarTextColor: 'white',
    dexStatsTextColor: 'white',
  },
  baseSetDependencies: {
    [swordAndShield.id]: {
      subtypes: {
        [basic.id]: {
          rarities: [],
        },
        [stage1.id]: {
          rarities: [],
        },
        [stage2.id]: {
          rarities: [],
        },
      },
    },
  },
};

export const ultraBeast: Variation = {
  id: id++,
  slug: 'ultraBeast',
  displayName: 'Ultra Beast',
  styles: {
    nameSymbol: 'gxUltraBeast',
    move3: {
      background: 'gxUltraBeast',
      descriptionTextColor: 'ultraBeast',
    },
  },
  baseSetDependencies: {
    [sunAndMoon.id]: {
      subtypes: {
        [basic.id]: {
          rarities: [],
        },
        [stage1.id]: {
          rarities: [],
        },
        [stage2.id]: {
          rarities: [],
        },
        [gxBasic.id]: {
          rarities: [fullArt.id, rainbow.id],
        },
        [gxStage1.id]: {
          rarities: [fullArt.id, rainbow.id],
        },
        [gxStage2.id]: {
          rarities: [fullArt.id, rainbow.id],
        },
      },
    },
  },
};

export const prismStar: Variation = {
  id: id++,
  slug: 'prismStar',
  displayName: 'Prism Star',
  styles: {
    nameSymbol: 'prismStar',
  },
  logic: {
    hasNameSymbol: true,
    hasDexStats: false,
  },
  baseSetDependencies: {
    [sunAndMoon.id]: {
      types: [special.id, item.id, stadium.id, supporter.id],
      subtypes: {
        [basic.id]: {
          rarities: [],
        },
      },
    },
  },
};

export const variations: Variation[] = [
  dynamax,
  gigantamax,
  light,
  dark,
  ex,
  ultraBeast,
  prismStar,
];
