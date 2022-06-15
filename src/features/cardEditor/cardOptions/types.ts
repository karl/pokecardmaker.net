import { BaseSet } from './baseSet/types';
import { CardLogic } from '../cardLogic/types';
import { CardStyles } from '../cardStyles/types';
import { Rarity } from './rarity/types';
import { RarityIcon } from './rarityIcon/types';
import { RotationIcon } from './rotationIcon/types';
import { SetIcon } from './setIcon/types';
import { Subtype } from './subtype/types';
import { Supertype } from './supertype/types';
import { Type } from './type/types';
import { Variation } from './variation/types';

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
