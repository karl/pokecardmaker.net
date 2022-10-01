import { useSupertype } from '@cardEditor/cardOptions/supertype';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import { FC, useCallback } from 'react';

const SupertypeSelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { supertypes, supertype, setSupertype } = useSupertype();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setSupertype(Number(event.target.value));
      trackCardCreatorEvent(AnalyticsEvent.SupertypeChange);
    },
    [setSupertype, trackCardCreatorEvent],
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
          <ListItemText primary={st.displayName} secondary={st.subText} />
        </MenuItem>
      ))}
    </ControlledSelector>
  );
};

export default SupertypeSelector;
