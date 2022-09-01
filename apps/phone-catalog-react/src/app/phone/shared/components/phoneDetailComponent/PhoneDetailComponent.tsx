import { IPhone } from '@phone-catalog/core';
import { Group, Icon, Image, Row, Text } from '@edene/components';
import { grays } from '@edene/foundations';

interface IPhoneDetailComponentProps {
  phone: IPhone;
}

export const PhoneDetailComponent = ({ phone }: IPhoneDetailComponentProps) => {
  return (
    <Row direction="column" align="start-center">
      <Image
        size="d"
        src={`http://localhost:3333/${phone.imageFileName}`}
        alt="Phone image"
      ></Image>
      <Text size="lg" weight="bolder" color={grays[1]}>
        {phone.name}
      </Text>
      <Text weight="bold">${phone.price}</Text>
      <Text size="sm" color={grays[4]}>
        {phone.description}
      </Text>
      <Text>{phone.manufacturer}</Text>
      <Group>
        <Icon variant="outlined" color={grays[5]}>
          memory
        </Icon>
        <Text>{phone.processor}</Text>
      </Group>
      <Group>
        <Icon variant="outlined" color={grays[5]}>
          desktop_windows
        </Icon>
        <Text>{phone.screen}</Text>
      </Group>
      <Group>
        <Icon variant="outlined" color={grays[5]}>
          palette
        </Icon>
        <Text>{phone.color}</Text>
      </Group>
      <Group>
        <Icon variant="outlined" color={grays[5]}>
          smartphone
        </Icon>
        <Text>{phone.ram}GB RAM</Text>
      </Group>
    </Row>
  );
};
