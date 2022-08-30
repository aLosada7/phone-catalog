import { UIView } from '@uirouter/react';

import { Row, Title, Icon } from '@edene/components';

import { Breadcrumb } from '../../../../../shared/components/breadcrumb/Breadcrumb';

export const PhoneCockpitMainPage = () => {
  return (
    <>
      <Row align="space-between-center">
        <Title icon={<Icon>business</Icon>}>Phones</Title>
        <Breadcrumb />
      </Row>
      <UIView />
    </>
  );
};
