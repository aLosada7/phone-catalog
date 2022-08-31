import {
  Button,
  Col,
  Form,
  Row,
  Group,
  Textarea,
  TextInput,
  Title,
} from '@edene/components';
import { IPhone } from '@phone-catalog/core';

import { usePhoneForm } from '../../hooks/usePhoneForm';

interface IPhoneFormComponentProps {
  phone?: IPhone;
  onSubmit: (phone: IPhone) => void;
  onCancel: () => void;
}

export const PhoneFormComponent = (props: IPhoneFormComponentProps) => {
  const { formData, onChange, onSubmit } = usePhoneForm(
    props.onSubmit,
    props.phone
  );

  return (
    <Form onSubmit={onSubmit}>
      <Title mt={4}>Main data</Title>
      <Row>
        <Col md={12}>
          <TextInput
            name="name"
            label="Name"
            value={formData.name}
            onChange={onChange}
          />
        </Col>
        <Col md={12}>
          {/** NumberInput component still not finished, so I am using TextInput to keep design */}
          <TextInput
            name="price"
            label="Price"
            value={formData.price}
            onChange={onChange}
          />
        </Col>
        <Col md={12}>
          <TextInput
            name="manufacturer"
            label="Manufacturer"
            value={formData.manufacturer}
            onChange={onChange}
          />
        </Col>
        <Col md={12}>
          <TextInput
            name="color"
            label="Color"
            value={formData.color}
            onChange={onChange}
          />
        </Col>
      </Row>
      <Textarea
        name="description"
        label="Description"
        value={formData.description}
        onChange={onChange}
      ></Textarea>
      <Title mt={4}>Specifications</Title>
      <TextInput
        name="imageFileName"
        label="Image"
        value={formData.imageFileName}
        onChange={onChange}
      />
      <Row>
        <Col md={8}>
          <TextInput
            name="screen"
            label="Screen"
            value={formData.screen}
            onChange={onChange}
          />
        </Col>
        <Col md={8}>
          <TextInput
            name="processor"
            label="Processor"
            value={formData.processor}
            onChange={onChange}
          />
        </Col>
        <Col md={8}>
          <TextInput
            name="ram"
            label="RAM"
            value={formData.ram}
            onChange={onChange}
          />
        </Col>
      </Row>

      <Row align="space-between-center" noGlutters>
        <Button iconLeft="arrow_back" variant="link" onClick={props.onCancel}>
          Back
        </Button>
        <Group>
          <Button variant="outline" onClick={props.onCancel}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </Group>
      </Row>
    </Form>
  );
};
