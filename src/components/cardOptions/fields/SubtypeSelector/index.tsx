import useSubtype from '@hooks/cardOptions/useSubtype';
import useType from '@hooks/cardOptions/useType';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import ControlledSelector from '@components/ControlledSelector';

const SubtypeSelector: FC = () => {
  const { type } = useType();
  const { subtypes, subtype, setSubtype } = useSubtype();

  const handleChange = (event: SelectChangeEvent) => {
    setSubtype(Number(event.target.value) ?? undefined);
  };

  if (!type.logic?.hasSubtypes) return null;

  return (
    <ControlledSelector
      value={subtype?.id}
      displayName="Subtype"
      slug="subtype"
      onChange={handleChange}
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
    </ControlledSelector>
  );
};

export default SubtypeSelector;
