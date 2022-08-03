import { CardTypeHelpers, IdentifierInfo } from '../types';

// Sword & Shield
export type BaseSet = IdentifierInfo & CardTypeHelpers;
// TODO: Allow for default Placement selection per BaseSet and Supertype like this:
// styles: {
//   ...
//   positions: {
//     pokemon: {
//       name: {
//         top: '10%',
//         ...
//       },
//     },
//     trainer: {
//       name: {
//         top: '20%',
//         ...
//       },
//     },
//   },
// },
// Maybe also keep current implementation as a default fallback for all supertypes
