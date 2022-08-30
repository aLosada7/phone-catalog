import useSwr, { KeyedMutator } from 'swr';

import { PhoneService, IPhone } from '@phone-catalog/core';

import { getPhoneMutateSwrKey } from '../../utils/PhoneSwrUtils';

export interface IUsePhoneDetail {
  phone?: IPhone;
  loading: boolean;
  error: Error;
  mutate: KeyedMutator<IPhone>;
}

export const usePhoneDetail = (phoneId: number): IUsePhoneDetail => {
  const { data, error, isValidating, mutate } = useSwr(
    getPhoneMutateSwrKey(phoneId),
    () => PhoneService.detail(phoneId)
  );

  return { phone: data, error, loading: isValidating, mutate };
};
