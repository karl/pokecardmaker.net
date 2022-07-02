import { FC } from 'react';
import GeneralInput from '../GeneralInput';
import { TextAreaInputProps } from './types';

const TextAreaInput: FC<TextAreaInputProps> = props => (
  <GeneralInput type="text" minRows={1.5} multiline {...props} />
);

export default TextAreaInput;
