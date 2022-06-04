import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useSubtype from '@hooks/cardOptions/useSubtype';
import { TextField } from '@mui/material';
import { FC } from 'react';

const PrevolveImgSrcInput: FC = () => {
  const { subtype } = useSubtype();
  const {
    debug: { prevolveImgSrc, setPrevolveImgSrc },
  } = useCardOptions();

  if (!subtype?.logic.hasPrevolve) return null;

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