import { IPhone } from '../domain/phone';
import { IPhoneRepository } from '../domain/phone.repository';

export interface IPhoneRemoveUseCase {
  (phone?: IPhone): Promise<void>;
}

export function phoneRemove(repo: IPhoneRepository): IPhoneRemoveUseCase {
  return async function (phone?: IPhone) {
    if (!phone || !phone.id)
      throw new Error(`Runtime Error: Phone doesn't have id`);
    return await repo.remove(phone);
  };
}
