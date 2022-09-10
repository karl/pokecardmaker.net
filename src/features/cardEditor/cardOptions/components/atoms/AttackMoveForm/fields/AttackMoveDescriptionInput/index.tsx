import TextAreaInput from '@components/inputs/TextAreaInput';
import { FC } from 'react';
import TextFormattingTooltip from '../../../TextFormattingTooltip';
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
    tooltipProps={{
      title: 'Text Formatting',
      withPopup: true,
      children: <TextFormattingTooltip />,
    }}
  />
);

export default AttackMoveDescriptionInput;
