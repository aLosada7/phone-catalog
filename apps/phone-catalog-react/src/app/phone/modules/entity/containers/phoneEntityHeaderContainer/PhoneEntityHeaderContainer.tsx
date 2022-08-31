import { Alert, Title } from '@edene/components';

import { usePhoneDetail } from '../../../../shared/hooks/usePhoneDetail';
import { Loader } from '../../../../../shared/components/loader/Loader';

interface IPhoneEntityHeaderContainerProps {
  id: number;
}

export const PhoneEntityHeaderContainer = (
  props: IPhoneEntityHeaderContainerProps
) => {
  const { phone, loading, error } = usePhoneDetail(props.id);

  if (!phone && loading) {
    return <Loader />;
  }

  if (!phone || error) {
    return <Alert>{error.message}</Alert>;
  }

  return <Title>{phone.name}</Title>;
};
