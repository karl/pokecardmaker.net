import { CardDebugContext } from '@cardEditor/cardDebug';
import { useContext } from 'react';

const useCardDebug = () => {
  const debug = useContext(CardDebugContext);

  return debug;
};

export default useCardDebug;
