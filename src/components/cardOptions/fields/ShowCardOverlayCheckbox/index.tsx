import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';

const ShowCardOverlayCheckbox: FC = () => {
  const {
    debug: { showCardOverlay, setShowCardOverlay },
  } = useCardOptions();

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
