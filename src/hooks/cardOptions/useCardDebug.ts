import { useContext } from 'react';
import { CardCreatorContext } from 'src/context/CardCreatorContext';

const useCardDebug = () => {
  const { debug } = useContext(CardCreatorContext);
  return {
    showDebug: process.env.NODE_ENV === 'development',
    ...debug,
  };
};

export default useCardDebug;
