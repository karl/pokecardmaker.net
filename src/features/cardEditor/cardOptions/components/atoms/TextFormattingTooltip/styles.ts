import { styled } from '@css';
import { Font } from '@utils/fonts';

export const StyledFigure = styled('figure')`
  margin: ${({ theme }) => theme.spacing(2, 0, 0)};
`;

export const StyledList = styled('ul')`
  margin: ${({ theme }) => theme.spacing(1, 0, 0)};
  padding: ${({ theme }) => theme.spacing(0, 0, 0, 7)};
`;

export const Monospace = styled('span')`
  font-family: monospace;
`;

export const SpecialCharacterList = styled(StyledList)`
  column-gap: ${({ theme }) => theme.spacing(4)};
  column-count: 1;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    column-count: 2;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    column-count: 3;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    column-count: 4;
  }
`;

export const SpecialCharacter = styled('span')`
  font-family: ${Font.PkmnTCGSpecialCharacters};
  line-height: 0;
  font-size: 1.5em;
  margin-top: 0.2em;
`;

export const ExampleList = styled('div')`
  width: fit-content;
  margin: ${({ theme }) => theme.spacing(2, 0)};
  padding: ${({ theme }) => theme.spacing(1.5, 3)};
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
`;
