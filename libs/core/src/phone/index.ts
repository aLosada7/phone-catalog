import { phoneCreate } from './application/phoneCreate';
import { phoneDetail } from './application/phoneDetail';
import { phoneList } from './application/phoneList';
import { phoneRemove } from './application/phoneRemove';
import { phoneUpdate } from './application/phoneUpdate';

import { PhoneHttpRepository } from './infra/impl/phone.http.repository';

const repo = new PhoneHttpRepository();

const PhoneService = {
  list: phoneList(repo),
  create: phoneCreate(repo),
  detail: phoneDetail(repo),
  remove: phoneRemove(repo),
  update: phoneUpdate(repo),
};

export { PhoneService };

export type { IPhone, IPhoneList } from './domain/phone';
export { IPhoneRepository } from './domain/phone.repository';

export { phoneUpdate };
export { phoneCreate };
