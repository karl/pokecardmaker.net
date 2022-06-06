import { CardTypeHelpers, IdentifierInfo } from '.';

// Grass/Water/Item/Supporter/Base/Special
export interface Type extends IdentifierInfo, CardTypeHelpers {
  supertypes: number[];
  rarities: number[];
}
