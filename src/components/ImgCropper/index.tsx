import Image from 'next/image';
import { FC, useState } from 'react';
import Cropper, { Point } from 'react-easy-crop';
import {
  cardImgHeight,
  cardImgWidth,
  cropperHeight,
  cropperWidth,
} from 'src/constants';
import { Overlay, Wrapper } from './styles';
import { ImgCropperProps } from './types';

const ImgCropper: FC<ImgCropperProps> = ({
  src,
  initialCroppedArea,
  overlayImgSrc,
  overlayImgZIndex = 0,
  onChange,
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  return (
    <Wrapper>
      <Cropper
        image={src}
        crop={crop}
        initialCroppedAreaPercentages={initialCroppedArea}
        zoom={zoom}
        cropSize={{ width: cropperWidth, height: cropperHeight }}
        maxZoom={100}
        minZoom={0.1}
        restrictPosition={false}
        zoomSpeed={0.1}
        aspect={cardImgWidth / cardImgHeight}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onChange}
      />
      {overlayImgSrc && (
        <Overlay $zIndex={overlayImgZIndex}>
          <Image src={overlayImgSrc} alt="" layout="fill" />
        </Overlay>
      )}
    </Wrapper>
  );
};

export default ImgCropper;
