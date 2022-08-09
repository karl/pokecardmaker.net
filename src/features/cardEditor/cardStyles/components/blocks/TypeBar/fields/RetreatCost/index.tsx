import { useCardOptions } from '@cardEditor/cardOptions';
import Routes from '@routes';
import Image from 'next/image';
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
          <Image
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt=""
            src={imgSrc}
          />
        </TypeImgWrapper>
      ))}
    </Wrapper>
  );
};

export default RetreatCost;
