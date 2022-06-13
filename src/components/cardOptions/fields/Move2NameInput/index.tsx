import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const Move2NameInput: FC = () => {
  const { move2, setMove2 } = useCardOptions();

  if (!move2) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      label="Name"
      value={move2.name}
      onChange={e =>
        setMove2({
          ...move2,
          name: e.currentTarget.value,
        })
      }
    />
  );
};

export default Move2NameInput;
