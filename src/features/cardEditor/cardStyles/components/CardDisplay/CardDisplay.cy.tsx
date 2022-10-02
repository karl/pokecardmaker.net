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
import { colorless, fairy, fire, types } from '@cardEditor/cardOptions/type';
import { baseSets } from '@cardEditor/cardOptions/baseSet';
import { cardImgHeight, cardImgWidth } from 'src/constants';
import { subtypes } from '@cardEditor/cardOptions/subtype';
import { variations } from '@cardEditor/cardOptions/variation';
import { rarities } from '@cardEditor/cardOptions/rarity';
import CardDisplay from '.';

describe('CardDisplay.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(8 + cardImgWidth + 8, 8 + cardImgHeight + 8);
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
        .slice(0, 3)
        .forEach(type => {
          subtypes
            .filter(subtype => {
              return subtype.baseSetDependencies[baseSet.id]?.find(
                r => r.type === type.id,
              );
            })
            .forEach(subtype => {
              [...variations, undefined]
                .filter(variation => {
                  return (
                    variation === undefined ||
                    variation.baseSetDependencies[baseSet.id]?.subtypes[
                      subtype.id
                    ]
                  );
                })
                .forEach(variation => {
                  [...rarities, undefined]
                    .filter(rarity => {
                      const variationRarities =
                        variation?.baseSetDependencies[baseSet.id]?.subtypes[
                          subtype.id
                        ]?.rarities ?? [];

                      return (
                        rarity === undefined ||
                        variationRarities.includes(rarity.id)
                      );
                    })
                    .forEach(rarity => {
                      it(`${baseSet.displayName} - ${supertype.displayName} - ${
                        type.displayName
                      } - ${subtype.displayName}${
                        variation ? ` - ${variation.displayName}` : ''
                      }${rarity ? ` - ${rarity.displayName}` : ''}`, () => {
                        const relations = produce(defaultRelations, draft => {
                          draft.type = type;
                          draft.supertype = supertype;
                          draft.baseSet = baseSet;
                          draft.subtype = subtype;
                          draft.variation = variation;
                          draft.rarity = rarity;
                        });

                        const state = produce(defaultCardOptions, draft => {
                          draft.name = 'Cardname';
                          draft.description = 'This is an example card';
                          draft.subname = 'Sub';
                          draft.hitpoints = 120;
                          draft.dexStats = `NO. 001/200  Example Pokémon  HT: 2'12"  WT: 12.3 lbs.`;

                          draft.prevolveImgSrc =
                            'https://art.pixilart.com/cb81b0cdf6cbde2.png';
                          draft.prevolveName = 'Prevolve';

                          draft.backgroundImg = {
                            src: 'https://ih1.redbubble.net/image.730401353.4950/flat,750x1000,075,f.jpg',
                          };
                          draft.imgLayer1 = {
                            src: 'https://art.pixilart.com/cb81b0cdf6cbde2.png',
                          };
                          // draft.imgLayer2 = {
                          //   src: 'https://ih1.redbubble.net/image.730401353.4950/flat,750x1000,075,f.jpg',
                          // };

                          if (supertype.logic?.hasMoves) {
                            draft.move1 = {
                              name: 'Example Move',
                              description: `Does example thing:
• [4] [7] [9] [b] [c] [C] [d] [D] [e] [E] [f] [F]
• [g] [G] [l] [L] [m] [M] [N] [p] [P] [R] [v] [W] [X] [Y]`,
                              energyCost: [
                                { amount: 1, typeId: type.id },
                                { amount: 1, typeId: fairy.id },
                                { amount: 1, typeId: colorless.id },
                              ],
                              damageAmount: 120,
                              damageModifier: '×',
                            };

                            draft.hasAbility = true;
                            draft.ability = {
                              name: 'Example Ability',
                              description: `Does example thing:
• [4] [7] [9] [b] [c] [C] [d] [D] [e] [E] [f] [F]
• [g] [G] [l] [L] [m] [M] [N] [p] [P] [R] [v] [W] [X] [Y]`,
                            };
                          }

                          if (subtype.logic?.hasMove3) {
                            draft.move3 = {
                              name: 'Example Move',
                              description: `Does example thing:
• [4] [7] [9] [b] [c] [C] [d] [D] [e] [E] [f] [F]
• [g] [G] [l] [L] [m] [M] [N] [p] [P] [R] [v] [W] [X] [Y]`,
                              energyCost: [
                                { amount: 1, typeId: type.id },
                                { amount: 1, typeId: colorless.id },
                              ],
                              damageAmount: 120,
                              damageModifier: '×',
                            };
                          }

                          draft.resistanceAmount = 30;
                          draft.resistanceTypeId = fire.id;

                          draft.illustrator = 'Example Illustrator';
                          draft.cardNumber = '001';
                          draft.totalInSet = '123';

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

                        cy.wait(250);

                        cy.matchImageSnapshot();
                      });
                    });
                });
            });
        });
    });
  });
});
