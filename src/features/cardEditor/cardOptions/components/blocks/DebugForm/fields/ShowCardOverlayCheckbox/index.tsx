import { useCardDebug } from '@cardEditor/cardDebug';
import ControlledCheckbox from '@components/inputs/ControlledCheckbox';
import { FC } from 'react';

const ShowCardOverlayCheckbox: FC = () => {
  const { showCardOverlay, setShowCardOverlay } = useCardDebug();

  return (
    <ControlledCheckbox
      slug="showCardOverlay"
      label="Show Card Overlay"
      value={showCardOverlay}
      onChange={setShowCardOverlay}
    />
  );
};

export default ShowCardOverlayCheckbox;
