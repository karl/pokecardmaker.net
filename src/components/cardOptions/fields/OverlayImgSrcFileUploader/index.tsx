import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const OverlayImgSrcFileUploader: FC = () => {
  const {
    debug: { overlayImgSrc, setOverlayImgSrc },
  } = useCardOptions();

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      label="Overlay Image Source"
      value={overlayImgSrc}
      onChange={e => setOverlayImgSrc(e.currentTarget.value)}
    />
  );
};

export default OverlayImgSrcFileUploader;
