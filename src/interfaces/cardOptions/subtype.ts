import { IdentifierInfo } from '.';
import { CardStyles } from './cardStyles';

export interface SubtypeLogic {
  /**
   * Default: false
   */
  hasVariations?: boolean;
  /**
   * Default: false
   */
  hasPrevolve?: boolean;
}

// Basic/Stage1/V/VMax
export interface Subtype extends IdentifierInfo {
  types: number[];
  rarities: number[];
  styles?: CardStyles;
  logic?: SubtypeLogic;
}
