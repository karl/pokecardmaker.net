import { useCardLogic } from '@cardEditor/cardLogic';
import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import DexStatsInput from './fields/DexStatsInput';
import HitpointsInput from './fields/HitpointsInput';
import NameInput from './fields/NameInput';
import PrevolveImgSrcFileUploader from './fields/PrevolveImgSrcFileUploader';
import PrevolveNameInput from './fields/PrevolveNameInput';

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
