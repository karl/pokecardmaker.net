import { useContext } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';

const useCardLogic = () => {
  const { cardLogic } = useContext(CardCreatorContext);
  return cardLogic;
};

export default useCardLogic;
