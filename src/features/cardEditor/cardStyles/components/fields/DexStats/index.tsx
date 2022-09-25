import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { DexStatsText } from './styles';

const DexStats: FC = () => {
  const { hasDexStats } = useCardLogic();
  const { dexStats } = useCardOptions();
  const {
    dexStatsTextColor,
    dexStatsOutline,
    positions: { dexStats: placement },
  } = useCardStyles();

  if (!hasDexStats) return null;

  return (
    <DexStatsText
      color={dexStatsTextColor}
      outline={dexStatsOutline}
      {...placement}
    >
      {dexStats}
    </DexStatsText>
  );
};

export default DexStats;
