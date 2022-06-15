import { FC, useState } from 'react';
import HamburgerIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  List,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { HamburgerFab } from './styles';

const MobileHeader: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HamburgerFab color="primary" onClick={() => setMenuOpen(true)}>
        <HamburgerIcon />
      </HamburgerFab>
      <SwipeableDrawer
        anchor="top"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpen={() => setMenuOpen(true)}
      >
        <Box
          component="nav"
          sx={{ width: 'auto' }}
          role="presentation"
          onClick={() => setMenuOpen(false)}
          onKeyDown={() => setMenuOpen(false)}
        >
          <Box component={Link} textTransform="uppercase" href="/">
            <AppBar position="relative" color="primary" enableColorOnDark>
              <Box px={2}>
                <Typography variant="h4" fontWeight="bold">
                  Pokécardmaker.net
                </Typography>
              </Box>
            </AppBar>
          </Box>
          <List sx={{ py: 0 }}>
            <Link href="/" passHref>
              <ListItemButton>
                <ListItemText primary="Homepage" />
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default MobileHeader;
