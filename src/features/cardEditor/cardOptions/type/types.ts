import { CardTypeHelpers, IdentifierInfo } from '../types';

// Grass/Water/Item/Supporter/Base/Special
export interface Type extends IdentifierInfo, CardTypeHelpers {
  baseSetDependencies: {
    [id: number]: {
      rarities: number[];
      supertypes: number[];
    };
  };
}
