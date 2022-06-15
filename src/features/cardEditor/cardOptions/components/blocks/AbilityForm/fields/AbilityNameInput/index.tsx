import { useCardOptions } from '@cardEditor/cardOptions';
import TextInput from '@components/inputs/TextInput';
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
