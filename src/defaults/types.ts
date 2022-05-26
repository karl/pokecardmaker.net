import { TypeLogic } from '@interfaces/cardOptions/type';

export const defaultTypeLogic: Required<TypeLogic> = {
  hasDescription: false,
  hasName: true,
  hasSubname: false,
  hasSubtypes: false,
  hasTypeImage: false,
  isAttackCostType: false,
  isPokemonType: false,
  isSubtypeRequired: false,
};
