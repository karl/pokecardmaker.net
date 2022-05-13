import ControlledSelector from '@components/ControlledSelector';
import useRarityIcon from '@hooks/cardOptions/useRarityIcon';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

const RarityIconSelector: FC = () => {
  const { rarityIcons, rarityIcon, setRarityIcon } = useRarityIcon();

  const handleChange = (event: SelectChangeEvent) => {
    setRarityIcon(Number(event.target.value));
  };

  return (
    <ControlledSelector
      value={rarityIcon?.id}
      displayName="Rarity Icon"
      slug="rarityIcon"
      onChange={handleChange}
    >
      <MenuItem value="">None</MenuItem>
      {rarityIcons.map(ri => (
        <MenuItem key={ri.slug} value={ri.id}>
          {ri.displayName}
        </MenuItem>
      ))}
    </ControlledSelector>
  );
};

export default RarityIconSelector;
