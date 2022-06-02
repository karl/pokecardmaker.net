import AccordionForm from '@components/AccordionForm';
import HitpointsInput from '@components/cardOptions/fields/HitpointsInput';
import NameInput from '@components/cardOptions/fields/NameInput';
import PrevolveImgSrcFileUploader from '@components/cardOptions/fields/PrevolveImgSrcFileUploader';
import PrevolveNameInput from '@components/cardOptions/fields/PrevolveNameInput';
import useType from '@hooks/cardOptions/useType';
import { FC } from 'react';

const BasicsForm: FC = () => {
  const { type } = useType();

  if (!type.logic.hasName) return null;

  return (
    <AccordionForm id="basicsForm" header="Basics">
      <NameInput />
      <HitpointsInput />
      <PrevolveNameInput />
      <PrevolveImgSrcFileUploader />
    </AccordionForm>
  );
};

export default BasicsForm;
