import { CroppableImg } from '@cardEditor/types';
import { ReactNode } from 'react';

export interface CardImgCropperProps {
  label: string;
  slug: string;
  img?: CroppableImg;
  setImg: (img?: CroppableImg) => void;
  overlayZIndex: number;
  tooltipContent: ReactNode;
}
