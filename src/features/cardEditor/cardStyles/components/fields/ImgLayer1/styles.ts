import CroppedImg from '@components/CroppedImg';
import { styled } from '@css';

export const Wrapper = styled('div')`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  /* Space a bit away from the borders so it's not visible outside of the card */
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  top: 4px;
  left: 4px;
`;

export const StyledCroppedImg = styled(CroppedImg)`
  border-radius: 30px;
`;
