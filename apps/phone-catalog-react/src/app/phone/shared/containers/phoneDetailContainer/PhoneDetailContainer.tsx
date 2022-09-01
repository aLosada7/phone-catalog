import { Alert } from '@edene/components';

import { Loader } from '../../../../shared/components/loader';
import { PhoneDetailComponent } from '../../components/phoneDetailComponent';
import { usePhoneDetail } from '../../hooks/usePhoneDetail';

export interface IPhoneDetailContainerProps {
  id: number;
}

export const PhoneDetailContainer = ({ id }: IPhoneDetailContainerProps) => {
  const { phone, loading, error } = usePhoneDetail(id);

  if (!phone && loading) {
    return <Loader />;
  }

  if (!phone || error) {
    return <Alert>{error.message}</Alert>;
  }

  return <PhoneDetailComponent phone={phone}></PhoneDetailComponent>;
};
