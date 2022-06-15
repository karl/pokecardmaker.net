import TextInput from '@components/inputs/TextInput';
import useCardLogic from 'src/features/cardEditor/cardLogic/useCardLogic';
import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
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
