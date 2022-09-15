import { Subtype } from '@cardEditor/cardOptions/subtype';
import { CardStyles } from '@cardEditor/cardStyles';
import {
  characterRare,
  fullArt,
  gilded,
  goldStar,
  goldenFullArt,
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
  relations: [
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
  relations: [
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
  relations: [
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
};

const vStyles: Partial<CardStyles> = {
  hpTextColor: 'white',
  movesOutline: 'white',
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
  relations: [
    ...defaultPokemonTypes.map(t => ({
      type: t,
      rarities: [fullArt.id, goldenFullArt.id],
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
    cardInfoOutline: 'white',
    hpOutline: 'black',
    nameSymbol: 'vmax',
  },
  relations: allPokemonTypes.map(t => ({
    type: t,
    rarities: [],
  })),
};

export const vstar: Subtype = {
  id: 6,
  slug: 'vstar',
  displayName: 'VStar',
  styles: {
    movesOutline: 'white',
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
  relations: allPokemonTypes.map(t => ({
    type: t,
    rarities: [],
  })),
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
  relations: [
    {
      type: item.id,
      rarities: [],
    },
  ],
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
