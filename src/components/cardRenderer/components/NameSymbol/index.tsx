import useCardStyles from '@hooks/cardOptions/useCardStyles';
import useBase64Img from '@hooks/useBase64Img';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';

const NameSymbol: FC = () => {
  const { cardStyles } = useCardStyles();
  const imgSrc = useBase64Img(
    cardStyles.nameSymbol && Routes.Assets.Symbol(cardStyles.nameSymbol),
  );

  if (!cardStyles.nameSymbol || !imgSrc) return null;

  return (
    <Wrapper>
      <Image
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        alt=""
        src={imgSrc}
      />
    </Wrapper>
  );
};

export default NameSymbol;
