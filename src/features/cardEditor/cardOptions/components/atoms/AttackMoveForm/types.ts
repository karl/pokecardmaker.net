import { AttackMove } from '@cardEditor/types';

export interface AttackMoveFormProps {
  label: string;
  slug: string;
  move: AttackMove;
  setMove: (move: AttackMove | undefined) => void;
}

export type AttackMoveFieldProps = Omit<AttackMoveFormProps, 'label'>;
