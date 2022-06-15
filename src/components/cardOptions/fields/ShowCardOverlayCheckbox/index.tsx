import useCardDebug from 'src/features/cardEditor/debug/hooks/useCardDebug';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';

// TODO: Make generic checkbox component
const ShowCardOverlayCheckbox: FC = () => {
  const { showCardOverlay, setShowCardOverlay } = useCardDebug();

  return (
    <FormControlLabel
      sx={{ px: 2 }}
      label="Show Card Overlay"
      control={
        <Checkbox
          checked={showCardOverlay}
          onChange={e => setShowCardOverlay(e.currentTarget.checked)}
          size="small"
        />
      }
    />
  );
};

export default ShowCardOverlayCheckbox;
