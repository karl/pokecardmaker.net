import { useSetIcon } from '@cardEditor/cardOptions/setIcon';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';

const SetIcon: FC = () => {
  const { setIcon, customSetIconSrc } = useSetIcon();
  const imgSrc =
    customSetIconSrc || (!!setIcon && Routes.Assets.Icons.Set(setIcon.slug));

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
