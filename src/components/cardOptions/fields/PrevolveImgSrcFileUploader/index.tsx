import FileUploader from '@components/inputs/FileUploader';
import useCardLogic from 'src/features/cardEditor/cardLogic/useCardLogic';
import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import { FC } from 'react';

const PrevolveImgSrcFileUploader: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const { setPrevolveImgSrc } = useCardOptions();

  if (!hasPrevolve) return null;

  return (
    <FileUploader
      slug="prevolveImg"
      label="Prevolve Image"
      onChange={setPrevolveImgSrc}
    />
  );
};

export default PrevolveImgSrcFileUploader;
