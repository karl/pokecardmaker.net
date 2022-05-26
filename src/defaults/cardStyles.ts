import { CardStyles } from '@interfaces/cardOptions/cardStyles';
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
  hasCardInfo: true,
  hasDexEntry: true,
  hasDexStats: true,
  hasIllustratorName: true,
  alignMovesBottom: false,
};
