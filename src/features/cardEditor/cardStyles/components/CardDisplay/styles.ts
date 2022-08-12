import { styled } from '@css';

export const CardContainer = styled('div')<{
  $fontSize: number;
  $height: number;
}>`
  position: relative;
  width: 70%;
  z-index: 1;
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  height: ${({ $height }) => `${$height}px`};
  overflow: hidden;

  &,
  & * {
    transition: all 0.15s ease-out;
  }

  &::before {
    /* Simple white background so the card isn't transparent */
    z-index: -10;
    content: '';
    position: absolute;
    background: white;
    border-radius: 30px;
    /* Space a bit away from the borders so it's not visible outside of the card */
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    top: 4px;
    left: 4px;
    pointer-events: none;
  }
`;

export const CardContent = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
`;
