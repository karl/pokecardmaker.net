import TextInput from '@components/inputs/TextInput';
import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import { FC } from 'react';

const Move2NameInput: FC = () => {
  const { move2, setMove2 } = useCardOptions();

  if (!move2) return null;

  return (
    <TextInput
      slug="move2Name"
      label="Name"
      value={move2.name}
      onChange={value =>
        setMove2({
          ...move2,
          name: value,
        })
      }
    />
  );
};

export default Move2NameInput;
