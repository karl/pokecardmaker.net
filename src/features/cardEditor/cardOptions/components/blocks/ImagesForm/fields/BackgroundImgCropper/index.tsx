import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { Typography } from '@mui/material';
import { FC } from 'react';
import CardImgCropper from '../../components/CardImgCropper';

const BackgroundImgCropper: FC = () => {
  const { backgroundImg, setBackgroundImg } = useCardOptions();

  return (
    <CardImgCropper
      label="Background Image"
      slug="backgroundImg"
      img={backgroundImg}
      setImg={setBackgroundImg}
      overlayZIndex={1}
      tooltipContent={
        <>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </>
      }
    />
  );
};

export default BackgroundImgCropper;
