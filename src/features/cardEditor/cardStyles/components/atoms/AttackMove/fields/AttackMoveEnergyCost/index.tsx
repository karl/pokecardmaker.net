import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import { colorless, useType } from '@cardEditor/cardOptions/type';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import Routes from '@routes';
import { FC } from 'react';
import DisplayImg from '../../../DisplayImg';
import { AttackMoveDisplayProps } from '../../types';
import { TypeContainer, Wrapper } from './styles';

const AttackMoveEnergyCost: FC<AttackMoveDisplayProps> = ({ move }) => {
  const {
    hasAttackCostBorder,
    positions: { moveCostWrapper: placement },
  } = useCardStyles();
  const { baseSet } = useBaseSet();
  const { getTypeById } = useType();

  return (
    <Wrapper $typesHaveBorder={hasAttackCostBorder} {...placement}>
      {/* If there's no energy cost, display an empty cost symbol */}
      {move?.energyCost.length === 0 && (
        <TypeContainer $hasBorder={hasAttackCostBorder}>
          <DisplayImg
            src={Routes.Assets.Icons.Type(
              baseSet.slug,
              'empty',
              hasAttackCostBorder,
            )}
          />
        </TypeContainer>
      )}
      {move?.energyCost.length !== 0 &&
        [...(move?.energyCost ?? [])]
          // Sort Colorless to the end
          .sort(type => (type.typeId === colorless.id ? 1 : -1))
          .flatMap(energy =>
            new Array(energy.amount).fill(null).map((_, i) => (
              <TypeContainer
                $hasBorder={hasAttackCostBorder}
                key={`${energy.typeId}-${i}`}
              >
                <DisplayImg
                  src={Routes.Assets.Icons.Type(
                    baseSet.slug,
                    getTypeById(energy.typeId)!.slug,
                    hasAttackCostBorder,
                  )}
                />
              </TypeContainer>
            )),
          )}
    </Wrapper>
  );
};

export default AttackMoveEnergyCost;
