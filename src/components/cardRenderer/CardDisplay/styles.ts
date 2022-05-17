import { styled } from '@css';

export const CardContainer = styled('div')<{ $fontSize: number, $height: number }>`
  position: relative;
  width: 40%;
  /* TODO: Fix all fonts */
  font-family: 'Futura LT';
  border-radius: 25px;
  z-index: 1;
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  height: ${({ $height }) => `${$height}px`};

  &::before {
    /* Simple white background so the card isn't transparent */
    z-index: -1;
    content: '';
    position: absolute;
    background: white;
    border-radius: 25px;
    /* Space a bit away from the borders so it's not visible outside of the card */
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    top: 2px;
    left: 2px;
  }
`;
