import { styled } from '@css';
import { PlacementBlock } from '../../atoms/PlacementBlock';

export const Wrapper = styled(PlacementBlock)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2em;
`;

export const TitleBar = styled('div')`
  display: flex;
  gap: 0.5em;
`;

export const TextContainer = styled('div')`
  padding: 0 3.5%;
`;
