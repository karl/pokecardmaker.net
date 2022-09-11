import { Star as StarIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

const NewFeatureHelpText: FC = ({ children }) => (
  <Box display="flex" alignItems="center" mt={0.5}>
    <StarIcon color="primary" fontSize="inherit" />
    <Typography color="black" variant="caption" lineHeight={0}>
      {children}
    </Typography>
  </Box>
);

export default NewFeatureHelpText;
