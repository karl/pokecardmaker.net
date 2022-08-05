import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const AbilityDescriptionText = styled(CardText)`
  font-family: '${Font.GillSansStdRegular}', monospace;
  font-size: 1.71em;
  letter-spacing: -0.003em;
  width: 100%;
  white-space: pre-wrap;
  text-align: justify;
  line-height: 1.05em;
`;
