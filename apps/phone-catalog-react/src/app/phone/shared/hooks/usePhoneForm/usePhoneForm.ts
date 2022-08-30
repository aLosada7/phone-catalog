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

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const phone: IPhone = {
      ...formData,
      // ensuring that number inputs are passed correctly
      price: Number(formData.price),
      ram: Number(formData.ram),
    };
    callback(phone);
  };

  return {
    onChange,
    onSubmit,
    formData,
  };
};
