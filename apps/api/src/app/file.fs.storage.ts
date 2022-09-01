import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export interface IStorage {
  uploadImage(req: Request, resp: Response, fileName: string): void;
}

export const FileFSStorageRepository: IStorage = {
  uploadImage: (req: Request, resp: Response, fileName: string) => {
    fs.writeFile(
      path.join(__dirname, `../../../apps/api/data/img/${fileName}`),
      req.body,
      (error) => {
        if (error) {
          throw error;
        }
        resp.send(fileName);
      }
    );
  },
};
