import { IFileUploadImageUseCase } from '../../file/application/fileUploadImage';
import { IPhone } from '../domain/phone';
import { IPhoneRepository } from '../domain/phone.repository';

export interface IPhoneCreateUseCase {
  (data: IPhone): Promise<IPhone>;
}

export function phoneCreate(
  repo: IPhoneRepository,
  fileCreate: IFileUploadImageUseCase
): IPhoneCreateUseCase {
  return async function (data: IPhone) {
    if (!data.imageToUpload)
      throw new Error('Runtime Error: Image file to upload is missing');

    const fileName = await fileCreate(data.imageToUpload);

    data.imageFileName = fileName;

    return await repo.create(data);
  };
}
