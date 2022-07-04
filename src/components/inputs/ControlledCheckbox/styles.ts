import { styled } from '@css';
import { FormControl } from '@mui/material';

export const StyledFormControl = styled(FormControl)`
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;
