import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const PrevolveNameInput: FC = () => {
  const { hasPrevolve } = useCardLogic();
  const { prevolveName, setPrevolveName } = useCardOptions();

  if (!hasPrevolve) return null;

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
