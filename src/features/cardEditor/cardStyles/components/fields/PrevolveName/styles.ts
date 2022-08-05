import { styled } from '@css';
import { Font } from '@utils/fonts';
import CardText from '../../atoms/CardText';

export const StyledText = styled(CardText)`
  font-family: '${Font.FrutigerLT66BoldItalic}', monospace;
  font-size: 1.0125em;
  letter-spacing: 0.01em;
  position: absolute;
  top: 9.7%;
  left: 17.8%;
  width: 50%;
  overflow: hidden;
`;
