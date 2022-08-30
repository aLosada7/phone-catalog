import useSWRInfinite from 'swr/infinite';

import { PhoneService, IPhone } from '@phone-catalog/core';

const SWR_KEY = 'phone';

export interface IUsePhoneList {
  list?: IPhone[];
  total: number;
  error?: string;
  loading: boolean;
  size: number;
  setSize: (arg0: number) => void;
}

export const usePhoneList = (): IUsePhoneList => {
  const getKey = (pageIndex: number, previousPageData: string | any[]) => {
    // check if end has been reached
    if (previousPageData && !previousPageData.length) return null;
    return `/${SWR_KEY}?page=${pageIndex}`;
  };

  const fetcher = () => {
    return PhoneService.list();
  };

  const {
    data: list,
    error,
    isValidating,
    size,
    setSize,
  } = useSWRInfinite(getKey, fetcher, {
    revalidateFirstPage: false,
    revalidateAll: true,
  });

  return {
    list: (list || []).map((item) => item.data).flat(),
    total: list ? list[0].total : 0,
    error,
    loading: isValidating,
    size,
    setSize,
  };
};
