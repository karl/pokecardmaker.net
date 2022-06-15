import { CardStylesContext } from '@cardEditor/cardStyles';
import { useContext } from 'react';

const useCardStyles = () => {
  const { state, setCardImgObj, cardImgSrc } = useContext(CardStylesContext);

  return {
    ...state,
    cardImgSrc,
    setCardImgObj,
  };
};

export default useCardStyles;
