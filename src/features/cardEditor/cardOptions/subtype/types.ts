import { CardTypeHelpers, IdentifierInfo } from '../types';

// Basic/Stage1/V/VMax
export interface Subtype extends IdentifierInfo, CardTypeHelpers {
  relations: {
    type: number;
    rarities: number[];
  }[];
}
