import { AxiosError } from 'axios';

import { axiosErrorsAdapter } from '../../../common/infra/adapters/axios.error';

export function responseFileErrorsAxios(err: AxiosError): never {
  console.error(err);
  axiosErrorsAdapter(err);
}
