import { cardImgAspect, cardImgWidth } from '@constants';
import { FC, useMemo } from 'react';
import { useElementSize } from 'usehooks-ts';
import CardImage from '../components/CardImage';
import { CardContainer } from './styles';


const baseFontSize = 16;

const CardDisplay: FC = () => {
  const [squareRef, { width }] = useElementSize();

  // TODO: This crashes often when resizing, maybe make a new useElementSize hook
  const fontSize = useMemo<number>(
    () => (width ? width / (cardImgWidth / baseFontSize) : baseFontSize),
    [width],
  );

  return (
    <CardContainer id="card" $fontSize={fontSize} $height={width * cardImgAspect} ref={squareRef}>
      <CardImage />
    </CardContainer>
  );
};

export default CardDisplay;
