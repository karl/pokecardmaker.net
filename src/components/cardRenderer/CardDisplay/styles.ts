import { styled } from '@css';

export const CardContainer = styled('div')<{ $fontSize: number }>`
  position: relative;
  // TODO: Should be scaling with aspect ratio of card image + window width
  width: 430px;
  font-size: ${({ $fontSize }) => `${$fontSize}px`};
  font-family: 'Futura LT';
`;
