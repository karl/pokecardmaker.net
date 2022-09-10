import { useCardDebug } from '@cardEditor/cardDebug';
import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, useMemo } from 'react';
import { StyledImg, Wrapper } from './styles';

const PrevolveImg: FC = () => {
  const {
    positions: { prevolveImg: placement },
  } = useCardStyles();
  const { hasPrevolve } = useCardLogic();
  const { prevolveImgSrc } = useCardOptions();
  const { prevolveImgSrc: debugImgSrc } = useCardDebug();

  const imgSrc = useMemo<string | undefined>(
    () => prevolveImgSrc ?? debugImgSrc,
    [prevolveImgSrc, debugImgSrc],
  );

  if (!hasPrevolve || !imgSrc) return null;

  return (
    <Wrapper {...placement}>
      <StyledImg src={imgSrc} alt="" />
    </Wrapper>
  );
};

export default PrevolveImg;
