import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const CardNumberText = styled(CardText)`
  font-family: '${Font.FrutigerLT66BoldItalic}', monospace;
  line-height: 0.88em;
  margin-left: -0.2em;
  letter-spacing: 0.02em;
`;
