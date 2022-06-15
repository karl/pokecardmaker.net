import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import { DexStatsText } from './styles';

const DexStats: FC = () => {
  const { hasDexStats } = useCardLogic();
  const { dexStats } = useCardOptions();

  if (!hasDexStats) return null;

  return <DexStatsText>{dexStats}</DexStatsText>;
};

export default DexStats;
