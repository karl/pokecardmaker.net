import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const Move2DescriptionInput: FC = () => {
  const { move2, setMove2 } = useCardOptions();

  if (!move2) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      multiline
      label="Description"
      value={move2.description}
      onChange={e =>
        setMove2({
          ...move2,
          description: e.currentTarget.value,
        })
      }
    />
  );
};

export default Move2DescriptionInput;
