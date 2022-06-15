import { BaseSet } from '@cardEditor/cardOptions/baseSet';
import { Rarity } from '@cardEditor/cardOptions/rarity';
import { Subtype } from '@cardEditor/cardOptions/subtype';
import { Supertype } from '@cardEditor/cardOptions/supertype';
import { Type } from '@cardEditor/cardOptions/type';
import { Variation } from '@cardEditor/cardOptions/variation';

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
