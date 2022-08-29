import { AxiosError } from 'axios';
import { NotFoundError } from '../../domain/error.not.found';

export function axiosErrorsAdapter(err: AxiosError): never {
  // eslint-disable-next-line no-console
  console.error(err);
  const status = err.response?.status;

  switch (status) {
    case 404:
      throw new NotFoundError();
    default:
      throw err;
  }
}
