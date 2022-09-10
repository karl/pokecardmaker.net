import { RequiredIsh } from '@interfaces/utils';
import { swordAndShield } from './baseSet';
import { energy, pokemon, trainer } from './supertype';
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
} from './type';
import { basic, stage1, stage2, tool, v, vmax, vstar } from './subtype';
import { swordAndShield as baseSet } from './setIcon';
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
  setIcon: baseSet,
  rotationIcon: d,
  rarityIcon: common,
  typeImg: colorless,
};

export const defaultCardOptions: RequiredIsh<CardInterface> = {
  name: 'Arceus',
  subname: '',
  backgroundImg: undefined,
  imgLayer1: undefined,
  imgLayer2: undefined,
  customSetIconSrc: undefined,
  prevolveImgSrc: undefined,
  customTypeImgSrc: undefined,
  typeImgAmount: 1,
  cardNumber: '123',
  totalInSet: '172',
  hitpoints: 280,
  illustrator: '5bon Graphics',
  weaknessAmount: 2,
  resistanceAmount: 30,
  retreatCost: 2,
  prevolveName: 'Arceus _*V*_',
  dexStats: '',
  dexEntry: '',
  description: '',
  hasAbility: true,
  ability: {
    name: 'Starbirth',
    description: 'During your turn, you may search your deck for up to 2 cards and put them into your hand. Then shuffle your deck. _(You can\'t use more than 1 *VSTAR* Power in a game.)_',
  },
  move1: {
    name: 'Trinity Nova',
    description: 'Search your deck for up to 3 basic Energy cards and attach them to your Pokémon _*V*_ in any way you like. Then, shuffle your deck.',
    damageAmount: 200,
    damageModifier: undefined,
    energyCost: [{
      amount: 3,
      typeId: colorless.id,
    }],
  },
  hasMove2: true,
  move2: {
    name: '',
    description: '',
    damageAmount: '',
    damageModifier: undefined,
    energyCost: [],
  },
  // Relations
  baseSetId: defaultRelations.baseSet.id,
  supertypeId: defaultRelations.supertype.id,
  typeId: colorless.id,
  subtypeId: vstar.id,
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
