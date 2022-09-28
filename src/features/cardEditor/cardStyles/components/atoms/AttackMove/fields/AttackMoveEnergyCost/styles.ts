import { css, styled } from '@css';

export const Wrapper = styled('div')<{ $typesHaveBorder: boolean }>`
  display: flex;
  ${({ $typesHaveBorder }) =>
    !$typesHaveBorder &&
    css`
      gap: 0.15em;
    `}
`;

// TODO: Align GX cost with move2 cost
export const TypeContainer = styled('div')<{ $hasBorder: boolean }>`
  position: relative;
  ${({ $hasBorder }) =>
    $hasBorder
      ? css`
          width: 2.75em;
          height: 2.75em;
        `
      : css`
          width: 2.45em;
          height: 2.45em;
        `}
`;
