import { useState } from 'react';

import { IPhone } from '@phone-catalog/core';

import { usePhoneDetail } from '../usePhoneDetail';

export interface IUsePhoneEditProps {
  editPhone: (useCase: any) => Promise<IPhone>;
  phone?: IPhone;
  error?: Error;
  loading?: boolean;
}

export const usePhoneEdit = (phoneId: number): IUsePhoneEditProps => {
  const [editError, setEditError] = useState();

  const { phone, error, loading, mutate } = usePhoneDetail(phoneId);

  const editPhone = (useCase: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useCase()
      .then((phone: IPhone) => {
        mutate(phone);
        return Promise.resolve(phone);
      })
      .catch((error: any) => {
        setEditError(error);
      });
  };

  return {
    editPhone,
    phone,
    error: error || editError,
    loading: loading,
  };
};
