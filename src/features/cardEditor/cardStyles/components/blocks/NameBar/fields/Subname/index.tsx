import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import { SubnameText } from './styles';

const Subname: FC = () => {
  const { subname } = useCardOptions();
  const { hasSubname } = useCardLogic();

  if (!hasSubname || !subname) return null;

  return <SubnameText>{subname}</SubnameText>;
};

export default Subname;
