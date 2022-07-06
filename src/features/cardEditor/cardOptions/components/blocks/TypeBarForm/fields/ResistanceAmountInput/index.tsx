import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import NumberInput from '@components/inputs/NumberInput';
import { InputAdornment } from '@mui/material';

const ResistanceAmountInput: FC = () => {
  const { resistanceAmount, setResistanceAmount } = useCardOptions();

  return (
    <NumberInput
      slug="resistanceAmount"
      label="Resistance Amount"
      value={resistanceAmount}
      startAdornment={<InputAdornment position="start">-</InputAdornment>}
      onChange={setResistanceAmount}
    />
  );
};

export default ResistanceAmountInput;
