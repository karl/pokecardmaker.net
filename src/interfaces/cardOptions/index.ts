import { BaseSet } from './baseSet';
import { CardLogic } from './cardLogic';
import { CardStyles } from './cardStyles';
import { Rarity } from './rarity';
import { RarityIcon } from './rarityIcon';
import { RotationIcon } from './rotationIcon';
import { SetIcon } from './setIcon';
import { Subtype } from './subtype';
import { Supertype } from './supertype';
import { Type } from './type';
import { Variation } from './variation';

export interface CardTypeHelpers {
  styles?: Partial<CardStyles>;
  logic?: Partial<CardLogic>;
}

export interface IdentifierInfo {
  /**
   * Used for finding and identifying objects
   */
  id: number;
  /**
   * Used for React keys and dynamic image retrieval
   */
  slug: string;
  /**
   * Used to display to the user
   */
  displayName: string;
}

export interface ImageInfo {
  /**
   * The source to the image that belongs to this object
   */
  imgSrc: string;
}

export interface CardOptions {
  baseSets: BaseSet[];
  supertypes: Supertype[];
  types: Type[];
  subtypes: Subtype[];
  variations: Variation[];
  rarities: Rarity[];
  setIcons: SetIcon[];
  rotationIcons: RotationIcon[];
  rarityIcons: RarityIcon[];
}
