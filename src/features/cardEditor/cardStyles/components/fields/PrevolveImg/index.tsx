import { useCardDebug } from '@cardEditor/cardDebug';
import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC, useMemo } from 'react';
import { Img } from './styles';

const PrevolveImg: FC = () => {
  const {
    positions: { prevolveImg: placement },
  } = useCardStyles();
  const { hasPrevolve } = useCardLogic();
  const { prevolveImgSrc } = useCardOptions();
  const { showDebug, prevolveImgSrc: debugImgSrc } = useCardDebug();

  const imgSrc = useMemo<string | undefined>(
    () => (showDebug ? prevolveImgSrc ?? debugImgSrc : prevolveImgSrc),
    [showDebug, prevolveImgSrc, debugImgSrc],
  );

  if (!hasPrevolve || !imgSrc) return null;

  return <Img $url={imgSrc} placement={placement} />;
};

export default PrevolveImg;
