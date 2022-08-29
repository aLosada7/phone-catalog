import { IPhone } from '../domain/phone';
import { IPhoneRepository } from '../domain/phone.repository';

export interface IPhoneUpdateUseCase {
  (phone: IPhone): Promise<IPhone>;
}

export function phoneUpdate(repo: IPhoneRepository): IPhoneUpdateUseCase {
  return async function (phone: IPhone) {
    if (!phone.id) throw new Error(`Runtime Error: Phone doesn't have id`);

    return await repo.update(phone);
  };
}
