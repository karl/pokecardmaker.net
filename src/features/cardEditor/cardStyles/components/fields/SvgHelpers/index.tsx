import { FC } from 'react';

const SvgHelpers: FC = () => (
  <svg
    style={{ height: 0, position: 'absolute' }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <filter id="whiteOutlineEffect" colorInterpolationFilters="sRGB">
        <feMorphology
          in="SourceAlpha"
          result="MORPH"
          operator="dilate"
          radius="1.5"
        />
        <feColorMatrix
          in="MORPH"
          result="WHITENED"
          type="matrix"
          values="-1 0 0 0 1, 0 -1 0 0 1, 0 0 -1 0 1, 0 0 0 1 0"
        />
        <feMerge>
          <feMergeNode in="WHITENED" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="blackOutlineEffect" colorInterpolationFilters="sRGB">
        <feMorphology
          in="SourceAlpha"
          result="MORPH"
          operator="dilate"
          radius="1.5"
        />
        <feColorMatrix
          in="MORPH"
          result="BLACKENED"
          type="matrix"
          values="1 0 0 0 -1, 0 1 0 0 -1, 0 0 1 0 -1, 0 0 0 1 0"
        />
        <feMerge>
          <feMergeNode in="BLACKENED" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default SvgHelpers;
