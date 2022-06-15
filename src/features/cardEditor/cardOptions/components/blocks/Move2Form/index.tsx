import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import MoveForm from '../../atoms/MoveForm';
import Move2DescriptionInput from './fields/Move2DescriptionInput';
import Move2NameInput from './fields/Move2NameInput';

const Move2Form: FC = () => {
  const { hasMove2 } = useCardOptions();

  if (!hasMove2) return null;

  return (
    <MoveForm label="Second move">
      <Move2NameInput />
      <Move2DescriptionInput />
    </MoveForm>
  );
};

export default Move2Form;
