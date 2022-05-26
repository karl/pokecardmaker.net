import fs from 'fs';
import path from 'path';

export const getBase64FilePaths = async (
  directory: string,
  totalPath?: string,
): Promise<{ path: string; base64: string }[]> => {
  const subdirs = await fs.promises.readdir(directory, { withFileTypes: true });

  const files = await Promise.all(
    subdirs.map(async item => {
      const res = path.resolve(directory, item.name);
      const prefix = totalPath ? `${totalPath}.` : '';

      if (item.isDirectory()) {
        return getBase64FilePaths(res, `${prefix}${item.name}`);
      }

      const base64 = await fs.promises.readFile(res, { encoding: 'base64' });
      // Remove extension
      return {
        path: `${prefix}${item.name.slice(0, -4)}`,
        base64,
      };
    }),
  );

  return files.flat();
};
