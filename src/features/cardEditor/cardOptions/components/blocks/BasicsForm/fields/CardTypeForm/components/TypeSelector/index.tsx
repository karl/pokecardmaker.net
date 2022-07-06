import ControlledSelector from '@components/inputs/ControlledSelector';
import { ListItemText, MenuItem, SelectChangeEvent } from '@mui/material';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useCallback } from 'react';
import { useCardLogic } from '@cardEditor/cardLogic';
import { useSupertype } from '@cardEditor/cardOptions/supertype';
import { Type, useType } from '@cardEditor/cardOptions/type';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';

const TypeSelector: FC = () => {
  const { isPokemonType } = useCardLogic();
  const { supertype } = useSupertype();
  const { types, type, setType } = useType();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setType(Number(event.target.value));
    },
    [setType],
  );

  const makeMenuItem = useCallback(
    (item: Type) => {
      if (isPokemonType) {
        return (
          <SelectorMenuItem value={item.id} key={item.slug}>
            <SelectorListItemIcon>
              <Image
                src={Routes.Assets.Icons.Type(item.slug)}
                width={26}
                height={26}
                alt=""
              />
            </SelectorListItemIcon>
            <ListItemText primary={item.displayName} />
          </SelectorMenuItem>
        );
      }
      return (
        <MenuItem value={item.id} key={item.slug}>
          <ListItemText primary={item.displayName} />
        </MenuItem>
      );
    },
    [isPokemonType],
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
