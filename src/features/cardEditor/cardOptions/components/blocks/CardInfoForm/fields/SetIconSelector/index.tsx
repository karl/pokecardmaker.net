import { Icon, ListItemText, SelectChangeEvent } from '@mui/material';
import { FC, useState } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { useSetIcon } from '@cardEditor/cardOptions/setIcon';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import { QuestionMark as QuestionMarkIcon } from '@mui/icons-material';
import FileUploader from '@components/inputs/FileUploader';

const SetIconSelector: FC = () => {
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

  return (
    <>
      <ControlledSelector
        value={customIconActive ? 0 : setIcon?.id}
        displayName="Set Icon"
        slug="setIcon"
        onChange={handleChange}
      >
        <SelectorMenuItem value={0}>
          <SelectorListItemIcon>
            <Icon>
              <QuestionMarkIcon />
            </Icon>
          </SelectorListItemIcon>
          <ListItemText primary="Custom" />
        </SelectorMenuItem>
        {setIcons.map(si => (
          <SelectorMenuItem key={si.slug} value={si.id}>
            <SelectorListItemIcon>
              <Image
                src={Routes.Assets.Icons.Set(si.slug)}
                width={36}
                height={36}
                alt=""
              />
            </SelectorListItemIcon>
            <ListItemText primary={si.displayName} />
          </SelectorMenuItem>
        ))}
      </ControlledSelector>
      {customIconActive && (
        <FileUploader
          slug="customSetIconSrc"
          label="Custom Set Icon"
          onChange={setCustomSetIconSrc}
        />
      )}
    </>
  );
};

export default SetIconSelector;
