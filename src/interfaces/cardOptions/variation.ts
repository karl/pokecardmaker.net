import { CardTypeHelpers, IdentifierInfo } from '.';

// Currently only Dynamax/Gigantamax; which do not change card styles
export interface Variation extends IdentifierInfo, CardTypeHelpers {
  subtypes: number[];
  rarities: number[];
}
