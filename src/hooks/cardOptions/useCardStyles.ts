import { useContext } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';

const useCardStyles = () => {
  const { cardStyles } = useContext(CardCreatorContext);
  return cardStyles;
};

export default useCardStyles;
