import useResistanceType from '@cardEditor/cardOptions/type/hooks/useResistanceType';
import useBase64Img from '@hooks/useBase64Img';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import TypeImgWrapper from '../../atoms/TypeImgWrapper';

const ResistanceType: FC = () => {
  const { resistanceType } = useResistanceType();
  const imgSrc = useBase64Img(
    resistanceType && Routes.Assets.Icons.Type(resistanceType.slug),
  );

  if (!imgSrc) return null;

  return (
    <TypeImgWrapper>
      <Image
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        alt=""
        src={imgSrc}
      />
    </TypeImgWrapper>
  );
};

export default ResistanceType;
