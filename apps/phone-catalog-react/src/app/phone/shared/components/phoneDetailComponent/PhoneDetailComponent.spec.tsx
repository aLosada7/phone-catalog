import { render } from '@testing-library/react';

import { IPhone } from '@phone-catalog/core';
import { PHONE_SAMPLE_1 } from '@phone-catalog/core-data/phone';

import { PhoneDetailComponent } from './PhoneDetailComponent';

const PHONE: IPhone = {
  ...PHONE_SAMPLE_1,
  id: 1,
};

describe('phone delete component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneDetailComponent phone={PHONE} />);
    expect(baseElement).toBeTruthy();
  });
});
