import { Typography } from '@mui/material';
import { FC } from 'react';
import { MoveFormProps } from './types';

const MoveForm: FC<MoveFormProps> = ({ label, children }) => (
  <>
    <Typography fontWeight={700} px={1}>
      {label}
    </Typography>
    {children}
  </>
);

export default MoveForm;
