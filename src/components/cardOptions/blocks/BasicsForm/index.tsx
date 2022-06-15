import AccordionForm from '@components/AccordionForm';
import DexStatsInput from '@components/cardOptions/fields/DexStatsInput';
import HitpointsInput from '@components/cardOptions/fields/HitpointsInput';
import NameInput from '@components/cardOptions/fields/NameInput';
import PrevolveImgSrcFileUploader from '@components/cardOptions/fields/PrevolveImgSrcFileUploader';
import PrevolveNameInput from '@components/cardOptions/fields/PrevolveNameInput';
import useCardLogic from 'src/features/cardEditor/cardLogic/useCardLogic';
import { FC } from 'react';

const BasicsForm: FC = () => {
  const { hasName } = useCardLogic();

  if (!hasName) return null;

  return (
    <AccordionForm id="basicsForm" header="Basics">
      <NameInput />
      <HitpointsInput />
      <PrevolveNameInput />
      <PrevolveImgSrcFileUploader />
      <DexStatsInput />
    </AccordionForm>
  );
};

export default BasicsForm;
