import { styled } from '@css';
import { Paper } from '@mui/material';

export const Form = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.breakpoints.up('md')} {
    min-width: 400px;
    max-width: 400px;
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;
