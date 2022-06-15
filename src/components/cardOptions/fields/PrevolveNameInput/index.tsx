import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';

const PrevolveNameInput: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const { prevolveName, setPrevolveName } = useCardOptions();

  if (!hasPrevolve) return null;

  return (
    <TextInput
      slug="prevolveName"
      label="Prevolve Name"
      value={prevolveName}
      onChange={setPrevolveName}
    />
  );
};

export default PrevolveNameInput;
