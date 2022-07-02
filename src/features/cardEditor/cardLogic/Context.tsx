import React, { createContext, useMemo } from 'react';
import { CardLogic, defaultCardLogic } from '@cardEditor/cardLogic';
import merge from 'lodash.merge';
import { useCardOptions, useCardRelations } from '@cardEditor/cardOptions';

export type CardLogicState = Required<CardLogic>;

interface CardLogicContextInterface {
  state: CardLogicState;
  greatestEnergyCost: number;
}

const initialState: CardLogicState = defaultCardLogic;

export const CardLogicContext = createContext<CardLogicContextInterface>({
  state: initialState,
  greatestEnergyCost: 0,
});

export const CardLogicProvider: React.FC = ({ children }) => {
  const { baseSet, supertype, type, subtype, variation, rarity } =
    useCardRelations();
  const { move1, move2 } = useCardOptions();

  const state = useMemo<Required<CardLogic>>(
    () =>
      merge(
        {},
        defaultCardLogic,
        baseSet.logic,
        supertype.logic,
        type.logic,
        subtype?.logic,
        variation?.logic,
        rarity?.logic,
      ),
    [baseSet, supertype, type, subtype, variation, rarity],
  );

  const greatestEnergyCost = useMemo<number>(() => {
    const move1Cost = (move1?.energyCost ?? []).reduce(
      (acc, cost) => acc + cost.amount,
      0,
    );
    const move2Cost = (move2?.energyCost ?? []).reduce(
      (acc, cost) => acc + cost.amount,
      0,
    );
    return Math.max(move1Cost, move2Cost);
  }, [move1?.energyCost, move2?.energyCost]);

  return (
    <CardLogicContext.Provider
      value={{
        state,
        greatestEnergyCost,
      }}
    >
      {children}
    </CardLogicContext.Provider>
  );
};
