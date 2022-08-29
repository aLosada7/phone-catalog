import axios, { AxiosError, AxiosResponse } from 'axios';
import { IPhone, IPhoneList } from '../../domain/phone';
import { IPhoneRepository } from '../../domain/phone.repository';
import { responsePhoneList } from '../adapters/responsePhoneList';
import { responsePhoneErrorsAxios } from '../adapters/responsePhoneErrorsAxios';

const BASE_URL = `/api/phone`;

export class PhoneHttpRepository implements IPhoneRepository {
  public async list(): Promise<IPhoneList> {
    return axios
      .get(`${BASE_URL}`)
      .catch((error: AxiosError) => responsePhoneErrorsAxios(error))
      .then((res: AxiosResponse) => responsePhoneList(res.data));
  }

  public async detail(idPhone: number): Promise<IPhone> {
    return axios
      .get(`${BASE_URL}/${idPhone}`)
      .catch((error: AxiosError) => responsePhoneErrorsAxios(error))
      .then((res: AxiosResponse) => res.data);
  }

  public async create(phone: IPhone): Promise<IPhone> {
    return axios
      .post(`${BASE_URL}`, { phone })
      .catch((error: AxiosError) => responsePhoneErrorsAxios(error))
      .then((res: AxiosResponse) => res.data);
  }

  public async update(phone: IPhone): Promise<IPhone> {
    return axios
      .put(`${BASE_URL}/${phone.id}`, { phone })
      .catch((error: AxiosError) => responsePhoneErrorsAxios(error))
      .then((res: AxiosResponse) => res.data);
  }

  public async remove(phone: IPhone): Promise<void> {
    const URL = `${BASE_URL}/${phone.id}`;
    return axios
      .delete(`${URL}`)
      .catch((error: AxiosError) => responsePhoneErrorsAxios(error))
      .then((res: AxiosResponse) => res.data);
  }
}
