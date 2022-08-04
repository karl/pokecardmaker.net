import { CardLogic } from '@cardEditor/cardLogic';
import { CardStyles } from '@cardEditor/cardStyles';
import { Type } from '@cardEditor/cardOptions/type';
import { supporterFullArt } from '../rarity';
import { energy, pokemon, trainer } from '../supertype';

const pokemonTypeLogic: Partial<CardLogic> = {
  hasSubtypes: true,
  isSubtypeRequired: true,
  isPokemonType: true,
  isAttackCostType: true,
};

const pokemonTypeStyles: Partial<CardStyles> = {
  abilitySymbol: 'normal',
};

const pokemonTypeSupertypes: number[] = [pokemon.id];

export const grass: Type = {
  id: 1,
  slug: 'grass',
  displayName: 'Grass',
  logic: pokemonTypeLogic,
  styles: pokemonTypeStyles,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const fire: Type = {
  id: 2,
  slug: 'fire',
  displayName: 'Fire',
  logic: pokemonTypeLogic,
  styles: pokemonTypeStyles,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const water: Type = {
  id: 3,
  slug: 'water',
  displayName: 'Water',
  logic: pokemonTypeLogic,
  styles: pokemonTypeStyles,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const lightning: Type = {
  id: 4,
  slug: 'lightning',
  displayName: 'Lightning',
  logic: pokemonTypeLogic,
  styles: pokemonTypeStyles,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const psychic: Type = {
  id: 5,
  slug: 'psychic',
  displayName: 'Psychic',
  logic: pokemonTypeLogic,
  styles: pokemonTypeStyles,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const fighting: Type = {
  id: 6,
  slug: 'fighting',
  displayName: 'Fighting',
  logic: pokemonTypeLogic,
  styles: pokemonTypeStyles,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const dark: Type = {
  id: 7,
  slug: 'dark',
  displayName: 'Dark',
  logic: pokemonTypeLogic,
  styles: {
    ...pokemonTypeStyles,
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
  styles: pokemonTypeStyles,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const colorless: Type = {
  id: 9,
  slug: 'colorless',
  displayName: 'Colorless',
  logic: pokemonTypeLogic,
  styles: pokemonTypeStyles,
  supertypes: pokemonTypeSupertypes,
  rarities: [],
};

export const item: Type = {
  id: 10,
  slug: 'item',
  displayName: 'Item',
  logic: {
    hasSubtypes: true,
    hasDescription: true,
  },
  supertypes: [trainer.id],
  rarities: [],
};

export const supporter: Type = {
  id: 11,
  slug: 'supporter',
  displayName: 'Supporter',
  logic: {
    hasSubname: true,
    hasDescription: true,
  },
  supertypes: [trainer.id],
  rarities: [supporterFullArt.id],
};

export const base: Type = {
  id: 12,
  slug: 'base',
  displayName: 'Base',
  logic: {
    hasName: false,
    hasCardInfo: false,
  },
  supertypes: [energy.id],
  rarities: [],
};

export const special: Type = {
  id: 13,
  slug: 'special',
  displayName: 'Special',
  logic: {
    hasTypeImage: true,
    hasIllustratorName: false,
    hasDescription: true,
  },
  supertypes: [energy.id],
  rarities: [],
};

export const types: Type[] = [
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
