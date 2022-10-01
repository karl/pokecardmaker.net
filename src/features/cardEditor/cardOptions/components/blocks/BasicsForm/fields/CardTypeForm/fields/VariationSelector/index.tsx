import { useCardLogic } from '@cardEditor/cardLogic';
import { sunAndMoon, useBaseSet } from '@cardEditor/cardOptions/baseSet';
import NewFeatureHelpText from '@cardEditor/cardOptions/components/atoms/NewFeatureHelpText';
import { basic, useSubtype } from '@cardEditor/cardOptions/subtype';
import { useType } from '@cardEditor/cardOptions/type';
import { prismStar, useVariation } from '@cardEditor/cardOptions/variation';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC, useCallback } from 'react';

const VariationSelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { hasVariations, isVariationRequired } = useCardLogic();
  const { baseSet } = useBaseSet();
  const { type } = useType();
  const { subtype } = useSubtype();
  const { variations, variation, setVariation, variationIsAvailable } =
    useVariation();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setVariation(Number(event.target.value));
      trackCardCreatorEvent(AnalyticsEvent.VariationChange);
    },
    [setVariation, trackCardCreatorEvent],
  );

  if (!hasVariations) return null;

  return (
    <ControlledSelector
      value={variation?.id}
      displayName="Variation"
      slug="variation"
      onChange={handleChange}
      helpText={
        baseSet.id === sunAndMoon.id &&
        (subtype?.id === basic.id ||
          prismStar.baseSetDependencies[sunAndMoon.id].types?.includes(
            type.id,
          )) ? (
          <NewFeatureHelpText>
            Try the new{' '}
            <b>
              <i>Prism Star</i>
            </b>{' '}
            variation!
          </NewFeatureHelpText>
        ) : undefined
      }
    >
      {!isVariationRequired && (
        <MenuItem value="">
          <ListItemText primary="None" />
        </MenuItem>
      )}
      {variations.map(
        v =>
          variationIsAvailable(v) && (
            <MenuItem key={v.slug} value={v.id}>
              <ListItemText primary={v.displayName} secondary={v.subText} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default VariationSelector;
