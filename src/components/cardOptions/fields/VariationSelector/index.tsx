import { useCardLogic } from '@cardEditor/cardLogic';
import { useRarity } from '@cardEditor/cardOptions/rarity';
import { useSubtype } from '@cardEditor/cardOptions/subtype';
import { useVariation } from '@cardEditor/cardOptions/variation';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

const VariationSelector: FC = () => {
  const { hasVariations } = useCardLogic();
  const { subtype } = useSubtype();
  const { rarity } = useRarity();
  const { variations, variation, setVariation } = useVariation();

  const handleChange = (event: SelectChangeEvent) => {
    setVariation(Number(event.target.value));
  };

  if (!subtype || !hasVariations) return null;

  return (
    <ControlledSelector
      value={variation?.id}
      displayName="Variation"
      slug="variation"
      onChange={handleChange}
    >
      {variations.map(
        v =>
          (v.subtypes.includes(subtype.id) ||
            v.rarities.includes(rarity?.id ?? 0)) && (
            <MenuItem key={v.slug} value={v.id}>
              <ListItemText primary={v.displayName} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default VariationSelector;
