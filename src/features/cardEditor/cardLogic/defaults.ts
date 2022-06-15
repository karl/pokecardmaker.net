import { CardLogic } from 'src/features/cardEditor/cardLogic/types';

export const defaultCardLogic: Required<CardLogic> = {
  hasHitpoints: false,
  hasMoves: false,
  hasDescription: false,
  hasName: true,
  hasSubname: false,
  hasSubtypes: false,
  hasTypeImage: false,
  isAttackCostType: false,
  isPokemonType: false,
  isSubtypeRequired: false,
  hasPrevolve: false,
  hasVariations: false,
  hasCardInfo: true,
  hasIllustratorName: true,
  hasDexStats: false,
  hasDexEntry: false,
};
