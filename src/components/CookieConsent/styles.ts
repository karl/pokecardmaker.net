import { styled } from '@css';

export const Content = styled('div')`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};

  ${({ theme }) => theme.breakpoints.up(600)} {
    white-space: nowrap;
    flex-direction: row;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    gap: ${({ theme }) => theme.spacing(10)};
  }
`;

export const ActionWrapper = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;
