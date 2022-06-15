import { IdentifierInfo, ImageInfo } from '../types';

export interface SetIcon extends IdentifierInfo, ImageInfo {
  /**
   * The baseSet this setIcon can be grouped into
   */
  baseSet: number;
}
