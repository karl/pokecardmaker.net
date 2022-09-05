import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { Share as ShareIcon } from '@mui/icons-material';
import { FC, useCallback, useState } from 'react';
import useIsMobile from '@hooks/useIsMobile';
import { makeCanvas } from '../../utils';
import LoadingButton from '../../atoms/LoadingButton';
import { ShareButtonProps } from './types';

const ShareButton: FC<ShareButtonProps> = ({ cardId, ...props }) => {
  const { isMobile } = useIsMobile();
  const { trackCardCreatorEvent } = useAnalytics();
  const { name } = useCardOptions();
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleShare = useCallback(async () => {
    setLoading(true);
    const canvas = await makeCanvas(cardId);
    setLoading(false);
    if (!canvas) return;

    canvas.toBlob(blob => {
      if (!blob) return;
      const file = new File([blob], `${name}.png`, { type: 'image/png' });

      const shareData: ShareData = {
        title: 'Pokécardmaker.net',
        files: [file],
        text: `Check out this custom ${
          name ? `'${name}'` : 'Pokémon'
        } card that I made!`,
        url: 'https://pokecardmaker.net',
      };
      if (!navigator.share) return;
      if (!!navigator.canShare && !navigator.canShare(shareData)) return;
      navigator.share(shareData);
      trackCardCreatorEvent(AnalyticsEvent.CardShare, {
        sharePlatform: 'native',
      });
    });
  }, [cardId, name, setLoading, trackCardCreatorEvent]);

  if (
    !isMobile ||
    typeof navigator === 'undefined' ||
    (typeof navigator !== 'undefined' && !navigator.share)
  )
    return null;

  return (
    <LoadingButton
      {...props}
      fullWidth
      variant="contained"
      onClick={handleShare}
      isLoading={isLoading}
      startIcon={<ShareIcon />}
    >
      Share
    </LoadingButton>
  );
};

export default ShareButton;
