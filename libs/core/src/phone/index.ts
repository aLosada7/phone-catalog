import { fileUploadImage } from '../file/application/fileUploadImage';
import { FileHttpRepository } from '../file/infra/impl/file.http.repository';
import { phoneCreate } from './application/phoneCreate';
import { phoneDetail } from './application/phoneDetail';
import { phoneList } from './application/phoneList';
import { phoneRemove } from './application/phoneRemove';
import { phoneUpdate } from './application/phoneUpdate';

import { PhoneHttpRepository } from './infra/impl/phone.http.repository';

const repo = new PhoneHttpRepository();
const fileRepo = new FileHttpRepository();
const fileUploadImageUseCase = fileUploadImage(fileRepo);

const PhoneService = {
  list: phoneList(repo),
  create: phoneCreate(repo, fileUploadImageUseCase),
  detail: phoneDetail(repo),
  remove: phoneRemove(repo),
  update: phoneUpdate(repo, fileUploadImageUseCase),
};

export { PhoneService };

export type { IPhone, IPhoneList } from './domain/phone';
export { IPhoneRepository } from './domain/phone.repository';

export { phoneUpdate };
export { phoneCreate };
