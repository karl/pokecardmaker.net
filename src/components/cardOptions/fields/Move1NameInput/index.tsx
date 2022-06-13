import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const Move1NameInput: FC = () => {
  const { move1, setMove1 } = useCardOptions();

  if (!move1) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      label="Name"
      value={move1.name}
      onChange={e =>
        setMove1({
          ...move1,
          name: e.currentTarget.value,
        })
      }
    />
  );
};

export default Move1NameInput;
