import { Rarity } from '@cardEditor/cardOptions/rarity';

export const promo: Rarity = {
  id: 1,
  slug: 'promo',
  displayName: 'Promo',
  logic: {
    hasDexEntry: true,
    hasDexStats: false,
  },
  styles: {
    nameOutline: 'white',
    nameTextColor: 'black',
    hpOutline: 'white',
    hpTextColor: 'black',
    movesOutline: 'white',
    movesTextColor: 'black',
    cardInfoOutline: 'white',
    cardInfoTextColor: 'black',
    alignMovesBottom: true,
  },
};

export const fullArt: Rarity = {
  id: 2,
  slug: 'fullArt',
  displayName: 'Full Art',
  styles: {
    nameTextColor: 'black',
    nameOutline: 'white',
    cardInfoTextColor: 'black',
    cardInfoOutline: 'white',
  },
};

export const goldenFullArtPokemon: Rarity = {
  id: 3,
  slug: 'goldenFullArtPokemon',
  displayName: 'Golden Full Art',
  styles: {
    nameTextColor: 'black',
    nameOutline: 'white',
    cardInfoTextColor: 'black',
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
    movesTextColor: 'black',
    movesOutline: 'white',
    cardInfoTextColor: 'black',
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

export const gilded: Rarity = {
  id: 7,
  slug: 'gilded',
  displayName: 'Gilded',
};

export const characterRare: Rarity = {
  id: 8,
  slug: 'characterRare',
  displayName: 'Character Rare',
  logic: {
    hasDexStats: false,
  },
  styles: {
    nameTextColor: 'black',
    nameOutline: 'white',
    hpTextColor: 'black',
    hpOutline: 'white',
    movesTextColor: 'black',
    movesOutline: 'white',
    cardInfoTextColor: 'black',
    cardInfoOutline: 'white',
    rarityIconColor: 'white',
  },
};

export const goldenFullArtEnergy: Rarity = {
  id: 9,
  slug: 'goldenFullArtEnergy',
  displayName: 'Golden Full Art',
  styles: {
    rarityIconColor: 'white',
    movesOutline: 'white',
  },
};

export const rarities: Rarity[] = [
  promo,
  fullArt,
  goldenFullArtPokemon,
  rainbow,
  supporterFullArt,
  goldStar,
  goldenFullArtEnergy,
  gilded,
  characterRare,
];
