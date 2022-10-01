import { CardLogic } from '@cardEditor/cardLogic';
import { Type } from '@cardEditor/cardOptions/type';
import { goldenFullArtEnergy, supporterFullArt } from '../rarity';
import { energy, pokemon, trainer } from '../supertype';
import { sunAndMoon, swordAndShield } from '../baseSet';

const pokemonTypeLogic: Partial<CardLogic> = {
  hasSubtypes: true,
  isSubtypeRequired: true,
  isPokemonType: true,
  isAttackCostType: true,
};

const pokemonTypeBaseSetOverwrites: Type['baseSetOverwrites'] = {
  [swordAndShield.id]: {
    styles: {
      abilitySymbol: 'swordAndShield',
    },
  },
  [sunAndMoon.id]: {
    styles: {
      abilitySymbol: 'sunAndMoon',
    },
  },
};

const pokemonTypeBaseSetDependencies: Type['baseSetDependencies'] = {
  [swordAndShield.id]: {
    supertypes: [pokemon.id],
    rarities: [],
  },
  [sunAndMoon.id]: {
    supertypes: [pokemon.id],
    rarities: [],
  },
};

let id = 1;

export const grass: Type = {
  id: id++,
  slug: 'grass',
  displayName: 'Grass',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const fire: Type = {
  id: id++,
  slug: 'fire',
  displayName: 'Fire',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const water: Type = {
  id: id++,
  slug: 'water',
  displayName: 'Water',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const lightning: Type = {
  id: id++,
  slug: 'lightning',
  displayName: 'Lightning',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const psychic: Type = {
  id: id++,
  slug: 'psychic',
  displayName: 'Psychic',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const fighting: Type = {
  id: id++,
  slug: 'fighting',
  displayName: 'Fighting',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const dark: Type = {
  id: id++,
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
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const metal: Type = {
  id: id++,
  slug: 'metal',
  displayName: 'Metal',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const dragon: Type = {
  id: id++,
  slug: 'dragon',
  displayName: 'Dragon',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const fairy: Type = {
  id: id++,
  slug: 'fairy',
  displayName: 'Fairy',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const colorless: Type = {
  id: id++,
  slug: 'colorless',
  displayName: 'Colorless',
  logic: pokemonTypeLogic,
  baseSetDependencies: pokemonTypeBaseSetDependencies,
  baseSetOverwrites: pokemonTypeBaseSetOverwrites,
};

export const item: Type = {
  id: id++,
  slug: 'item',
  displayName: 'Item',
  logic: {
    hasSubtypes: true,
    hasDescription: true,
  },
  baseSetDependencies: {
    [swordAndShield.id]: {
      supertypes: [trainer.id],
      rarities: [],
    },
    [sunAndMoon.id]: {
      supertypes: [trainer.id],
      rarities: [],
    },
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      logic: {
        hasVariations: true,
        isVariationRequired: false,
      },
    },
  },
};

export const supporter: Type = {
  id: id++,
  slug: 'supporter',
  displayName: 'Supporter',
  logic: {
    hasSubname: true,
    hasDescription: true,
  },
  baseSetDependencies: {
    [swordAndShield.id]: {
      supertypes: [trainer.id],
      rarities: [supporterFullArt.id],
    },
    [sunAndMoon.id]: {
      supertypes: [trainer.id],
      rarities: [],
    },
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      logic: {
        hasVariations: true,
        isVariationRequired: false,
      },
    },
  },
};

export const stadium: Type = {
  id: id++,
  slug: 'stadium',
  displayName: 'Stadium',
  logic: {
    hasDescription: true,
  },
  baseSetDependencies: {
    [swordAndShield.id]: {
      supertypes: [trainer.id],
      rarities: [],
    },
    [sunAndMoon.id]: {
      supertypes: [trainer.id],
      rarities: [],
    },
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      logic: {
        hasVariations: true,
        isVariationRequired: false,
      },
    },
  },
};

export const base: Type = {
  id: id++,
  slug: 'base',
  displayName: 'Base',
  logic: {
    hasTypeImage: true,
    hasName: false,
    hasCardInfo: false,
  },
  baseSetDependencies: {
    [swordAndShield.id]: {
      supertypes: [energy.id],
      rarities: [],
    },
    [sunAndMoon.id]: {
      supertypes: [energy.id],
      rarities: [goldenFullArtEnergy.id],
    },
  },
};

export const special: Type = {
  id: id++,
  slug: 'special',
  displayName: 'Special',
  logic: {
    hasTypeImage: true,
    hasMultipleTypeImages: true,
    hasIllustratorName: false,
    hasDescription: true,
  },
  baseSetDependencies: {
    [swordAndShield.id]: {
      supertypes: [energy.id],
      rarities: [],
    },
    [sunAndMoon.id]: {
      supertypes: [energy.id],
      rarities: [goldenFullArtEnergy.id],
    },
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      logic: {
        hasVariations: true,
        isVariationRequired: false,
      },
    },
  },
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
  dragon,
  fairy,
  colorless,
  item,
  supporter,
  stadium,
  base,
  special,
];
