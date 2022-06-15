import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardLogic } from '@cardEditor/cardLogic';

const DexStatsInput: FC = () => {
  const { hasDexStats } = useCardLogic();
  const { dexStats, setDexStats } = useCardOptions();

  if (!hasDexStats) return null;

  return (
    <TextInput
      slug="dexStats"
      label="Pokédex Stats"
      value={dexStats}
      onChange={setDexStats}
    />
  );
};

export default DexStatsInput;
