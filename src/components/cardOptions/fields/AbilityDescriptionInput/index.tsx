import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

// TODO: Make textarea
const AbilityDescriptionInput: FC = () => {
  const { ability, setAbility } = useCardOptions();

  if (!ability) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      label="Description"
      value={ability.description}
      onChange={e =>
        setAbility({
          ...ability,
          description: e.currentTarget.value,
        })
      }
    />
  );
};

export default AbilityDescriptionInput;
