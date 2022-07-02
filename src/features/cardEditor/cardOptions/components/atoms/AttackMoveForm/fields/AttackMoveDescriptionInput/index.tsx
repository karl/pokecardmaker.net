import TextAreaInput from '@components/inputs/TextAreaInput';
import { FC } from 'react';
import { AttackMoveFieldProps } from '../../types';

const AttackMoveDescriptionInput: FC<AttackMoveFieldProps> = ({
  slug,
  move,
  setMove,
}) => (
  <TextAreaInput
    slug={`${slug}Description`}
    label="Description"
    value={move.description}
    onChange={value =>
      setMove({
        ...move,
        description: value,
      })
    }
  />
);

export default AttackMoveDescriptionInput;
