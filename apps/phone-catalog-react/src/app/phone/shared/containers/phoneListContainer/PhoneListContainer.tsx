import { ReactElement } from 'react';

import { Alert, Button, Container, Row, Text } from '@edene/components';

import { usePhoneList } from '../../hooks/usePhoneList';
import { PhoneListComponent } from '../../components/phoneListComponent';
import { useSref } from '@uirouter/react';

export interface IPhoneListContainerProps {
  RowComponent?: ReactElement;
}

export const PhoneListContainer = ({
  RowComponent,
}: IPhoneListContainerProps) => {
  const { list, total, loading, error } = usePhoneList();

  const uiSref = useSref('app.phone.cockpit.add');

  if (list?.length === 0 && loading) {
    return <div>Loading</div>;
  }

  if (!list || error) {
    return <Alert>{error}</Alert>;
  }

  return (
    <Container>
      <Row align="space-between-center">
        <Text>Total elements found: {total}</Text>
        <Button component="a" iconLeft="add" {...uiSref}>
          Add
        </Button>
      </Row>
      <PhoneListComponent
        list={list}
        RowComponent={RowComponent}
      ></PhoneListComponent>
    </Container>
  );
};
