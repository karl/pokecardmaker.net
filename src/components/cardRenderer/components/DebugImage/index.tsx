import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';
import { StyledImage } from './styles';

const DebugImage: FC = () => {
  const {
    debug: { showCardOverlay, overlayOpacity, overlayImgSrc },
  } = useCardOptions();

  if (!showCardOverlay || !overlayImgSrc) return null;

  return (
    <StyledImage $opacity={overlayOpacity / 100} src={overlayImgSrc} alt="" />
  );
};

export default DebugImage;
