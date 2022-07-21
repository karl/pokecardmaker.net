import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import ImgCropper from '@components/ImgCropper';
import FileUploader from '@components/inputs/FileUploader';
import { FC } from 'react';
import { Area } from 'react-easy-crop';

const DEFAULT_CROP: Area = { height: 0, width: 0, x: 0, y: 0 };

const ImgLayer1Cropper: FC = () => {
  const { imgLayer1, setImgLayer1 } = useCardOptions();

  return (
    <>
      <FileUploader
        label="Layer 1"
        slug="imgLayer1"
        onChange={src =>
          setImgLayer1({
            croppedArea: imgLayer1?.croppedArea ?? DEFAULT_CROP,
            src,
          })
        }
      />
      {imgLayer1?.src && (
        <ImgCropper
          src={imgLayer1?.src}
          onChange={croppedArea =>
            setImgLayer1({
              src: imgLayer1.src,
              croppedArea,
            })
          }
        />
      )}
    </>
  );
};

export default ImgLayer1Cropper;
