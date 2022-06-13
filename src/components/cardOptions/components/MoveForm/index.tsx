import { Typography } from '@mui/material';
import { FC } from 'react';
import { MoveFormProps } from './types';

const MoveForm: FC<MoveFormProps> = ({ label, children }) => (
  <>
    <Typography fontWeight={500} px={2}>
      {label}
    </Typography>
    {children}
  </>
);

export default MoveForm;
