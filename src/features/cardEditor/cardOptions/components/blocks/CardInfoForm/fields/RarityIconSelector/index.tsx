import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { useRarityIcon } from '@cardEditor/cardOptions/rarityIcon';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';

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
        <SelectorMenuItem key={ri.slug} value={ri.id}>
          <SelectorListItemIcon>
            <Image
              src={Routes.Assets.Icons.Rarity(ri.slug)}
              height={13}
              width={13}
              alt=""
            />
          </SelectorListItemIcon>
          <ListItemText primary={ri.displayName} secondary={ri.subText} />
        </SelectorMenuItem>
      ))}
    </ControlledSelector>
  );
};

export default RarityIconSelector;
