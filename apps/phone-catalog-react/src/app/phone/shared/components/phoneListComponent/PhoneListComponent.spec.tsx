import { render } from '@testing-library/react';

import { IPhone } from '@phone-catalog/core';
import { PHONE_SAMPLE_1, PHONE_SAMPLE_2 } from '@phone-catalog/core-data/phone';

import { PhoneListComponent } from './PhoneListComponent';

const PHONE: IPhone[] = [
  {
    ...PHONE_SAMPLE_1,
    id: 1,
  },
  {
    ...PHONE_SAMPLE_2,
    id: 2,
  },
];

describe('phone delete component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneListComponent list={PHONE} />);
    expect(baseElement).toBeTruthy();
  });
});
