export type AbilitySymbol = 'normal' | 'v';
export type NameSymbol = 'vmax' | 'v' | 'star';
export type TextColor = 'white' | 'black';
export type Size = 'sm' | 'lg';

export interface CardStyles {
  /**
   * @default none
   */
  nameOutline?: TextColor;
  /**
   * @default none
   */
  hpOutline?: TextColor;
  /**
   * @default none
   */
  movesOutline?: TextColor;
  /**
   * Illustrator, set icon, rotation icon, card number, rarity icon\
   * @default none
   */
  cardInfoOutline?: TextColor;
  /**
   * @default black
   */
  nameTextColor: TextColor;
  /**
   * @default black
   */
  hpTextColor: TextColor;
  /**
   * @default black
   */
  movesTextColor: TextColor;
  /**
   * The bar that shows weakness & resistance\
   * @default black
   */
  typeBarTextColor: TextColor;
  /**
   * Illustrator, set icon, rotation icon, card number, rarity icon\
   * @default black
   */
  cardInfoTextColor: TextColor;
  /**
   * @default black
   */
  rarityIconColor: TextColor;
  /**
   * @default none
   */
  nameSymbol?: NameSymbol;
  /**
   * @default false
   */
  alignMovesBottom: boolean;
  /**
   * The middle bar that shows weight etc.\
   * @default true
   */
  hasDexStats: boolean;
  /**
   * The bottom-right Pokédex entry text\
   * @default true
   */
  hasDexEntry: boolean;
  /**
   * @default 'sm'
   */
  hpSize: Size;
  /**
   * @default none
   */
  abilitySymbol?: AbilitySymbol;
  /**
   * Set icon, rotation icon, card number, rarity icon\
   * @default true
   */
  hasCardInfo: boolean;
  /**
   * @default true
   */
  hasIllustratorName: boolean;
}
