import { CardTypeHelpers, IdentifierInfo } from '../types';

// Grass/Water/Item/Supporter/Base/Special
export interface Type extends IdentifierInfo, CardTypeHelpers {
  supertypes: number[];
  // TODO: Might be needed on all different types (subtype, supertype, etc)
  baseSetDependencies: {
    [id: number]: {
      rarities: number[];
    };
  };
}
