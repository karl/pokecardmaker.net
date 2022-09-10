import { FormControlLabel, Radio } from '@mui/material';
import { ControlledRadioProps } from './types';

const ControlledRadio = <T = string,>({
  label,
  value,
  disabled,
}: ControlledRadioProps<T>) => (
  <FormControlLabel
    value={value}
    label={label}
    control={<Radio size="small" disabled={disabled} />}
  />
);

export default ControlledRadio;
