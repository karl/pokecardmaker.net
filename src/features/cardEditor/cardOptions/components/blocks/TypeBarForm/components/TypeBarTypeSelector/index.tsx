import ControlledSelector from '@components/inputs/ControlledSelector';
import { ListItemText, SelectChangeEvent } from '@mui/material';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useCallback } from 'react';
import { useType } from '@cardEditor/cardOptions/type';
import { SelectorListItemIcon } from '@components/SelectorListItemIcon';
import { SelectorMenuItem } from '@components/SelectorMenuItem';
import { TypeBarTypeSelectorProps } from './types';

const TypeBarTypeSelector: FC<TypeBarTypeSelectorProps> = ({
  displayName,
  slug,
  type,
  setType,
}) => {
  const { attackCostTypes } = useType();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setType(Number(event.target.value));
    },
    [setType],
  );

  return (
    <ControlledSelector
      value={type?.id}
      displayName={displayName}
      slug={slug}
      onChange={handleChange}
    >
      <SelectorMenuItem value="">
        <SelectorListItemIcon>
          <Image
            src={Routes.Assets.Icons.TypeBorder('empty')}
            width={26}
            height={26}
            alt=""
          />
        </SelectorListItemIcon>
        <ListItemText primary="None" />
      </SelectorMenuItem>
      {attackCostTypes.map(item => (
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
      ))}
    </ControlledSelector>
  );
};

export default TypeBarTypeSelector;
