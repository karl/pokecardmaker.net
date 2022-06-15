import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardDebug from '@hooks/cardOptions/useCardDebug';
import { FC } from 'react';
import TextInput from '@components/inputs/TextInput';

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
