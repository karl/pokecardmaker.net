import { styled } from '@css';
import { Container } from '@mui/material';

export const Background = styled('div')`
  background: ${({ theme }) => theme.custom.backgroundGradient};
`;

export const MainContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing(5, 3, 3)};

  /* TODO: Remove this style */
  min-height: calc(100vh - 133px);
`;
