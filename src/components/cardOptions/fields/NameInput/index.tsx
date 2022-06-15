import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardLogic } from '@cardEditor/cardLogic';

const NameInput: FC = () => {
  const { hasName } = useCardLogic();
  const { name, setName } = useCardOptions();

  if (!hasName) return null;

  return <TextInput slug="name" label="Name" value={name} onChange={setName} />;
};

export default NameInput;
