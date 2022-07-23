import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { useCardStyles } from '@cardEditor/cardStyles';
import ImgCropper from '@components/ImgCropper';
import FileUploader from '@components/inputs/FileUploader';
import { FC } from 'react';
import { Area } from 'react-easy-crop';

const DEFAULT_CROP: Area = { height: 0, width: 0, x: 0, y: 0 };

const ImgLayer2Cropper: FC = () => {
  const { imgLayer2, setImgLayer2 } = useCardOptions();
  const { cardImgSrc } = useCardStyles();

  return (
    <>
      <FileUploader
        label="Layer 2"
        slug="imgLayer2"
        onChange={src =>
          setImgLayer2({
            croppedArea: imgLayer2?.croppedArea ?? DEFAULT_CROP,
            src,
          })
        }
      />
      {imgLayer2?.src && (
        <ImgCropper
          src={imgLayer2?.src}
          overlayImgSrc={cardImgSrc}
          overlayImgZIndex={0}
          onChange={croppedArea =>
            setImgLayer2({
              src: imgLayer2.src,
              croppedArea,
            })
          }
        />
      )}
    </>
  );
};

export default ImgLayer2Cropper;
