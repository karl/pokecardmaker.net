import { css } from '@css';

export enum Font {
  FrutigerLT55Roman = 'Frutiger LT 55 Roman',
  FrutigerLT66BoldItalic = 'Frutiger LT 66 Bold Italic',
  FuturaLTMediumBold = 'Futura LT Medium Bold',
  FuturaStdBoldOblique = 'Futura Std Bold Oblique',
  FuturaStdHeavy = 'Futura Std Heavy',
  GillSansStdBoldCondensed = 'Gill Sans Std Bold Condensed',
  GillSansStdRegularBold = 'Gill Sans Std Regular Bold',
  GillSansStdRegularItalic = 'Gill Sans Std Regular Italic',
  GillSansStdRegular = 'Gill Sans Std Regular',
  GillSansStdUltraBold = 'Gill Sans Std Ultra Bold',
  OptimaMedium = 'Optima Medium',
  PkmnTCGSpecialCharacters = 'Pokemon TCG Special Characters',
}

interface FontFace {
  fontName: Font;
  fileName: string;
}

const fonts: FontFace[] = [
  {
    fontName: Font.FrutigerLT55Roman,
    fileName: 'FrutigerLT-Roman',
  },
  {
    fontName: Font.FrutigerLT66BoldItalic,
    fileName: 'FrutigerLT-BoldItalic',
  },
  {
    fontName: Font.FuturaLTMediumBold,
    fileName: 'FuturaLT-Heavy',
  },
  {
    fontName: Font.FuturaStdBoldOblique,
    fileName: 'FuturaStd-BoldOblique',
  },
  {
    fontName: Font.FuturaStdHeavy,
    fileName: 'FuturaStd-Heavy',
  },
  {
    fontName: Font.GillSansStdBoldCondensed,
    fileName: 'GillSans-CondensedBold',
  },
  {
    fontName: Font.GillSansStdRegularBold,
    fileName: 'GillSans-Bold',
  },
  {
    fontName: Font.GillSansStdRegularItalic,
    fileName: 'GillSans-Italic',
  },
  {
    fontName: Font.GillSansStdRegular,
    fileName: 'GillSans',
  },
  {
    fontName: Font.GillSansStdUltraBold,
    fileName: 'GillSans-ExtraBoldDisplay',
  },
  {
    fontName: Font.OptimaMedium,
    fileName: 'Optima-Medium',
  },
  {
    fontName: Font.PkmnTCGSpecialCharacters,
    fileName: 'PKMN_TCG_SYM18',
  },
];

export const fontFaces = css`
  ${fonts.map(
    font => css`
      @font-face {
        font-family: '${font.fontName}';
        src: url('/fonts/${font.fileName}.woff2') format('woff2'),
          url('/fonts/${font.fileName}.woff') format('woff'),
          url('/fonts/${font.fileName}.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
    `,
  )}
`;
