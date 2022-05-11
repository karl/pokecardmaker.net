import { IdentifierInfo } from '.';

// Currently only Dynamax/Gigantamax; which do not change card styles
export interface Variation extends IdentifierInfo {
  subtypes: number[];
  rarities: number[];
}
