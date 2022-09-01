export interface IPhone {
  id?: number;
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageFileName: string;
  imageToUpload?: File;
  screen: string;
  processor: string;
  ram: number;
}

export interface IPhoneList {
  total: number;
  data: IPhone[];
}
