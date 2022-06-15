import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import useCardStyles from 'src/features/cardEditor/cardStyles/useCardStyles';
import { FC } from 'react';
import { NameText } from './styles';

const Name: FC = () => {
  const { name } = useCardOptions();
  const { nameOutline, nameTextColor } = useCardStyles();

  if (!name) return null;

  return (
    <NameText $outline={nameOutline} $color={nameTextColor}>
      {name}
    </NameText>
  );
};

export default Name;
