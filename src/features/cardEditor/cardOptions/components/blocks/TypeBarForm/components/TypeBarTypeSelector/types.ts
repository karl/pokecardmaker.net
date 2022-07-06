import { Type } from '@cardEditor/cardOptions/type';

export interface TypeBarTypeSelectorProps {
  slug: string;
  displayName: string;
  type?: Type;
  setType: (typeId: number) => void;
}
