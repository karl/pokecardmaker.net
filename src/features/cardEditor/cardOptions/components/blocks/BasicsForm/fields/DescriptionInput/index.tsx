import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import TextAreaInput from '@components/inputs/TextAreaInput';
import { FC } from 'react';

// TODO: Add tooltip for [Special Characters]
const DescriptionInput: FC = () => {
  const { hasDescription } = useCardLogic();
  const { description, setDescription } = useCardOptions();

  if (!hasDescription) return null;

  return (
    <TextAreaInput
      slug="description"
      label="Description"
      value={description}
      onChange={setDescription}
    />
  );
};

export default DescriptionInput;
