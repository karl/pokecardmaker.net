import { css, styled } from '@css';
import { TextColor } from '@cardEditor/cardStyles';

// TODO: Add support for [Special Characters]
export const CardText = styled('p')<{
  $outline?: TextColor;
  $color?: TextColor;
}>`
  margin: 0;
  color: ${({ $color }) => $color ?? 'black'};
  white-space: pre;

  ${({ $outline }) =>
    !!$outline &&
    css`
      filter: ${`url(#${$outline}OutlineEffect)`};
    `};
`;
