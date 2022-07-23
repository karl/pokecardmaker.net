import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { FC } from 'react';
import CardImgCropper from '../../components/CardImgCropper';

const ImgLayer2Cropper: FC = () => {
  const { imgLayer2, setImgLayer2 } = useCardOptions();

  return (
    <CardImgCropper
      label="Layer 2"
      slug="imgLayer2"
      img={imgLayer2}
      setImg={setImgLayer2}
      overlayZIndex={0}
    />
  );
};

export default ImgLayer2Cropper;
