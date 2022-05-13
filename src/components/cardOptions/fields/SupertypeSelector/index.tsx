import useSupertype from '@hooks/cardOptions/useSupertype';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';

const SupertypeSelector: FC = () => {
  const { supertypes, supertype, setSupertype } = useSupertype();

  const handleChange = (event: SelectChangeEvent) => {
    setSupertype(Number(event.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="supertype-label">Supertype</InputLabel>
      <Select
        labelId="supertype-label"
        id="supertype"
        value={supertype.id.toString()}
        label="Supertype"
        onChange={handleChange}
      >
        {supertypes.map(st => (
          <MenuItem key={st.slug} value={st.id}>
            {st.displayName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SupertypeSelector;
