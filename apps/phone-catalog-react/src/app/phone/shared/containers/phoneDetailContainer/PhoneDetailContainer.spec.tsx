import { render } from '@testing-library/react';

import { PhoneDetailContainer } from './PhoneDetailContainer';

describe('phone delete component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneDetailContainer id={1} />);
    expect(baseElement).toBeTruthy();
  });
});
