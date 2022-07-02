import { FC } from 'react';
import MoveForm from '../MoveForm';
import AttackMoveDamageAmountInput from './fields/AttackMoveDamageAmountInput';
import AttackMoveDescriptionInput from './fields/AttackMoveDescriptionInput';
import AttackMoveNameInput from './fields/AttackMoveNameInput';
import { AttackMoveFormProps } from './types';

const AttackMoveForm: FC<AttackMoveFormProps> = ({ label, ...rest }) => (
  <MoveForm label={label}>
    <AttackMoveNameInput {...rest} />
    <AttackMoveDamageAmountInput {...rest} />
    <AttackMoveDescriptionInput {...rest} />
  </MoveForm>
);

export default AttackMoveForm;
