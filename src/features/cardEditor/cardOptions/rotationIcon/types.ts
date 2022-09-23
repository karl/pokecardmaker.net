import { IdentifierInfo } from '../types';

export type RotationIconShape = 'rectangle' | 'square';

// D/E/F
export interface RotationIcon extends IdentifierInfo {
  shape: RotationIconShape;
}
