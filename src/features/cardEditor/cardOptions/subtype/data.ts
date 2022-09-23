import { Subtype } from '@cardEditor/cardOptions/subtype';
import { CardStyles } from '@cardEditor/cardStyles';
import { sunAndMoon, swordAndShield } from '../baseSet';
import {
  characterRare,
  fullArt,
  gilded,
  goldStar,
  goldenFullArtPokemon,
  promo,
} from '../rarity';
import {
  colorless,
  dark,
  dragon,
  fairy,
  fighting,
  fire,
  grass,
  item,
  lightning,
  metal,
  psychic,
  water,
} from '../type';

const defaultPokemonTypes: number[] = [
  grass.id,
  fire.id,
  water.id,
  lightning.id,
  psychic.id,
  fighting.id,
  dark.id,
  metal.id,
  colorless.id,
];

const allPokemonTypes: number[] = [...defaultPokemonTypes, dragon.id, fairy.id];

export const basic: Subtype = {
  id: 1,
  slug: 'basic',
  displayName: 'Basic',
  logic: {
    hasDexStats: true,
    hasDexEntry: true,
    hasVariations: true,
    isVariationRequired: false,
  },
  baseSetDependencies: {
    [swordAndShield.id]: [
      ...defaultPokemonTypes.map(t => ({
        type: t,
        rarities: [promo.id, goldStar.id, characterRare.id],
      })),
      {
        type: dragon.id,
        rarities: [characterRare.id],
      },
      {
        type: fairy.id,
        rarities: [gilded.id, characterRare.id],
      },
    ],
    [sunAndMoon.id]: allPokemonTypes.map(t => ({
      type: t,
      rarities: [],
    })),
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      logic: {
        hasVariations: false,
      },
    },
  },
};

export const stage1: Subtype = {
  id: 2,
  slug: 'stage1',
  displayName: 'Stage 1',
  logic: {
    hasPrevolve: true,
    hasDexStats: true,
    hasDexEntry: true,
    hasVariations: true,
    isVariationRequired: false,
  },
  baseSetDependencies: {
    [swordAndShield.id]: [
      ...defaultPokemonTypes.map(t => ({
        type: t,
        rarities: [characterRare.id],
      })),
      {
        type: dragon.id,
        rarities: [characterRare.id],
      },
      {
        type: fairy.id,
        rarities: [gilded.id, characterRare.id],
      },
    ],
    [sunAndMoon.id]: allPokemonTypes.map(t => ({
      type: t,
      rarities: [],
    })),
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      logic: {
        hasVariations: false,
      },
    },
  },
};

export const stage2: Subtype = {
  id: 3,
  slug: 'stage2',
  displayName: 'Stage 2',
  logic: {
    hasPrevolve: true,
    hasDexStats: true,
    hasDexEntry: true,
    hasVariations: true,
    isVariationRequired: false,
  },
  baseSetDependencies: {
    [swordAndShield.id]: [
      ...defaultPokemonTypes.map(t => ({
        type: t,
        rarities: [characterRare.id],
      })),
      {
        type: dragon.id,
        rarities: [characterRare.id],
      },
      {
        type: fairy.id,
        rarities: [gilded.id, characterRare.id],
      },
    ],
    [sunAndMoon.id]: allPokemonTypes.map(t => ({
      type: t,
      rarities: [],
    })),
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      logic: {
        hasVariations: false,
      },
    },
  },
};

const vStyles: Partial<CardStyles> = {
  hpTextColor: 'white',
  movesOutline: 'white',
  movesTextColor: 'black',
  typeBarTextColor: 'white',
  rarityIconColor: 'white',
  abilitySymbol: 'v',
  hpSize: 'lg',
  alignMovesBottom: true,
};

export const v: Subtype = {
  id: 4,
  slug: 'v',
  displayName: 'V',
  styles: {
    ...vStyles,
    nameSymbol: 'v',
  },
  baseSetDependencies: {
    [swordAndShield.id]: [
      ...defaultPokemonTypes.map(t => ({
        type: t,
        rarities: [fullArt.id, goldenFullArtPokemon.id],
      })),
      {
        type: dragon.id,
        rarities: [],
      },
      {
        type: fairy.id,
        rarities: [],
      },
    ],
  },
};

export const vmax: Subtype = {
  id: 5,
  slug: 'vmax',
  displayName: 'VMax',
  logic: {
    hasVariations: true,
    hasPrevolve: true,
    hasDexStats: false,
    hasCardInfo: true,
    hasDexEntry: false,
  },
  styles: {
    ...vStyles,
    nameOutline: 'white',
    nameTextColor: 'black',
    cardInfoOutline: 'white',
    cardInfoTextColor: 'black',
    hpOutline: 'black',
    nameSymbol: 'vmax',
  },
  baseSetDependencies: {
    [swordAndShield.id]: allPokemonTypes.map(t => ({
      type: t,
      rarities: [],
    })),
  },
};

export const vstar: Subtype = {
  id: 6,
  slug: 'vstar',
  displayName: 'VStar',
  styles: {
    movesTextColor: 'black',
    movesOutline: 'white',
    hpTextColor: 'black',
    rarityIconColor: 'white',
    abilitySymbol: 'vstar',
    nameSymbol: 'vstar',
    hpSize: 'lg',
    positions: {
      prevolveImg: {
        top: '7.7%',
        left: '4.4%',
      },
      movesWrapper: {
        top: 'unset',
        bottom: '14.5%',
        height: 'unset',
        gap: '3em',
      },
      move2: {
        height: '10.8em',
      },
      ability: {
        height: '10.8em',
        order: '10',
      },
    },
  },
  logic: {
    hasPrevolve: true,
    bonusMoveRequired: true,
  },
  baseSetDependencies: {
    [swordAndShield.id]: allPokemonTypes.map(t => ({
      type: t,
      rarities: [],
    })),
  },
};

export const tool: Subtype = {
  id: 7,
  slug: 'tool',
  displayName: 'Tool',
  styles: {
    positions: {
      description: {
        top: '61%',
        height: '20%',
      },
    },
  },
  baseSetDependencies: {
    [swordAndShield.id]: [
      {
        type: item.id,
        rarities: [],
      },
    ],
    [sunAndMoon.id]: [
      {
        type: item.id,
        rarities: [],
      },
    ],
  },
};

export const subtypes: Subtype[] = [
  basic,
  stage1,
  stage2,
  v,
  vmax,
  tool,
  vstar,
];
