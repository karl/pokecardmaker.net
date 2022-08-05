import { Area } from 'react-easy-crop';

export interface ImgCropperProps {
  src: string;
  initialCroppedArea?: Area;
  onChange: (croppedArea: Area) => void;
  overlayImgSrc?: string;
  overlayImgZIndex?: number;
}
