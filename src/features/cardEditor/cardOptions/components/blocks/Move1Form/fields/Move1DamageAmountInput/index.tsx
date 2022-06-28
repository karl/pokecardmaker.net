import { useCardOptions } from '@cardEditor/cardOptions';
import TextInput from '@components/inputs/TextInput';
import { ButtonGroup, InputAdornment } from '@mui/material';
import { FC } from 'react';
import DamageModifierButton from '../../../../atoms/DamageModifierButton';

const Move1DamageAmountInput: FC = () => {
  const { move1, setMove1 } = useCardOptions();

  if (!move1) return null;

  return (
    <TextInput
      slug="move1DamageAmount"
      label="Damage"
      value={move1.damageAmount}
      endAdornment={
        <InputAdornment position="end">
          <ButtonGroup disableElevation>
            <DamageModifierButton
              move={move1}
              setMove={setMove1}
              modifier="times"
              sx={{ borderRadius: 0 }}
            >
              ×
            </DamageModifierButton>
            <DamageModifierButton
              move={move1}
              setMove={setMove1}
              modifier="plus"
            >
              +
            </DamageModifierButton>
          </ButtonGroup>
        </InputAdornment>
      }
      onChange={damageAmount =>
        setMove1({
          ...move1,
          damageAmount,
        })
      }
    />
  );
};

export default Move1DamageAmountInput;
