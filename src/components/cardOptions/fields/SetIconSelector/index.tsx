import useSetIcon from '@hooks/cardOptions/useSetIcon';
import { ListItemText, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import {
  StyledListItemIcon,
  StyledMenuItem,
} from '@components/cardOptions/fields/styles';
import ControlledSelector from '@components/inputs/ControlledSelector';

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
        <StyledMenuItem key={si.slug} value={si.id}>
          <StyledListItemIcon>
            <Image
              src={Routes.Assets.Icons.Set(si.slug)}
              width={36}
              height={36}
              alt=""
            />
          </StyledListItemIcon>
          <ListItemText primary={si.displayName} />
        </StyledMenuItem>
      ))}
    </ControlledSelector>
  );
};

export default SetIconSelector;
