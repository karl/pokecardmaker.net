import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardLogic } from '@cardEditor/cardLogic';

const SubnameInput: FC = () => {
  const { hasSubname } = useCardLogic();
  const { subname, setSubname } = useCardOptions();

  if (!hasSubname) return null;

  return (
    <TextInput
      slug="subname"
      label="Subname"
      value={subname}
      onChange={setSubname}
    />
  );
};

export default SubnameInput;
