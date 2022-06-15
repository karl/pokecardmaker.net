import { useCardDebug } from '@cardEditor/cardDebug';
import DebugImage from '@components/cardRenderer/components/DebugImage';
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
