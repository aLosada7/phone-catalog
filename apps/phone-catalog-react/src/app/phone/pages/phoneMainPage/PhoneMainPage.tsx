import { UIView } from '@uirouter/react';
import { css } from '@emotion/react';

import { Container } from '@edene/components';

const container = css`
  background-color: rgb(252, 252, 252);
`;

export const PhoneMainPage = () => {
  return (
    <Container cssOverrides={container}>
      <UIView />
    </Container>
  );
};
