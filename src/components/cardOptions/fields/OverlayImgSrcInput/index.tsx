import useCardDebug from '@hooks/cardOptions/useCardDebug';
import { TextField } from '@mui/material';
import { FC } from 'react';

const OverlayImgSrcInput: FC = () => {
  const { overlayImgSrc, setOverlayImgSrc } = useCardDebug();

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

export default OverlayImgSrcInput;
