import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const NameText = styled(CardText)`
  font-family: '${Font.GillSansStdRegularBold}', monospace;
  font-size: 3.125em;
  letter-spacing: -0.05em;
`;
