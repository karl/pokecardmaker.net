import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
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
