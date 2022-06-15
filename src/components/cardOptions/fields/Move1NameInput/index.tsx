import TextInput from '@components/inputs/TextInput';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

const Move1NameInput: FC = () => {
  const { move1, setMove1 } = useCardOptions();

  if (!move1) return null;

  return (
    <TextInput
      slug="move1Name"
      label="Name"
      value={move1.name}
      onChange={value =>
        setMove1({
          ...move1,
          name: value,
        })
      }
    />
  );
};

export default Move1NameInput;
