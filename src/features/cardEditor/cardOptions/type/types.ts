import { CardTypeHelpers, IdentifierInfo } from '../types';

// Grass/Water/Item/Supporter/Base/Special
export interface Type extends IdentifierInfo, CardTypeHelpers {
  supertypes: number[];
  baseSetDependencies: {
    [id: number]: {
      rarities: number[];
    };
  };
}
