import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { StyledText } from './styles';

const PrevolveName: FC = () => {
  const { prevolveName } = useCardOptions();
  const { hasPrevolve } = useCardLogic();
  const {
    positions: { prevolveName: placement },
  } = useCardStyles();

  if (!hasPrevolve || !prevolveName) return null;

  return (
    <StyledText placement={placement}>Evolves from {prevolveName}</StyledText>
  );
};

export default PrevolveName;
