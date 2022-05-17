import { baseFontSize, cardImgHeight, cardImgWidth } from '@constants';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import { FC, useCallback } from 'react';
import { TempDiv } from './styles';
import { CardDownloaderProps } from './types';

const CardDownloader: FC<CardDownloaderProps> = ({ cardId = 'card' }) => {
  const makeCanvas = useCallback(async (): Promise<
    HTMLCanvasElement | undefined
  > => {
    const tempDiv = document.querySelector('#temp') as HTMLElement | null;
    const originalDiv = document.querySelector(
      `#${cardId}`,
    ) as HTMLElement | null;
    if (!tempDiv || !originalDiv) return undefined;

    const div = originalDiv.cloneNode(true) as HTMLCanvasElement;
    tempDiv.append(div);

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

    div.remove();
    return canvas;
  }, [cardId]);

  const downloadCanvas = useCallback((canvas: HTMLCanvasElement) => {
    const pngUrl = canvas.toDataURL('image/png', 1);

    const link = document.createElement('a');
    link.href = pngUrl;
    // TODO: Name of the card here
    link.download = 'abc.png';
    document.body.appendChild(link);
    link.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    );
    document.body.removeChild(link);
  }, []);

  const handleDownload = useCallback(async () => {
    const canvas = await makeCanvas();
    if (!canvas) return;
    downloadCanvas(canvas);
  }, [downloadCanvas, makeCanvas]);

  return (
    <div>
      <TempDiv id="temp" />
      <Button fullWidth variant="contained" onClick={handleDownload}>
        Download
      </Button>
    </div>
  );
};

export default CardDownloader;
