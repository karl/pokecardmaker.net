import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import ImgLayer1Cropper from './fields/ImgLayer1Cropper';

// TODO: Add tooltip explaining layers
const ImagesForm: FC = () => {
  return (
    <AccordionForm slug="imagesForm" header="Images">
      <ImgLayer1Cropper />
    </AccordionForm>
  );
};

export default ImagesForm;
