import { IdentifierInfo } from '@cardEditor/cardOptions';
import { Dispatch, SetStateAction, useState } from 'react';

/**
 * Like `useState`, but only for objects extending `IdentifierInfo`\
 * This makes sure to not rerender because of changing object references
 * when setting the state to an object with an identical `id`
 */
function useIdentifyState<S extends IdentifierInfo>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>];
function useIdentifyState<S extends IdentifierInfo | undefined = undefined>(): [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
];

function useIdentifyState<S extends IdentifierInfo>(
  initialState?: S | (() => S),
) {
  type OptionalS = S | undefined;
  const [state, setState] = useState<OptionalS>(initialState);

  const setStateIfDifferent: Dispatch<SetStateAction<OptionalS>> = (
    value?: S | ((previousState?: S) => OptionalS),
  ) => {
    if (!value) return setState(value);

    return setState(currentValue => {
      let newValue: OptionalS;
      if (typeof value === 'function') {
        newValue = value(currentValue);
      } else {
        newValue = value;
      }
      return currentValue?.id === newValue?.id ? currentValue : newValue;
    });
  };

  return [state, setStateIfDifferent];
}

export default useIdentifyState;
