import { IdentifierInfo } from '.';

export interface SupertypeLogic {
  /**
   * Whether the supertype has hitpoints text
   * @default
   * false
   */
  hasHitpoints: boolean;
}

// Pokémon/Trainer/Energy
export interface Supertype extends IdentifierInfo {
  logic: SupertypeLogic;
}
