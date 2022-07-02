import { css, styled } from '@css';
import AttackMove from '../../atoms/AttackMove';

export const AttackMove1 = styled(AttackMove)<{ $hasMove2: boolean }>`
  ${({ $hasMove2 }) =>
    !$hasMove2 &&
    css`
      margin: auto 0;
    `}
`;
