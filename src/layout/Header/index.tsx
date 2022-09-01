import { Hidden, Link, Toolbar, Typography } from '@mui/material';
import Routes from '@routes';
import NextLink from 'next/link';
import { FC } from 'react';
import DesktopHeader from './DesktopHeader';
import { DefaultAppBar, InvisibleHeading } from './styles';

const Header: FC = () => (
  <>
    <InvisibleHeading>Pokécardmaker.net</InvisibleHeading>
    <DefaultAppBar position="relative" color="primary">
      <Toolbar>
        <NextLink href={Routes.Home} passHref>
          <Typography variant="h1" component={Link} color="white">
            Pokécardmaker.net
          </Typography>
        </NextLink>
        <Hidden smDown>
          <DesktopHeader />
        </Hidden>
      </Toolbar>
    </DefaultAppBar>
    {/* <Hidden mdUp>
      <MobileHeader />
    </Hidden> */}
  </>
);

export default Header;
