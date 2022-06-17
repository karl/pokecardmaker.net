import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import Move1DamageAmount from './fields/Move1DamageAmount';
import Move1Description from './fields/Move1Description';
import Move1EnergyCost from './fields/Move1EnergyCost';
import Move1Name from './fields/Move1Name';
import { TextContainer, TitleBar, Wrapper } from './styles';

const Move1: FC = () => {
  const { hasMoves } = useCardLogic();
  const { move1 } = useCardOptions();

  if (!hasMoves || !move1?.name) return null;

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

export default Move1;
