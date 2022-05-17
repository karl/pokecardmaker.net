import { styled } from '@css';
import { Select } from '@mui/material';

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    display: flex;
    align-items: center;
    // Same as the padding-left of the select, doesn't scale with spacing
    gap: 14px;
  }
`;
