import { PhoneService } from '@phone-catalog/core';

import { PhoneDeleteComponent } from '../../components/phoneDeleteComponent/PhoneDeleteComponent';
import { usePhoneDetail } from '../../hooks/usePhoneDetail';

interface IPhoneDeleteContainerProps {
  id: number;
  onSuccess: () => void;
  onCancel: () => void;
}

export const PhoneDeleteContainer = (props: IPhoneDeleteContainerProps) => {
  const { phone } = usePhoneDetail(props.id);

  const handleDelete = () => {
    PhoneService.remove(phone)
      .then(() => props.onSuccess())
      .catch((err) => console.error(err));
  };

  return (
    <PhoneDeleteComponent onClick={handleDelete} onCancel={props.onCancel} />
  );
};
