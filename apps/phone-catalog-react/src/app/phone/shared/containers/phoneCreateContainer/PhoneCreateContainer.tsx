import { Alert } from '@edene/components';
import { IPhone } from '@phone-catalog/core';
import { PhoneFormComponent } from '../../components/phoneFormComponent';
import { usePhoneCreate } from '../../hooks/usePhoneCreate';

interface IPhoneCreateContainerProps {
  onSuccess: (phone: IPhone) => void;
  onCancel: () => void;
}

export const PhoneCreateContainer = (props: IPhoneCreateContainerProps) => {
  const { createPhone, error } = usePhoneCreate();

  const submit = async (phone: IPhone) => {
    const newPhone = await createPhone(phone);
    if (newPhone) props.onSuccess(newPhone);
  };

  return (
    <>
      {error && <Alert>{error.message}</Alert>}
      <PhoneFormComponent onSubmit={submit} onCancel={props.onCancel} />
    </>
  );
};
