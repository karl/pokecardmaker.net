import { useCardLogic } from '@cardEditor/cardLogic';
import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import { useRarity } from '@cardEditor/cardOptions/rarity';
import { useSubtype } from '@cardEditor/cardOptions/subtype';
import { useVariation } from '@cardEditor/cardOptions/variation';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC, useCallback } from 'react';

const VariationSelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { hasVariations, isVariationRequired } = useCardLogic();
  const { baseSet } = useBaseSet();
  const { subtype } = useSubtype();
  const { rarity } = useRarity();
  const { variations, variation, setVariation } = useVariation();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setVariation(Number(event.target.value));
      trackCardCreatorEvent(AnalyticsEvent.VariationChange);
    },
    [setVariation, trackCardCreatorEvent],
  );

  if (!subtype || !hasVariations) return null;

  return (
    <ControlledSelector
      value={variation?.id}
      displayName="Variation"
      slug="variation"
      onChange={handleChange}
    >
      {!isVariationRequired && (
        <MenuItem value="">
          <ListItemText primary="None" />
        </MenuItem>
      )}
      {variations.map(
        v =>
          (v.baseSetDependencies[baseSet.id]?.subtypes.includes(subtype.id) ||
            v.baseSetDependencies[baseSet.id]?.rarities.includes(
              rarity?.id ?? 0,
            )) && (
            <MenuItem key={v.slug} value={v.id}>
              <ListItemText primary={v.displayName} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default VariationSelector;
