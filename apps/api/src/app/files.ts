import { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

import { FileFSStorageRepository, IStorage } from './file.fs.storage';

export const addFileRoutes = (app: Express) => {
  uploadImage(app);
};

const fileFSStorageRepository: IStorage = FileFSStorageRepository;

const uploadImage = (app: Express) =>
  app.post(
    '/api/file/image',
    bodyParser.raw({ type: ['image/jpeg', 'image/png'], limit: '5mb' }),
    (req: Request, resp: Response) => {
      const fileName = `${Date.now()}.jpeg`;

      fileFSStorageRepository.uploadImage(req, resp, fileName);
    }
  );
