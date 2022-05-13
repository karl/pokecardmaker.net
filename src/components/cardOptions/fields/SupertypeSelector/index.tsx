import ControlledSelector from '@components/ControlledSelector';
import useSupertype from '@hooks/cardOptions/useSupertype';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

const SupertypeSelector: FC = () => {
  const { supertypes, supertype, setSupertype } = useSupertype();

  const handleChange = (event: SelectChangeEvent) => {
    setSupertype(Number(event.target.value));
  };

  return (
    <ControlledSelector
      value={supertype.id}
      displayName="Supertype"
      slug="supertype"
      onChange={handleChange}
    >
      {supertypes.map(st => (
        <MenuItem key={st.slug} value={st.id}>
          {st.displayName}
        </MenuItem>
      ))}
    </ControlledSelector>
  );
};

export default SupertypeSelector;
