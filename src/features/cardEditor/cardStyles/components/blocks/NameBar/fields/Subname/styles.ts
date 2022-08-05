import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const SubnameText = styled(CardText)`
  font-family: '${Font.FrutigerLT66BoldItalic}', monospace;
  font-size: 1.45em;
  margin-left: auto;
  color: #6b6c6e;
  align-self: flex-end;
  line-height: 1.8em;
  letter-spacing: -0.015em;
`;
