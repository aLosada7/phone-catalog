import {
  Button,
  Col,
  Form,
  Row,
  Group,
  Text,
  Textarea,
  TextInput,
  Title,
  Label,
  FormGroup,
  Input,
} from '@edene/components';
import { IPhone } from '@phone-catalog/core';

import { usePhoneForm } from '../../hooks/usePhoneForm';

interface IPhoneFormComponentProps {
  phone?: IPhone;
  onSubmit: (phone: IPhone) => void;
  onCancel: () => void;
}

export const PhoneFormComponent = (props: IPhoneFormComponentProps) => {
  const { formData, onChangeFile, onChange, onSubmit } = usePhoneForm(
    props.onSubmit,
    props.phone
  );

  return (
    <Form onSubmit={onSubmit}>
      <Title mt={4} mb={2}>
        Main data
      </Title>
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
          {/** NumberInput component still not finished, so I am using FormGroup & Input to keep design consistent */}
          <FormGroup>
            <Label text="Price ($)" />
            <Input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={onChange}
            />
          </FormGroup>
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
      <Title mt={4} mb={2}>
        Specifications
      </Title>
      <FormGroup>
        <Label text="Phone Image" /> <br />
        {formData.imageFileName && (
          <>
            <Text>Actual image: {formData.imageFileName}</Text>
            <Text mb={2}>Or upload a new one</Text>
          </>
        )}
        <input type="file" name="imageToUpload" onChange={onChangeFile} />
      </FormGroup>
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
          {/** NumberInput component still not finished, so I am using FormGroup & Input to keep design consistent */}
          <FormGroup>
            <Label text="RAM (GB)" />
            <Input
              type="number"
              id="ram"
              name="ram"
              value={formData.ram}
              onChange={onChange}
            />
          </FormGroup>
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
