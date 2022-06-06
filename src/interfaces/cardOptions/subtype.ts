import { CardTypeHelpers, IdentifierInfo } from '.';

// Basic/Stage1/V/VMax
export interface Subtype extends IdentifierInfo, CardTypeHelpers {
  types: number[];
  rarities: number[];
}
