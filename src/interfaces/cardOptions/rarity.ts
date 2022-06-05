import { IdentifierInfo, SharedLogic } from '.';
import { CardStyles } from './cardStyles';

export type RarityLogic = SharedLogic;

// None/Promo/Gold Star/Full Art/Golden Full Art
export interface Rarity extends IdentifierInfo {
  styles?: Partial<CardStyles>;
  logic: RarityLogic;
}
