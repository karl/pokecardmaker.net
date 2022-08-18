import { useSupertype } from '@cardEditor/cardOptions/supertype';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC, useCallback } from 'react';
import ReactGA from 'react-ga4';

const SupertypeSelector: FC = () => {
  const { supertypes, supertype, setSupertype } = useSupertype();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setSupertype(Number(event.target.value));
      const st = supertypes.find(item => item.id === +event.target.value);
      console.log('supertype_change', st);
      // TODO: Why does this send 2 events?
      if (st) {
        // TODO: Send all selected options (no user text input)
        ReactGA.event('supertype_change', {
          slug: st.slug,
        });
      }
    },
    [setSupertype, supertypes],
  );

  return (
    <ControlledSelector
      value={supertype.id}
      displayName="Supertype"
      slug="supertype"
      onChange={handleChange}
    >
      {supertypes.map(st => (
        <MenuItem key={st.slug} value={st.id}>
          <ListItemText primary={st.displayName} />
        </MenuItem>
      ))}
    </ControlledSelector>
  );
};

export default SupertypeSelector;
