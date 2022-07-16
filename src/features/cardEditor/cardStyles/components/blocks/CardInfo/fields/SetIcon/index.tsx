import { useSetIcon } from '@cardEditor/cardOptions/setIcon';
import useBase64Img from '@hooks/useBase64Img';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';

const SetIcon: FC = () => {
  const { setIcon } = useSetIcon();
  const imgSrc = useBase64Img(setIcon && Routes.Assets.Icons.Set(setIcon.slug));

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

export default SetIcon;
