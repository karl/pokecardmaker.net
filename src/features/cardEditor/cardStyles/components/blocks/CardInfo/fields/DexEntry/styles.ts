import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const DexEntryText = styled(CardText)`
  position: absolute;
  bottom: 4%;
  right: 6.5%;
  width: 58%;
  white-space: initial;
  text-align: right;
  font-size: 1.03em;
  line-height: 1.2em;
  font-family: '${Font.OptimaMedium}', monospace;
  margin-left: 0.3em;
  margin-bottom: -0.1em;
  letter-spacing: -0.01em;
`;
