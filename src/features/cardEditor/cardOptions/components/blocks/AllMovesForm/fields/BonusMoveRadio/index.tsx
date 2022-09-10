import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import ControlledRadio from '@components/inputs/ControlledRadio';
import ControlledRadioGroup from '@components/inputs/ControlledRadioGroup';

import { FC, useCallback, useEffect, useMemo } from 'react';
import { BonusMoveRadioValue } from './types';

const BonusMoveRadio: FC = () => {
  const { bonusMoveRequired } = useCardLogic();
  const { hasAbility, hasMove2, setHasAbility, setHasMove2 } = useCardOptions();

  useEffect(() => {
    if (!!bonusMoveRequired && !hasAbility && !hasMove2) {
      handleChange(BonusMoveRadioValue.HasAbility);
    }
    // Don't react to `handleChange`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bonusMoveRequired, hasAbility, hasMove2]);

  const value = useMemo<BonusMoveRadioValue>(() => {
    if (hasAbility) return BonusMoveRadioValue.HasAbility;
    if (hasMove2) return BonusMoveRadioValue.HasMove2;
    return BonusMoveRadioValue.None;
  }, [hasAbility, hasMove2]);

  const handleChange = useCallback(
    (newValue: BonusMoveRadioValue) => {
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
    <ControlledRadioGroup
      slug="bonusMoveRadio"
      label="Bonus Move"
      value={value}
      onChange={handleChange}
    >
      <ControlledRadio
        value={BonusMoveRadioValue.None}
        label="None"
        disabled={!!bonusMoveRequired}
      />
      <ControlledRadio value={BonusMoveRadioValue.HasAbility} label="Ability" />
      <ControlledRadio
        value={BonusMoveRadioValue.HasMove2}
        label="Second move"
      />
    </ControlledRadioGroup>
  );
};

export default BonusMoveRadio;
