import useCardDebug from '@hooks/cardOptions/useCardDebug';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';

const ShowCardOverlayCheckbox: FC = () => {
  const { showCardOverlay, setShowCardOverlay } = useCardDebug();

  return (
    <FormControlLabel
      label="Show Card Overlay"
      control={
        <Checkbox
          checked={showCardOverlay}
          onChange={e => setShowCardOverlay(e.currentTarget.checked)}
        />
      }
    />
  );
};

export default ShowCardOverlayCheckbox;
