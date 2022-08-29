import { IPhone, IPhoneList } from '../../domain/phone';

interface IResponsePhoneList {
  total: number;
  data?: IPhone[];
}

export function responsePhoneList(
  responsePhoneList: IResponsePhoneList
): IPhoneList {
  const phoneList = {
    total: responsePhoneList.total,
    data: responsePhoneList.data || [],
  };

  return phoneList;
}
