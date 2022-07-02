import { useType } from '@cardEditor/cardOptions/type';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { TypeContainer, Wrapper } from './styles';

const AttackMoveEnergyCost: FC<AttackMoveDisplayProps> = ({ move }) => {
  const { getTypeById } = useType();

  return (
    <Wrapper>
      {move?.energyCost.flatMap(energy =>
        new Array(energy.amount).fill(null).map(_ => (
          <TypeContainer key={energy.typeId}>
            <Image
              alt=""
              layout="fill"
              objectFit="contain"
              src={Routes.Assets.Icons.TypeBorder(
                getTypeById(energy.typeId)!.slug,
              )}
            />
          </TypeContainer>
        )),
      )}
    </Wrapper>
  );
};

export default AttackMoveEnergyCost;
