import { FC, useCallback } from 'react';
import GeneralInput from '../GeneralInput';
import { NumberInputProps } from './types';

const NumberInput: FC<NumberInputProps> = ({
  onChange,
  min,
  max,
  ...props
}) => {
  const handleChange = useCallback(
    (value: number | '') => {
      let finalValue = value;
      if (finalValue !== '') {
        if (min !== undefined) finalValue = Math.max(min, finalValue);
        if (max !== undefined) finalValue = Math.min(max, finalValue);
      }
      onChange(finalValue);
    },
    [onChange, min, max],
  );

  return (
    <GeneralInput
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
      }}
      type="number"
      onChange={handleChange}
      {...props}
    />
  );
};

export default NumberInput;
