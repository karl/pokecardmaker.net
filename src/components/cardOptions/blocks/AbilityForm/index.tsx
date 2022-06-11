import AbilityDescriptionInput from '@components/cardOptions/fields/AbilityDescriptionInput';
import AbilityNameInput from '@components/cardOptions/fields/AbilityNameInput';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

const AbilityForm: FC = () => {
  const { hasAbility } = useCardOptions();

  if (!hasAbility) return null;

  // TODO: Improve styles
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography fontWeight={500}>Ability</Typography>
      <AbilityNameInput />
      <AbilityDescriptionInput />
    </Box>
  );
};

export default AbilityForm;
