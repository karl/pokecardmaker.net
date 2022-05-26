import AccordionForm from '@components/AccordionForm';
import NameInput from '@components/cardOptions/fields/NameInput';
import useType from '@hooks/cardOptions/useType';
import { FC } from 'react';

const BasicsForm: FC = () => {
  const { type } = useType();

  if (!type.logic.hasName) return null;

  return (
    <AccordionForm id="basicsForm" header="Basics">
      <NameInput />
    </AccordionForm>
  );
};

export default BasicsForm;
