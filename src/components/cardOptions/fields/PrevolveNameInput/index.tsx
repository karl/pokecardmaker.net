import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useSubtype from '@hooks/cardOptions/useSubtype';
import { TextField } from '@mui/material';
import { FC } from 'react';

const PrevolveNameInput: FC = () => {
  const { subtype } = useSubtype();
  const {
    state: { prevolveName },
    setPrevolveName,
  } = useCardOptions();

  if (!subtype?.logic.hasPrevolve) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      label="Prevolve Name"
      value={prevolveName}
      onChange={e => setPrevolveName(e.currentTarget.value)}
    />
  );
};

export default PrevolveNameInput;
