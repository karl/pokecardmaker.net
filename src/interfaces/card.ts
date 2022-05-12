interface BaseMove {
  name: string;
  description: string;
}

export interface MoveType {
  amount: number;
  typeId: number;
}

export interface AttackMove extends BaseMove {
  damageAmount: string;
  energyCost: MoveType[];
}

export type AbilityMove = BaseMove;

export interface Card {
  name?: string;
  subname?: string;
  backgroundImageSrc?: string;
  imageLayer1Src?: string;
  imageLayer2Src?: string;
  customSetIconSrc?: string;
  typeImageSrc?: string;
  typeImageAmount?: number;
  cardNumber?: string;
  totalInSet?: string;
  hitpoints?: number;
  illustrator?: string;
  weaknessAmount?: number;
  resistanceAmount?: number;
  retreatCost?: number;
  prevolveName?: string;
  prevolveImageSrc?: string;
  pokedexEntry?: string;
  description?: string;
  ability?: AbilityMove;
  move1?: AttackMove;
  move2?: AttackMove;
  // Relations
  baseSetId?: number;
  supertypeId?: number;
  typeId?: number;
  subtypeId?: number;
  rarityId?: number;
  variationId?: number;
  weaknessTypeId?: number;
  resistanceTypeId?: number;
  setIconId?: number;
  rotationIconId?: number;
  rarityIconId?: number;
}
