import { styled } from '@css';
import { Container } from '@mui/material';

export const MainContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing(5, 3, 3)};

  /* TODO: Remove this style */
  min-height: calc(100vh - 133px);
`;
