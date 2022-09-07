import { GitHub as GitHubIcon } from '@mui/icons-material';
import { Box, IconButton, Link, Typography } from '@mui/material';
import Routes from '@routes';
import NextLink from 'next/link';
import { FC } from 'react';
import FooterDivider from './components/FooterDivider';

const Footer: FC = () => (
  <Box
    component="footer"
    display="flex"
    justifyContent="center"
    p={1}
    flexWrap="wrap"
  >
    <Typography variant="h6" align="center" alignSelf="center">
      © {new Date().getFullYear()} Pokécardmaker.net
    </Typography>
    <Box ml={2.5} mr={1} py={1}>
      <FooterDivider />
    </Box>
    <IconButton color="inherit" target="_blank" href={Routes.GitHub.Home}>
      <GitHubIcon />
    </IconButton>
    <Box mr={2.5} ml={1} py={1}>
      <FooterDivider />
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
      <FooterDivider />
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
    {process.env.NODE_ENV !== 'production' && (
      <>
        <Box mx={2.5} py={1}>
          <FooterDivider />
        </Box>
        <Typography
          variant="h6"
          align="center"
          alignSelf="center"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {process.env.NEXT_PUBLIC_ENVIRONMENT}
        </Typography>
      </>
    )}
  </Box>
);

export default Footer;
