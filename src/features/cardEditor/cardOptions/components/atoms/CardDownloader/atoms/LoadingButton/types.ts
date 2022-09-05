import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export interface LoadingButtonProps extends ButtonProps {
  isLoading: boolean;
  startIcon: ReactNode;
}
