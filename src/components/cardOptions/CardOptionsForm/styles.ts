import { styled } from '@css';
import { Paper } from '@mui/material';

export const Form = styled(Paper)`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(4)};
`;
