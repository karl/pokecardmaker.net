import { colorless, useType } from '@cardEditor/cardOptions/type';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { AttackMoveDisplayProps } from '../../types';
import { TypeContainer, Wrapper } from './styles';

const AttackMoveEnergyCost: FC<AttackMoveDisplayProps> = ({ move }) => {
  const { getTypeById } = useType();

  return (
    <Wrapper>
      {/* If there's no energy cost, display an empty cost symbol */}
      {move?.energyCost.length === 0 && (
        <TypeContainer>
          <Image
            alt=""
            layout="fill"
            objectFit="contain"
            src={Routes.Assets.Icons.TypeBorder('empty')}
          />
        </TypeContainer>
      )}
      {move?.energyCost.length !== 0 &&
        [...(move?.energyCost ?? [])]
          // Sort Colorless to the end
          .sort(type => (type.typeId === colorless.id ? 1 : -1))
          .flatMap(energy =>
            new Array(energy.amount).fill(null).map((_, i) => (
              <TypeContainer key={`${energy.typeId}-${i}`}>
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
