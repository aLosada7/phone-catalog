import { ChangeEvent, FormEvent, useState } from 'react';

import { IPhone } from '@phone-catalog/core';

interface IPhoneForm extends Omit<IPhone, 'price' | 'ram'> {
  price: string;
  ram: string;
}

const initialValues: IPhoneForm = {
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: '',
  imageFileName: '',
  screen: '',
  processor: '',
  ram: '',
};

export const usePhoneForm = (
  callback: (values: IPhone) => void,
  phone?: IPhone
) => {
  const [formData, setFormData] = useState<IPhoneForm>(
    (phone as unknown as IPhoneForm) || initialValues
  );

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files)
      setFormData({ ...formData, [event.target.name]: event.target.files[0] });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const phone: IPhone = {
      ...formData,
      // ensuring that number inputs are passed correctly
      price: Number(formData.price),
      ram: Number(formData.ram),
    };

    if (formData.imageToUpload instanceof File)
      phone.imageFileName = formData.imageToUpload.name;

    callback(phone);
  };

  return {
    onChange,
    onChangeFile,
    onSubmit,
    formData,
  };
};
