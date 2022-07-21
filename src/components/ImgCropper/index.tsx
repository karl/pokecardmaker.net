import { FC, useState } from 'react';
import Cropper, { Point } from 'react-easy-crop';
import { cardImgHeight, cardImgWidth } from 'src/constants';
import { Wrapper } from './styles';
import { ImgCropperProps } from './types';

export const CROPPER_WIDTH = 320;
export const CROPPER_HEIGHT = (CROPPER_WIDTH / cardImgWidth) * cardImgHeight;

// TODO: Allow for overlay img
const ImgCropper: FC<ImgCropperProps> = ({ src, onChange }) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  return (
    <Wrapper>
      <Cropper
        image={src}
        crop={crop}
        zoom={zoom}
        cropSize={{ width: CROPPER_WIDTH, height: CROPPER_HEIGHT }}
        maxZoom={100}
        minZoom={0.1}
        restrictPosition={false}
        zoomSpeed={0.1}
        aspect={cardImgWidth / cardImgHeight}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onChange}
      />
    </Wrapper>
  );
};

export default ImgCropper;
