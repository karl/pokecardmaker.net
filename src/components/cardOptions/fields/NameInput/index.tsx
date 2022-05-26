import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useType from '@hooks/cardOptions/useType';
import { TextField } from '@mui/material';
import { FC } from 'react';

const NameInput: FC = () => {
  const { type } = useType();
  const {
    state: { name },
    setName,
  } = useCardOptions();

  if (!type.logic.hasName) return null;

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
