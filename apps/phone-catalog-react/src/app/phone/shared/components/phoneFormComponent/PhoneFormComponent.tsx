import { css } from '@emotion/react';

import {
  Button,
  Col,
  Form,
  Row,
  Textarea,
  TextInput,
  Title,
} from '@edene/components';
import { IPhone } from '@phone-catalog/core';

const vStack = css`
  > * {
    margin-left: 1rem;
  }
`;

interface IPhoneFormComponentProps {
  onSuccess: (phone: IPhone) => void;
  onCancel: () => void;
}

export const PhoneFormComponent = (props: IPhoneFormComponentProps) => {
  return (
    <Form>
      <Title mt={4}>Main data</Title>
      <Row>
        <Col md={12}>
          <TextInput label="Name" />
        </Col>
        <Col md={12}>
          {/** NumberInput component still not finished, so I am using TextInput to keep design */}
          <TextInput label="Price" />
        </Col>
        <Col md={12}>
          <TextInput label="Manufacturer" />
        </Col>
        <Col md={12}>
          <TextInput label="Color" />
        </Col>
      </Row>
      <Textarea label="Description"></Textarea>
      <Title mt={4}>Specifications</Title>
      <TextInput label="Image" />
      <Row>
        <Col md={8}>
          <TextInput label="Screen" />
        </Col>
        <Col md={8}>
          <TextInput label="Processor" />
        </Col>
        <Col md={8}>
          <TextInput label="RAM" />
        </Col>
      </Row>

      <Row align="space-between-center" py={2}>
        <Button iconLeft="arrow_back" variant="link" onClick={props.onCancel}>
          Back
        </Button>
        <div css={vStack}>
          <Button variant="outline" onClick={props.onCancel}>
            Cancel
          </Button>
          <Button>Save</Button>
        </div>
      </Row>
    </Form>
  );
};
