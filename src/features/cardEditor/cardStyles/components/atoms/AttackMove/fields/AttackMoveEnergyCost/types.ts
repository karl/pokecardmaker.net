import { AttackMoveDisplayProps, AttackMoveProps } from '../../types';

export type AttackMovePropsEnergyCostProps = AttackMoveDisplayProps &
  Pick<AttackMoveProps, 'hasAttackCostBorder'>;
