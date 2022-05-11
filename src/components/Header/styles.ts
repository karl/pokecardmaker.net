import {
  AppBar,
  Button,
  Fab,
  Link,
  ListItemButton,
  css,
  styled,
} from '@mui/material';

export const InvisibleHeading = styled('h1')`
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const DefaultAppBar = styled(AppBar)`
  background: ${({ theme }) => theme.palette.background.default};
`;

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
  transform: skewX(-15deg);
  border-radius: 0;
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const PrimaryListItem = styled(ListItemButton)`
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const SocialWrapper = styled('div')<{ $scrolled: boolean }>`
  z-index: 100;
  position: absolute;
  bottom: 0;
  right: ${({ theme }) => theme.spacing(-1)};
  padding: ${({ theme }) => theme.spacing(0, 1)};
  transform: translateY(100%) skewX(-15deg);
  box-shadow: ${({ theme }) => theme.shadows[4]};
  background: ${({ theme }) => theme.palette.background.default};

  ${({ theme }) => theme.breakpoints.down('md')} {
    top: ${({ theme }) => theme.spacing(-5)};
    right: ${({ theme }) => theme.spacing(10)};
    bottom: unset;
    position: fixed;

    ${({ $scrolled }) =>
      !$scrolled &&
      css`
        box-shadow: none;
      `}
  }
`;

export const SocialLink = styled(Link)`
  display: flex;

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(1)};
  }
`;

export const SocialContent = styled('div')`
  display: flex;
  transform: skewX(15deg);
  padding: ${({ theme }) => theme.spacing(1)};
`;
