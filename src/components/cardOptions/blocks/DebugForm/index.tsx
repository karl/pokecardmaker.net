import { useCardDebug } from '@cardEditor/cardDebug';
import AccordionForm from '@components/AccordionForm';
import OverlayImgSrcInput from '@components/cardOptions/fields/OverlayImgSrcInput';
import OverlayOpacitySlider from '@components/cardOptions/fields/OverlayOpacitySlider';
import PrevolveImgSrcInput from '@components/cardOptions/fields/PrevolveImgSrcInput';
import ShowCardOverlayCheckbox from '@components/cardOptions/fields/ShowCardOverlayCheckbox';
import { FC } from 'react';

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
