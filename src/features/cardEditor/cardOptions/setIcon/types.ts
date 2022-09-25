import { IdentifierInfo } from '../types';

export interface SetIcon extends IdentifierInfo {
  /**
   * The baseSet this setIcon can be grouped into
   */
  baseSet?: number;
}
