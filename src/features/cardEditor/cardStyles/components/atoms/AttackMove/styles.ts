import { styled } from '@css';
import { PlacementBlock } from '../PlacementBlock';

export const Wrapper = styled(PlacementBlock)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
`;

export const TitleBar = styled('div')`
  display: flex;
  align-items: flex-end;
  gap: 0.5em;
`;
