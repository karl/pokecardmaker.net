/**
 * Make all properties in T required but allow the value `undefined`
 */
export type RequiredIsh<T> = {
  [P in keyof Required<T>]: T[P];
};
