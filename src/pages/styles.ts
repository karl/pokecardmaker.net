import { styled } from '@css';
import { Container } from '@mui/material';

export const Background = styled('div')`
  background: ${({ theme }) => theme.custom.backgroundGradient};
`;

export const MainContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing(5, 3, 3)};
`;

export const CardWrapper = styled('div')`
  position: sticky;
  top: ${({ theme }) => theme.spacing(2)};
  height: fit-content;
  width: 100%;
`;
