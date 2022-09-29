import { Rarity } from '@cardEditor/cardOptions/rarity';
import { sunAndMoon } from '../baseSet';

let id = 1;

export const promo: Rarity = {
  id: id++,
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
  id: id++,
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
  id: id++,
  slug: 'goldenFullArtPokemon',
  displayName: 'Golden Full Art',
  styles: {
    nameTextColor: 'black',
    nameOutline: 'white',
    cardInfoTextColor: 'black',
    cardInfoOutline: 'white',
    hpOutline: 'black',
    typeBarTextColor: 'black',
    move3: {
      background: 'gxGold',
    },
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      styles: {
        hpOutline: 'white',
        abilitySymbol: 'sunAndMoonGold',
      },
    },
  },
};

export const rainbow: Rarity = {
  id: id++,
  slug: 'rainbow',
  displayName: 'Rainbow',
};

export const supporterFullArt: Rarity = {
  id: id++,
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
  id: id++,
  slug: 'goldStar',
  displayName: 'Gold Star',
  logic: {
    hasNameSymbol: true,
  },
  styles: {
    nameSymbol: 'star',
  },
};

export const gilded: Rarity = {
  id: id++,
  slug: 'gilded',
  displayName: 'Gilded',
};

export const characterRare: Rarity = {
  id: id++,
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
  id: id++,
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
