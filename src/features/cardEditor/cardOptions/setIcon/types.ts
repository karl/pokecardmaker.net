import { IdentifierInfo } from '../types';

export type SetIconShape = 'rectangle' | 'square';

export interface SetIcon extends IdentifierInfo {
  /**
   * The baseSet this setIcon can be grouped into
   */
  baseSet?: number;
  shape: SetIconShape;
}
