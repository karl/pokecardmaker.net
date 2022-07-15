import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardLogic } from '@cardEditor/cardLogic';

const IllustratorInput: FC = () => {
  const { hasIllustratorName } = useCardLogic();
  const { illustrator, setIllustrator } = useCardOptions();

  if (!hasIllustratorName) return null;

  return (
    <TextInput
      slug="illustrator"
      label="Illustrator"
      value={illustrator}
      onChange={setIllustrator}
    />
  );
};

export default IllustratorInput;
