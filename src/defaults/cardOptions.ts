import { CardInterface, RelationsInterface } from '@interfaces/card';
import { RequiredIsh } from '@interfaces/utils';
import { swordAndShield } from '@data/cardOptions/baseSets';
import { energy, pokemon, trainer } from '@data/cardOptions/supertypes';
import {
  base,
  colorless,
  dark,
  fighting,
  fire,
  grass,
  item,
  lightning,
  metal,
  psychic,
  special,
  supporter,
  water,
} from '@data/cardOptions/types';
import {
  basic,
  stage1,
  stage2,
  tool,
  v,
  vmax,
} from '@data/cardOptions/subtypes';
import { swordAndShield as baseSet } from '@data/cardOptions/setIcons';
import { d } from '@data/cardOptions/rotationIcons';
import { common } from '@data/cardOptions/rarityIcons';
import { dynamax } from '@data/cardOptions/variations';

export const defaultRelations: RelationsInterface = {
  baseSet: swordAndShield,
  supertype: pokemon,
  type: grass,
  subtype: basic,
  rarity: undefined,
  variation: undefined,
  weaknessType: water,
  resistanceType: undefined,
  setIcon: baseSet,
  rotationIcon: d,
  rarityIcon: common,
};

export const defaultCardOptions: RequiredIsh<CardInterface> = {
  name: 'Garbodor',
  subname: '',
  backgroundImgSrc: undefined,
  imgLayer1Src: undefined,
  imgLayer2Src: undefined,
  customSetIconSrc: undefined,
  prevolveImgSrc: undefined,
  typeImgSrc: undefined,
  typeImgAmount: 1,
  cardNumber: '100',
  totalInSet: '112',
  hitpoints: 120,
  illustrator: '',
  weaknessAmount: 2,
  resistanceAmount: 30,
  retreatCost: 1,
  prevolveName: 'Trubbish',
  dexStats: 'NO. 569  Trash Heap Pokémon  HT: 6\'3" WT:  236.6 lbs.',
  dexEntry: '',
  description: '',
  ability: undefined,
  move1: undefined,
  move2: undefined,
  // Relations
  baseSetId: defaultRelations.baseSet.id,
  supertypeId: defaultRelations.supertype.id,
  typeId: dark.id,
  // typeId: defaultRelations.type.id,
  subtypeId: stage1.id,
  // subtypeId: defaultRelations.subtype?.id,
  rarityId: defaultRelations.rarity?.id,
  variationId: defaultRelations.variation?.id,
  weaknessTypeId: defaultRelations.weaknessType?.id,
  resistanceTypeId: defaultRelations.resistanceType?.id,
  setIconId: defaultRelations.setIcon?.id,
  rotationIconId: defaultRelations.rotationIcon?.id,
  rarityIconId: defaultRelations.rarityIcon?.id,
};

export const defaultSupertypeTypes: {
  [supertypeId: number]: number;
} = {
  [pokemon.id]: grass.id,
  [trainer.id]: supporter.id,
  [energy.id]: base.id,
};

const defaultPokemonTypeSubtype = basic.id;

export const defaultTypeSubtypes: {
  [typeId: number]: number | undefined;
} = {
  [grass.id]: defaultPokemonTypeSubtype,
  [fire.id]: defaultPokemonTypeSubtype,
  [water.id]: defaultPokemonTypeSubtype,
  [lightning.id]: defaultPokemonTypeSubtype,
  [psychic.id]: defaultPokemonTypeSubtype,
  [fighting.id]: defaultPokemonTypeSubtype,
  [dark.id]: defaultPokemonTypeSubtype,
  [metal.id]: defaultPokemonTypeSubtype,
  [colorless.id]: defaultPokemonTypeSubtype,
  [item.id]: undefined,
  [supporter.id]: undefined,
  [base.id]: undefined,
  [special.id]: undefined,
};

export const defaultSubtypeVariations: {
  [subtypeId: number]: number | undefined;
} = {
  [basic.id]: undefined,
  [stage1.id]: undefined,
  [stage2.id]: undefined,
  [v.id]: undefined,
  [vmax.id]: dynamax.id,
  [tool.id]: undefined,
};
