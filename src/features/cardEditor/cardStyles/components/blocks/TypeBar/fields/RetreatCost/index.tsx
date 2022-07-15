import { useCardOptions } from '@cardEditor/cardOptions';
import useBase64Img from '@hooks/useBase64Img';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import TypeImgWrapper from '../../atoms/TypeImgWrapper';
import { Wrapper } from './styles';

const RetreatCost: FC = () => {
  const { retreatCost } = useCardOptions();
  const imgSrc = useBase64Img(Routes.Assets.Icons.Type('colorless'));

  if (!retreatCost || !imgSrc) return null;

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
