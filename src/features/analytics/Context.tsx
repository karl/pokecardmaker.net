import React, { createContext, useCallback, useEffect, useRef } from 'react';
import { useCardRelations } from '@cardEditor/cardOptions';
import { pushToDataLayer, relationsToSlugs } from './utils';
import { AnalyticsEvent } from './types';

interface AnalyticsContextInterface {
  trackCardCreatorEvent: (
    event: AnalyticsEvent,
    data?: Record<string, string>,
  ) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextInterface>({
  trackCardCreatorEvent: () => null,
});

export const AnalyticsProvider: React.FC = ({ children }) => {
  const { baseSet, supertype, type, subtype, variation, rarity } =
    useCardRelations();
  const cardDataRef = useRef(
    relationsToSlugs({ baseSet, supertype, type, subtype, variation, rarity }),
  );

  useEffect(() => {
    cardDataRef.current = relationsToSlugs({
      baseSet,
      supertype,
      type,
      subtype,
      variation,
      rarity,
    });
  }, [baseSet, supertype, type, subtype, variation, rarity]);

  const trackCardCreatorEvent = useCallback(
    (event: AnalyticsEvent, data?: Record<string, string>) => {
      setTimeout(() => {
        pushToDataLayer(event, {
          card: cardDataRef.current,
          ...data,
        });
      }, 1000);
    },
    [],
  );

  return (
    <AnalyticsContext.Provider
      value={{
        trackCardCreatorEvent,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};
