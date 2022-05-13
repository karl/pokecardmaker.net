import useSubtype from '@hooks/cardOptions/useSubtype';
import useType from '@hooks/cardOptions/useType';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC } from 'react';

const SubtypeSelector: FC = () => {
  const { type } = useType();
  const { subtypes, subtype, setSubtype } = useSubtype();

  const handleChange = (event: SelectChangeEvent) => {
    setSubtype(Number(event.target.value) ?? undefined);
  };

  if (!type.logic?.hasSubtypes) return null;

  return (
    <FormControl fullWidth>
      <InputLabel id="subtype-label" shrink>
        Subtype
      </InputLabel>
      <Select
        labelId="subtype-label"
        id="subtype"
        value={subtype?.id.toString() ?? ''}
        label="Subtype"
        onChange={handleChange}
        displayEmpty
      >
        {!type.logic.isSubtypeRequired && <MenuItem value="">None</MenuItem>}
        {subtypes.map(
          st =>
            st.types.includes(type.id) && (
              <MenuItem key={st.slug} value={st.id}>
                {st.displayName}
              </MenuItem>
            ),
        )}
      </Select>
    </FormControl>
  );
};

export default SubtypeSelector;
