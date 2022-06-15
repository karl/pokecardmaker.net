import { BaseSet } from '@cardEditor/cardOptions/baseSet/types';
import { Rarity } from '@cardEditor/cardOptions/rarity/types';
import { Subtype } from '@cardEditor/cardOptions/subtype/types';
import { Supertype } from '@cardEditor/cardOptions/supertype/types';
import { Type } from '@cardEditor/cardOptions/type/types';
import { Variation } from '@cardEditor/cardOptions/variation/types';

export const getCardPath = (
  baseSet: BaseSet,
  supertype: Supertype,
  type: Type,
  subtype?: Subtype,
  variation?: Variation,
  rarity?: Rarity,
  seperator = '.',
) => {
  // It's more readable this way
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const _ = seperator;
  let path = `baseSets${_}${baseSet.slug}${_}supertypes${_}${supertype.slug}${_}types${_}${type.slug}`;
  if (subtype) path += `${_}subtypes${_}${subtype.slug}`;
  if (variation) path += `${_}variations${_}${variation.slug}`;
  if (rarity) path += `${_}rarities${_}${rarity.slug}`;

  return path;
};
