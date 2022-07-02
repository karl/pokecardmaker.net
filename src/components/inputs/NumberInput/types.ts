import { InputProps } from '../GeneralInput/types';

export interface NumberInputProps extends InputProps {
  onChange: (value: number | '') => void;
}
