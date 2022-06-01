import { IdentifierInfo } from '.';
import { CardStyles } from './cardStyles';

export interface SubtypeLogic {
  /**
   * @default false
   */
  hasVariations: boolean;
  /**
   * @default false
   */
  hasPrevolve: boolean;
}

// Basic/Stage1/V/VMax
export interface Subtype extends IdentifierInfo {
  types: number[];
  rarities: number[];
  styles?: Partial<CardStyles>;
  logic: SubtypeLogic;
}
