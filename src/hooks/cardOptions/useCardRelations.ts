import { useContext } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';

const useCardRelations = () => {
  const { relations } = useContext(CardCreatorContext);

  return relations;
};

export default useCardRelations;
