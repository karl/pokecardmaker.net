export type AbilitySymbol = 'normal' | 'v' | 'vstar';
export type NameSymbol = 'vmax' | 'v' | 'star' | 'vstar' | 'ex';
export type TextColor = 'white' | 'black';
export type Size = 'sm' | 'lg';

export interface Placement {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  height?: string;
  width?: string;
  order?: string;
  gap?: string;
  'line-height'?: string;
}

export interface Positions {
  name?: Placement;
  prevolveImg?: Placement;
  ability?: Placement;
  move2?: Placement;
  description?: Placement;
  movesWrapper?: Placement;
}

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
   * Illustrator, set icon, rotation icon, card number, rarity icon
   * @default none
   */
  cardInfoOutline?: TextColor;
  /**
   * The bar that shows weakness & resistance
   * @default none
   */
  typeBarOutline?: TextColor;
  /**
   * The bar in the middle of the card that describes height and weight
   * @default none
   */
  dexStatsOutline?: TextColor;
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
   * The bar that shows weakness & resistance
   * @default black
   */
  typeBarTextColor: TextColor;
  /**
   * Illustrator, set icon, rotation icon, card number, rarity icon
   * @default black
   */
  cardInfoTextColor: TextColor;
  /**
   * The bar in the middle of the card that describes height and weight
   * @default black
   */
  dexStatsTextColor: TextColor;
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
   * @default 'sm'
   */
  hpSize: Size;
  /**
   * @default none
   */
  abilitySymbol?: AbilitySymbol;
  /**
   * @default false
   */
  hasSubnameBeforeName?: boolean;
  /**
   * Used to change position of items displayed on the card \
   * For example, `Name` is displayed differently on a Pokémon and a Trainer
   */
  positions: Partial<Positions>;
}
