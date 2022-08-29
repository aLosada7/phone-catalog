import { IPhone } from '../domain/phone';
import { IPhoneRepository } from '../domain/phone.repository';

export interface IPhoneCreateUseCase {
  (data: IPhone): Promise<IPhone>;
}

export function phoneCreate(repo: IPhoneRepository): IPhoneCreateUseCase {
  return async function (data: IPhone) {
    return await repo.create(data);
  };
}
