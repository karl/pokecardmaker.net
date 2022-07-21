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
import { basic, stage1, stage2, tool, v, vmax } from './subtype';
import { swordAndShield as baseSet, promo } from './setIcon';
import { d, f } from './rotationIcon';
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
};

export const defaultCardOptions: RequiredIsh<CardInterface> = {
  name: 'Psyduck',
  subname: '',
  backgroundImg: undefined,
  imgLayer1: undefined,
  imgLayer2: undefined,
  customSetIconSrc: undefined,
  prevolveImgSrc: undefined,
  typeImgSrc: undefined,
  typeImgAmount: 1,
  cardNumber: '028',
  totalInSet: '189',
  hitpoints: 60,
  illustrator: 'GPSSAM',
  weaknessAmount: 2,
  resistanceAmount: undefined,
  retreatCost: 1,
  prevolveName: undefined,
  dexStats: 'NO. 054  Duck Pokémon  HT: 2\'7"  WT: 43,2 lbs.',
  dexEntry:
    "Suffers perpetual headaches. If the agony grows too great, Psyduck's latent power erupts, contrary to Psyduck's intent. Ergo, I am exploring ways to ease the pain.",
  description: '',
  hasAbility: false,
  ability: {
    description: '',
    name: '',
  },
  move1: {
    name: 'Spacing Out',
    description: 'Flip a coin. If heads, heal 10 damage from this Pokémon.',
    damageAmount: '',
    damageModifier: undefined,
    energyCost: [
      {
        amount: 1,
        typeId: colorless.id,
      },
    ],
  },
  hasMove2: true,
  move2: {
    name: 'Ram',
    description: '',
    damageAmount: 20,
    damageModifier: undefined,
    energyCost: [
      {
        amount: 1,
        typeId: water.id,
      },
      {
        amount: 1,
        typeId: colorless.id,
      },
    ],
  },
  // Relations
  baseSetId: defaultRelations.baseSet.id,
  supertypeId: defaultRelations.supertype.id,
  typeId: water.id,
  // typeId: defaultRelations.type.id,
  subtypeId: basic.id,
  // subtypeId: defaultRelations.subtype?.id,
  rarityId: defaultRelations.rarity?.id,
  variationId: defaultRelations.variation?.id,
  weaknessTypeId: lightning.id,
  // weaknessTypeId: defaultRelations.weaknessType?.id,
  resistanceTypeId: defaultRelations.resistanceType?.id,
  setIconId: promo.id,
  // setIconId: defaultRelations.setIcon?.id,
  rotationIconId: f.id,
  // rotationIconId: defaultRelations.rotationIcon?.id,
  rarityIconId: common.id,
  // rarityIconId: defaultRelations.rarityIcon?.id,
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
