import { styled } from '@css';
import PlacementBlock from '../../atoms/PlacementBlock';

export const Wrapper = styled(PlacementBlock)`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 6.6%;
`;

export const CardInfoBar = styled(PlacementBlock)`
  display: flex;
  align-items: flex-end;
  position: relative;
`;
