import { FC } from 'react';
import GeneralInput from '../GeneralInput';
import { TextInputProps } from './types';

const TextInput: FC<TextInputProps> = props => (
  <GeneralInput type="text" {...props} />
);

export default TextInput;
