import TextInput from '@components/inputs/TextInput';
import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';

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
