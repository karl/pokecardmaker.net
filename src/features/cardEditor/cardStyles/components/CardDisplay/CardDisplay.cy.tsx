import { CardLogicProvider } from '@cardEditor/cardLogic';
import {
  CardOptionsContext,
  defaultCardOptions,
  defaultRelations,
} from '@cardEditor/cardOptions';
import { CardStylesProvider } from '@cardEditor/cardStyles/Context';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@mui/styled-engine';
import theme from '@utils/theme';
import { fontFaces } from '@utils/fonts';
import { produce } from 'immer';
import { supertypes } from '@cardEditor/cardOptions/supertype';
import { types } from '@cardEditor/cardOptions/type';
import { baseSets } from '@cardEditor/cardOptions/baseSet';
import CardDisplay from '.';

describe('CardDisplay.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(570 + 8 + 8, 800 + 8 + 8);
    cy.get('body').invoke(
      'append',
      Cypress.$(`
        <style id="__cypress-animation-disabler">
          *, *:before, *:after {
            transition-property: none !important;
            animation: none !important;
          }
        </style>
      `),
    );
  });

  baseSets.forEach(baseSet => {
    supertypes.forEach(supertype => {
      types
        .filter(type => {
          return type.baseSetDependencies[baseSet.id]?.supertypes.includes(
            supertype.id,
          );
        })
        .forEach(type => {
          it(`${baseSet.displayName} - ${supertype.displayName} - ${type.displayName}`, () => {
            const relations = produce(defaultRelations, draft => {
              draft.type = type;
              draft.supertype = supertype;
              draft.baseSet = baseSet;
            });

            const state = produce(defaultCardOptions, draft => {
              draft.name = 'Example card';
              draft.description = 'This is an example card';
              draft.subname = 'Example subname';

              draft.typeId = relations.type.id;
              draft.baseSetId = relations.baseSet.id;
              draft.supertypeId = relations.supertype.id;
              draft.typeId = relations.type.id;
              draft.subtypeId = relations.subtype?.id;
              draft.rarityId = relations.rarity?.id;
              draft.variationId = relations.variation?.id;
              draft.weaknessTypeId = relations.weaknessType?.id;
              draft.resistanceTypeId = relations.resistanceType?.id;
              draft.setIconId = relations.setIcon?.id;
              draft.rotationIconId = relations.rotationIcon?.id;
              draft.rarityIconId = relations.rarityIcon?.id;
              draft.typeImgId = relations.typeImg?.id;
            });

            cy.mount(
              <>
                <GlobalStyles styles={fontFaces} />
                <ThemeProvider theme={theme}>
                  <CardOptionsContext.Provider
                    value={{
                      state,
                      relations,
                      setState: () => {},
                    }}
                  >
                    <CardLogicProvider>
                      <CardStylesProvider>
                        <CardDisplay />
                      </CardStylesProvider>
                    </CardLogicProvider>
                  </CardOptionsContext.Provider>
                </ThemeProvider>
              </>,
            );

            cy.wait(100);

            cy.matchImageSnapshot();
          });
        });
    });
  });
});
