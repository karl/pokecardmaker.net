import { styled } from '@css';
import { cropperHeight } from 'src/constants';

export const Wrapper = styled('div')`
  position: relative;
  background: ${({ theme }) => theme.palette.background.default};
  width: 100%;
  height: ${cropperHeight}px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  [data-testid='container'] {
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    z-index: 1;
  }
`;

export const Overlay = styled('div')<{ $zIndex: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: ${({ $zIndex }) => $zIndex};
  opacity: 0.5;
  pointer-events: none;
`;
