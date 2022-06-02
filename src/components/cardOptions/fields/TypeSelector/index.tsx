import ControlledSelector from '@components/ControlledSelector';
import useSupertype from '@hooks/cardOptions/useSupertype';
import useType from '@hooks/cardOptions/useType';
import { Type } from '@interfaces/cardOptions/type';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useCallback } from 'react';
import { StyledListItemIcon, StyledMenuItem } from '../styles';

const TypeSelector: FC = () => {
  const { supertype } = useSupertype();
  const { types, type, setType } = useType();

  const handleChange = (event: SelectChangeEvent) => {
    setType(Number(event.target.value));
  };

  const makeMenuItem = useCallback(
    (item: Type) => {
      if (type.logic.isPokemonType) {
        return (
          <StyledMenuItem value={item.id} key={item.slug}>
            <StyledListItemIcon>
              <Image
                src={Routes.Assets.Icons.Type(item.slug)}
                width={26}
                height={26}
                alt=""
              />
            </StyledListItemIcon>
            <ListItemText primary={item.displayName} />
          </StyledMenuItem>
        );
      }
      return (
        <MenuItem value={item.id} key={item.slug}>
          <ListItemText primary={item.displayName} />
        </MenuItem>
      );
    },
    [type],
  );

  return (
    <ControlledSelector
      value={type.id}
      displayName="Type"
      slug="type"
      onChange={handleChange}
    >
      {types.map(t => t.supertypes.includes(supertype.id) && makeMenuItem(t))}
    </ControlledSelector>
  );
};

export default TypeSelector;
