import { css, styled } from '@css';

export const CardText = styled('p')<{ $outline?: string; $color: string }>`
  color: ${({ $color }) => $color};

  ${({ $outline }) =>
    !!$outline &&
    css`
      filter: ${`url(#${$outline}OutlineEffect)`};
    `};
`;
