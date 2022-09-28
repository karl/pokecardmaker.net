import { RequiredIsh } from '@interfaces/utils';
import { sunAndMoon, swordAndShield } from './baseSet';
import { energy, pokemon, trainer } from './supertype';
import {
  base,
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
  special,
  supporter,
  water,
} from './type';
import {
  basic,
  gxBasic,
  gxStage1,
  gxStage2,
  stage1,
  stage2,
  tool,
  v,
  vmax,
  vstar,
} from './subtype';
import { promo } from './setIcon';
import { d } from './rotationIcon';
import { common } from './rarityIcon';
import { dynamax } from './variation';
import { CardInterface, RelationsInterface } from '..';

export const defaultRelations: RelationsInterface = {
  baseSet: swordAndShield,
  supertype: pokemon,
  type: grass,
  subtype: basic,
  rarity: undefined,
  variation: undefined,
  weaknessType: water,
  resistanceType: undefined,
  setIcon: promo,
  rotationIcon: d,
  rarityIcon: common,
  typeImg: colorless,
};

export const defaultCardOptions: RequiredIsh<CardInterface> = {
  name: 'Pinsir',
  subname: '',
  backgroundImg: undefined,
  imgLayer1: undefined,
  imgLayer2: undefined,
  customSetIconSrc: undefined,
  prevolveImgSrc: undefined,
  customTypeImgSrc: undefined,
  typeImgAmount: 1,
  cardNumber: '6',
  totalInSet: '69',
  hitpoints: 180,
  illustrator: '5ban Graphics',
  weaknessAmount: 2,
  resistanceAmount: 30,
  retreatCost: 2,
  prevolveName: undefined,
  dexStats: '',
  dexEntry: '',
  description: '',
  hasAbility: false,
  ability: {
    name: '',
    description: '',
  },
  move1: {
    name: 'Superpowered Horns',
    description: '',
    damageAmount: 110,
    damageModifier: undefined,
    energyCost: [
      {
        typeId: grass.id,
        amount: 2,
      },
      {
        typeId: colorless.id,
        amount: 1,
      },
    ],
  },
  hasMove2: true,
  move2: {
    name: '',
    description: '',
    damageAmount: '',
    damageModifier: undefined,
    energyCost: [],
  },
  move3: {
    name: 'Guillotine',
    description: "_(You can't use more than 1 [X] attack in a game.)_",
    damageAmount: 160,
    damageModifier: undefined,
    energyCost: [
      {
        typeId: grass.id,
        amount: 2,
      },
      {
        typeId: colorless.id,
        amount: 1,
      },
    ],
  },
  // Relations
  baseSetId: sunAndMoon.id,
  supertypeId: defaultRelations.supertype.id,
  typeId: defaultRelations.type.id,
  subtypeId: gxBasic.id,
  rarityId: defaultRelations.rarity?.id,
  variationId: defaultRelations.variation?.id,
  weaknessTypeId: defaultRelations.weaknessType?.id,
  resistanceTypeId: defaultRelations.resistanceType?.id,
  setIconId: defaultRelations.setIcon?.id,
  rotationIconId: defaultRelations.rotationIcon?.id,
  rarityIconId: defaultRelations.rarityIcon?.id,
  typeImgId: defaultRelations.typeImg?.id,
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
  [dragon.id]: defaultPokemonTypeSubtype,
  [fairy.id]: defaultPokemonTypeSubtype,
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
  [vstar.id]: undefined,
  [gxBasic.id]: undefined,
  [gxStage1.id]: undefined,
  [gxStage2.id]: undefined,
  [tool.id]: undefined,
};
