import { useContext } from 'react';
import { CardOptionsContext } from '@cardEditor/cardOptions';

const useCardRelations = () => {
  const { relations } = useContext(CardOptionsContext);

  return relations;
};

export default useCardRelations;
