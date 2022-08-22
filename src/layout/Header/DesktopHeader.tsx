import { Button, Link } from '@mui/material';
import NextLink from 'next/link';
import { FC } from 'react';
import { NavItems } from './styles';

// TODO: Style this
const DesktopHeader: FC = () => (
  <>
    <NavItems>
      <NextLink href="/" passHref>
        <Button component={Link} color="secondary" variant="contained">
          Homepage
        </Button>
      </NextLink>
    </NavItems>
  </>
);

export default DesktopHeader;
