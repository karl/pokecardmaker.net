import { useCardOptions } from '@cardEditor/cardOptions';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import TypeImgWrapper from '../../atoms/TypeImgWrapper';
import { Wrapper } from './styles';

const imgSrc = Routes.Assets.Icons.Type('colorless');

const RetreatCost: FC = () => {
  const { retreatCost } = useCardOptions();

  if (!retreatCost) return null;

  return (
    <Wrapper>
      {new Array(retreatCost).fill(undefined).map((_, i) => (
        <TypeImgWrapper key={i}>
          <DisplayImg src={imgSrc} />
        </TypeImgWrapper>
      ))}
    </Wrapper>
  );
};

export default RetreatCost;
