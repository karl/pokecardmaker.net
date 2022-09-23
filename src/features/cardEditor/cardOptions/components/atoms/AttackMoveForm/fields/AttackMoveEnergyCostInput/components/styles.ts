import { styled } from '@css';

export const FieldWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  padding: ${({ theme }) => theme.spacing(1.5, 3)};

  ${({ theme }) => theme.breakpoints.down(410)} {
    padding: 0;
    border: 0;
  }
`;
