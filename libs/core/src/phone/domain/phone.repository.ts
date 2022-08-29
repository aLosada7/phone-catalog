import { IPhone, IPhoneList } from './phone';

export interface IPhoneRepository {
  list(): Promise<IPhoneList>;
  detail(phoneId: number): Promise<IPhone>;
  create(phone: IPhone): Promise<IPhone>;
  update(phone: IPhone): Promise<IPhone>;
  remove(phone: IPhone): Promise<void>;
}
