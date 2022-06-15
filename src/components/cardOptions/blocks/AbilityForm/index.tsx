import { useCardOptions } from '@cardEditor/cardOptions';
import MoveForm from '@components/cardOptions/components/MoveForm';
import AbilityDescriptionInput from '@components/cardOptions/fields/AbilityDescriptionInput';
import AbilityNameInput from '@components/cardOptions/fields/AbilityNameInput';
import { FC } from 'react';

const AbilityForm: FC = () => {
  const { hasAbility } = useCardOptions();

  if (!hasAbility) return null;

  return (
    <MoveForm label="Ability">
      <AbilityNameInput />
      <AbilityDescriptionInput />
    </MoveForm>
  );
};

export default AbilityForm;