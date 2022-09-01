import { render } from '@testing-library/react';
import { pushStateLocationPlugin, UIRouter } from '@uirouter/react';

import { PhoneListContainer } from './PhoneListContainer';

describe('phone delete component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <UIRouter
        plugins={[pushStateLocationPlugin]}
        states={[]}
        config={() => {
          return true;
        }}
      >
        <PhoneListContainer />
      </UIRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
