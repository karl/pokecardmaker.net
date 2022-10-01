import { CardLogic } from '@cardEditor/cardLogic';
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
  rainbow,
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

let id = 1;

export const basic: Subtype = {
  id: id++,
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
};

export const stage1: Subtype = {
  id: id++,
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
};

export const stage2: Subtype = {
  id: id++,
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
  id: id++,
  slug: 'v',
  displayName: 'V',
  logic: {
    hasNameSymbol: true,
  },
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
  id: id++,
  slug: 'vmax',
  displayName: 'VMax',
  logic: {
    hasNameSymbol: true,
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

// TODO: Make VStar Power a Move3?
export const vstar: Subtype = {
  id: id++,
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
    hasNameSymbol: true,
  },
  baseSetDependencies: {
    [swordAndShield.id]: allPokemonTypes.map(t => ({
      type: t,
      rarities: [],
    })),
  },
};

export const tool: Subtype = {
  id: id++,
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
  logic: {
    hasVariations: false,
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

const gxStyles: Partial<CardStyles> = {
  hasAttackCostBorder: true,
  hpTextColor: 'black',
  hpOutline: 'white',
  nameTextColor: 'black',
  nameOutline: 'white',
  movesOutline: 'white',
  movesTextColor: 'black',
  typeBarTextColor: 'black',
  rarityIconColor: 'white',
  nameSymbol: 'gx',
  hpSize: 'lg',
  alignMovesBottom: true,
  move3: {
    type: 'gx',
    background: 'gx',
    displayName: 'GX Attack',
    descriptionTextColor: 'gx',
    descriptionOutline: 'white',
    nameTextColor: 'white',
    nameOutline: undefined,
    hasAttackCostBorder: false,
  },
  positions: {
    hitpoints: {
      top: '2.5%',
    },
    movesWrapper: {
      top: 'unset',
      bottom: '15%',
      height: 'unset',
      gap: '1.5em',
    },
  },
};

const gxLogic: Partial<CardLogic> = {
  hasVariations: true,
  isVariationRequired: false,
  hasMove3: true,
  hasNameSymbol: true,
};

export const gxBasic: Subtype = {
  id: id++,
  slug: 'gxBasic',
  displayName: 'GX (Basic)',
  logic: gxLogic,
  styles: gxStyles,
  baseSetDependencies: {
    [sunAndMoon.id]: [
      ...allPokemonTypes.map(t => ({
        type: t,
        rarities: [fullArt.id, goldenFullArtPokemon.id, rainbow.id],
      })),
    ],
  },
};

export const gxStage1: Subtype = {
  id: id++,
  slug: 'gxStage1',
  displayName: 'GX (Stage 1)',
  logic: {
    ...gxLogic,
    hasPrevolve: true,
  },
  styles: gxStyles,
  baseSetDependencies: {
    [sunAndMoon.id]: [
      ...allPokemonTypes.map(t => ({
        type: t,
        rarities: [fullArt.id, goldenFullArtPokemon.id, rainbow.id],
      })),
    ],
  },
};

export const gxStage2: Subtype = {
  id: id++,
  slug: 'gxStage2',
  displayName: 'GX (Stage 2)',
  logic: {
    ...gxLogic,
    hasPrevolve: true,
  },
  styles: gxStyles,
  baseSetDependencies: {
    [sunAndMoon.id]: [
      ...allPokemonTypes.map(t => ({
        type: t,
        rarities: [fullArt.id, goldenFullArtPokemon.id, rainbow.id],
      })),
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
  gxBasic,
  gxStage1,
  gxStage2,
];
