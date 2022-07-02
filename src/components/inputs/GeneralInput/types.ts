import { InputBaseProps } from '@mui/material';
import { ReactNode } from 'react';

export interface InputProps {
  label: string;
  slug: string;
  value?: string | number;
  endAdornment?: ReactNode;
  onChange: ((value: string) => void) | ((value: number | '') => void);
}

export interface GeneralInputProps extends InputProps {
  type: 'number' | 'text';
  multiline?: boolean;
  minRows?: number;
  inputProps?: InputBaseProps['inputProps'];
}
