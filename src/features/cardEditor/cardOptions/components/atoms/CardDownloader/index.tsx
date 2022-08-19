import { useCardOptions } from '@cardEditor/cardOptions';
import { cardId as defaultCardId } from '@cardEditor/cardStyles';
import { Download as DownloadIcon } from '@mui/icons-material';
import { Button, CircularProgress } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import { baseFontSize, cardImgHeight, cardImgWidth } from 'src/constants';
import { toCanvas } from 'html-to-image';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { TempDiv } from './styles';
import { CardDownloaderProps } from './types';

const CardDownloader: FC<CardDownloaderProps> = ({
  cardId = defaultCardId,
}) => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { name } = useCardOptions();
  const [isLoading, setLoading] = useState<boolean>(false);

  const makeCanvas = useCallback(async (): Promise<
    HTMLCanvasElement | undefined
  > => {
    setLoading(true);
    const tempDiv = document.querySelector('#temp') as HTMLElement | null;
    const originalDiv = document.querySelector(
      `#${cardId}`,
    ) as HTMLElement | null;

    if (!tempDiv || !originalDiv) {
      setLoading(false);
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
    setLoading(false);
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
    trackCardCreatorEvent(AnalyticsEvent.CardDownload);
  }, [downloadCanvas, makeCanvas, trackCardCreatorEvent]);

  return (
    <div>
      <TempDiv id="temp" />
      <Button
        fullWidth
        variant="contained"
        onClick={handleDownload}
        disabled={isLoading}
        startIcon={
          isLoading ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            <DownloadIcon />
          )
        }
      >
        Download Image
      </Button>
    </div>
  );
};

export default CardDownloader;
