import { Button, CircularProgress } from '@mui/material';
import { FC } from 'react';
import { LoadingButtonProps } from './types';

const LoadingButton: FC<LoadingButtonProps> = ({
  isLoading,
  startIcon,
  children,
  ...props
}) => (
  <Button
    {...props}
    disabled={isLoading}
    startIcon={
      isLoading ? <CircularProgress color="inherit" size={20} /> : startIcon
    }
  >
    {children}
  </Button>
);

export default LoadingButton;
