import TextInput from '@components/inputs/TextInput';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

const AbilityNameInput: FC = () => {
  const { ability, setAbility } = useCardOptions();

  if (!ability) return null;

  return (
    <TextInput
      slug="abilityName"
      label="Name"
      value={ability.name}
      onChange={value =>
        setAbility({
          ...ability,
          name: value,
        })
      }
    />
  );
};

export default AbilityNameInput;
