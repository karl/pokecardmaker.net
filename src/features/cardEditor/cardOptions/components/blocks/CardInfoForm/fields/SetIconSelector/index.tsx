import { ListItemText, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { useSetIcon } from '@cardEditor/cardOptions/setIcon';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';

// TODO: Make this image customizable
const SetIconSelector: FC = () => {
  const { setIcons, setIcon, setSetIcon } = useSetIcon();

  const handleChange = (event: SelectChangeEvent) => {
    setSetIcon(Number(event.target.value));
  };

  return (
    <ControlledSelector
      value={setIcon?.id}
      displayName="Set Icon"
      slug="setIcon"
      onChange={handleChange}
    >
      {setIcons.map(si => (
        <SelectorMenuItem key={si.slug} value={si.id}>
          <SelectorListItemIcon>
            <Image
              src={Routes.Assets.Icons.Set(si.slug)}
              width={36}
              height={36}
              alt=""
            />
          </SelectorListItemIcon>
          <ListItemText primary={si.displayName} />
        </SelectorMenuItem>
      ))}
    </ControlledSelector>
  );
};

export default SetIconSelector;
