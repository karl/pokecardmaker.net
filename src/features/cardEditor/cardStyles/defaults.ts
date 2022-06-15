import { CardStyles } from '@cardEditor/cardStyles';
import { RequiredIsh } from '@interfaces/utils';

export const defaultCardStyles: RequiredIsh<CardStyles> = {
  nameTextColor: 'black',
  hpTextColor: 'black',
  movesTextColor: 'black',
  typeBarTextColor: 'black',
  cardInfoTextColor: 'black',
  rarityIconColor: 'black',
  nameOutline: undefined,
  hpOutline: undefined,
  movesOutline: undefined,
  cardInfoOutline: undefined,
  abilitySymbol: undefined,
  nameSymbol: undefined,
  hpSize: 'sm',
  alignMovesBottom: false,
};
