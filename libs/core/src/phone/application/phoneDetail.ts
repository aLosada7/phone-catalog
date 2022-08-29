import { IPhoneRepository } from '../domain/phone.repository';
import { IPhone } from '../domain/phone';

export interface IPhoneDetailUseCase {
  (phoneId: number): Promise<IPhone>;
}

export function phoneDetail(repo: IPhoneRepository): IPhoneDetailUseCase {
  return async function (id: number) {
    return await repo.detail(id);
  };
}
