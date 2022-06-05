import { IdentifierInfo, SharedLogic } from '.';
import { CardStyles } from './cardStyles';

export interface TypeLogic extends SharedLogic {
  /**
   * @default false
   */
  hasSubtypes: boolean;
  /**
   * @default false
   */
  isSubtypeRequired: boolean;
  /**
   * @default false
   */
  hasSubname: boolean;
  /**
   * Whether this type is a type that a Pokémon can have (Grass/Water)
   * @default false
   */
  isPokemonType: boolean;
  /**
   * Whether the type (Grass/Water) can be used as an attack cost type
   * @default false
   */
  isAttackCostType: boolean;
  /**
   * The special energy image at the top right
   * @default false
   */
  hasTypeImage: boolean;
  /**
   * Whether the type has a description text (Supporter/Special energy text)
   * @default false
   */
  hasDescription: boolean;
  /**
   * @default true
   */
  hasName: boolean;
}

// Grass/Water/Item/Supporter/Base/Special
export interface Type extends IdentifierInfo {
  supertypes: number[];
  rarities: number[];
  styles?: Partial<CardStyles>;
  logic: TypeLogic;
}
