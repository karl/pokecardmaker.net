import { TextField } from '@mui/material';
import { FC } from 'react';
import { GeneralInputProps } from './types';

const GeneralInput: FC<GeneralInputProps> = ({
  slug,
  endAdornment,
  onChange,
  ...rest
}) => (
  <TextField
    id={`${slug}-input`}
    InputLabelProps={{
      shrink: true,
    }}
    InputProps={{
      endAdornment,
    }}
    // Components implementing this component will add typing
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange={e => onChange(e.currentTarget.value as any)}
    {...rest}
  />
);

export default GeneralInput;
