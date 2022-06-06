import DebugImage from '@components/cardRenderer/components/DebugImage';
import useCardDebug from '@hooks/cardOptions/useCardDebug';
import { FC } from 'react';

const Debug: FC = () => {
  const { showDebug } = useCardDebug();

  if (!showDebug) return null;

  return (
    <>
      <DebugImage />
    </>
  );
};

export default Debug;
