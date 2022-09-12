import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { css, styled } from '@css';
import { Font } from '@utils/fonts';

export const SubnameText = styled(CardText)<{ $beforeName: boolean }>`
  align-self: flex-end;
  letter-spacing: -0.015em;

  ${({ $beforeName }) =>
    $beforeName
      ? css`
          /* Pokémon's subname */
          font-family: '${Font.GillSansStdRegularBold}', monospace;
          order: -1;
          font-size: 1.6em;
          line-height: 1.85em;
          margin-right: 0.2em;
        `
      : css`
          /* Trainer's subname */
          font-family: '${Font.FrutigerLT66BoldItalic}', monospace;
          color: #6b6c6e;
          font-size: 1.45em;
          margin-left: auto;
          line-height: 1.8em;
        `}
`;
