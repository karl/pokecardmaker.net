import { useCardLogic } from '@cardEditor/cardLogic';
import { FC } from 'react';
import CardNumber from './fields/CardNumber';
import DexEntry from './fields/DexEntry';
import Illustrator from './fields/Illustrator';
import RarityIcon from './fields/RarityIcon';
import RotationIcon from './fields/RotationIcon';
import SetIcon from './fields/SetIcon';
import { CardInfoBar, Wrapper } from './styles';

const CardInfo: FC = () => {
  const { hasCardInfo } = useCardLogic();

  if (!hasCardInfo) return null;

  return (
    <>
      <Wrapper>
        <Illustrator />
        <CardInfoBar>
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
