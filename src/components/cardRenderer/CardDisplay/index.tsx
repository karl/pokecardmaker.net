import { FC, useMemo } from 'react';
import { useElementSize } from 'usehooks-ts';
import CardImage from '../components/CardImage';
import { CardContainer } from './styles';

const cardImgWidth = 747;
const baseFontSize = 16;

const CardDisplay: FC = () => {
  const [squareRef, { width }] = useElementSize();

  const fontSize = useMemo<number>(
    () => (width ? width / (cardImgWidth / baseFontSize) : baseFontSize),
    [width],
  );

  return (
    <CardContainer id="card" $fontSize={fontSize} ref={squareRef}>
      <CardImage />
    </CardContainer>
  );
};

export default CardDisplay;
