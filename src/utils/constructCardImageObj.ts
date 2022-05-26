import Routes from '@routes';
import dot from 'dot-object';
import { getBase64FilePaths } from './getBase64FilePaths';

/**
 * Constructs a path-like object containing all card images base64 encoded
 * @example
 * {
 *   baseSets: {
 *     swordAndShield: {
 *       image: 'base64EncodedImage',
 *     },
 *   },
 * }
 */
export const constructCardImgObj = async (): Promise<object> => {
  const files = await getBase64FilePaths(`./public/${Routes.Assets.Cards}`);
  const fileObj: object = {};
  files.forEach(({ path, base64 }) => {
    // @ts-expect-error - We have no knowledge of object indexes here as it's generated
    fileObj[`${path}.image`] = base64;
  });

  return dot.object(fileObj);
};
