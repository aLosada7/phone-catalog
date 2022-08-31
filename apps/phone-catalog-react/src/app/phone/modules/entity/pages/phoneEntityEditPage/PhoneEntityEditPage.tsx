import { useState, useEffect } from 'react';
import { useCurrentStateAndParams, useRouter } from '@uirouter/react';

import { Alert } from '@edene/components';

import { PhoneEditContainer } from '../../../../shared/containers/phoneEditContainer';

export const PhoneEntityEditPage = () => {
  const [phoneId, setPhoneId] = useState<number>();
  const router = useRouter();
  const { params } = useCurrentStateAndParams();

  useEffect(() => {
    setPhoneId(Number(params['phoneId']));
  }, [params]);

  if (!phoneId) return <Alert>Not found</Alert>;

  const navigateToDetail = () => {
    router.stateService.go('app.phone.entity.detail', { phoneId });
  };

  return (
    <PhoneEditContainer
      id={phoneId}
      onSuccess={navigateToDetail}
      onCancel={navigateToDetail}
    />
  );
};
