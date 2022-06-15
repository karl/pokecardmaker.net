import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { ChangeEvent, FC, useCallback, useMemo } from 'react';
import { BonusMoveRadioValue } from './types';

// TODO: Make generic radio input
const BonusMoveRadio: FC = () => {
  const { hasAbility, hasMove2, setHasAbility, setHasMove2 } = useCardOptions();

  const value = useMemo<BonusMoveRadioValue>(() => {
    if (hasAbility) return BonusMoveRadioValue.HasAbility;
    if (hasMove2) return BonusMoveRadioValue.HasMove2;
    return BonusMoveRadioValue.None;
  }, [hasAbility, hasMove2]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value as BonusMoveRadioValue;
      switch (newValue) {
        case BonusMoveRadioValue.HasAbility:
          setHasAbility(true);
          setHasMove2(false);
          break;
        case BonusMoveRadioValue.HasMove2:
          setHasAbility(false);
          setHasMove2(true);
          break;
        default:
          setHasAbility(false);
          setHasMove2(false);
      }
    },
    [setHasAbility, setHasMove2],
  );

  return (
    <FormControl sx={{ px: 2 }}>
      <FormLabel id="bonusMoveRadioLabel">Bonus Move</FormLabel>
      <RadioGroup
        name="bonusMoveRadio"
        aria-labelledby="bonusMoveRadioLabel"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value={BonusMoveRadioValue.None}
          label="None"
          control={<Radio size="small" />}
        />
        <FormControlLabel
          value={BonusMoveRadioValue.HasAbility}
          label="Ability"
          control={<Radio size="small" />}
        />
        <FormControlLabel
          value={BonusMoveRadioValue.HasMove2}
          label="Second move"
          control={<Radio size="small" />}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default BonusMoveRadio;
