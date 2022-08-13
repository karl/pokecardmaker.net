import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import TextFormattingTooltip from '@cardEditor/cardOptions/components/atoms/TextFormattingTooltip';
import TextAreaInput from '@components/inputs/TextAreaInput';
import { FC } from 'react';

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
      tooltipProps={{
        title: 'Text Formatting',
        withPopup: true,
        children: <TextFormattingTooltip />,
      }}
    />
  );
};

export default DescriptionInput;
