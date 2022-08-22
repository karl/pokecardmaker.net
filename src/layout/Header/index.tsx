import { Link, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';
import { DefaultAppBar, InvisibleHeading } from './styles';

const Header: FC = () => (
  <>
    <InvisibleHeading>Pokécardmaker.net</InvisibleHeading>
    <DefaultAppBar position="relative" color="primary">
      <Toolbar>
        <NextLink href="/" passHref>
          <Typography variant="h4" component={Link} color="white">
            Pokécardmaker.net
          </Typography>
        </NextLink>
        {/* <Hidden mdDown>
          <DesktopHeader />
        </Hidden> */}
      </Toolbar>
    </DefaultAppBar>
    {/* <Hidden mdUp>
      <MobileHeader />
    </Hidden> */}
  </>
);

export default Header;
