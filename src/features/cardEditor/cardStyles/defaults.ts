import { CardStyles } from '@cardEditor/cardStyles';
import { RequiredIsh } from '@interfaces/utils';

export const defaultCardStyles: RequiredIsh<CardStyles> = {
  nameTextColor: 'black',
  hpTextColor: 'black',
  movesTextColor: 'black',
  typeBarTextColor: 'black',
  cardInfoTextColor: 'black',
  rarityIconColor: 'black',
  dexStatsTextColor: 'black',
  nameOutline: undefined,
  hpOutline: undefined,
  movesOutline: undefined,
  cardInfoOutline: undefined,
  typeBarOutline: undefined,
  dexStatsOutline: undefined,
  abilitySymbol: undefined,
  nameSymbol: undefined,
  hpSize: 'sm',
  alignMovesBottom: false,
  hasSubnameBeforeName: false,
  // TODO: Create default for this
  positions: {},
};
