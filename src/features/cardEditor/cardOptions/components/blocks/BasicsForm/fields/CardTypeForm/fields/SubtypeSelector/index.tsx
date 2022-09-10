import {
  ListItemText,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { FC, useCallback } from 'react';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { useSubtype } from '@cardEditor/cardOptions/subtype';
import { useType } from '@cardEditor/cardOptions/type';
import { useCardLogic } from '@cardEditor/cardLogic';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { Star as StarIcon } from '@mui/icons-material';
import { Box } from '@mui/system';

const SubtypeSelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { type } = useType();
  const { hasSubtypes, isSubtypeRequired } = useCardLogic();
  const { subtypes, subtype, setSubtype } = useSubtype();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setSubtype(Number(event.target.value) ?? undefined);
      trackCardCreatorEvent(AnalyticsEvent.SubtypeChange);
    },
    [setSubtype, trackCardCreatorEvent],
  );

  if (!hasSubtypes) return null;

  return (
    <ControlledSelector
      value={subtype?.id}
      displayName="Subtype"
      slug="subtype"
      onChange={handleChange}
      helpText={
        <Box display="flex" alignItems="center" mt={0.5}>
          <StarIcon color="primary" fontSize="inherit" />
          <Typography color="black" variant="caption" lineHeight={0}>
            Try the new{' '}
            <b>
              <i>VSTAR</i>
            </b>{' '}
            subtype!
          </Typography>
        </Box>
      }
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
