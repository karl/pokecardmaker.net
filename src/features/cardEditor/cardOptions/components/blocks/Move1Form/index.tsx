import { FC } from 'react';
import MoveForm from '../../atoms/MoveForm';
import Move1DamageAmountInput from './fields/Move1DamageAmountInput';
import Move1DescriptionInput from './fields/Move1DescriptionInput';
import Move1NameInput from './fields/Move1NameInput';

// TODO: Generalize these inputs
const Move1Form: FC = () => (
  <MoveForm label="First move">
    <Move1NameInput />
    <Move1DamageAmountInput />
    <Move1DescriptionInput />
  </MoveForm>
);

export default Move1Form;
