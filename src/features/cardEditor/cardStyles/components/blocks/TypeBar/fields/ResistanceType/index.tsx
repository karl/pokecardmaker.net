import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import { useResistanceType } from '@cardEditor/cardOptions/type';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import TypeImgWrapper from '../../atoms/TypeImgWrapper';

const ResistanceType: FC = () => {
  const { baseSet } = useBaseSet();
  const { resistanceType } = useResistanceType();
  const imgSrc =
    !!resistanceType &&
    Routes.Assets.Icons.Type(baseSet.slug, resistanceType.slug);

  if (!imgSrc) return null;

  return (
    <TypeImgWrapper>
      <DisplayImg src={imgSrc} />
    </TypeImgWrapper>
  );
};

export default ResistanceType;
