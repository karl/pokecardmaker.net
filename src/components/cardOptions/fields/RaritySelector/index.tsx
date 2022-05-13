import useRarity from '@hooks/cardOptions/useRarity';
import useSubtype from '@hooks/cardOptions/useSubtype';
import useType from '@hooks/cardOptions/useType';
import useVariation from '@hooks/cardOptions/useVariation';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';

const RaritySelector: FC = () => {
  const { type } = useType();
  const { subtype } = useSubtype();
  const { variation } = useVariation();
  const { rarities, rarity, setRarity } = useRarity();

  const handleChange = (event: SelectChangeEvent) => {
    setRarity(Number(event.target.value) ?? undefined);
  };

  if (
    !type.rarities.length &&
    !subtype?.rarities.length &&
    !variation?.rarities.length
  )
    return null;

  return (
    <FormControl fullWidth>
      <InputLabel id="rarity-label" shrink>
        Rarity
      </InputLabel>
      <Select
        labelId="rarity-label"
        id="rarity"
        value={rarity?.id.toString() ?? ''}
        label="Rarity"
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value="">None</MenuItem>
        {rarities.map(
          r =>
            (type.rarities.includes(r.id) ||
              subtype?.rarities.includes(r.id) ||
              variation?.rarities.includes(r.id)) && (
              <MenuItem key={r.slug} value={r.id}>
                {r.displayName}
              </MenuItem>
            ),
        )}
      </Select>
    </FormControl>
  );
};

export default RaritySelector;
