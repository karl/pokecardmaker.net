import { Area } from 'react-easy-crop';

export interface ImgCropperProps {
  src: string;
  onChange: (croppedArea: Area) => void;
  overlayImgSrc?: string;
  overlayImgZIndex?: number;
}
