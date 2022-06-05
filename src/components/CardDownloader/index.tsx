import { baseFontSize, cardImgHeight, cardImgWidth } from '@constants';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { Download as DownloadIcon } from '@mui/icons-material';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import { FC, useCallback } from 'react';
import { TempDiv } from './styles';
import { CardDownloaderProps } from './types';

const CardDownloader: FC<CardDownloaderProps> = ({ cardId = 'card' }) => {
  const { name } = useCardOptions();

  const makeCanvas = useCallback(async (): Promise<
    HTMLCanvasElement | undefined
  > => {
    const tempDiv = document.querySelector('#temp') as HTMLElement | null;
    const originalDiv = document.querySelector(
      `#${cardId}`,
    ) as HTMLElement | null;
    if (!tempDiv || !originalDiv) return undefined;

    const div = originalDiv.cloneNode(true) as HTMLCanvasElement;
    // Remove noscript tags from next.js images
    div.querySelectorAll('noscript').forEach(e => e.remove());
    // Add the cloned div to the DOM in an invisible div
    tempDiv.append(div);

    // Set desired css attributes
    div.style.width = `${cardImgWidth}px`;
    div.style.height = `${cardImgHeight}px`;
    div.style.fontSize = `${baseFontSize}px`;
    const canvas = await html2canvas(div, {
      backgroundColor: 'transparent',
      foreignObjectRendering: true,
      scrollY: -div.offsetTop,
      scrollX: -div.offsetLeft,
      windowHeight: div.clientHeight,
      windowWidth: div.clientWidth,
    });

    // Remove the cloned div from the dom
    div.remove();
    return canvas;
  }, [cardId]);

  const downloadCanvas = useCallback(
    (canvas: HTMLCanvasElement) => {
      const pngUrl = canvas.toDataURL('image/png', 1);

      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = `${name || 'Pokecardmaker.net'}.png`;
      document.body.appendChild(link);
      link.dispatchEvent(
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
        }),
      );

      document.body.removeChild(link);
    },
    [name],
  );

  const handleDownload = useCallback(async () => {
    const canvas = await makeCanvas();
    if (!canvas) return;
    downloadCanvas(canvas);
  }, [downloadCanvas, makeCanvas]);

  return (
    <div>
      <TempDiv id="temp" />
      <Button
        fullWidth
        variant="contained"
        onClick={handleDownload}
        startIcon={<DownloadIcon />}
      >
        Download
      </Button>
    </div>
  );
};

export default CardDownloader;
