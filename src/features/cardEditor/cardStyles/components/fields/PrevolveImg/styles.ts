import { styled } from '@css';
import { PlacementBlock } from '../../atoms/PlacementBlock';

export const Wrapper = styled(PlacementBlock)`
  overflow: hidden;
  top: 7.9%;
  left: 4.6%;
  width: 11%;
  height: 8%;
  border-radius: 1.3em 0.45em 1.95em;
`;

export const StyledImg = styled('img')`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
