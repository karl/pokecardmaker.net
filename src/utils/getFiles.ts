import fs from 'fs';
import path from 'path';

export const getFiles = async (
  directory: string,
  dirname?: string,
): Promise<{ path: string; base64: string }[]> => {
  const subdirs = await fs.promises.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    subdirs.map(async subdir => {
      const res = path.resolve(directory, subdir.name);
      const prefix = dirname ? `${dirname}.` : '';
      if (subdir.isDirectory()) {
        return getFiles(res, `${prefix}${subdir.name}`);
      }
      const base64 = await fs.promises.readFile(res, { encoding: 'base64' });
      // Remove extension
      return {
        path: `${prefix}${subdir.name.slice(0, -4)}`,
        base64,
      };
    }),
  );
  return files.flat();
};
