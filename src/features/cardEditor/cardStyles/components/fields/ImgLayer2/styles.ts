import CroppedImg from '@components/CroppedImg';
import { styled } from '@css';

export const Wrapper = styled('div')`
  position: absolute;
  pointer-events: none;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const StyledCroppedImg = styled(CroppedImg)`
  border-radius: 21px;
`;
