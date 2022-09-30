import { css, styled } from '@css';
import PlacementBlock from '../../atoms/PlacementBlock';

export const Wrapper = styled(PlacementBlock)<{
  $hasMove2: boolean;
  $alignBottom: boolean;
}>`
  top: 53%;
  left: 7.5%;
  width: 84.5%;
  height: 30.5%;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  ${({ $hasMove2 }) =>
    $hasMove2 &&
    css`
      justify-content: space-evenly;
    `}

  ${({ $alignBottom }) =>
    $alignBottom &&
    css`
      justify-content: flex-end;
      gap: 1em;
    `}
`;
