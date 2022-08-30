import { PhoneService, IPhone } from '@phone-catalog/core';

import { usePhoneEdit } from '../usePhoneEdit';

export interface IUsePhoneUpdate {
  updatePhone: (phone: IPhone) => Promise<IPhone | void>;
  phone?: IPhone;
  error?: Error;
  loading?: boolean;
}

export const usePhoneUpdate = (phoneId: number): IUsePhoneUpdate => {
  const { phone, error, loading, editPhone } = usePhoneEdit(phoneId);

  const updatePhone = async (phone: IPhone) => {
    const useCase = PhoneService.update;
    const useCaseCall = () => useCase(phone);
    return editPhone(useCaseCall);
  };

  return {
    updatePhone,
    phone,
    error: error,
    loading: loading,
  };
};
