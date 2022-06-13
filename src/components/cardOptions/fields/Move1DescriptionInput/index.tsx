import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const Move1DescriptionInput: FC = () => {
  const { move1, setMove1 } = useCardOptions();

  if (!move1) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      multiline
      label="Description"
      value={move1.description}
      onChange={e =>
        setMove1({
          ...move1,
          description: e.currentTarget.value,
        })
      }
    />
  );
};

export default Move1DescriptionInput;
