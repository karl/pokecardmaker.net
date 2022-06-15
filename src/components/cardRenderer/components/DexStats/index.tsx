import useCardLogic from 'src/features/cardEditor/cardLogic/useCardLogic';
import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import { FC } from 'react';
import { DexStatsText } from './styles';

const DexStats: FC = () => {
  const { hasDexStats } = useCardLogic();
  const { dexStats } = useCardOptions();

  if (!hasDexStats) return null;

  return <DexStatsText>{dexStats}</DexStatsText>;
};

export default DexStats;
