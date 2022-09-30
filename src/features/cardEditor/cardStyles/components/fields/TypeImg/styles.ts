import { css, styled } from '@css';
import PlacementBlock from '../../atoms/PlacementBlock';

export const Wrapper = styled(PlacementBlock)<{
  $multiple: boolean;
  $custom: boolean;
}>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  width: 23.5%;
  gap: 0.15em;

  ${({ $custom, $multiple }) =>
    $multiple
      ? css`
          top: 2.5%;
          right: 4.5%;
          height: 6.5%;
        `
      : css`
          top: 2.4%;
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

export const StyledImg = styled(PlacementBlock)<{
  $multiple: boolean;
  $custom: boolean;
  $hasBorder: boolean;
}>`
  height: 100%;
  border-radius: 50%;
  background: white;
  object-fit: cover;
  object-position: center;

  ${({ $custom, $multiple, $hasBorder }) =>
    $multiple
      ? css`
          width: 3.5em;
          height: 3.5em;

          ${$hasBorder &&
          ($custom
            ? css`
                /* Multiple custom */
                border: 3px solid white;
              `
            : css`
                /* Multiple default */
                border: 2px solid white;
              `)}
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
