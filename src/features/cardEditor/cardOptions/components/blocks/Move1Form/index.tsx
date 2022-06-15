import { FC } from 'react';
import MoveForm from '../../general/MoveForm';
import Move1DescriptionInput from './fields/Move1DescriptionInput';
import Move1NameInput from './fields/Move1NameInput';

const Move1Form: FC = () => (
  <MoveForm label="First move">
    <Move1NameInput />
    <Move1DescriptionInput />
  </MoveForm>
);

export default Move1Form;
