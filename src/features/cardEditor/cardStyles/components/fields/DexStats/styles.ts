import { styled } from '@css';
import { Font } from '@utils/fonts';
import CardText from '../../atoms/CardText';

export const DexStatsText = styled(CardText)`
  position: absolute;
  top: 48%;
  left: 11%;
  width: 78%;
  font-family: '${Font.FrutigerLT55Roman}', monospace;
  font-size: 0.92em;
  letter-spacing: 0.01em;
  text-align: center;
`;
