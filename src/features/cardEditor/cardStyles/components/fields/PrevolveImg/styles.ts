import { styled } from '@css';
import PlacementBlock from '../../atoms/PlacementBlock';

export const Img = styled(PlacementBlock)<{ $url: string }>`
  overflow: hidden;
  background-image: url(${({ $url }) => $url});
  background-position: center;
  background-size: cover;
`;
