import { renderHook } from '@testing-library/react-hooks';

import { IPhone, PhoneService } from '@phone-catalog/core';
import { PHONE_SAMPLE_1 } from '@phone-catalog/core-data/phone';

import { usePhoneDetail } from './usePhoneDetail';

const PHONE_ID = 1;

const INITIAL_PHONE: IPhone = {
  ...PHONE_SAMPLE_1,
  id: PHONE_ID,
};

describe('test suit for detail phone hook', () => {
  it('sets error correctly', async () => {
    const error = new Error('usePhoneDetail Error');
    // Mocked repo configuration
    PhoneService.detail = jest.fn(() => Promise.reject(error));

    const { result, waitForNextUpdate } = renderHook(() =>
      usePhoneDetail(PHONE_ID)
    );
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.phone).toBe(undefined);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(error);
    expect(PhoneService.detail).toBeCalledTimes(1);
    expect(PhoneService.detail).toBeCalledWith(PHONE_ID);
  });

  it('calls correctly repository', async () => {
    // Mocked repo configuration
    PhoneService.detail = jest.fn((id: number) =>
      Promise.resolve({ ...INITIAL_PHONE, id })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      usePhoneDetail(PHONE_ID)
    );
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();

    expect(result.current.phone).toEqual({ ...INITIAL_PHONE, id: PHONE_ID });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(PhoneService.detail).toBeCalledTimes(1);
    expect(PhoneService.detail).toBeCalledWith(PHONE_ID);
  });
});
