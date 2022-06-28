import { useCardOptions } from '@cardEditor/cardOptions';
import TextInput from '@components/inputs/TextInput';
import { ButtonGroup, InputAdornment } from '@mui/material';
import { FC } from 'react';
import DamageModifierButton from '../../../../atoms/DamageModifierButton';

const Move2DamageAmountInput: FC = () => {
  const { move2, setMove2 } = useCardOptions();

  if (!move2) return null;

  return (
    <TextInput
      slug="move2DamageAmount"
      label="Damage"
      value={move2.damageAmount}
      endAdornment={
        <InputAdornment position="end">
          <ButtonGroup disableElevation>
            <DamageModifierButton
              move={move2}
              setMove={setMove2}
              modifier="times"
              sx={{ borderRadius: 0 }}
            >
              ×
            </DamageModifierButton>
            <DamageModifierButton
              move={move2}
              setMove={setMove2}
              modifier="plus"
            >
              +
            </DamageModifierButton>
          </ButtonGroup>
        </InputAdornment>
      }
      onChange={damageAmount =>
        setMove2({
          ...move2,
          damageAmount,
        })
      }
    />
  );
};

export default Move2DamageAmountInput;
