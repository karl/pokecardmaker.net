import { CardText } from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const DescriptionText = styled(CardText)`
  font-family: '${Font.GillSansStdRegular}', monospace;
  font-size: 1.635em;
  letter-spacing: 0.002em;
  white-space: pre-line;
  line-height: 1.35em;
  position: absolute;
  width: 76%;
  top: 54%;
  left: 11.9%;
  height: 31.7%;
  display: flex;
  align-items: center;
`;
