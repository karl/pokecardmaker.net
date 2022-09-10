import { SelectChangeEvent } from '@mui/material/Select/Select';
import { ReactNode } from 'react';

export interface ControlledSelectorProps {
  displayName: string;
  slug: string;
  value?: number | '';
  gap?: number;
  helpText?: ReactNode;
  onChange: (event: SelectChangeEvent) => void;
}
