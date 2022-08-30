import { UIView } from '@uirouter/react';

import { Text, Icon } from '@edene/components';

export const PhoneMainPage = () => {
  return (
    <div>
      <Text>
        <Icon size="large" variant="outlined">
          waving_hand
        </Icon>{' '}
        Welcome to Phone Catalog React
      </Text>
      <UIView />
    </div>
  );
};
