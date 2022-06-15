import { useRarity } from '@cardEditor/cardOptions/rarity';
import { useSubtype } from '@cardEditor/cardOptions/subtype';
import { useType } from '@cardEditor/cardOptions/type';
import { useVariation } from '@cardEditor/cardOptions/variation';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
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
    (!subtype || !subtype?.rarities.length) &&
    !variation?.rarities.length
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
            subtype?.rarities.includes(r.id) ||
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
