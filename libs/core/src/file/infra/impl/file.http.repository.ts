import axios, { AxiosError, AxiosResponse } from 'axios';
import { IFileRepository } from '../../domain/file.repository';
import { responseFileErrorsAxios } from '../adapters/responseFileErrorsAxios';

const BASE_URL = `/api/file`;

export class FileHttpRepository implements IFileRepository {
  public async uploadImage(image: File): Promise<string> {
    return axios
      .post(`${BASE_URL}/image`, image, {
        headers: {
          'Content-Type': 'image/jpeg',
        },
      })
      .catch((error: AxiosError) => responseFileErrorsAxios(error))
      .then((res: AxiosResponse) => res.data);
  }
}
