import { useState, useEffect } from 'react';
import { useCurrentStateAndParams, useRouter } from '@uirouter/react';

import { Alert } from '@edene/components';

import { PhoneDeleteContainer } from '../../../../shared/containers/phoneDeleteContainer';

export const PhoneEntityDeletePage = () => {
  const [phoneId, setPhoneId] = useState<number>();
  const router = useRouter();
  const { params } = useCurrentStateAndParams();

  useEffect(() => {
    setPhoneId(Number(params['phoneId']));
  }, [params]);

  if (!phoneId) return <Alert>Not found</Alert>;

  const handleSuccess = () => {
    router.stateService.go('app.phone.cockpit', {});
  };

  const handleCancel = () => {
    router.stateService.go('app.phone.entity.detail', { phoneId });
  };

  return (
    <PhoneDeleteContainer
      id={phoneId}
      onSuccess={handleSuccess}
      onCancel={handleCancel}
    />
  );
};
