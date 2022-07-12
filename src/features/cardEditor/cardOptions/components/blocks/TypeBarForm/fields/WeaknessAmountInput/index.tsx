import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import NumberInput from '@components/inputs/NumberInput';
import { InputAdornment } from '@mui/material';

const WeaknessAmountInput: FC = () => {
  const { weaknessTypeId, weaknessAmount, setWeaknessAmount } =
    useCardOptions();

  if (!weaknessTypeId) return null;

  return (
    <NumberInput
      slug="weaknessAmount"
      label="Weakness Amount"
      value={weaknessAmount}
      startAdornment={<InputAdornment position="start">×</InputAdornment>}
      onChange={setWeaknessAmount}
    />
  );
};

export default WeaknessAmountInput;
