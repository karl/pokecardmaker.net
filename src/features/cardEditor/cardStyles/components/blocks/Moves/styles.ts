import { css, styled } from '@css';

export const Wrapper = styled('div')<{ $hasMove2: boolean }>`
  position: absolute;
  top: 53.5%;
  left: 5%;
  width: 90%;
  height: 30.5%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  ${({ $hasMove2 }) =>
    $hasMove2 &&
    css`
      justify-content: space-evenly;
    `}
`;
