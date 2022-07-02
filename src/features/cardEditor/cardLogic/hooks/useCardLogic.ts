import { CardLogicContext } from '@cardEditor/cardLogic';
import { useContext } from 'react';

const useCardLogic = () => {
  const { state, greatestEnergyCost } = useContext(CardLogicContext);

  return {
    ...state,
    greatestEnergyCost,
  };
};

export default useCardLogic;
