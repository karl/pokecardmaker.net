import { toCanvas } from 'html-to-image';
import { baseFontSize, cardImgHeight, cardImgWidth } from 'src/constants';

// TODO: upon return, setLoading false;
export const makeCanvas = async (
  cardId: string,
): Promise<HTMLCanvasElement | undefined> => {
  const tempDiv = document.querySelector('#temp') as HTMLElement | null;
  const originalDiv = document.querySelector(
    `#${cardId}`,
  ) as HTMLElement | null;

  if (!tempDiv || !originalDiv) {
    return undefined;
  }

  const div = originalDiv.cloneNode(true) as HTMLCanvasElement;
  // Add the cloned div to the DOM in an invisible div
  tempDiv.append(div);

  // Set desired css attributes
  div.style.width = `${cardImgWidth}px`;
  div.style.height = `${cardImgHeight}px`;
  div.style.fontSize = `${baseFontSize}px`;

  const canvas = await toCanvas(div, {
    backgroundColor: 'transparent',
    height: div.clientHeight,
    width: div.clientWidth,
  });

  // Remove the cloned div from the dom
  div.remove();
  return canvas;
};
