import { IdentifierInfo } from '@cardEditor/cardOptions';

/**
 * Finds an object in an array based on their id
 * @param array An array of objects which can be identified by their id
 * @param id The id you wish to get an object by
 * @param fallback A fallback variable for when the object could not be found
 */
function findById<T extends IdentifierInfo>(
  array: T[],
  id: number | undefined,
  fallback: T,
): T;
function findById<T extends IdentifierInfo>(
  array: T[],
  id?: number,
  fallback?: T,
): T | undefined;

function findById<T extends IdentifierInfo>(
  array: T[],
  id?: number,
  fallback?: T,
) {
  return id ? array.find(o => o.id === id) ?? fallback : undefined;
}

export default findById;
