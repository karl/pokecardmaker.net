import { useRarity } from '@cardEditor/cardOptions/rarity';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC, useCallback } from 'react';

const RaritySelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { rarities, rarity, anyRarityAvailable, setRarity, rarityIsAvailable } =
    useRarity();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setRarity(Number(event.target.value) ?? undefined);
      trackCardCreatorEvent(AnalyticsEvent.RarityChange);
    },
    [setRarity, trackCardCreatorEvent],
  );

  if (!anyRarityAvailable) return null;

  return (
    <ControlledSelector
      value={rarity?.id}
      displayName="Rarity"
      slug="rarity"
      onChange={handleChange}
    >
      <MenuItem value="">
        <ListItemText primary="None" />
      </MenuItem>
      {rarities.map(
        r =>
          rarityIsAvailable(r.id) && (
            <MenuItem key={r.slug} value={r.id}>
              <ListItemText primary={r.displayName} secondary={r.subText} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default RaritySelector;
