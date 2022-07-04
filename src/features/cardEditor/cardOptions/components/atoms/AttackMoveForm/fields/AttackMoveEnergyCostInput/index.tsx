import { useType } from '@cardEditor/cardOptions/type';
import Label from '@components/inputs/Label';
import { FormControl } from '@mui/material';
import { FC } from 'react';
import { AttackMoveFieldProps } from '../../types';
import EnergyCostTypeField from './components/EnergyCostTypeField';
import { FieldWrapper } from './components/styles';

const AttackMoveEnergyCostInput: FC<AttackMoveFieldProps> = ({
  slug,
  move,
  setMove,
}) => {
  const { attackCostTypes } = useType();

  return (
    <FormControl>
      <Label slug={`${slug}EnergyCost`}>Energy Cost</Label>
      <FieldWrapper id={`${slug}EnergyCost`}>
        {attackCostTypes.map(type => (
          <EnergyCostTypeField
            key={type.id}
            type={type}
            move={move}
            setMove={setMove}
          />
        ))}
      </FieldWrapper>
    </FormControl>
  );
};

export default AttackMoveEnergyCostInput;
