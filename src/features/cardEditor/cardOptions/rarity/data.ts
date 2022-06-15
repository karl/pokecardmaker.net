import { Rarity } from 'src/features/cardEditor/cardOptions/rarity/types';

export const promo: Rarity = {
  id: 1,
  slug: 'promo',
  displayName: 'Promo',
  logic: {
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
  styles: {
    nameOutline: 'white',
    cardInfoOutline: 'white',
  },
};

export const goldenFullArt: Rarity = {
  id: 3,
  slug: 'goldenFullArt',
  displayName: 'Golden Full Art',
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
};

export const supporterFullArt: Rarity = {
  id: 5,
  slug: 'supporterFullArt',
  displayName: 'Full Art',
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
