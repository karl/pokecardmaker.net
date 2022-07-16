import { useRotationIcon } from '@cardEditor/cardOptions/rotationIcon';
import useBase64Img from '@hooks/useBase64Img';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';

const RotationIcon: FC = () => {
  const { rotationIcon } = useRotationIcon();
  const imgSrc = useBase64Img(
    rotationIcon && Routes.Assets.Icons.Rotation(rotationIcon.slug),
  );

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

export default RotationIcon;
