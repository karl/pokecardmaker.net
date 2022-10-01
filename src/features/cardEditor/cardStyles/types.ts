import { SxProps } from '@mui/system';

export type AbilitySymbol =
  | 'sunAndMoon'
  | 'sunAndMoonGold'
  | 'swordAndShield'
  | 'v'
  | 'vstar';
export type NameSymbol =
  | 'vmax'
  | 'v'
  | 'star'
  | 'vstar'
  | 'ex'
  | 'gx'
  | 'gxUltraBeast'
  | 'prismStar';
export type TextColor = 'white' | 'black' | 'gx' | 'ultraBeast';
export type Size = 'sm' | 'lg';
export type Move3Type = 'gx';
export type MoveBackground = 'gx' | 'gxUltraBeast' | 'gxGold';

export type Placement = SxProps;

export interface Positions {
  name?: Placement;
  hitpoints?: Placement;
  description?: Placement;
  typeImgContainer?: Placement;
  typeImg?: Placement;
  prevolveName?: Placement;
  prevolveImg?: Placement;
  dexStats?: Placement;
  movesWrapper?: Placement;
  ability?: Placement;
  abilityTitleBar?: Placement;
  abilitySymbol?: Placement;
  abilityName?: Placement;
  move2?: Placement;
  typeBar?: Placement;
  weakness?: Placement;
  resistance?: Placement;
  cardInfoContainer?: Placement;
  cardInfoBar?: Placement;
  illustrator?: Placement;
  setIcon?: Placement;
  cardNumber?: Placement;
  rarityIcon?: Placement;
  dexEntry?: Placement;
}

export interface Move3CardLogic
  extends Pick<CardStyles, 'hasAttackCostBorder'> {
  /**
   * @default 'gx'
   */
  type: Move3Type;
  /**
   * @default none
   */
  background?: MoveBackground;
  /**
   * @default 'Third move'
   */
  displayName: string;
  /**
   * @default none
   */
  nameOutline?: TextColor;
  /**
   * @default black
   */
  nameTextColor: TextColor;
  /**
   * @default none
   */
  descriptionOutline?: TextColor;
  /**
   * @default black
   */
  descriptionTextColor: TextColor;
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
   * Whether the card's attack cost type images have white borders
   * @default true
   */
  hasAttackCostBorder: boolean;
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
   * Whether the energy card's type img should have a white border
   * @default true
   */
  hasTypeImgBorder: boolean;
  /**
   * @default false
   */
  hasSubnameBeforeName?: boolean;
  move3: Partial<Move3CardLogic>;
  /**
   * Used to change position of items displayed on the card \
   * For example, `Name` is displayed differently on a Pokémon and a Trainer
   */
  positions: Partial<Positions>;
}
