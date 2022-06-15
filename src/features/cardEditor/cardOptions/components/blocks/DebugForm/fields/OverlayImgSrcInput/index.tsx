import { useCardDebug } from '@cardEditor/cardDebug';
import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';

const OverlayImgSrcInput: FC = () => {
  const { overlayImgSrc, setOverlayImgSrc } = useCardDebug();

  return (
    <TextInput
      slug="overlayImgSrc"
      label="Overlay Image Source"
      value={overlayImgSrc}
      onChange={setOverlayImgSrc}
    />
  );
};

export default OverlayImgSrcInput;
