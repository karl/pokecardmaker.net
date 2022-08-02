import { Typography } from '@mui/material';
import { FC } from 'react';
import Tooltip from '../Tooltip';
import { LabelProps } from './types';

const Label: FC<LabelProps> = ({ slug, tooltipProps, children }) => (
  <Typography
    variant="subtitle2"
    sx={{
      paddingLeft: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
    component="label"
    htmlFor={`${slug}-input`}
    id={`${slug}-label`}
  >
    {tooltipProps ? (
      <>
        <span>{children}</span>
        <Tooltip {...tooltipProps} />
      </>
    ) : (
      children
    )}
  </Typography>
);

export default Label;
