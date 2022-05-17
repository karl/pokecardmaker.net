import ControlledSelector from '@components/ControlledSelector';
import useBaseSet from '@hooks/cardOptions/useBaseSet';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

const BaseSetSelector: FC = () => {
  const { baseSets, baseSet, setBaseSet } = useBaseSet();

  const handleChange = (event: SelectChangeEvent) => {
    setBaseSet(Number(event.target.value));
  };

  return (
    <ControlledSelector
      value={baseSet.id}
      displayName="Base set"
      slug="baseSet"
      onChange={handleChange}
    >
      {baseSets.map(bs => (
        <MenuItem key={bs.slug} value={bs.id}>
          <ListItemText primary={bs.displayName} />
        </MenuItem>
      ))}
    </ControlledSelector>
  );
};

export default BaseSetSelector;
