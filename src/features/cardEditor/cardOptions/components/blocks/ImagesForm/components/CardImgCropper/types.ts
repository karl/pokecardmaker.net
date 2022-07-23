import { CroppableImg } from '@cardEditor/types';

export interface CardImgCropperProps {
  label: string;
  slug: string;
  img?: CroppableImg;
  setImg: (img?: CroppableImg) => void;
  overlayZIndex: number;
}
