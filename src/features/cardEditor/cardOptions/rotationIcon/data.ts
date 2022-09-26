import { RotationIcon } from '@cardEditor/cardOptions/rotationIcon';

let id = 1;

export const ditto: RotationIcon = {
  id: id++,
  slug: 'ditto',
  displayName: 'Ditto',
  shape: 'square',
};

export const d: RotationIcon = {
  id: id++,
  slug: 'd',
  displayName: 'D',
  shape: 'rectangle',
};

export const e: RotationIcon = {
  id: id++,
  slug: 'e',
  displayName: 'E',
  shape: 'rectangle',
};

export const f: RotationIcon = {
  id: id++,
  slug: 'f',
  displayName: 'F',
  shape: 'rectangle',
};

export const rotationIcons: RotationIcon[] = [ditto, d, e, f];
