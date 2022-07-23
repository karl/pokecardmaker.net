import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import BackgroundImgCropper from './fields/BackgroundImgCropper';
import ImgLayer1Cropper from './fields/ImgLayer1Cropper';
import ImgLayer2Cropper from './fields/ImgLayer2Cropper';

// TODO: Add tooltip explaining layers
const ImagesForm: FC = () => {
  return (
    <AccordionForm slug="imagesForm" header="Images">
      <BackgroundImgCropper />
      <ImgLayer1Cropper />
      <ImgLayer2Cropper />
    </AccordionForm>
  );
};

export default ImagesForm;
