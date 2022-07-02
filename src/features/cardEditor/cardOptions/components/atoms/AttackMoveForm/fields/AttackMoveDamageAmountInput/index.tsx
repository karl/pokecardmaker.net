import { ButtonGroup, InputAdornment } from '@mui/material';
import { FC } from 'react';
import NumberInput from '@components/inputs/NumberInput';
import DamageModifierButton from './components/DamageModifierButton';
import { AttackMoveFieldProps } from '../../types';

const AttackMoveDamageAmountInput: FC<AttackMoveFieldProps> = ({
  slug,
  move,
  setMove,
}) => {
  if (!move) return null;

  return (
    <NumberInput
      slug={`${slug}DamageAmount`}
      label="Damage"
      value={move.damageAmount}
      endAdornment={
        <InputAdornment position="end">
          <ButtonGroup disableElevation>
            <DamageModifierButton
              move={move}
              setMove={setMove}
              modifier="times"
              sx={{ borderRadius: 0 }}
            >
              ×
            </DamageModifierButton>
            <DamageModifierButton move={move} setMove={setMove} modifier="plus">
              +
            </DamageModifierButton>
          </ButtonGroup>
        </InputAdornment>
      }
      onChange={damageAmount =>
        setMove({
          ...move,
          damageAmount,
        })
      }
    />
  );
};

export default AttackMoveDamageAmountInput;
