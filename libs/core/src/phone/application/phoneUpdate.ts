import { IFileUploadImageUseCase } from '../../file/application/fileUploadImage';
import { IPhone } from '../domain/phone';
import { IPhoneRepository } from '../domain/phone.repository';

export interface IPhoneUpdateUseCase {
  (phone: IPhone): Promise<IPhone>;
}

export function phoneUpdate(
  repo: IPhoneRepository,
  fileCreate: IFileUploadImageUseCase
): IPhoneUpdateUseCase {
  return async function (phone: IPhone) {
    if (!phone.id) throw new Error(`Runtime Error: Phone doesn't have id`);

    if (phone.imageToUpload instanceof File) {
      const fileName = await fileCreate(phone.imageToUpload);

      phone.imageFileName = fileName;
    }

    return await repo.update(phone);
  };
}
