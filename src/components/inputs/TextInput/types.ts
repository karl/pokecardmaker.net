import { InputProps } from '../GeneralInput/types';

export interface TextInputProps extends InputProps {
  onChange: (value: string) => void;
}
