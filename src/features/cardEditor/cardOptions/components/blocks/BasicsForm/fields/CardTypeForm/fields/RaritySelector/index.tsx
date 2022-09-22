import { useRarity } from '@cardEditor/cardOptions/rarity';
import { useSubtype } from '@cardEditor/cardOptions/subtype';
import { useType } from '@cardEditor/cardOptions/type';
import { useVariation } from '@cardEditor/cardOptions/variation';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC, useCallback } from 'react';

const RaritySelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { type } = useType();
  const { subtype } = useSubtype();
  const { variation } = useVariation();
  const { rarities, rarity, setRarity } = useRarity();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setRarity(Number(event.target.value) ?? undefined);
      trackCardCreatorEvent(AnalyticsEvent.RarityChange);
    },
    [setRarity, trackCardCreatorEvent],
  );

  if (
    !type.rarities.length &&
    (variation
      ? !variation?.rarities.length
      : !subtype ||
        !subtype.relations.find(r => r.type === type.id)?.rarities.length)
  )
    return null;

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
          (type.rarities.includes(r.id) ||
            subtype?.relations
              .find(rl => rl.type === type.id)
              ?.rarities.includes(r.id) ||
            variation?.rarities.includes(r.id)) && (
            <MenuItem key={r.slug} value={r.id}>
              <ListItemText primary={r.displayName} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default RaritySelector;
