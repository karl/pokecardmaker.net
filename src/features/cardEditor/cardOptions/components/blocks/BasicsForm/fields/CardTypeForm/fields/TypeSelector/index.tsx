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
import { AnalyticsEvent, useAnalytics } from '@features/analytics';
import { useBaseSet } from '@cardEditor/cardOptions/baseSet';

const TypeSelector: FC = () => {
  const { trackCardCreatorEvent } = useAnalytics();
  const { isPokemonType } = useCardLogic();
  const { baseSet } = useBaseSet();
  const { supertype } = useSupertype();
  const { types, type, setType } = useType();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setType(Number(event.target.value));
      trackCardCreatorEvent(AnalyticsEvent.TypeChange);
    },
    [setType, trackCardCreatorEvent],
  );

  const makeMenuItem = useCallback(
    (item: Type) => {
      if (isPokemonType) {
        return (
          <SelectorMenuItem value={item.id} key={item.slug}>
            <SelectorListItemIcon>
              <Image
                src={Routes.Assets.Icons.Type(baseSet.slug, item.slug)}
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
          <ListItemText primary={item.displayName} secondary={item.subText} />
        </MenuItem>
      );
    },
    [isPokemonType, baseSet],
  );

  return (
    <ControlledSelector
      value={type.id}
      displayName="Type"
      slug="type"
      onChange={handleChange}
    >
      {types.map(
        t =>
          t.baseSetDependencies[baseSet.id]?.supertypes.includes(
            supertype.id,
          ) && makeMenuItem(t),
      )}
    </ControlledSelector>
  );
};

export default TypeSelector;
