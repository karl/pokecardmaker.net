import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { FC } from 'react';
import CardImgCropper from '../../components/CardImgCropper';

const ImgLayer1Cropper: FC = () => {
  const { imgLayer1, setImgLayer1 } = useCardOptions();

  return (
    <CardImgCropper
      label="Layer 1"
      slug="imgLayer1"
      img={imgLayer1}
      setImg={setImgLayer1}
      overlayZIndex={1}
      tooltipContent={<>bruh</>}
    />
  );
};

export default ImgLayer1Cropper;
