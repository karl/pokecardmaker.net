import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useBase64Img from '@hooks/useBase64Img';
import { FC } from 'react';
import { StyledImg, Wrapper } from './styles';

const PrevolveImg: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const {
    prevolveImgSrc,
    debug: { prevolveImgSrc: debugImgSrc },
  } = useCardOptions();
  const src = useBase64Img(prevolveImgSrc ?? debugImgSrc);

  if (!hasPrevolve || !src) return null;

  return (
    <Wrapper>
      <StyledImg src={src} alt="" />
    </Wrapper>
  );
};

export default PrevolveImg;
