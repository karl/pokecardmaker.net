import { cardImgWidth } from '@constants';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import { FC } from 'react';
import { TempDiv } from './styles';

interface CardDownloaderProps {
  cardId?: string;
}

const CardDownloader: FC<CardDownloaderProps> = ({ cardId = 'card' }) => {
  const makeImage = async (): Promise<HTMLCanvasElement | undefined> => {
    const tempDiv = document.querySelector('#temp') as HTMLElement | null;
    const originalDiv = document.querySelector(`#${cardId}`) as HTMLElement | null;
    if (!tempDiv || !originalDiv) return undefined;

    const div = originalDiv.cloneNode(true) as HTMLCanvasElement;
    tempDiv.append(div);

    div.style.width = `${cardImgWidth}px`;
    div.style.fontSize = '16px';
    const scale = 1 + (cardImgWidth - div.clientWidth) / div.clientWidth;
    const canvas = await html2canvas(div, {
      backgroundColor: 'transparent',
      scale: scale * 1,
      foreignObjectRendering: true,
      scrollY: -div.offsetTop,
      scrollX: -div.offsetLeft,
      windowHeight: div.clientHeight,
      windowWidth: div.clientWidth,
    });

    div.remove();
    return canvas;
  };

  const downloadCanvas = (canvas?: HTMLCanvasElement) => {
    if (!canvas) return;

    const pngUrl = canvas.toDataURL('image/png', 1);

    const link = document.createElement('a');
    link.href = pngUrl;
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
  };

  return (
    <div>
      <TempDiv id="temp" />
      <Button fullWidth variant="contained" onClick={async () => downloadCanvas(await makeImage())}>Download</Button>
    </div>
  );
}

export default CardDownloader;
