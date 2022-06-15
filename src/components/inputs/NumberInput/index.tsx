import { TextField } from '@mui/material';
import { FC } from 'react';
import { NumberInputProps } from './types';

const NumberInput: FC<NumberInputProps> = ({
  label,
  slug,
  value,
  onChange,
}) => (
  <TextField
    id={slug}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      inputMode: 'numeric',
      pattern: '[0-9]*',
    }}
    type="number"
    label={label}
    value={value}
    onChange={e => onChange(+e.currentTarget.value)}
  />
);

export default NumberInput;
