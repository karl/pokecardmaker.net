import { useCardDebug } from '@cardEditor/cardDebug';
import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import OverlayImgSrcInput from './fields/OverlayImgSrcInput';
import OverlayOpacitySlider from './fields/OverlayOpacitySlider';
import PrevolveImgSrcInput from './fields/PrevolveImgSrcInput';
import ShowCardOverlayCheckbox from './fields/ShowCardOverlayCheckbox';

const DebugForm: FC = () => {
  const { showDebug } = useCardDebug();

  if (!showDebug) return null;

  return (
    <AccordionForm id="debugForm" header="Debug">
      <ShowCardOverlayCheckbox />
      <OverlayOpacitySlider />
      <OverlayImgSrcInput />
      <PrevolveImgSrcInput />
    </AccordionForm>
  );
};

export default DebugForm;
