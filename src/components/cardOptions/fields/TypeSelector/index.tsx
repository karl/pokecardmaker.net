import useSupertype from '@hooks/cardOptions/useSupertype';
import useType from '@hooks/cardOptions/useType';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';

const TypeSelector: FC = () => {
  const { supertype } = useSupertype();
  const { types, type, setType } = useType();

  const handleChange = (event: SelectChangeEvent) => {
    setType(Number(event.target.value));
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="type-label">Type</InputLabel>
      <Select
        labelId="type-label"
        id="type"
        value={type.id.toString()}
        label="Type"
        onChange={handleChange}
      >
        {types.map(
          t =>
            t.supertypes.includes(supertype.id) && (
              <MenuItem key={t.slug} value={t.id}>
                {t.displayName}
              </MenuItem>
            ),
        )}
      </Select>
    </FormControl>
  );
};

export default TypeSelector;
