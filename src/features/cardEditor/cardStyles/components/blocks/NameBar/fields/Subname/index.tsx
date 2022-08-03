import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { SubnameText } from './styles';

const Subname: FC = () => {
  const { subname } = useCardOptions();
  const { nameOutline, nameTextColor } = useCardStyles();
  const { hasSubname } = useCardLogic();

  if (!hasSubname || !subname) return null;

  return (
    <SubnameText $outline={nameOutline} $color={nameTextColor}>
      {subname}
    </SubnameText>
  );
};

export default Subname;
