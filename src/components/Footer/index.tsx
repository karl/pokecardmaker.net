import { Box, Divider, Typography } from '@mui/material';
import { FC } from 'react';

const Footer: FC = () => (
  <Box component="footer" display="flex" justifyContent="center" p={2.5}>
    <Typography variant="h6" align="center" alignSelf="center">
      © {new Date().getFullYear()} Shinebrothers
    </Typography>
    <Box mx={2.5} py={0.5}>
      <Divider orientation="vertical" color="light" />
    </Box>
    <Typography variant="h6" align="center" alignSelf="center">
      Website by Shinebrothers
    </Typography>
    {/* TODO: Add github logo and privacy policy */}
  </Box>
);

export default Footer;
