import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const AbilityDescriptionInput: FC = () => {
  const { ability, setAbility } = useCardOptions();

  if (!ability) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      multiline
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
