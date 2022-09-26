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
  const { move1, move2, hasMove2 } = useCardOptions();

  const state = useMemo<Required<CardLogic>>(
    () =>
      merge(
        {},
        defaultCardLogic,
        baseSet.logic,
        supertype.logic,
        supertype.baseSetOverwrites?.[baseSet.id]?.logic,
        type.logic,
        type.baseSetOverwrites?.[baseSet.id]?.logic,
        subtype?.logic,
        subtype?.baseSetOverwrites?.[baseSet.id]?.logic,
        variation?.logic,
        variation?.baseSetOverwrites?.[baseSet.id]?.logic,
        rarity?.logic,
        rarity?.baseSetOverwrites?.[baseSet.id]?.logic,
      ),
    [baseSet, supertype, type, subtype, variation, rarity],
  );

  const greatestEnergyCost = useMemo<number>(() => {
    const move1Cost = (move1?.energyCost ?? []).reduce(
      (acc, cost) => acc + cost.amount,
      0,
    );
    if (!hasMove2 || !move2?.name) return move1Cost;

    const move2Cost = (move2?.energyCost ?? []).reduce(
      (acc, cost) => acc + cost.amount,
      0,
    );
    if (!move1?.name) return move2Cost;

    return Math.max(move1Cost, move2Cost);
  }, [move1, move2, hasMove2]);

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
