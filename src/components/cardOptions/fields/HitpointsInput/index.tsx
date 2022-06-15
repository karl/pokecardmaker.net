import NumberInput from '@components/inputs/NumberInput';
import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC, useCallback } from 'react';

const HitpointsInput: FC = () => {
  const { hasHitpoints } = useCardLogic();
  const { hitpoints, setHitpoints } = useCardOptions();

  const handleChange = useCallback(
    (value: number | '') => {
      if (value === '') {
        setHitpoints(undefined);
      } else {
        setHitpoints(Math.max(0, Math.min(999, +value)));
      }
    },
    [setHitpoints],
  );

  if (!hasHitpoints) return null;

  return (
    <NumberInput
      slug="hitpoints"
      label="Hitpoints"
      value={hitpoints}
      onChange={handleChange}
    />
  );
};

export default HitpointsInput;
