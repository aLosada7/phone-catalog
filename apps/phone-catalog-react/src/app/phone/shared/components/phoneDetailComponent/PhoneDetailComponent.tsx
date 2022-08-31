import { IPhone } from '@phone-catalog/core';
import { Col, Icon, Image, Row, Text } from '@edene/components';
import { grays } from '@edene/foundations';

interface IPhoneDetailComponentProps {
  phone: IPhone;
}

export const PhoneDetailComponent = ({ phone }: IPhoneDetailComponentProps) => {
  return (
    <Row direction="column" align="start-center">
      <Image
        size="d"
        src="https://images.pexels.com/photos/5370674/pexels-photo-5370674.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Phone image"
      ></Image>
      <Text size="lg" weight="bolder" color={grays[1]}>
        {phone.name}
      </Text>
      <Text size="sm">{phone.description}</Text>
      <Text>{phone.manufacturer}</Text>
      <Row>
        <Col md={12} hStack={2}>
          <Icon variant="outlined" color={grays[5]}>
            smartphone
          </Icon>
          <Text weight="bold">{phone.processor}</Text>
          <Text color={grays[3]}>{phone.ram} GB RAM</Text>
        </Col>
        <Col md={12} hStack={2}>
          <Icon variant="outlined" color={grays[5]}>
            desktop_windows
          </Icon>
          <Text weight="bold">{phone.screen}</Text>
        </Col>
      </Row>
    </Row>
  );
};
