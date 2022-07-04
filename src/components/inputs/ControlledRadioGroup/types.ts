import { ReactElement } from 'react';
import { ControlledRadioProps } from '../ControlledRadio/types';

export interface ControlledRadioGroupProps<T = string> {
  value: T;
  label: string;
  slug: string;
  children: ReactElement<ControlledRadioProps<T>>[];
  onChange: (value: T) => void;
}
