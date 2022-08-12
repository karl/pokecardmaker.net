import { SelectChangeEvent } from '@mui/material/Select/Select';

export interface ControlledSelectorProps {
  displayName: string;
  slug: string;
  value?: number | '';
  onChange: (event: SelectChangeEvent) => void;
  gap?: number;
}
