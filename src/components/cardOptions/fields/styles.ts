import { styled } from '@css';
import { ListItemIcon, MenuItem } from '@mui/material';

export const StyledMenuItem = styled(MenuItem)`
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledListItemIcon = styled(ListItemIcon)`
  justify-content: center;
`;
