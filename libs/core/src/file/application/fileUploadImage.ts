import { IFileRepository } from '../domain/file.repository';

export interface IFileUploadImageUseCase {
  (data: File): Promise<string>;
}

export function fileUploadImage(
  repo: IFileRepository
): IFileUploadImageUseCase {
  return async function (data: File) {
    return await repo.uploadImage(data);
  };
}
