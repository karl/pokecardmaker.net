import { styled } from '@css';
import { Select } from '@mui/material';

export const StyledSelect = styled(Select)<{ $gap: number }>`
  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: ${({ theme, $gap }) => theme.spacing($gap)};

    .MuiListItemText-secondary {
      display: none;
    }
  }
`;
