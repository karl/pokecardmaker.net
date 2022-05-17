import { AppBar, Button, Fab, ListItemButton, styled } from '@mui/material';

export const InvisibleHeading = styled('h1')`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const DefaultAppBar = styled(AppBar)``;

export const NavItems = styled('nav')`
  display: flex;
  margin-left: auto;
`;

export const NavItem = styled(Button)`
  padding: ${({ theme }) => theme.spacing(0.75, 4)};
`;

export const Spacer = styled('div')`
  padding: ${({ theme }) => theme.spacing(1)};
`;

// Mobile header //

export const HamburgerFab = styled(Fab)`
  z-index: 100;
  position: fixed;
  top: ${({ theme }) => theme.spacing(1)};
  right: ${({ theme }) => theme.spacing(2)};
  border-radius: 0;
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const PrimaryListItem = styled(ListItemButton)`
  background: ${({ theme }) => theme.palette.primary.main};
`;
