import { GitHub as GitHubIcon } from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import { FC } from 'react';

// TODO IMPORTANT: Add privacy policy
const Footer: FC = () => (
  <Box component="footer" display="flex" justifyContent="center" p={1}>
    <Typography variant="h6" align="center" alignSelf="center">
      © {new Date().getFullYear()} Pokécardmaker.net
    </Typography>
    <Box ml={2.5} mr={1} py={1}>
      <Divider orientation="vertical" color="light" />
    </Box>
    <IconButton
      color="inherit"
      target="_blank"
      href="https://github.com/lvandernoll/pokecardmaker.net"
    >
      <GitHubIcon />
    </IconButton>
  </Box>
);

export default Footer;
