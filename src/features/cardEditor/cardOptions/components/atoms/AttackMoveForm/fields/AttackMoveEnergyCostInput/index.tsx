import { useType } from '@cardEditor/cardOptions/type';
import { FormControl, FormLabel } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { AttackMoveFieldProps } from '../../types';
import EnergyCostTypeField from './components/EnergyCostTypeField';

const AttackMoveEnergyCostInput: FC<AttackMoveFieldProps> = ({
  slug,
  move,
  setMove,
}) => {
  const { attackCostTypes } = useType();

  return (
    <FormControl>
      <FormLabel sx={{ paddingLeft: 2 }} htmlFor={`${slug}EnergyCost`}>
        Energy Cost
      </FormLabel>
      <Box
        id={`${slug}EnergyCost`}
        display="flex"
        width="100%"
        justifyContent="space-between"
      >
        {attackCostTypes.map(type => (
          <EnergyCostTypeField
            key={type.id}
            type={type}
            move={move}
            setMove={setMove}
          />
        ))}
      </Box>
    </FormControl>
  );
};

export default AttackMoveEnergyCostInput;
