import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import MoveForm from '../../atoms/MoveForm';
import AbilityDescriptionInput from './fields/AbilityDescriptionInput';
import AbilityNameInput from './fields/AbilityNameInput';

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
