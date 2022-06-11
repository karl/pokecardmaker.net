import useCardDebug from '@hooks/cardOptions/useCardDebug';
import { FormControlLabel, Slider } from '@mui/material';
import { FC, useEffect, useState } from 'react';

const OverlayOpacitySlider: FC = () => {
  const { overlayOpacity, setOverlayOpacity } = useCardDebug();
  const [opacity, setOpacity] = useState(overlayOpacity);

  useEffect(() => {
    setOpacity(overlayOpacity);
  }, [overlayOpacity]);

  // TODO: Make styled component
  return (
    <FormControlLabel
      sx={{
        px: 2,
        mx: 0,
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'flex-start',
      }}
      label="Overlay Opacity"
      control={
        <Slider
          aria-label="Overlay Opacity"
          valueLabelDisplay="auto"
          step={1}
          min={0}
          max={100}
          value={opacity}
          onChange={(_, value) => setOpacity(value as number)}
          onChangeCommitted={(_, value) => setOverlayOpacity(value as number)}
        />
      }
    />
  );
};

export default OverlayOpacitySlider;
