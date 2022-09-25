import { styled } from '@css';
import { Font } from '@utils/fonts';
import { PlacementBlock } from '../../atoms/PlacementBlock';

export const Block = styled(PlacementBlock)`
  display: flex;
  align-items: center;
  left: 4.2%;
  height: 3%;
`;

export const TypeWrapper = styled(PlacementBlock)`
  display: flex;
  align-items: center;
  gap: 0.35em;
  font-family: '${Font.FuturaLTMediumBold}', monospace;
`;
