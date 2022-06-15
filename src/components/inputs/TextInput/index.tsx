import { TextField } from '@mui/material';
import { FC } from 'react';
import { TextInputProps } from './types';

const TextInput: FC<TextInputProps> = ({ label, slug, value, onChange }) => (
  <TextField
    id={`${slug}-input`}
    InputLabelProps={{
      shrink: true,
    }}
    type="text"
    label={label}
    value={value}
    onChange={e => onChange(e.currentTarget.value)}
  />
);

export default TextInput;
