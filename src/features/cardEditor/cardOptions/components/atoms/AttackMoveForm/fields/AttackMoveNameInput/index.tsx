import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';
import { AttackMoveFieldProps } from '../../types';

const AttackMoveNameInput: FC<AttackMoveFieldProps> = ({
  slug,
  move,
  setMove,
}) => (
  <TextInput
    slug={`${slug}Name`}
    label="Name"
    value={move.name}
    onChange={value =>
      setMove({
        ...move,
        name: value,
      })
    }
  />
);

export default AttackMoveNameInput;
