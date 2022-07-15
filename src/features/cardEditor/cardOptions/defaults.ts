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
import { swordAndShield as baseSet, rebelClash } from './setIcon';
import { d } from './rotationIcon';
import { common, rare } from './rarityIcon';
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
  name: 'Garbodor',
  subname: '',
  backgroundImgSrc: undefined,
  imgLayer1Src: undefined,
  imgLayer2Src: undefined,
  customSetIconSrc: undefined,
  prevolveImgSrc: undefined,
  typeImgSrc: undefined,
  typeImgAmount: 1,
  cardNumber: '118',
  totalInSet: '192',
  hitpoints: 120,
  illustrator: 'AKIRA EGAWA',
  weaknessAmount: 2,
  resistanceAmount: undefined,
  retreatCost: 2,
  prevolveName: 'Trubbish',
  dexStats: 'NO. 569  Trash Heap Pokémon  HT: 6\'3" WT:  236.6 lbs.',
  dexEntry:
    'This Pokémon eats trash, which turns into poison inside its body. The main component of the poison depends on what sort of trash was eaten.',
  description: '',
  hasAbility: true,
  ability: {
    name: 'Poisonous Puddle',
    description:
      "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
  },
  move1: {
    name: 'Sludge Bomb',
    description:
      "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
    damageAmount: 80,
    damageModifier: undefined,
    energyCost: [
      {
        amount: 1,
        typeId: dark.id,
      },
      {
        amount: 2,
        typeId: colorless.id,
      },
    ],
  },
  hasMove2: false,
  move2: {
    name: 'Sludge Bomb',
    description:
      "Once during your turn, if a Stadium is in play, you may make your opponent's Active Pokémon Poisoned.",
    damageAmount: 80,
    damageModifier: '+',
    energyCost: [
      {
        amount: 1,
        typeId: dark.id,
      },
      {
        amount: 2,
        typeId: colorless.id,
      },
    ],
  },
  // Relations
  baseSetId: defaultRelations.baseSet.id,
  supertypeId: defaultRelations.supertype.id,
  typeId: dark.id,
  // typeId: defaultRelations.type.id,
  subtypeId: stage1.id,
  // subtypeId: defaultRelations.subtype?.id,
  rarityId: defaultRelations.rarity?.id,
  variationId: defaultRelations.variation?.id,
  weaknessTypeId: fighting.id,
  // weaknessTypeId: defaultRelations.weaknessType?.id,
  resistanceTypeId: defaultRelations.resistanceType?.id,
  setIconId: rebelClash.id,
  // setIconId: defaultRelations.setIcon?.id,
  rotationIconId: defaultRelations.rotationIcon?.id,
  rarityIconId: rare.id,
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
