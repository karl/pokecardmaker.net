import { GitHub as GitHubIcon } from '@mui/icons-material';
import { Box, Divider, IconButton, Link, Typography } from '@mui/material';
import Routes from '@routes';
import NextLink from 'next/link';
import { FC } from 'react';

const Footer: FC = () => (
  <Box component="footer" display="flex" justifyContent="center" p={1}>
    <Typography variant="h6" align="center" alignSelf="center">
      © {new Date().getFullYear()} Pokécardmaker.net {process.env.$DEPLOY_ALLOW === '1' ? '(test)' : ''}
    </Typography>
    <Box ml={2.5} mr={1} py={1}>
      <Divider orientation="vertical" color="light" />
    </Box>
    <IconButton color="inherit" target="_blank" href={Routes.GitHub.Home}>
      <GitHubIcon />
    </IconButton>
    <Box mr={2.5} ml={1} py={1}>
      <Divider orientation="vertical" color="light" />
    </Box>
    <NextLink passHref href={Routes.PrivacyPolicy}>
      <Typography
        variant="h6"
        align="center"
        alignSelf="center"
        component={Link}
      >
        Privacy Policy
      </Typography>
    </NextLink>
    <Box mx={2.5} py={1}>
      <Divider orientation="vertical" color="light" />
    </Box>
    <NextLink passHref href={Routes.CookiePolicy}>
      <Typography
        variant="h6"
        align="center"
        alignSelf="center"
        component={Link}
      >
        Cookie Policy
      </Typography>
    </NextLink>
  </Box>
);

export default Footer;
