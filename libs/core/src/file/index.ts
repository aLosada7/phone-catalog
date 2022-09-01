import { fileUploadImage } from './application/fileUploadImage';
import { FileHttpRepository } from './infra/impl/file.http.repository';

const repo = new FileHttpRepository();

const FileService = {
  create: fileUploadImage(repo),
};

export { FileService };

export { fileUploadImage };
