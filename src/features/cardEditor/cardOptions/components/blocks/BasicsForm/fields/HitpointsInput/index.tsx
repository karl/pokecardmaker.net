import NumberInput from '@components/inputs/NumberInput';
import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardLogic } from '@cardEditor/cardLogic';

const HitpointsInput: FC = () => {
  const { hasHitpoints } = useCardLogic();
  const { hitpoints, setHitpoints } = useCardOptions();

  if (!hasHitpoints) return null;

  return (
    <NumberInput
      slug="hitpoints"
      label="Hitpoints"
      value={hitpoints}
      min={0}
      max={999}
      onChange={setHitpoints}
    />
  );
};

export default HitpointsInput;
