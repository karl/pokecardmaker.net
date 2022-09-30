import { css, styled } from '@css';
import PlacementBlock from '../PlacementBlock';

export const Wrapper = styled(PlacementBlock)<{ $hasBackground: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;

  ${({ $hasBackground }) =>
    $hasBackground &&
    css`
      margin-top: -0.8em;
    `}
`;

export const TitleBar = styled('div')<{ $background?: string }>`
  display: flex;
  align-items: flex-end;
  gap: 0.5em;

  ${({ $background }) =>
    !!$background &&
    css`
      padding: 0.2em 0;
      margin-bottom: 0.2em;

      &::before {
        position: absolute;
        content: '';
        top: -0.35em;
        left: -2%;
        width: 110.7%;
        height: 3.8em;
        background: url(${$background});
        background-size: contain;
        background-repeat: no-repeat;
      }
    `}
`;
