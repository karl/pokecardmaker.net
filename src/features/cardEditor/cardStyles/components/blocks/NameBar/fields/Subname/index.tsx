import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { SubnameText } from './styles';

const Subname: FC = () => {
  const { hasSubnameBeforeName: beforeName } = useCardStyles();
  const { subname } = useCardOptions();
  const { hasSubname } = useCardLogic();

  if (!hasSubname || !subname) return null;

  return <SubnameText $beforeName={!!beforeName}>{subname}</SubnameText>;
};

export default Subname;
