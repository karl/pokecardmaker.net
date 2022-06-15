import { useCardDebug } from '@cardEditor/cardDebug';
import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import useBase64Img from '@hooks/useBase64Img';
import { FC } from 'react';
import { StyledImg, Wrapper } from './styles';

const PrevolveImg: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const { prevolveImgSrc } = useCardOptions();
  const { prevolveImgSrc: debugImgSrc } = useCardDebug();
  const src = useBase64Img(prevolveImgSrc ?? debugImgSrc);

  if (!hasPrevolve || !src) return null;

  return (
    <Wrapper>
      <StyledImg src={src} alt="" />
    </Wrapper>
  );
};

export default PrevolveImg;
