import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const DexEntryText = styled(CardText)`
  position: absolute;
  display: flex;
  align-items: center;
  height: 7.6%;
  bottom: 3%;
  right: 6.5%;
  white-space: initial;
  font-size: 1.03em;
  line-height: 1.2em;
  font-family: '${Font.OptimaMedium}', monospace;
  margin-left: 0.3em;
  margin-bottom: -0.1em;
  letter-spacing: -0.01em;
`;
