import TextAreaInput from '@components/inputs/TextAreaInput';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

const AbilityDescriptionInput: FC = () => {
  const { ability, setAbility } = useCardOptions();

  if (!ability) return null;

  return (
    <TextAreaInput
      slug="abilityDescription"
      label="Description"
      value={ability.description}
      onChange={value =>
        setAbility({
          ...ability,
          description: value,
        })
      }
    />
  );
};

export default AbilityDescriptionInput;
