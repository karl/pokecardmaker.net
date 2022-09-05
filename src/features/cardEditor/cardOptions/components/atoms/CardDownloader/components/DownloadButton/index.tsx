import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { Download as DownloadIcon } from '@mui/icons-material';
import { FC, useCallback, useState } from 'react';
import useIsMobile from '@hooks/useIsMobile';
import { makeCanvas } from '../../utils';
import LoadingButton from '../../atoms/LoadingButton';
import { DownloadButtonProps } from './types';

const DownloadButton: FC<DownloadButtonProps> = ({ cardId, ...props }) => {
  const { isMobile } = useIsMobile();
  const { trackCardCreatorEvent } = useAnalytics();
  const { name } = useCardOptions();
  const [isLoading, setLoading] = useState<boolean>(false);

  const downloadCanvas = useCallback(
    (canvas: HTMLCanvasElement) => {
      const pngUrl = canvas.toDataURL('image/png', 1);

      const link = document.createElement('a');
      link.href = pngUrl;
      link.download = `${name || 'Pokécardmaker.net'}.png`;
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
    setLoading(true);
    const canvas = await makeCanvas(cardId);
    setLoading(false);
    if (!canvas) return;
    downloadCanvas(canvas);
    trackCardCreatorEvent(AnalyticsEvent.CardDownload);
  }, [cardId, downloadCanvas, trackCardCreatorEvent]);

  return (
    <LoadingButton
      {...props}
      sx={
        isMobile
          ? { paddingLeft: [null, 15], paddingRight: [null, 8], minWidth: 150 }
          : null
      }
      variant={isMobile ? 'outlined' : 'contained'}
      color={isMobile ? 'secondary' : 'primary'}
      fullWidth={!isMobile}
      onClick={handleDownload}
      isLoading={isLoading}
      startIcon={<DownloadIcon />}
    >
      Download
    </LoadingButton>
  );
};

export default DownloadButton;
