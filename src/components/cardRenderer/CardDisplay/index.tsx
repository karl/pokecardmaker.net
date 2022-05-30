import { baseFontSize, cardImgAspect, cardImgWidth } from '@constants';
import { FC, useMemo } from 'react';
import { useElementSize } from 'usehooks-ts';
import NameBar from '../blocks/NameBar';
import CardImage from '../components/CardImage';
import DebugImage from '../components/DebugImage';
import Hitpoints from '../components/Hitpoints';
import SvgHelpers from '../components/SvgHelpers';
import { CardContainer } from './styles';

const CardDisplay: FC = () => {
  const [squareRef, { width }] = useElementSize();

  // TODO: This crashes often when resizing, maybe make a new useElementSize hook
  // TODO: Debounce this
  const fontSize = useMemo<number>(
    () => (width ? width / (cardImgWidth / baseFontSize) : baseFontSize),
    [width],
  );

  // TODO: Debounce this
  const height = useMemo<number>(() => width * cardImgAspect, [width]);

  return (
    <CardContainer
      id="card"
      $fontSize={fontSize}
      $height={height}
      ref={squareRef}
    >
      <SvgHelpers />
      <NameBar />
      <Hitpoints />
      <CardImage />
      <DebugImage />
    </CardContainer>
  );
};

export default CardDisplay;
