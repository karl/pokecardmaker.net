import { styled } from '@css';

export const Wrapper = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  flex-direction: column-reverse;
  align-items: center;
  max-width: 550px;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up('md')} {
    align-items: flex-start;
    flex-direction: row;
    max-width: unset;
  }
`;

export const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};
  height: 100%;
  width: 100%;

  > * {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    position: sticky;
    top: ${({ theme }) => theme.spacing(2)};
  }

  ${({ theme }) => theme.breakpoints.up(1000)} {
    > * {
      width: 90%;
    }
  }

  ${({ theme }) => theme.breakpoints.up(1100)} {
    > * {
      width: 80%;
    }
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    > * {
      width: 75%;
    }
  }
`;
