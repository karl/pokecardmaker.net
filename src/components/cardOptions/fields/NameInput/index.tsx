import TextInput from '@components/inputs/TextInput';
import useCardLogic from 'src/features/cardEditor/cardLogic/useCardLogic';
import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import { FC } from 'react';

const NameInput: FC = () => {
  const { hasName } = useCardLogic();
  const { name, setName } = useCardOptions();

  if (!hasName) return null;

  return <TextInput slug="name" label="Name" value={name} onChange={setName} />;
};

export default NameInput;
