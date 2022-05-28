import { FC } from 'react';
import { GlobalStyles, css } from '@css';

interface FontFace {
  fileName: string;
  fontName: string;
}

const fonts: FontFace[] = [
  {
    fontName: 'Frutiger LT 55 Roman',
    fileName: 'FrutigerLT-Roman',
  },
  {
    fontName: 'Frutiger LT 66 Bold Italic',
    fileName: 'FrutigerLT-BoldItalic',
  },
  {
    fontName: 'Futura LT Medium Bold',
    fileName: 'FuturaLT-Heavy',
  },
  {
    fontName: 'Futura Std Bold Oblique',
    fileName: 'FuturaStd-BoldOblique',
  },
  {
    fontName: 'Futura Std Heavy',
    fileName: 'FuturaStd-Heavy',
  },
  {
    fontName: 'Gill Sans Std Bold Condensed',
    fileName: 'GillSans-CondensedBold',
  },
  {
    fontName: 'Gill Sans Std Regular Bold',
    fileName: 'GillSans-Bold',
  },
  {
    fontName: 'Gill Sans Std Regular Italic',
    fileName: 'GillSans-Italic',
  },
  {
    fontName: 'Gill Sans Std Regular',
    fileName: 'GillSans',
  },
  {
    fontName: 'Gill Sans Std Ultra Bold',
    fileName: 'GillSans-ExtraBoldDisplay',
  },
  {
    fontName: 'Optima Medium',
    fileName: 'Optima-Medium',
  },
];

const fontFaces = css`
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

const Fonts: FC = () => (
  <>
    {fonts.map(font => (
      <>
        <link
          key={font.fileName}
          rel="preload"
          href={`/fonts/${font.fileName}.woff2`}
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          key={font.fileName}
          rel="preload"
          href={`/fonts/${font.fileName}.woff`}
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        <link
          key={font.fileName}
          rel="preload"
          href={`/fonts/${font.fileName}.ttf`}
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      </>
    ))}
    <GlobalStyles styles={fontFaces} />
  </>
);

export default Fonts;
