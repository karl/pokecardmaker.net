import ControlledSelector from '@components/inputs/ControlledSelector';
import useBaseSet from 'src/features/cardEditor/cardOptions/baseSet/hooks/useBaseSet';
import { ListItemText, SelectChangeEvent } from '@mui/material';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { StyledListItemIcon, StyledMenuItem } from '../styles';

const BaseSetSelector: FC = () => {
  const { baseSets, baseSet, setBaseSet } = useBaseSet();

  const handleChange = (event: SelectChangeEvent) => {
    setBaseSet(Number(event.target.value));
  };

  return (
    <ControlledSelector
      value={baseSet.id}
      displayName="Base set"
      slug="baseSet"
      onChange={handleChange}
    >
      {baseSets.map(bs => (
        <StyledMenuItem key={bs.slug} value={bs.id}>
          <StyledListItemIcon>
            <Image
              src={Routes.Assets.Icons.Set(bs.slug)}
              width={36}
              height={36}
              alt=""
            />
          </StyledListItemIcon>
          <ListItemText primary={bs.displayName} />
        </StyledMenuItem>
      ))}
    </ControlledSelector>
  );
};

export default BaseSetSelector;
