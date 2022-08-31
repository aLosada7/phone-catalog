import { useState, useEffect } from 'react';
import { useCurrentStateAndParams, UIView } from '@uirouter/react';

import { Row } from '@edene/components';

import { PhoneEntityHeaderContainer } from '../../containers/phoneEntityHeaderContainer/PhoneEntityHeaderContainer';
import { Breadcrumb } from '../../../../../shared/components/breadcrumb/Breadcrumb';

export const PhoneEntityMainPage = () => {
  const [phoneId, setPhoneId] = useState<number>();
  const { params } = useCurrentStateAndParams();

  useEffect(() => {
    setPhoneId(Number(params['phoneId']));
  }, [params]);

  if (!phoneId) return <div></div>;

  return (
    <>
      <Row align="space-between-center">
        <PhoneEntityHeaderContainer id={phoneId} />
        <Breadcrumb />
      </Row>

      <UIView />
    </>
  );
};
