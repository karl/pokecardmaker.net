import { styled } from '@css';
import { Select } from '@mui/material';

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
  }
`;
