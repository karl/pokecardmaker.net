import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { ListItemText, SelectChangeEvent } from '@mui/material';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useCallback } from 'react';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import NewFeatureHelpText from '@cardEditor/cardOptions/components/atoms/NewFeatureHelpText';

const BaseSetSelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { baseSets, baseSet, setBaseSet } = useBaseSet();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setBaseSet(Number(event.target.value));
      trackCardCreatorEvent(AnalyticsEvent.BaseSetChange);
    },
    [setBaseSet, trackCardCreatorEvent],
  );

  return (
    <ControlledSelector
      value={baseSet.id}
      displayName="Base set"
      slug="baseSet"
      onChange={handleChange}
      helpText={
        <NewFeatureHelpText>
          Try the new{' '}
          <b>
            <i>Sun & Moon</i>
          </b>{' '}
          base set, including{' '}
          <b>
            <i>GX</i>
          </b>
          ,{' '}
          <b>
            <i>Ultra Beast</i>
          </b>{' '}
          and{' '}
          <b>
            <i>Prism Star</i>
          </b>{' '}
          cards!
        </NewFeatureHelpText>
      }
    >
      {baseSets.map(bs => (
        <SelectorMenuItem key={bs.slug} value={bs.id}>
          <SelectorListItemIcon>
            <Image
              src={Routes.Assets.Icons.Set(bs.slug)}
              width={36}
              height={36}
              alt=""
            />
          </SelectorListItemIcon>
          <ListItemText primary={bs.displayName} secondary={bs.subText} />
        </SelectorMenuItem>
      ))}
    </ControlledSelector>
  );
};

export default BaseSetSelector;
