import { useRouter } from '@uirouter/react';

import { IPhone } from '@phone-catalog/core';

import { PhoneCreateContainer } from '../../../../shared/containers/phoneCreateContainer/PhoneCreateContainer';

export const PhoneCockpitAddPage = () => {
  const router = useRouter();

  const redirectToDetail = (phone: IPhone) => {
    router.stateService.go('app.phone.entity', { phoneId: phone.id });
  };

  const redirectToCockpit = () => {
    router.stateService.go('app.phone.cockpit');
  };

  return (
    <PhoneCreateContainer
      onSuccess={redirectToDetail}
      onCancel={redirectToCockpit}
    />
  );
};
