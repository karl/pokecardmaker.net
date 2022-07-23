import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { FC } from 'react';
import CardImgCropper from '../../components/CardImgCropper';

const BackgroundImgCropper: FC = () => {
  const { backgroundImg, setBackgroundImg } = useCardOptions();

  return (
    <CardImgCropper
      label="Background Image"
      slug="backgroundImg"
      img={backgroundImg}
      setImg={setBackgroundImg}
      overlayZIndex={1}
    />
  );
};

export default BackgroundImgCropper;
