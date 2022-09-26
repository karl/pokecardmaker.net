import { Star as StarIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

const NewFeatureHelpText: FC = ({ children }) => (
  <Box display="flex" alignItems="center" mt={0.5}>
    <StarIcon
      color="primary"
      fontSize="inherit"
      sx={{ alignSelf: 'flex-start', height: 24 }}
    />
    <Typography color="black" variant="caption" lineHeight={1.75}>
      {children}
    </Typography>
  </Box>
);

export default NewFeatureHelpText;
