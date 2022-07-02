import { FC } from 'react';
import GeneralInput from '../GeneralInput';
import { NumberInputProps } from './types';

const NumberInput: FC<NumberInputProps> = props => (
  <GeneralInput
    inputProps={{
      inputMode: 'numeric',
      pattern: '[0-9]*',
    }}
    type="number"
    {...props}
  />
);

export default NumberInput;
