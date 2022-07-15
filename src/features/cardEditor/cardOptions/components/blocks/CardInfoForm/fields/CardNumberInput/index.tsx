import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';

const CardNumberInput: FC = () => {
  const { cardNumber, setCardNumber } = useCardOptions();

  return (
    <TextInput
      slug="cardNumber"
      label="Card Number"
      value={cardNumber}
      onChange={setCardNumber}
    />
  );
};

export default CardNumberInput;
