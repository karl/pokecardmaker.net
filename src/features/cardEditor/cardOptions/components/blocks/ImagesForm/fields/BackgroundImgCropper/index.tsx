import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { useCardStyles } from '@cardEditor/cardStyles';
import ImgCropper from '@components/ImgCropper';
import FileUploader from '@components/inputs/FileUploader';
import { FC } from 'react';
import { Area } from 'react-easy-crop';

const DEFAULT_CROP: Area = { height: 0, width: 0, x: 0, y: 0 };

const BackgroundImgCropper: FC = () => {
  const { backgroundImg, setBackgroundImg } = useCardOptions();
  const { cardImgSrc } = useCardStyles();

  return (
    <>
      <FileUploader
        label="Background Image"
        slug="backgroundImg"
        onChange={src =>
          setBackgroundImg({
            croppedArea: backgroundImg?.croppedArea ?? DEFAULT_CROP,
            src,
          })
        }
      />
      {backgroundImg?.src && (
        <ImgCropper
          src={backgroundImg?.src}
          overlayImgSrc={cardImgSrc}
          overlayImgZIndex={1}
          onChange={croppedArea =>
            setBackgroundImg({
              src: backgroundImg.src,
              croppedArea,
            })
          }
        />
      )}
    </>
  );
};

export default BackgroundImgCropper;
