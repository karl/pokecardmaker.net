import { styled } from '@css';
import Image from 'next/image';

export const Wrapper = styled('div')`
  pointer-events: none;
  height: 100%;
  width: 100%;
`;

export const StyledImage = styled(Image)`
  z-index: -1;
`;
