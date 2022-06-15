import TextAreaInput from '@components/inputs/TextAreaInput';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

const Move1DescriptionInput: FC = () => {
  const { move1, setMove1 } = useCardOptions();

  if (!move1) return null;

  return (
    <TextAreaInput
      slug="move1Description"
      label="Description"
      value={move1.description}
      onChange={value =>
        setMove1({
          ...move1,
          description: value,
        })
      }
    />
  );
};

export default Move1DescriptionInput;
