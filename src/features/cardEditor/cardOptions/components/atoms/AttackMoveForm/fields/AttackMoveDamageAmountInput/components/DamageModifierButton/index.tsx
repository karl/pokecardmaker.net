import { DamageModifier } from '@cardEditor';
import { Button } from '@mui/material';
import { FC, useCallback } from 'react';
import { DamageModifierButtonProps } from './types';

const DamageModifierButton: FC<DamageModifierButtonProps> = ({
  modifier,
  move,
  setMove,
  sx,
  children,
}) => {
  const onDamageModifierChange = useCallback(
    (damageModifier: DamageModifier) => {
      setMove({
        ...move,
        damageModifier:
          damageModifier === move.damageModifier ? undefined : damageModifier,
      });
    },
    [move, setMove],
  );

  return (
    <Button
      sx={{
        fontSize: '0.9rem',
        borderColor: 'transparent',
        borderLeftColor: 'rgba(0, 0, 0, 0.25)',
        ...sx,
      }}
      variant={move?.damageModifier === modifier ? 'contained' : 'outlined'}
      onClick={() => onDamageModifierChange(modifier)}
    >
      {children}
    </Button>
  );
};

export default DamageModifierButton;
