import { FC } from 'react';
import { GlobalStyles, css } from '@css';

const getFormatName = (format: string) => {
  switch (format) {
    case 'ttf':
      return 'truetype';
    case 'otf':
      return 'opentype';
    default:
      throw new Error(`Define new font format: ${format}`);
  }
};

interface FontFace {
  fileName: string;
  format: string;
}

const fonts: FontFace[] = [
  {
    fileName: 'Frutiger LT 55 Roman',
    format: 'ttf',
  },
  {
    fileName: 'Frutiger LT 66 Bold Italic',
    format: 'ttf',
  },
  {
    fileName: 'Futura LT Medium Bold',
    format: 'ttf',
  },
  {
    fileName: 'Futura Std Bold Oblique',
    format: 'otf',
  },
  {
    fileName: 'Futura Std Heavy',
    format: 'otf',
  },
  {
    fileName: 'Gill Sans Std Bold Condensed',
    format: 'ttf',
  },
  {
    fileName: 'Gill Sans Std Regular Bold',
    format: 'ttf',
  },
  {
    fileName: 'Gill Sans Std Regular Italic',
    format: 'ttf',
  },
  {
    fileName: 'Gill Sans Std Regular',
    format: 'ttf',
  },
  {
    fileName: 'Gill Sans Std Ultra Bold',
    format: 'ttf',
  },
  {
    fileName: 'Optima Medium',
    format: 'ttf',
  },
];

const fontFaces = css`
  ${fonts.map(
    font => css`
      @font-face {
        font-family: '${font.fileName}';
        src: url('/fonts/${font.fileName}.${font.format}')
          format('${getFormatName(font.format)}');
        font-style: normal;
        font-weight: normal;
        font-stetch: normal;
      }
    `,
  )}
`;

const Fonts: FC = () => (
  <>
    {fonts.map(font => (
      <link
        key={font.fileName}
        rel="preload"
        href={`/fonts/${font.fileName}.${font.format}`}
        as="font"
        type={`font/${font.format}`}
        crossOrigin=""
      />
    ))}
    <GlobalStyles styles={fontFaces} />
  </>
);

export default Fonts;
