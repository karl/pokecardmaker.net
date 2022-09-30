import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { CardNumberText } from './styles';

const CardNumber: FC = () => {
  const { cardNumber, totalInSet } = useCardOptions();
  const {
    cardInfoOutline,
    cardInfoTextColor,
    positions: { cardNumber: placement },
  } = useCardStyles();

  if (!cardNumber && !totalInSet) return null;

  return (
    <CardNumberText
      textColor={cardInfoTextColor}
      textOutline={cardInfoOutline}
      placement={placement}
    >
      {cardNumber && <span>{cardNumber}</span>}
      {cardNumber && totalInSet && <span>/</span>}
      {totalInSet && <span>{totalInSet}</span>}
    </CardNumberText>
  );
};

export default CardNumber;
