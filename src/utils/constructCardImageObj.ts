import Routes from '@routes';
import dot from 'dot-object';
import { getFiles } from './getFiles';

export const constructCardImgObj = async (): Promise<object> => {
  const files = await getFiles(`./public/${Routes.Assets.Cards}`);
  const fileObj: object = {};
  files.forEach(({ path, base64 }) => {
    // @ts-expect-error - We have no knowledge of object indexes here as it's generated
    fileObj[`${path}.image`] = base64;
  });

  return dot.object(fileObj);
};
