import { css, styled } from '@css';
import AttackMove from '../../atoms/AttackMove';

export const AttackMove1 = styled(AttackMove)<{
  $hasMove2: boolean;
  $alignBottom: boolean;
}>`
  ${({ $hasMove2, $alignBottom }) =>
    !$hasMove2 &&
    !$alignBottom &&
    css`
      margin: auto 0;
    `}
`;
