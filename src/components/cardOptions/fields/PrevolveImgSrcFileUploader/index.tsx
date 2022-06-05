import FileUploader from '@components/FileUploader';
import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

const PrevolveImgSrcFileUploader: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const { setPrevolveImgSrc } = useCardOptions();

  if (!hasPrevolve) return null;

  return (
    <FileUploader
      id="prevolveImg"
      label="Prevolve Image"
      onChange={setPrevolveImgSrc}
    />
  );
};

export default PrevolveImgSrcFileUploader;
