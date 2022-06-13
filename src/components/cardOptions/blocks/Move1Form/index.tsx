import MoveForm from '@components/cardOptions/components/MoveForm';
import Move1DescriptionInput from '@components/cardOptions/fields/Move1DescriptionInput';
import Move1NameInput from '@components/cardOptions/fields/Move1NameInput';
import { FC } from 'react';

const Move1Form: FC = () => (
  <MoveForm label="First move">
    <Move1NameInput />
    <Move1DescriptionInput />
  </MoveForm>
);

export default Move1Form;
