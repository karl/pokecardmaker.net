import { Subtype } from '@cardEditor/cardOptions/subtype/types';
import { CardStyles } from '@cardEditor/cardStyles/types';
import { fullArt, goldStar, goldenFullArt, promo } from '../rarity/data';
import {
  colorless,
  dark,
  fighting,
  fire,
  grass,
  item,
  lightning,
  metal,
  psychic,
  water,
} from '../type/data';

const pokemonTypeTypes: number[] = [
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

export const basic: Subtype = {
  id: 1,
  slug: 'basic',
  displayName: 'Basic',
  logic: {
    hasDexStats: true,
  },
  types: pokemonTypeTypes,
  rarities: [promo.id, goldStar.id],
};

export const stage1: Subtype = {
  id: 2,
  slug: 'stage1',
  displayName: 'Stage 1',
  logic: {
    hasPrevolve: true,
    hasDexStats: true,
    hasDexEntry: true,
  },
  types: pokemonTypeTypes,
  rarities: [],
};

export const stage2: Subtype = {
  id: 3,
  slug: 'stage2',
  displayName: 'Stage 2',
  logic: {
    hasPrevolve: true,
    hasDexStats: true,
    hasDexEntry: true,
  },
  types: pokemonTypeTypes,
  rarities: [],
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
  types: pokemonTypeTypes,
  rarities: [fullArt.id, goldenFullArt.id],
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
  types: pokemonTypeTypes,
  rarities: [],
};

export const tool: Subtype = {
  id: 6,
  slug: 'tool',
  displayName: 'Tool',
  types: [item.id],
  rarities: [],
};

export const subtypes: Subtype[] = [basic, stage1, stage2, v, vmax, tool];
