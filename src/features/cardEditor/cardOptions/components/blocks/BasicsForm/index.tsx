import { useCardLogic } from '@cardEditor/cardLogic';
import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import DexStatsInput from './fields/DexStatsInput';
import HitpointsInput from './fields/HitpointsInput';
import NameInput from './fields/NameInput';
import PrevolveImgSrcFileUploader from './fields/PrevolveImgSrcFileUploader';
import PrevolveNameInput from './fields/PrevolveNameInput';
import SubnameInput from './fields/SubnameInput';

const BasicsForm: FC = () => {
  const { hasName, hasDescription } = useCardLogic();

  if (!hasName && !hasDescription) return null;

  return (
    <AccordionForm slug="basicsForm" header="Basics">
      <NameInput />
      <SubnameInput />
      <HitpointsInput />
      <PrevolveNameInput />
      <PrevolveImgSrcFileUploader />
      <DexStatsInput />
    </AccordionForm>
  );
};

export default BasicsForm;
