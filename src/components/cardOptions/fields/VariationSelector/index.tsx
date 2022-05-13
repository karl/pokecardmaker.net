import useRarity from '@hooks/cardOptions/useRarity';
import useSubtype from '@hooks/cardOptions/useSubtype';
import useVariation from '@hooks/cardOptions/useVariation';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
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
    <FormControl fullWidth>
      <InputLabel id="variation-label" shrink>
        Variation
      </InputLabel>
      <Select
        labelId="variation-label"
        id="variation"
        value={variation?.id.toString() ?? ''}
        label="Variation"
        onChange={handleChange}
        displayEmpty
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
      </Select>
    </FormControl>
  );
};

export default VariationSelector;
