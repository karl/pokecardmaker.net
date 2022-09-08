import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import CardNumber from './fields/CardNumber';
import DexEntry from './fields/DexEntry';
import Illustrator from './fields/Illustrator';
import RarityIcon from './fields/RarityIcon';
import RotationIcon from './fields/RotationIcon';
import SetIcon from './fields/SetIcon';
import { CardInfoBar, Wrapper } from './styles';

const CardInfo: FC = () => {
  const { positions: { cardInfoContainer: containerPlacement, cardInfoBar: infoBarPlacement }} = useCardStyles();
  const { hasCardInfo } = useCardLogic();

  if (!hasCardInfo) return null;

  return (
    <>
      <Wrapper {...containerPlacement}>
        <Illustrator />
        <CardInfoBar {...infoBarPlacement}>
          <SetIcon />
          <RotationIcon />
          <CardNumber />
          <RarityIcon />
        </CardInfoBar>
      </Wrapper>
      <DexEntry />
    </>
  );
};

export default CardInfo;
