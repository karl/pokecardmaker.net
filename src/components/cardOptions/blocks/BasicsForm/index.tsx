import AccordionForm from '@components/AccordionForm';
import NameInput from '@components/cardOptions/fields/NameInput';
import { FC } from 'react';

const BasicsForm: FC = () => (
  <AccordionForm id="basicsForm" header="Basics">
    <NameInput />
  </AccordionForm>
);

export default BasicsForm;
