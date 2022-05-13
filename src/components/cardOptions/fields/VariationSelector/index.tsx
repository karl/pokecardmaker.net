import ControlledSelector from '@components/ControlledSelector';
import useRarity from '@hooks/cardOptions/useRarity';
import useSubtype from '@hooks/cardOptions/useSubtype';
import useVariation from '@hooks/cardOptions/useVariation';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

const VariationSelector: FC = () => {
  const { subtype } = useSubtype();
  const { rarity } = useRarity();
  const { variations, variation, setVariation } = useVariation();

  const handleChange = (event: SelectChangeEvent) => {
    setVariation(Number(event.target.value));
  };

  if (!subtype?.logic?.hasVariations) return null;

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
              {v.displayName}
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default VariationSelector;
