import AccordionForm from '@components/AccordionForm';
import OverlayImgSrcFileUploader from '@components/cardOptions/fields/OverlayImgSrcFileUploader';
import OverlayOpacitySlider from '@components/cardOptions/fields/OverlayOpacitySlider';
import ShowCardOverlayCheckbox from '@components/cardOptions/fields/ShowCardOverlayCheckbox';
import { FC } from 'react';

const DebugForm: FC = () => {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <AccordionForm id="debugForm" header="Debug">
      <ShowCardOverlayCheckbox />
      <OverlayOpacitySlider />
      <OverlayImgSrcFileUploader />
    </AccordionForm>
  );
};

export default DebugForm;
