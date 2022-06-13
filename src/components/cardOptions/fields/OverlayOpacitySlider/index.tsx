import ControlledSlider from '@components/ControlledSlider';
import useCardDebug from '@hooks/cardOptions/useCardDebug';
import { FC, useEffect, useState } from 'react';

const OverlayOpacitySlider: FC = () => {
  const { overlayOpacity, setOverlayOpacity } = useCardDebug();
  const [opacity, setOpacity] = useState(overlayOpacity);

  useEffect(() => {
    setOpacity(overlayOpacity);
  }, [overlayOpacity]);

  return (
    <ControlledSlider
      label="Overlay Opacity"
      step={1}
      min={0}
      max={100}
      value={opacity}
      onChange={(_, value) => setOpacity(value as number)}
      onChangeCommitted={(_, value) => setOverlayOpacity(value as number)}
    />
  );
};

export default OverlayOpacitySlider;
