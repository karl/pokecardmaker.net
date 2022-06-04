import { styled } from '@css';
import { ListItemIcon, MenuItem } from '@mui/material';

export const StyledMenuItem = styled(MenuItem)`
  // Same as it's padding-left, doesn't scale with spacing
  gap: 16px;
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  justify-content: center;
  min-width: 36px;
  z-index: 99;
`;
