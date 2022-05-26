import { css, styled } from '@css';
import { TextColor } from '@interfaces/cardOptions/cardStyles';

export const CardText = styled('p')<{
  $outline?: TextColor;
  $color: TextColor;
}>`
  margin: 0;
  color: ${({ $color }) => $color};

  ${({ $outline }) =>
    !!$outline &&
    css`
      filter: ${`url(#${$outline}OutlineEffect)`};
    `};
`;
