import TextAreaInput from '@components/inputs/TextAreaInput';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

const Move2DescriptionInput: FC = () => {
  const { move2, setMove2 } = useCardOptions();

  if (!move2) return null;

  return (
    <TextAreaInput
      slug="move2Description"
      label="Description"
      value={move2.description}
      onChange={value =>
        setMove2({
          ...move2,
          description: value,
        })
      }
    />
  );
};

export default Move2DescriptionInput;
