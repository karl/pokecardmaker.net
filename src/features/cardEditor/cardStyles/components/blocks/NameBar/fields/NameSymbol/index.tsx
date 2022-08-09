import { useCardStyles } from '@cardEditor/cardStyles';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';

const NameSymbol: FC = () => {
  const { nameSymbol } = useCardStyles();
  const imgSrc = !!nameSymbol && Routes.Assets.Symbols.Name(nameSymbol);

  if (!imgSrc) return null;

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
