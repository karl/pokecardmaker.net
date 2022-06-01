import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';
import { StyledImage } from './styles';

const DebugImage: FC = () => {
  const {
    debug: { showCardOverlay, overlayOpacity, overlayImgSrc },
  } = useCardOptions();

  if (
    !showCardOverlay ||
    !overlayImgSrc ||
    process.env.NODE_ENV !== 'development'
  )
    return null;

  return <StyledImage $opacity={overlayOpacity / 100} src={overlayImgSrc} />;
};

export default DebugImage;
