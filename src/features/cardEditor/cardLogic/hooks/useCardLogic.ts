import { CardLogicContext } from '@cardEditor/cardLogic';
import { useContext } from 'react';

const useCardLogic = () => {
  const { state } = useContext(CardLogicContext);

  return state;
};

export default useCardLogic;
