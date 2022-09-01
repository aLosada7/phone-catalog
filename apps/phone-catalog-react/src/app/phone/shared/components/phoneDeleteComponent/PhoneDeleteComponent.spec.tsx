import { render } from '@testing-library/react';

import { PhoneDeleteComponent } from './PhoneDeleteComponent';

describe('phone delete component', () => {
  let onClick: jest.Mock;
  let onCancel: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    onCancel = jest.fn();
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <PhoneDeleteComponent onClick={onClick} onCancel={onCancel} />
    );
    expect(baseElement).toBeTruthy();
  });
});
