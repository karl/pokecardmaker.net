import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const PrevolveImgSrcInput: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const {
    debug: { prevolveImgSrc, setPrevolveImgSrc },
  } = useCardOptions();

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
