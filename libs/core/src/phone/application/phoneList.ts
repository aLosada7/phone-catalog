import { IPhoneList } from '../domain/phone';
import { IPhoneRepository } from '../domain/phone.repository';

export interface IPhoneListUseCase {
  (): Promise<IPhoneList>;
}

export function phoneList(repo: IPhoneRepository): IPhoneListUseCase {
  return async function () {
    return await repo.list();
  };
}
