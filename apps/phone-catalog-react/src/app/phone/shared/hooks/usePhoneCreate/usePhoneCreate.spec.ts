import { renderHook } from '@testing-library/react-hooks';

import { PhoneService, IPhone } from '@phone-catalog/core';
import { PHONE_SAMPLE_1 } from '@phone-catalog/core-data/phone';

import { usePhoneCreate } from './usePhoneCreate';

const INITIAL_PHONE: IPhone = {
  ...PHONE_SAMPLE_1,
};

describe('test suit for phone create hook', () => {
  it('calls correctly repository', async () => {
    // Mocked repo configuration
    PhoneService.create = jest.fn((phone: IPhone) =>
      Promise.resolve({
        ...phone,
        id: 1,
      })
    );

    const { result } = renderHook(() => usePhoneCreate());

    const newPhone = await result.current.createPhone(INITIAL_PHONE);

    // Expectations
    expect(newPhone).toEqual({ ...INITIAL_PHONE, id: 1 });
    expect(PhoneService.create).toBeCalledTimes(1);
    expect(PhoneService.create).toBeCalledWith(INITIAL_PHONE);
  });
});
