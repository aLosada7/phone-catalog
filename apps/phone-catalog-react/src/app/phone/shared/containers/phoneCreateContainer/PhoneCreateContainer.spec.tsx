import { render } from '@testing-library/react';

import { PhoneCreateContainer } from './PhoneCreateContainer';

describe('phone delete component', () => {
  let onSuccess: jest.Mock;
  let onCancel: jest.Mock;

  beforeEach(() => {
    onSuccess = jest.fn();
    onCancel = jest.fn();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <PhoneCreateContainer onSuccess={onSuccess} onCancel={onCancel} />
    );
    expect(baseElement).toBeTruthy();
  });
});
