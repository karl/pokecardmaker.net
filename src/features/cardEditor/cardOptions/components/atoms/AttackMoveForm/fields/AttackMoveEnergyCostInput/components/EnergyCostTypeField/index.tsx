import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import {
  ExpandMore as ChevronDownIcon,
  ExpandLess as ChevronUpIcon,
} from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useCallback, useMemo } from 'react';
import { TypeContainer } from './styles';
import { EnergyCostTypeFieldProps } from './types';

const EnergyCostTypeField: FC<EnergyCostTypeFieldProps> = ({
  type,
  move,
  setMove,
}) => {
  const { baseSet } = useBaseSet();

  const energyCost = useMemo(
    () => move.energyCost.find(ec => ec.typeId === type.id),
    [move.energyCost, type],
  );

  const add = useCallback(() => {
    const newCost = [...move.energyCost];
    const energyCostIndex = newCost.findIndex(
      ec => ec.typeId === energyCost?.typeId,
    );

    if (energyCostIndex === -1) {
      // Cost amount for this type is 0, add it to the array
      newCost.push({
        amount: 1,
        typeId: type.id,
      });
    } else {
      // Cost amount for this type is greater than 0, add 1
      newCost[energyCostIndex] = {
        ...newCost[energyCostIndex],
        amount: newCost[energyCostIndex].amount + 1,
      };
    }

    setMove({
      ...move,
      energyCost: newCost,
    });
  }, [energyCost, setMove, move, type.id]);

  const remove = useCallback(() => {
    const newCost = [...move.energyCost];
    const energyCostIndex = newCost.findIndex(
      ec => ec.typeId === energyCost?.typeId,
    );

    // Cost amount for this type is 0, do nothing
    if (energyCostIndex === -1) return;

    if (newCost[energyCostIndex].amount === 1) {
      // Cost amount for this type is 1, remove it from the array
      newCost.splice(energyCostIndex, 1);
    } else {
      // Cost amount greater than 1, remove 1
      newCost[energyCostIndex] = {
        ...newCost[energyCostIndex],
        amount: newCost[energyCostIndex].amount - 1,
      };
    }

    setMove({
      ...move,
      energyCost: newCost,
    });
  }, [energyCost, setMove, move]);

  return (
    <Box display="flex" flexDirection="column" width={30} alignItems="center">
      <IconButton aria-label="add" size="small" onClick={add}>
        <ChevronUpIcon />
      </IconButton>
      <TypeContainer>
        <Image
          alt={type.displayName}
          layout="fill"
          objectFit="contain"
          src={Routes.Assets.Icons.TypeBorder(baseSet.slug, type.slug)}
        />
      </TypeContainer>
      <IconButton aria-label="remove" size="small" onClick={remove}>
        <ChevronDownIcon />
      </IconButton>
      <Typography>{energyCost?.amount ?? 0}</Typography>
    </Box>
  );
};

export default EnergyCostTypeField;
