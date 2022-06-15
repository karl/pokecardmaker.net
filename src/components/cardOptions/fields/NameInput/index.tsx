import TextInput from '@components/inputs/TextInput';
import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

const NameInput: FC = () => {
  const { hasName } = useCardLogic();
  const { name, setName } = useCardOptions();

  if (!hasName) return null;

  return <TextInput slug="name" label="Name" value={name} onChange={setName} />;
};

export default NameInput;
