import { ReactNode } from 'react';

export interface TextInputProps {
  label: string;
  slug: string;
  value?: string;
  onChange: (value: string) => void;
  endAdornment?: ReactNode;
}
