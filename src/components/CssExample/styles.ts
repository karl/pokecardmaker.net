import { css, styled } from '@mui/material';

export const NameText = styled('p')<{ $pokemon?: boolean }>`
  color: black;
  filter: url(#whiteOutlineEffect);
  font-size: 2em;
  font-weight: bold;

  ${({ $pokemon }) =>
    $pokemon &&
    css`
      font-family: 'pokemon5', cursive;
    `}
`;
