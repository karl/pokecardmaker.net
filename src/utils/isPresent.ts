export const isPresent = <T>(t: T | undefined | null | void): t is T =>
  t !== undefined && t !== null;
