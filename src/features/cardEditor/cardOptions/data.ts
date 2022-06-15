import { CardOptions } from '@cardEditor/cardOptions';
import { baseSets } from './baseSet';
import { rarities } from './rarity';
import { rarityIcons } from './rarityIcon';
import { rotationIcons } from './rotationIcon';
import { setIcons } from './setIcon';
import { subtypes } from './subtype';
import { supertypes } from './supertype';
import { types } from './type';
import { variations } from './variation';

export const cardOptions: CardOptions = {
  baseSets,
  supertypes,
  types,
  subtypes,
  variations,
  rarities,
  setIcons,
  rotationIcons,
  rarityIcons,
};
