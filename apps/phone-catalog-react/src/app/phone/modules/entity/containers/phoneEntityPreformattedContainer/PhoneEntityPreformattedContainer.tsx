import { Preformatted } from '../../../../../shared/components/preformatted';
import { usePhoneDetail } from '../../../../shared/hooks/usePhoneDetail';
import { Loader } from '../../../../../shared/components/loader/Loader';

export interface IPhonePreformattedContainerProps {
  phoneId: number;
}

export const PhonePreformattedContainer = ({
  phoneId,
}: IPhonePreformattedContainerProps) => {
  const { phone, loading, error } = usePhoneDetail(phoneId);

  if (!phone && loading) {
    return <Loader />;
  }

  if (!phone || error) {
    return <div>{error.message}</div>;
  }

  return <Preformatted data={phone}></Preformatted>;
};
