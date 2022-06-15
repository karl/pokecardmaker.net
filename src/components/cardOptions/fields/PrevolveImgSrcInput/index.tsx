import { FC } from 'react';
import TextInput from '@components/inputs/TextInput';
import { useCardDebug } from '@cardEditor/cardDebug';
import { useCardLogic } from '@cardEditor/cardLogic';

const PrevolveImgSrcInput: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const { prevolveImgSrc, setPrevolveImgSrc } = useCardDebug();

  if (!hasPrevolve) return null;

  return (
    <TextInput
      slug="prevolveImgSrc"
      label="Prevolve Image Source"
      value={prevolveImgSrc}
      onChange={setPrevolveImgSrc}
    />
  );
};

export default PrevolveImgSrcInput;
