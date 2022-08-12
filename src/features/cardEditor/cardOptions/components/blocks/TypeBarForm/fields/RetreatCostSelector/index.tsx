import { FC, useCallback } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions/hooks';
import ControlledSelector from '@components/inputs/ControlledSelector';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import Routes from '@routes';
import Image from 'next/image';

const MAX_RETREAT_COST = 5;

const RetreatCostSelector: FC = () => {
  const { retreatCost, setRetreatCost } = useCardOptions();

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setRetreatCost(+event.target.value);
    },
    [setRetreatCost],
  );

  return (
    <ControlledSelector
      value={retreatCost}
      displayName="Retreat Cost"
      slug="retreatcost"
      onChange={handleChange}
      gap={0}
    >
      <MenuItem value={0} title="0">
        <Image
          src={Routes.Assets.Icons.TypeBorder('empty')}
          width={26}
          height={26}
          alt=""
        />
      </MenuItem>
      {new Array(MAX_RETREAT_COST).fill(undefined).map((_, costIndex) => (
        <MenuItem
          value={costIndex + 1}
          key={costIndex + 1}
          title={String(costIndex + 1)}
        >
          {new Array(costIndex + 1).fill(undefined).map((__, imageIndex) => (
            <Image
              key={imageIndex}
              src={Routes.Assets.Icons.TypeBorder('colorless')}
              width={26}
              height={26}
              alt=""
            />
          ))}
        </MenuItem>
      ))}
    </ControlledSelector>
  );
};

export default RetreatCostSelector;
