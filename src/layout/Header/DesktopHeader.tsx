import { Button } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import { NavItems } from './styles';

const DesktopHeader: FC = () => (
  <>
    <NavItems>
      <Link href="/" passHref>
        <Button>Homepage</Button>
      </Link>
    </NavItems>
  </>
);

export default DesktopHeader;
