import { styled } from '@css';

export const StyledImage = styled('img')<{ $opacity: number }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100%;
  width: 100%;
  opacity: ${({ $opacity }) => $opacity};
  pointer-events: none;
`;
