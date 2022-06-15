import { TextField } from '@mui/material';
import { FC } from 'react';
import { TextAreaInputProps } from './types';

const TextAreaInput: FC<TextAreaInputProps> = ({
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
    type="text"
    minRows={1.5}
    multiline
    label={label}
    value={value}
    onChange={e => onChange(e.currentTarget.value)}
  />
);

export default TextAreaInput;
