import { styled } from '@css';

export const Wrapper = styled('div')`
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(2, 3, 0, 3)};
`;
