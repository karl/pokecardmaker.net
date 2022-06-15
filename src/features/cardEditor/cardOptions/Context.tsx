import { CardInterface, RelationsInterface } from '@cardEditor';
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';
import findById from '@utils/findById';
import { defaultCardOptions, defaultRelations } from '@cardEditor/cardOptions';
import { baseSets } from '@cardEditor/cardOptions/baseSet';
import { rarities } from '@cardEditor/cardOptions/rarity';
import { subtypes } from '@cardEditor/cardOptions/subtype';
import { supertypes } from '@cardEditor/cardOptions/supertype';
import { variations } from '@cardEditor/cardOptions/variation';
import { types } from '@cardEditor/cardOptions/type';

export type CardOptionsState = CardInterface;

interface CardOptionsContextInterface {
  state: CardOptionsState;
  setState: Dispatch<SetStateAction<CardOptionsState>>;
  relations: RelationsInterface;
}

const initialState: CardOptionsState = defaultCardOptions;

export const CardOptionsContext = createContext<CardOptionsContextInterface>({
  state: initialState,
  setState: () => null,
  relations: defaultRelations,
});

export const CardOptionsProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<CardOptionsState>(initialState);

  const baseSet = useMemo<RelationsInterface['baseSet']>(
    () => findById(baseSets, state.baseSetId, defaultRelations.baseSet),
    [state.baseSetId],
  );

  const supertype = useMemo<RelationsInterface['supertype']>(
    () => findById(supertypes, state.supertypeId, defaultRelations.supertype),
    [state.supertypeId],
  );

  const type = useMemo<RelationsInterface['type']>(
    () => findById(types, state.typeId, defaultRelations.type),
    [state.typeId],
  );

  const subtype = useMemo<RelationsInterface['subtype']>(
    () => findById(subtypes, state.subtypeId, defaultRelations.subtype),
    [state.subtypeId],
  );

  const variation = useMemo<RelationsInterface['variation']>(
    () => findById(variations, state.variationId, defaultRelations.variation),
    [state.variationId],
  );

  const rarity = useMemo<RelationsInterface['rarity']>(
    () => findById(rarities, state.rarityId, defaultRelations.rarity),
    [state.rarityId],
  );

  return (
    <CardOptionsContext.Provider
      value={{
        state,
        setState,
        relations: {
          baseSet,
          supertype,
          type,
          subtype,
          variation,
          rarity,
        },
      }}
    >
      {children}
    </CardOptionsContext.Provider>
  );
};
