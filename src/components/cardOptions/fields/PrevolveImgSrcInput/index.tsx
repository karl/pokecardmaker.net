import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardDebug from '@hooks/cardOptions/useCardDebug';
import { TextField } from '@mui/material';
import { FC } from 'react';

const PrevolveImgSrcInput: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const { prevolveImgSrc, setPrevolveImgSrc } = useCardDebug();

  if (!hasPrevolve) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      label="Prevolve Image Source"
      value={prevolveImgSrc}
      onChange={e => setPrevolveImgSrc(e.currentTarget.value)}
    />
  );
};

export default PrevolveImgSrcInput;
