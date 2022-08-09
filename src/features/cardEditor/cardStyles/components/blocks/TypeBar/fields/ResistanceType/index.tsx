import useResistanceType from '@cardEditor/cardOptions/type/hooks/useResistanceType';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import TypeImgWrapper from '../../atoms/TypeImgWrapper';

const ResistanceType: FC = () => {
  const { resistanceType } = useResistanceType();
  const imgSrc =
    !!resistanceType && Routes.Assets.Icons.Type(resistanceType.slug);

  if (!imgSrc) return null;

  return (
    <TypeImgWrapper>
      <DisplayImg src={imgSrc} />
    </TypeImgWrapper>
  );
};

export default ResistanceType;
