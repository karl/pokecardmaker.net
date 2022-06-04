import FileUploader from '@components/FileUploader';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useSubtype from '@hooks/cardOptions/useSubtype';
import { FC } from 'react';

const PrevolveImgSrcFileUploader: FC = () => {
  const { subtype } = useSubtype();
  const { setPrevolveImgSrc } = useCardOptions();

  if (!subtype?.logic.hasPrevolve) return null;

  return (
    <FileUploader
      id="prevolveImg"
      label="Prevolve Image"
      onChange={setPrevolveImgSrc}
    />
  );
};

export default PrevolveImgSrcFileUploader;
