import { SetIcon } from '@cardEditor/cardOptions/setIcon';
import {
  sunAndMoon as smBaseSet,
  swordAndShield as ssBaseSet,
} from '../baseSet';

let id = 1;

export const promo: SetIcon = {
  id: id++,
  slug: 'promo',
  displayName: 'Promo',
  shape: 'square',
};

export const swordAndShield: SetIcon = {
  id: id++,
  slug: 'swordAndShield',
  displayName: 'Base',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const rebelClash: SetIcon = {
  id: id++,
  slug: 'rebelClash',
  displayName: 'Rebel Clash',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const darknessAblaze: SetIcon = {
  id: id++,
  slug: 'darknessAblaze',
  displayName: 'Darkness Ablaze',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const futsal: SetIcon = {
  id: id++,
  slug: 'futsal',
  displayName: 'Futsal Collection',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const championsPath: SetIcon = {
  id: id++,
  slug: 'championsPath',
  displayName: 'Champions Path',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const vividVoltage: SetIcon = {
  id: id++,
  slug: 'vividVoltage',
  displayName: 'Vivid Voltage',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const shiningFates: SetIcon = {
  id: id++,
  slug: 'shiningFates',
  displayName: 'Shining Fates',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const battleStyles: SetIcon = {
  id: id++,
  slug: 'battleStyles',
  displayName: 'Battle Styles',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const chillingReign: SetIcon = {
  id: id++,
  slug: 'chillingReign',
  displayName: 'Chilling Reign',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const evolvingSkies: SetIcon = {
  id: id++,
  slug: 'evolvingSkies',
  displayName: 'Evolving Skies',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const mcDonalds2021: SetIcon = {
  id: id++,
  slug: 'mcDonalds2021',
  displayName: "McDonald's Collection 2021",
  baseSet: ssBaseSet.id,
  shape: 'rectangle',
};

export const celebrations: SetIcon = {
  id: id++,
  slug: 'celebrations',
  displayName: 'Celebrations',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const fusionStrike: SetIcon = {
  id: id++,
  slug: 'fusionStrike',
  displayName: 'Fusion Strike',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const brilliantStars: SetIcon = {
  id: id++,
  slug: 'brilliantStars',
  displayName: 'Brilliant Stars',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const astralRadiance: SetIcon = {
  id: id++,
  slug: 'astralRadiance',
  displayName: 'Astral Radiance',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const pokemonGO: SetIcon = {
  id: id++,
  slug: 'pokemonGO',
  displayName: 'Pokémon GO',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const lostOrigin: SetIcon = {
  id: id++,
  slug: 'lostOrigin',
  displayName: 'Lost Origins',
  baseSet: ssBaseSet.id,
  shape: 'square',
};

export const sunAndMoon: SetIcon = {
  id: id++,
  slug: 'sunAndMoon',
  displayName: 'Base',
  baseSet: smBaseSet.id,
  shape: 'square',
};

export const setIcons: SetIcon[] = [
  promo,
  swordAndShield,
  rebelClash,
  darknessAblaze,
  futsal,
  championsPath,
  vividVoltage,
  shiningFates,
  battleStyles,
  chillingReign,
  evolvingSkies,
  mcDonalds2021,
  celebrations,
  fusionStrike,
  brilliantStars,
  astralRadiance,
  pokemonGO,
  lostOrigin,
  sunAndMoon,
];
