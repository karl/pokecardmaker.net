import { InputProps } from '../GeneralInput/types';

export interface TextAreaInputProps extends InputProps {
  onChange: (value: string) => void;
}
