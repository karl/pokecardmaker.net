import { useCardDebug } from '@cardEditor/cardDebug';
import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { FC, useMemo } from 'react';
import { StyledImg, Wrapper } from './styles';

const PrevolveImg: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const { prevolveImgSrc } = useCardOptions();
  const { prevolveImgSrc: debugImgSrc } = useCardDebug();

  const imgSrc = useMemo<string | undefined>(
    () => prevolveImgSrc ?? debugImgSrc,
    [prevolveImgSrc, debugImgSrc],
  );

  if (!hasPrevolve || !imgSrc) return null;

  return (
    <Wrapper>
      <StyledImg src={imgSrc} alt="" />
    </Wrapper>
  );
};

export default PrevolveImg;
