import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import { colorless, useType } from '@cardEditor/cardOptions/type';
import Routes from '@routes';
import { FC } from 'react';
import DisplayImg from '../../../DisplayImg';
import { AttackMoveDisplayProps } from '../../types';
import { TypeContainer, Wrapper } from './styles';

const AttackMoveEnergyCost: FC<AttackMoveDisplayProps> = ({ move }) => {
  const { baseSet } = useBaseSet();
  const { getTypeById } = useType();

  return (
    <Wrapper>
      {/* If there's no energy cost, display an empty cost symbol */}
      {move?.energyCost.length === 0 && (
        <TypeContainer>
          <DisplayImg
            src={Routes.Assets.Icons.TypeBorder(baseSet.slug, 'empty')}
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
                <DisplayImg
                  src={Routes.Assets.Icons.TypeBorder(
                    baseSet.slug,
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
