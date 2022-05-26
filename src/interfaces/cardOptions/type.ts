import { IdentifierInfo } from '.';
import { CardStyles } from './cardStyles';

export interface TypeLogic {
  /**
   * Default: false
   */
  hasSubtypes: boolean;
  /**
   * Default: false
   */
  isSubtypeRequired: boolean;
  /**
   * Default: false
   */
  hasSubname: boolean;
  /**
   * Whether this type is a type that a Pokémon can have (Grass/Water)\
   * Default: false
   */
  isPokemonType: boolean;
  /**
   * Whether the type (Grass/Water) can be used as an attack cost type\
   * Default: false
   */
  isAttackCostType: boolean;
  /**
   * The special energy image at the top right\
   * Default: false
   */
  hasTypeImage: boolean;
  /**
   * Whether the type has a description text (Supporter/Special energy text)\
   * Default: false
   */
  hasDescription: boolean;
  /**
   * Default: true
   */
  hasName: boolean;
}

// Grass/Water/Item/Supporter/Base/Special
export interface Type extends IdentifierInfo {
  supertypes: number[];
  rarities: number[];
  styles: CardStyles;
  logic: TypeLogic;
}
