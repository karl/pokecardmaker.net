import { styled } from '@css';
import { Select } from '@mui/material';

export const StyledSelect = styled(Select)<{ $noGap: boolean }>`
  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: ${({ theme, $noGap }) => theme.spacing($noGap ? 0 : 2)};
  }
`;
