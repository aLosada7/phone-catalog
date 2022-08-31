import { useSrefActive } from '@uirouter/react';
import { css } from '@emotion/react';

import { IPhone } from '@phone-catalog/core';
import { Button, Text } from '@edene/components';

const transformUppercase = css`
  text-transform: uppercase;
`;

export interface IPhoneListItemLinkProps {
  phone?: IPhone;
}

export const PhoneListItemLinkComponent = ({
  phone,
}: IPhoneListItemLinkProps) => {
  const activeClass = 'active';
  const detailSref = useSrefActive(
    'app.phone.entity',
    { phoneId: phone?.id },
    activeClass
  );

  if (!phone || !phone.id) return <div></div>;

  return (
    <Button
      component="a"
      size="block"
      iconRight="keyboard_arrow_right"
      cssOverrides={transformUppercase}
      {...detailSref}
    >
      <Text size="xsm" weight="bold">
        Show
      </Text>
    </Button>
  );
};
