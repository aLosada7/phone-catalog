import { useState, useEffect } from 'react';
import { useCurrentStateAndParams, useSrefActive } from '@uirouter/react';

import { Alert, Button, Col, Row, Group } from '@edene/components';

import { PhoneDetailContainer } from '../../../../shared/containers/phoneDetailContainer';
import { PhonePreformattedContainer } from '../../containers/phoneEntityPreformattedContainer/PhoneEntityPreformattedContainer';

export const PhoneEntityDetailPage = () => {
  const [phoneId, setJudicialRecordInstanceId] = useState<number>();

  const { params } = useCurrentStateAndParams();

  const editSref = useSrefActive(
    'app.phone.entity.edit',
    { phoneId },
    'active'
  );
  const removeSref = useSrefActive(
    'app.phone.entity.delete',
    { phoneId },
    'active'
  );

  useEffect(() => {
    setJudicialRecordInstanceId(Number(params['phoneId']));
  }, [params]);

  if (!phoneId) return <Alert>Not found</Alert>;

  return (
    <Row noGlutters>
      <Col md={16} direction="column" vStack={4}>
        <PhoneDetailContainer id={phoneId} />
        <Row direction="column" align="start-center">
          <Group>
            <Button component="a" {...editSref}>
              Edit
            </Button>
            <Button component="a" {...removeSref}>
              Delete
            </Button>
          </Group>
        </Row>
      </Col>
      <Col md={8}>
        <PhonePreformattedContainer phoneId={phoneId} />
      </Col>
    </Row>
  );
};
