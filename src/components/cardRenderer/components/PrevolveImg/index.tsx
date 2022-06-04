import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useSubtype from '@hooks/cardOptions/useSubtype';
import useBase64Img from '@hooks/useBase64Img';
import { FC } from 'react';
import { StyledImg, Wrapper } from './styles';

const PrevolveImg: FC = () => {
  const { subtype } = useSubtype();
  const {
    state: { prevolveImgSrc },
    debug: { prevolveImgSrc: debugImgSrc },
  } = useCardOptions();
  const src = useBase64Img(prevolveImgSrc ?? debugImgSrc);

  if (!subtype?.logic.hasPrevolve || !src) return null;

  return (
    <Wrapper>
      <StyledImg src={src} alt="" />
    </Wrapper>
  );
};

export default PrevolveImg;
