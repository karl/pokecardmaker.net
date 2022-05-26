import { defaultTypeLogic } from '@defaults/types';
import { Type, TypeLogic } from '@interfaces/cardOptions/type';
import { energy, pokemon, trainer } from './supertypes';

const pokemonTypeLogic: TypeLogic = {
  ...defaultTypeLogic,
  hasSubtypes: true,
  isSubtypeRequired: true,
  isPokemonType: true,
  isAttackCostType: true,
};

const pokemonTypeSupertypes: number[] = [pokemon.id];

export const grass: Type = {
  id: 1,
  slug: 'grass',
  displayName: 'Grass',
  logic: pokemonTypeLogic,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const fire: Type = {
  id: 2,
  slug: 'fire',
  displayName: 'Fire',
  logic: pokemonTypeLogic,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const water: Type = {
  id: 3,
  slug: 'water',
  displayName: 'Water',
  logic: pokemonTypeLogic,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const lightning: Type = {
  id: 4,
  slug: 'lightning',
  displayName: 'Lightning',
  logic: pokemonTypeLogic,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const psychic: Type = {
  id: 5,
  slug: 'psychic',
  displayName: 'Psychic',
  logic: pokemonTypeLogic,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const fighting: Type = {
  id: 6,
  slug: 'fighting',
  displayName: 'Fighting',
  logic: pokemonTypeLogic,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const dark: Type = {
  id: 7,
  slug: 'dark',
  displayName: 'Dark',
  logic: pokemonTypeLogic,
  styles: {
    hpTextColor: 'white',
    nameTextColor: 'white',
    movesTextColor: 'white',
    cardInfoTextColor: 'white',
    rarityIconColor: 'white',
  },
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const metal: Type = {
  id: 8,
  slug: 'metal',
  displayName: 'Metal',
  logic: pokemonTypeLogic,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const colorless: Type = {
  id: 9,
  slug: 'colorless',
  displayName: 'Colorless',
  logic: pokemonTypeLogic,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const item: Type = {
  id: 10,
  slug: 'item',
  displayName: 'Item',
  logic: {
    ...defaultTypeLogic,
    hasSubtypes: true,
  },
  supertypes: [trainer.id],
  rarities: [],
};

export const supporter: Type = {
  id: 11,
  slug: 'supporter',
  displayName: 'Supporter',
  logic: {
    ...defaultTypeLogic,
    hasSubname: true,
    hasDescription: true,
  },
  supertypes: [trainer.id],
  rarities: [5],
};

export const base: Type = {
  id: 12,
  slug: 'base',
  displayName: 'Base',
  logic: {
    ...defaultTypeLogic,
    hasName: false,
  },
  styles: {
    hasCardInfo: false,
    hasDexEntry: false,
    hasDexStats: false,
    hasIllustratorName: false,
  },
  supertypes: [energy.id],
  rarities: [],
};

export const special: Type = {
  id: 13,
  slug: 'special',
  displayName: 'Special',
  logic: {
    ...defaultTypeLogic,
    hasTypeImage: true,
    hasDescription: true,
  },
  supertypes: [energy.id],
  rarities: [],
};

const types: Type[] = [
  grass,
  fire,
  water,
  lightning,
  psychic,
  fighting,
  dark,
  metal,
  colorless,
  item,
  supporter,
  base,
  special,
];

export default types;
