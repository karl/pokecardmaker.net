import { Typography } from '@mui/material';
import { FC } from 'react';
import { LabelProps } from './types';

const Label: FC<LabelProps> = ({ slug, children }) => (
  <Typography
    variant="subtitle2"
    sx={{ paddingLeft: 1 }}
    component="label"
    htmlFor={`${slug}-input`}
    id={`${slug}-label`}
  >
    {children}
  </Typography>
);

export default Label;
