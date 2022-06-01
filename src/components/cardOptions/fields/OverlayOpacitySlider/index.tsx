import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect, useState } from 'react';

const OverlayOpacitySlider: FC = () => {
  const {
    debug: { overlayOpacity, setOverlayOpacity },
  } = useCardOptions();
  const [opacity, setOpacity] = useState(overlayOpacity);

  useEffect(() => {
    setOpacity(overlayOpacity);
  }, [overlayOpacity]);

  return (
    <Box>
      <Typography gutterBottom>Overlay Opacity</Typography>
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
    </Box>
  );
};

export default OverlayOpacitySlider;
