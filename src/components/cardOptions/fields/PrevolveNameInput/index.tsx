import TextInput from '@components/inputs/TextInput';
import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
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
