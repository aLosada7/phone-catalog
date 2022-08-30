import { ChangeEvent, FormEvent, useState } from 'react';

import { IPhone } from '@phone-catalog/core';

const initialValues: IPhone = {
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: 0,
  imageFileName: '',
  screen: '',
  processor: '',
  ram: 0,
};

export const usePhoneForm = (
  callback: (values: IPhone) => void,
  phone = initialValues
) => {
  const [formData, setFormData] = useState<IPhone>(phone as IPhone);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const phone = { ...formData };
    callback(phone);
  };

  return {
    onChange,
    onSubmit,
    formData,
  };
};
