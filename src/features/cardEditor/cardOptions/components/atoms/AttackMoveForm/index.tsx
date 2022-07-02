import { FC } from 'react';
import MoveForm from '../MoveForm';
import AttackMoveDamageAmountInput from './fields/AttackMoveDamageAmountInput';
import AttackMoveDescriptionInput from './fields/AttackMoveDescriptionInput';
import AttackMoveEnergyCostInput from './fields/AttackMoveEnergyCostInput';
import AttackMoveNameInput from './fields/AttackMoveNameInput';
import { AttackMoveFormProps } from './types';

const AttackMoveForm: FC<AttackMoveFormProps> = ({ label, ...rest }) => {
  if (!rest.move) return null;

  return (
    <MoveForm label={label}>
      <AttackMoveNameInput {...rest} />
      <AttackMoveEnergyCostInput {...rest} />
      <AttackMoveDamageAmountInput {...rest} />
      <AttackMoveDescriptionInput {...rest} />
    </MoveForm>
  );
};

export default AttackMoveForm;
