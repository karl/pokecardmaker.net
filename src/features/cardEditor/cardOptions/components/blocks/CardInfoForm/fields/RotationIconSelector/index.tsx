import { ListItemText, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';
import Routes from '@routes';
import Image from 'next/image';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { useRotationIcon } from '@cardEditor/cardOptions/rotationIcon';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import NewFeatureHelpText from '@cardEditor/cardOptions/components/atoms/NewFeatureHelpText';

const RotationIconSelector: FC = () => {
  const { rotationIcons, rotationIcon, setRotationIcon } = useRotationIcon();

  const handleChange = (event: SelectChangeEvent) => {
    setRotationIcon(Number(event.target.value));
  };

  return (
    <ControlledSelector
      value={rotationIcon?.id}
      displayName="Rotation Icon"
      slug="rotationIcon"
      onChange={handleChange}
      helpText={
        <NewFeatureHelpText>
          Try the new{' '}
          <b>
            <i>Ditto</i>
          </b>{' '}
          rotation icon!
        </NewFeatureHelpText>
      }
    >
      {rotationIcons.map(ri => (
        <SelectorMenuItem key={ri.slug} value={ri.id}>
          <SelectorListItemIcon>
            <Image
              src={Routes.Assets.Icons.Rotation(ri.slug)}
              width={19}
              height={ri.shape === 'square' ? 19 : 28}
              alt=""
            />
          </SelectorListItemIcon>
          <ListItemText primary={ri.displayName} />
        </SelectorMenuItem>
      ))}
    </ControlledSelector>
  );
};

export default RotationIconSelector;
