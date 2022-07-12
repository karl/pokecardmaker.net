import { FormControl, TextField } from '@mui/material';
import { FC } from 'react';
import Label from '../Label';
import { GeneralInputProps } from './types';

const GeneralInput: FC<GeneralInputProps> = ({
  slug,
  endAdornment,
  startAdornment,
  label,
  disabled,
  onChange,
  ...rest
}) => (
  <FormControl>
    <Label slug={slug}>{label}</Label>
    <TextField
      id={`${slug}-input`}
      InputProps={{
        startAdornment,
        endAdornment,
      }}
      disabled={disabled}
      // Components implementing this component will add typing
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onChange={e => onChange(e.currentTarget.value as any)}
      {...rest}
    />
  </FormControl>
);

export default GeneralInput;
