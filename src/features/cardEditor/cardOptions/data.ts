import { CardOptions } from 'src/features/cardEditor/cardOptions/types';
import baseSets from './baseSet/data';
import rarities from './rarity/data';
import rarityIcons from './rarityIcon/data';
import rotationIcons from './rotationIcon/data';
import setIcons from './setIcon/data';
import subtypes from './subtype/data';
import supertypes from './supertype/data';
import types from './type/data';
import variations from './variation/data';

const cardOptions: CardOptions = {
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

export default cardOptions;
