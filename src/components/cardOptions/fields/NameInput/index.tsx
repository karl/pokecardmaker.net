import useType from '@hooks/cardOptions/useType';
import { FC } from 'react';

const NameInput: FC = () => {
  const { type } = useType();

  if (!type.logic.hasName) return null;

  return <>NameInput</>;
};

export default NameInput;
