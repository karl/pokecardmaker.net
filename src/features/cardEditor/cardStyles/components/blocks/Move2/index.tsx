import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import Move1DamageAmount from './fields/Move2DamageAmount';
import Move1Description from './fields/Move2Description';
import Move1EnergyCost from './fields/Move2EnergyCost';
import Move1Name from './fields/Move2Name';
import { TextContainer, TitleBar, Wrapper } from './styles';

// TODO: Generalize these components with Move1
const Move2: FC = () => {
  const { hasMoves } = useCardLogic();
  const { move2, hasMove2 } = useCardOptions();

  if (!hasMoves || !hasMove2 || !move2?.name) return null;

  return (
    <Wrapper>
      <TitleBar>
        <Move1EnergyCost />
        <Move1Name />
        <Move1DamageAmount />
      </TitleBar>
      <TextContainer>
        <Move1Description />
      </TextContainer>
    </Wrapper>
  );
};

export default Move2;
