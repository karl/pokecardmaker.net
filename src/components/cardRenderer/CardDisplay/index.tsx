import { baseFontSize, cardImgAspect, cardImgWidth } from '@constants';
import { FC, useMemo } from 'react';
import { useDebounce, useElementSize } from 'usehooks-ts';
import Debug from '../blocks/Debug';
import NameBar from '../blocks/NameBar';
import CardImage from '../components/CardImage';
import DexStats from '../components/DexStats';
import Hitpoints from '../components/Hitpoints';
import PrevolveImg from '../components/PrevolveImg';
import PrevolveName from '../components/PrevolveName';
import SvgHelpers from '../components/SvgHelpers';
import { CardContainer } from './styles';

const CardDisplay: FC = () => {
  const [squareRef, { width }] = useElementSize();
  const debouncedWidth = useDebounce<number>(width, 250);

  const fontSize = useMemo<number>(
    () =>
      debouncedWidth
        ? debouncedWidth / (cardImgWidth / baseFontSize)
        : baseFontSize,
    [debouncedWidth],
  );

  const height = useMemo<number>(
    () => debouncedWidth * cardImgAspect,
    [debouncedWidth],
  );

  return (
    <CardContainer
      id="card"
      $fontSize={fontSize}
      $height={height}
      ref={squareRef}
    >
      <Debug />
      <SvgHelpers />
      <NameBar />
      <Hitpoints />
      <PrevolveName />
      <PrevolveImg />
      <DexStats />
      <CardImage />
    </CardContainer>
  );
};

export default CardDisplay;
