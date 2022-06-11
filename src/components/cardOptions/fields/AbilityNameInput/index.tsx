import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const AbilityNameInput: FC = () => {
  const { ability, setAbility } = useCardOptions();

  if (!ability) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      label="Name"
      value={ability.name}
      onChange={e =>
        setAbility({
          ...ability,
          name: e.currentTarget.value,
        })
      }
    />
  );
};

export default AbilityNameInput;
