import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { TextField } from '@mui/material';
import { FC } from 'react';

const DexStatsInput: FC = () => {
  const { hasDexStats } = useCardLogic();
  const { dexStats, setDexStats } = useCardOptions();

  if (!hasDexStats) return null;

  return (
    <TextField
      InputLabelProps={{
        shrink: true,
      }}
      label="Pokédex Stats"
      value={dexStats}
      onChange={e => setDexStats(e.currentTarget.value)}
    />
  );
};

export default DexStatsInput;
