import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
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
  const { baseSet } = useBaseSet();
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
    !type.baseSetDependencies[baseSet.id]?.rarities.length &&
    (variation && subtype
      ? !variation.baseSetDependencies[baseSet.id]?.subtypes[subtype.id]
          ?.rarities.length
      : !subtype ||
        !subtype.baseSetDependencies[baseSet.id]?.find(r => r.type === type.id)
          ?.rarities.length)
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
          (type.baseSetDependencies[baseSet.id]?.rarities.includes(r.id) ||
            (variation && subtype
              ? variation?.baseSetDependencies[baseSet.id]?.subtypes[
                  subtype.id
                ]?.rarities.includes(r.id)
              : subtype?.baseSetDependencies[baseSet.id]
                  ?.find(rl => rl.type === type.id)
                  ?.rarities.includes(r.id))) && (
            <MenuItem key={r.slug} value={r.id}>
              <ListItemText primary={r.displayName} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default RaritySelector;
