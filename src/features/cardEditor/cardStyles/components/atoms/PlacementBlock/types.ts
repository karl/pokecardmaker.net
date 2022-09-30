import { Placement } from '@cardEditor/cardStyles/types';
import { CSSProperties } from 'react';

export interface PlacementBlockProps {
  position?: CSSProperties['position'];
  placement?: Placement;
}
