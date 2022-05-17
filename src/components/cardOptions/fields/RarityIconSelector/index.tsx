import ControlledSelector from '@components/ControlledSelector';
import useRarityIcon from '@hooks/cardOptions/useRarityIcon';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import { StyledListItemIcon, StyledMenuItem } from '../styles';

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
      <MenuItem value="">
        <ListItemText primary="None" />
      </MenuItem>
      {rarityIcons.map(ri => (
        <StyledMenuItem key={ri.slug} value={ri.id}>
          <StyledListItemIcon>
            <Image
              src={Routes.Assets.Icons.Rarity(ri.slug)}
              height={13}
              width={13}
              alt=""
            />
          </StyledListItemIcon>
          <ListItemText primary={ri.displayName} />
        </StyledMenuItem>
      ))}
    </ControlledSelector>
  );
};

export default RarityIconSelector;
