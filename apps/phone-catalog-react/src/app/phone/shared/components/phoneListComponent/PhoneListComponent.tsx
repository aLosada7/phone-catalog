import { ReactElement, cloneElement } from 'react';

import { IPhone } from '@phone-catalog/core';
import {
  Card,
  CardMedia,
  CardSection,
  Col,
  Icon,
  Row,
  Text,
} from '@edene/components';
import { grays } from '@edene/foundations';
import { css } from '@emotion/react';

const transformUppercase = css`
  text-transform: uppercase;
`;

const letterSpacing = css`
  letter-spacing: 0.25px;
`;

export interface IPhoneListComponentProps {
  list: IPhone[];
  RowComponent?: ReactElement;
}

interface IPhoneTableRowProps extends Omit<IPhoneListComponentProps, 'list'> {
  phone: IPhone;
}

const PhoneTableRow = ({ phone, RowComponent }: IPhoneTableRowProps) => {
  return (
    <Col md={12}>
      <Card>
        <CardMedia
          src="http://angular-material.fusetheme.com/assets/images/ui/angular-material/scenes/autocomplete.scene.png"
          alt="Image Example"
        ></CardMedia>
        <CardSection borderBottom>
          <Text
            size="xsm"
            weight="bolder"
            color={grays[1]}
            cssOverrides={[transformUppercase, letterSpacing]}
          >
            {phone.name} . {phone.manufacturer}
          </Text>
          <Text size="xxlg">${phone.price}</Text>
        </CardSection>
        <CardSection borderBottom>
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
        </CardSection>
        {(RowComponent as ReactElement) &&
          cloneElement(RowComponent as ReactElement, { phone })}
      </Card>
    </Col>
  );
};

export const PhoneListComponent = ({
  list,
  ...props
}: IPhoneListComponentProps) => {
  return (
    <Row>
      {list.map((phone) => (
        <PhoneTableRow key={phone.id} phone={phone} {...props} />
      ))}
    </Row>
  );
};
