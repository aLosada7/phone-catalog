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
  phone?: IPhone
) => {
  const [formData, setFormData] = useState<IPhone>(
    (phone as unknown as IPhone) || initialValues
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
