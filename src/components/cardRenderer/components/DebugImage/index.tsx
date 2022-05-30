import { styled } from '@css';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

const StyledImage = styled('img')<{ $opacity: number }>`
  z-index: 999;
  height: 100%;
  width: 100%;
  opacity: ${({ $opacity }) => $opacity};
`;

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
