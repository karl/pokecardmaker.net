import ControlledSelector from '@components/ControlledSelector';
import useRotationIcon from '@hooks/cardOptions/useRotationIcon';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

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
        <MenuItem key={ri.slug} value={ri.id}>
          {ri.displayName}
        </MenuItem>
      ))}
    </ControlledSelector>
  );
};

export default RotationIconSelector;
