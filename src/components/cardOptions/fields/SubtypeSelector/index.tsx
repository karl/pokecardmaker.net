import useSubtype from '@hooks/cardOptions/useSubtype';
import useType from '@hooks/cardOptions/useType';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import useCardLogic from '@hooks/cardOptions/useCardLogic';
import ControlledSelector from '@components/inputs/ControlledSelector';

const SubtypeSelector: FC = () => {
  const { type } = useType();
  const { hasSubtypes, isSubtypeRequired } = useCardLogic();
  const { subtypes, subtype, setSubtype } = useSubtype();

  const handleChange = (event: SelectChangeEvent) => {
    setSubtype(Number(event.target.value) ?? undefined);
  };

  if (!hasSubtypes) return null;

  return (
    <ControlledSelector
      value={subtype?.id}
      displayName="Subtype"
      slug="subtype"
      onChange={handleChange}
    >
      {!isSubtypeRequired && (
        <MenuItem value="">
          <ListItemText primary="None" />
        </MenuItem>
      )}
      {subtypes.map(
        st =>
          st.types.includes(type.id) && (
            <MenuItem key={st.slug} value={st.id}>
              <ListItemText primary={st.displayName} />
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default SubtypeSelector;
