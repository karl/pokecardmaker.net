import { IdentifierInfo } from '.';
import { CardStyles } from './cardStyles';

// None/Promo/Gold Star/Full Art/Golden Full Art
export interface Rarity extends IdentifierInfo {
  styles: CardStyles;
}
