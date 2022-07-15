import { ButtonGroup, InputAdornment } from '@mui/material';
import { FC } from 'react';
import NumberInput from '@components/inputs/NumberInput';
import DamageModifierButton from './components/DamageModifierButton';
import { AttackMoveFieldProps } from '../../types';

const AttackMoveDamageAmountInput: FC<AttackMoveFieldProps> = ({
  slug,
  move,
  setMove,
}) => (
  <NumberInput
    slug={`${slug}DamageAmount`}
    label="Damage"
    value={move.damageAmount}
    max={99999}
    min={0}
    endAdornment={
      <InputAdornment position="end">
        <ButtonGroup disableElevation>
          <DamageModifierButton
            move={move}
            setMove={setMove}
            modifier="×"
            sx={{ borderRadius: 0 }}
          >
            ×
          </DamageModifierButton>
          <DamageModifierButton move={move} setMove={setMove} modifier="+">
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

export default AttackMoveDamageAmountInput;
