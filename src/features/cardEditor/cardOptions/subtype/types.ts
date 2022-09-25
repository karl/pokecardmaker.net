import { CardTypeHelpers, IdentifierInfo } from '../types';

// Basic/Stage1/V/VMax
export interface Subtype extends IdentifierInfo, CardTypeHelpers {
  baseSetDependencies: {
    [id: number]: {
      type: number;
      rarities: number[];
    }[];
  };
}
