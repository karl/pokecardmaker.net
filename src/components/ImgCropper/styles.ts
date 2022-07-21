import { styled } from '@css';
import { CROPPER_HEIGHT } from '.';

export const Wrapper = styled('div')`
  position: relative;
  background: ${({ theme }) => theme.palette.background.default};
  width: 100%;
  height: ${CROPPER_HEIGHT}px;
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;

  [data-testid='container'] {
    border-radius: ${({ theme }) => theme.shape.borderRadius}px;
    z-index: 1;
  }
`;
