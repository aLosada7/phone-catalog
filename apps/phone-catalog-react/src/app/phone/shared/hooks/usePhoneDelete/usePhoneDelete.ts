import { useState } from 'react';

import { IPhone, PhoneService } from '@phone-catalog/core';

import { usePhoneDetail } from '../usePhoneDetail';

export interface IUsePhoneDelete {
  deletePhone: () => void;
  phone?: IPhone;
  error?: Error;
  loading?: boolean;
}

// esto tiene que ser useDeleteTimeline
export const usePhoneDelete = (idPhone: number): IUsePhoneDelete => {
  const [removeError, setRemoveError] = useState<Error>();

  const { phone, error, loading } = usePhoneDetail(idPhone);

  const remove = async () => {
    try {
      await PhoneService.remove(phone);
      setRemoveError(undefined);
    } catch (e) {
      if (e instanceof Error) setRemoveError(e);
    }
  };

  return {
    deletePhone: remove,
    phone,
    loading: loading,
    error: error || removeError,
  };
};
