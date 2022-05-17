import { styled } from '@css';
import { Select } from '@mui/material';

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    display: flex;
    align-items: center;
    // Same as it's padding-left of the select
    gap: ${({ theme }) => theme.spacing(1.75)};
  }
`;
