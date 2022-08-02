import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { FC } from 'react';

import CardImgCropper from '../../components/CardImgCropper';
import TooltipContent from '../../components/TooltipContent';

const BackgroundImgCropper: FC = () => {
  const { backgroundImg, setBackgroundImg } = useCardOptions();

  return (
    <CardImgCropper
      label="Background Image"
      slug="backgroundImg"
      img={backgroundImg}
      setImg={setBackgroundImg}
      overlayZIndex={1}
      tooltipContent={<TooltipContent />}
    />
  );
};

export default BackgroundImgCropper;
