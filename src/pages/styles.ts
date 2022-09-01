import { styled } from '@css';
import { Paper } from '@mui/material';
import { Container } from '@mui/system';

// General layout

export const Background = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.custom.backgroundGradient};
`;

export const MainContainer = styled(Container)`
  padding: ${({ theme }) => theme.spacing(5, 3, 3)};
  flex-grow: 1;
`;

// Homepage

export const PaperBox = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)};
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const List = styled('ul')`
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing(6)};
`;

export const TypeList = styled('ul')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 0;
  margin: 0;
  list-style: none;
`;
