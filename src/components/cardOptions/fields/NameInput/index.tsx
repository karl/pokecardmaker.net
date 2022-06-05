import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const NameInput: FC = () => {
  const { hasName } = useCardLogic();
  const { name, setName } = useCardOptions();

  if (!hasName) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      label="Name"
      value={name}
      onChange={e => setName(e.currentTarget.value)}
    />
  );
};

export default NameInput;
