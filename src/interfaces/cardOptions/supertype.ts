import { IdentifierInfo } from '.';

export interface SupertypeLogic {
  /**
   * Whether the supertype has hitpoints text
   * @default false
   */
  hasHitpoints: boolean;
  /**
   * Whether the supertype can have moves (Pokémon attack/ability)
   * @default false
   */
  hasMoves: boolean;
}

// Pokémon/Trainer/Energy
export interface Supertype extends IdentifierInfo {
  logic: SupertypeLogic;
}
