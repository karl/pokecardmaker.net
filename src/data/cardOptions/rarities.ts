import { defaultRarityLogic } from '@defaults/raritities';
import { Rarity } from '@interfaces/cardOptions/rarity';

export const promo: Rarity = {
  id: 1,
  slug: 'promo',
  displayName: 'Promo',
  logic: {
    ...defaultRarityLogic,
    hasDexEntry: true,
  },
  styles: {
    nameOutline: 'white',
    hpOutline: 'white',
    movesOutline: 'white',
    cardInfoOutline: 'white',
    alignMovesBottom: true,
  },
};

export const fullArt: Rarity = {
  id: 2,
  slug: 'fullArt',
  displayName: 'Full Art',
  logic: defaultRarityLogic,
  styles: {
    nameOutline: 'white',
    cardInfoOutline: 'white',
  },
};

export const goldenFullArt: Rarity = {
  id: 3,
  slug: 'goldenFullArt',
  displayName: 'Golden Full Art',
  logic: defaultRarityLogic,
  styles: {
    nameOutline: 'white',
    cardInfoOutline: 'white',
    hpOutline: 'black',
    typeBarTextColor: 'black',
  },
};

export const rainbow: Rarity = {
  id: 4,
  slug: 'rainbow',
  displayName: 'Rainbow',
  logic: defaultRarityLogic,
};

export const supporterFullArt: Rarity = {
  id: 5,
  slug: 'supporterFullArt',
  displayName: 'Full Art',
  logic: defaultRarityLogic,
  styles: {
    movesOutline: 'white',
    cardInfoOutline: 'white',
    rarityIconColor: 'white',
  },
};

export const goldStar: Rarity = {
  id: 6,
  slug: 'goldStar',
  displayName: 'Gold Star',
  logic: defaultRarityLogic,
  styles: {
    nameSymbol: 'star',
  },
};

const rarities: Rarity[] = [
  promo,
  fullArt,
  goldenFullArt,
  rainbow,
  supporterFullArt,
  goldStar,
];

export default rarities;
