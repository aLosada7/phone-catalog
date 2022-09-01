import { Alert } from '@edene/components';
import { IPhone } from '@phone-catalog/core';

import { PhoneFormComponent } from '../../components/phoneFormComponent';
import { usePhoneUpdate } from '../../hooks/usePhoneUpdate';

export interface IPhoneEditContainerProps {
  id: number;
  onSuccess(phone: IPhone): void;
  onCancel(): void;
}

export const PhoneEditContainer = ({
  id,
  onSuccess,
  onCancel,
}: IPhoneEditContainerProps) => {
  const { updatePhone, phone, error, loading } = usePhoneUpdate(id);

  if (!phone && loading) return <div>Loading</div>;

  const handleSubmit = async (phone: IPhone) => {
    const updatedPhone = await updatePhone(phone);
    if (updatedPhone) onSuccess(updatedPhone);
  };

  return (
    <>
      {error && <Alert>{error.message}</Alert>}
      <PhoneFormComponent
        phone={phone}
        onSubmit={handleSubmit}
        onCancel={() => onCancel()}
      />
    </>
  );
};
