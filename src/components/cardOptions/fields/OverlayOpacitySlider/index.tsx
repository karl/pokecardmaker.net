import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { Slider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

const OverlayOpacitySlider: FC = () => {
  const {
    debug: { overlayOpacity, setOverlayOpacity },
  } = useCardOptions();

  return (
    <Box>
      <Typography gutterBottom>Overlay Opacity</Typography>
      <Slider
        aria-label="Overlay Opacity"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={100}
        value={overlayOpacity}
        onChange={(_, value) => setOverlayOpacity(value as number)}
      />
    </Box>
  );
};

export default OverlayOpacitySlider;
