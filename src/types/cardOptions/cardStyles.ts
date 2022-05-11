export type AbilitySymbol = 'normal' | 'v';
export type NameSymbol = 'vmax' | 'v' | 'star';
export type TextColor = 'white' | 'black';

export interface CardStyles {
  /**
   * Default: none
   */
  nameOutline?: TextColor;
  /**
   * Default: none
   */
  hpOutline?: TextColor;
  /**
   * Default: none
   */
  movesOutline?: TextColor;
  /**
   * Illustrator, set icon, rotation icon, card number, rarity icon\
   * Default: none
   */
  cardInfoOutline?: TextColor;
  /**
   * Default: black
   */
  nameTextColor?: TextColor;
  /**
   * Default: black
   */
  hpTextColor?: TextColor;
  /**
   * Default: black
   */
  movesTextColor?: TextColor;
  /**
   * The bar that shows weakness & resistance\
   * Default: black
   */
  typeBarTextColor?: TextColor;
  /**
   * Illustrator, set icon, rotation icon, card number, rarity icon\
   * Default: black
   */
  cardInfoTextColor?: TextColor;
  /**
   * Default: black
   */
  rarityIconColor?: TextColor;
  /**
   * Default: none
   */
  nameSymbol?: NameSymbol;
  /**
   * Default: false
   */
  alignMovesBottom?: boolean;
  /**
   * The middle bar that shows weight etc.\
   * Default: true
   */
  hasDexStats?: boolean;
  /**
   * The bottom-right Pokédex entry text\
   * Default: true
   */
  hasDexEntry?: boolean;
  /**
   * Default: 'sm'
   */
  hpSize?: 'sm' | 'lg';
  /**
   * Default: none
   */
  abilitySymbol?: AbilitySymbol;
  /**
   * Set icon, rotation icon, card number, rarity icon\
   * Default: true
   */
  hasCardInfo?: boolean;
  /**
   * Default: true
   */
  hasIllustratorName?: boolean;
}
