import { FormControlLabel, Radio } from '@mui/material';
import { ControlledRadioProps } from './types';

const ControlledRadio = <T = string,>({
  label,
  value,
}: ControlledRadioProps<T>) => (
  <FormControlLabel
    value={value}
    label={label}
    control={<Radio size="small" />}
  />
);

export default ControlledRadio;
