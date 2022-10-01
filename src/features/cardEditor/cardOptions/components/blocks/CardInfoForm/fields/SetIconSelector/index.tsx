import {
  Icon,
  ListItemText,
  ListSubheader,
  SelectChangeEvent,
} from '@mui/material';
import { FC, useMemo, useState } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { SetIcon, useSetIcon } from '@cardEditor/cardOptions/setIcon';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import { QuestionMark as QuestionMarkIcon } from '@mui/icons-material';
import FileUploader from '@components/inputs/FileUploader';
import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import findById from '@utils/findById';
import NewFeatureHelpText from '@cardEditor/cardOptions/components/atoms/NewFeatureHelpText';

const SetIconSelector: FC = () => {
  const { baseSets } = useBaseSet();
  const {
    setIcons,
    setIcon,
    setSetIcon,
    customSetIconSrc,
    setCustomSetIconSrc,
  } = useSetIcon();
  const [customIconActive, setCustomIconActive] = useState<boolean>(
    !!customSetIconSrc,
  );

  const handleChange = (event: SelectChangeEvent) => {
    const value = Number(event.target.value);
    if (value) {
      setSetIcon(value);
      setCustomIconActive(false);
      setCustomSetIconSrc(undefined);
    } else {
      setCustomIconActive(true);
    }
  };

  const setIconGroups = useMemo(
    () =>
      setIcons.reduce<{
        [baseSetId: number]: SetIcon[];
      }>((groups, item) => {
        const groupId: number = item.baseSet || 0;
        if (!groups[groupId]) {
          // eslint-disable-next-line no-param-reassign
          groups[groupId] = [];
        }
        groups[groupId].push(item);
        return groups;
      }, {}),
    [setIcons],
  );

  return (
    <>
      <ControlledSelector
        value={customIconActive ? 0 : setIcon?.id}
        displayName="Set Icon"
        slug="setIcon"
        onChange={handleChange}
        helpText={
          <NewFeatureHelpText>
            Try the new{' '}
            <b>
              <i>Sword & Shield</i>
            </b>
            &nbsp;and&nbsp;
            <b>
              <i>Sun & Moon</i>
            </b>{' '}
            set icons!
          </NewFeatureHelpText>
        }
      >
        <SelectorMenuItem value={0}>
          <SelectorListItemIcon>
            <Icon>
              <QuestionMarkIcon />
            </Icon>
          </SelectorListItemIcon>
          <ListItemText primary="Custom" />
        </SelectorMenuItem>
        {Object.entries(setIconGroups).map(([baseSetId, icons]) => {
          const baseSet = findById(baseSets, +baseSetId);
          return [
            ...(baseSet
              ? [
                  <ListSubheader key={baseSet.id}>
                    {baseSet.displayName}
                  </ListSubheader>,
                ]
              : []),
            ...icons.map(si => (
              <SelectorMenuItem key={si.slug} value={si.id}>
                <SelectorListItemIcon>
                  <Image
                    src={Routes.Assets.Icons.Set(si.slug)}
                    width={36}
                    height={si.shape === 'square' ? 36 : 24}
                    alt=""
                  />
                </SelectorListItemIcon>
                <ListItemText primary={si.displayName} secondary={si.subText} />
              </SelectorMenuItem>
            )),
          ];
        })}
      </ControlledSelector>
      {customIconActive && (
        <FileUploader
          slug="customSetIconSrc"
          label="Custom Set Icon"
          onChange={setCustomSetIconSrc}
          tooltipProps={{
            title: 'Recommended size: 38×38 pixels',
          }}
        />
      )}
    </>
  );
};

export default SetIconSelector;
