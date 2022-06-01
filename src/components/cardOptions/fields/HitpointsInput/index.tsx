import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useSupertype from '@hooks/cardOptions/useSupertype';
import { TextField } from '@mui/material';
import { ChangeEvent, FC, useCallback } from 'react';

const HitpointsInput: FC = () => {
  const { supertype } = useSupertype();
  const {
    state: { hitpoints },
    setHitpoints,
  } = useCardOptions();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.currentTarget;
      if (value === '') {
        setHitpoints(undefined);
      } else {
        setHitpoints(Math.max(0, Math.min(999, +value)));
      }
    },
    [setHitpoints],
  );

  if (!supertype.logic.hasHitpoints) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        inputMode: 'numeric',
        pattern: '[0-9]*',
      }}
      label="Hitpoints"
      value={hitpoints}
      type="number"
      onChange={handleChange}
    />
  );
};

export default HitpointsInput;
