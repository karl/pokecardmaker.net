import MoveForm from '@components/cardOptions/components/MoveForm';
import Move2DescriptionInput from '@components/cardOptions/fields/Move2DescriptionInput';
import Move2NameInput from '@components/cardOptions/fields/Move2NameInput';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

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
