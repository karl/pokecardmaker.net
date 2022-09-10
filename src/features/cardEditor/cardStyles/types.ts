export type AbilitySymbol = 'normal' | 'v' | 'vstar';
export type NameSymbol = 'vmax' | 'v' | 'star' | 'vstar';
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
  'font-size'?: string;
  'margin-left'?: string;
  'align-items'?: string;
}

export interface Positions {
  name?: Placement;
  prevolveImg?: Placement;
  ability?: Placement;
  move2?: Placement;
  description?: Placement;
  typeImgContainer?: Placement;
  typeImg?: Placement;
  cardInfoContainer?: Placement;
  cardInfoBar?: Placement;
  setIcon?: Placement;
  cardNumber?: Placement;
  rarityIcon?: Placement;
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
   * Whether the energy card's type img should have a white border
   * @default true
   */
  hasTypeImgBorder: boolean;
  /**
   * Used to change position of items displayed on the card \
   * For example, `Name` is displayed differently on a Pokémon and a Trainer
   */
  positions: Partial<Positions>;
}
