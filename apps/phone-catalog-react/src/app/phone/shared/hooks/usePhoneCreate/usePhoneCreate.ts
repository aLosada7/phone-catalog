import { useState } from 'react';

import { PhoneService, IPhone } from '@phone-catalog/core';

export interface IUsePhoneCreate {
  createPhone: (phone: IPhone) => Promise<IPhone | undefined>;
  error?: Error;
}

export const usePhoneCreate = (): IUsePhoneCreate => {
  const [error, setError] = useState<Error>();

  const createPhone = async (phone: IPhone) => {
    let resPhone;
    try {
      resPhone = await PhoneService.create(phone);
    } catch (e: any) {
      setError(e);
    }
    return resPhone;
  };

  return { createPhone, error };
};
