import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useCardStyles from '@hooks/cardOptions/useCardStyles';
import { FC } from 'react';
import { NameText } from './styles';

const Name: FC = () => {
  const {
    state: { name },
  } = useCardOptions();
  const { cardStyles } = useCardStyles();

  if (!name) return null;

  return (
    <NameText
      $outline={cardStyles.nameOutline}
      $color={cardStyles.nameTextColor}
    >
      {name}
    </NameText>
  );
};

export default Name;
