import { render } from '@testing-library/react';

import { PhoneEditContainer } from './PhoneEditContainer';

describe('phone delete component', () => {
  let onSuccess: jest.Mock;
  let onCancel: jest.Mock;

  beforeEach(() => {
    onSuccess = jest.fn();
    onCancel = jest.fn();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <PhoneEditContainer id={1} onSuccess={onSuccess} onCancel={onCancel} />
    );
    expect(baseElement).toBeTruthy();
  });
});
