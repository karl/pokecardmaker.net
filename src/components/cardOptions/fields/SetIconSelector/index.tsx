import ControlledSelector from '@components/ControlledSelector';
import useSetIcon from '@hooks/cardOptions/useSetIcon';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

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
        <MenuItem key={si.slug} value={si.id}>
          {si.displayName}
        </MenuItem>
      ))}
    </ControlledSelector>
  );
};

export default SetIconSelector;
