import { css, styled } from '@css';

export const Wrapper = styled('div')<{ $multiple: boolean; $custom: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  position: absolute;

  ${({ $custom, $multiple }) =>
    $multiple
      ? css`
          gap: 0.15em;
          top: 2.5%;
          right: 4.5%;
          width: 23.5%;
          height: 6.5%;
        `
      : css`
          top: 2.4%;
          width: 9%;
          height: 7.5%;

          ${$custom
            ? css`
                /* Single custom */
                right: 4.8%;
              `
            : css`
                /* Single default */
                right: 4.55%;
              `}
        `}
`;

export const StyledImg = styled('img')<{
  $multiple: boolean;
  $custom: boolean;
}>`
  height: 100%;
  border-radius: 50%;
  background: white;
  object-fit: cover;
  object-position: center;

  ${({ $custom, $multiple }) =>
    $multiple
      ? css`
          width: 3.5em;
          height: 3.5em;

          ${$custom
            ? css`
                /* Multiple custom */
                border: 3px solid white;
              `
            : css`
                /* Multiple default */
                border: 2px solid white;
              `}
        `
      : css`
          ${$custom
            ? css`
                /* Single custom */
                width: 3.4em;
                height: 3.4em;
              `
            : css`
                /* Single default */
                width: 3.7em;
                height: 3.7em;
              `}
        `}
`;
