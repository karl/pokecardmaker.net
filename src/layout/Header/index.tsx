import { Hidden, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { DefaultAppBar, InvisibleHeading } from './styles';

const Header: FC = () => (
  <>
    <InvisibleHeading>Pokécardmaker.net</InvisibleHeading>
    <DefaultAppBar position="relative" color="primary">
      <Toolbar>
        <Link href="/" passHref>
          <Typography variant="h4">Pokécardmaker.net</Typography>
        </Link>
        <Hidden mdDown>
          <DesktopHeader />
        </Hidden>
      </Toolbar>
    </DefaultAppBar>
    <Hidden mdUp>
      <MobileHeader />
    </Hidden>
  </>
);

export default Header;
