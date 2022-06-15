import { Type } from './cardOptions/type/types';
import { BaseSet } from './cardOptions/baseSet/types';
import { Rarity } from './cardOptions/rarity/types';
import { RarityIcon } from './cardOptions/rarityIcon/types';
import { RotationIcon } from './cardOptions/rotationIcon/types';
import { SetIcon } from './cardOptions/setIcon/types';
import { Subtype } from './cardOptions/subtype/types';
import { Supertype } from './cardOptions/supertype/types';
import { Variation } from './cardOptions/variation/types';

export interface BaseMove {
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

export interface CardInterface {
  name?: string;
  subname?: string;
  backgroundImgSrc?: string;
  imgLayer1Src?: string;
  imgLayer2Src?: string;
  customSetIconSrc?: string;
  typeImgSrc?: string;
  typeImgAmount?: number;
  cardNumber?: string;
  totalInSet?: string;
  hitpoints?: number;
  illustrator?: string;
  weaknessAmount?: number;
  resistanceAmount?: number;
  retreatCost?: number;
  prevolveName?: string;
  prevolveImgSrc?: string;
  dexStats?: string;
  dexEntry?: string;
  description?: string;
  hasAbility: boolean;
  ability?: AbilityMove;
  move1?: AttackMove;
  hasMove2: boolean;
  move2?: AttackMove;
  // Relations
  baseSetId: number;
  supertypeId: number;
  typeId: number;
  subtypeId?: number;
  rarityId?: number;
  variationId?: number;
  weaknessTypeId?: number;
  resistanceTypeId?: number;
  setIconId?: number;
  rotationIconId?: number;
  rarityIconId?: number;
}

/**
 * Optionalities hould align with the relations in CardInterface
 */
export interface RelationsInterface {
  baseSet: BaseSet;
  supertype: Supertype;
  type: Type;
  subtype?: Subtype;
  rarity?: Rarity;
  variation?: Variation;
  weaknessType?: Type;
  resistanceType?: Type;
  setIcon?: SetIcon;
  rotationIcon?: RotationIcon;
  rarityIcon?: RarityIcon;
}
