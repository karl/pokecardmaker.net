import { styled } from '@css';
import { FormControlLabel } from '@mui/material';

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin-left: 0;
  margin-right: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  padding: ${({ theme }) => theme.spacing(0, 2)};
`;
