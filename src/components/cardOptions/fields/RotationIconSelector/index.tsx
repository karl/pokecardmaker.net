import { ListItemText, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { useRotationIcon } from '@cardEditor/cardOptions/rotationIcon';
import { StyledListItemIcon, StyledMenuItem } from '../styles';

const RotationIconSelector: FC = () => {
  const { rotationIcons, rotationIcon, setRotationIcon } = useRotationIcon();

  const handleChange = (event: SelectChangeEvent) => {
    setRotationIcon(Number(event.target.value));
  };

  return (
    <ControlledSelector
      value={rotationIcon?.id}
      displayName="Rotation Icon"
      slug="rotationIcon"
      onChange={handleChange}
    >
      {rotationIcons.map(ri => (
        <StyledMenuItem key={ri.slug} value={ri.id}>
          <StyledListItemIcon>
            <Image
              src={Routes.Assets.Icons.Rotation(ri.slug)}
              width={19}
              height={28}
              alt=""
            />
          </StyledListItemIcon>
          <ListItemText primary={ri.displayName} />
        </StyledMenuItem>
      ))}
    </ControlledSelector>
  );
};

export default RotationIconSelector;
