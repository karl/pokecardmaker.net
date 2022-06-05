import { SubtypeLogic } from '@interfaces/cardOptions/subtype';
import { defaultSharedLogic } from '.';

export const defaultSubtypeLogic: Required<SubtypeLogic> = {
  hasPrevolve: false,
  hasVariations: false,
  ...defaultSharedLogic,
};
