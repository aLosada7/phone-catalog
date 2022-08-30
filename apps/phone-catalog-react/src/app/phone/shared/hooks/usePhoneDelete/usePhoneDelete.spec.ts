import { act, renderHook } from '@testing-library/react-hooks';

import { IPhone, PhoneService } from '@phone-catalog/core';
import { PHONE_SAMPLE_1 } from '@phone-catalog/core-data/phone';

import { usePhoneDelete } from './usePhoneDelete';

const INITIAL_PHONE: IPhone = {
  ...PHONE_SAMPLE_1,
};

describe('Test suit for ListPhone Hook', () => {
  it('Sets Error correctly when happens in detailHook', async () => {
    const error = new Error('useEditPhone Error');
    // Mocked repo configuration
    PhoneService.detail = jest.fn(() => Promise.reject(error));

    const initialPhone = { ...INITIAL_PHONE, id: 1 };

    const { result, waitForNextUpdate } = renderHook(() =>
      usePhoneDelete(initialPhone.id)
    );
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(error);
    expect(result.current.phone).toBeUndefined();
    expect(PhoneService.detail).toBeCalledTimes(1);
    expect(PhoneService.detail).toBeCalledWith(initialPhone.id);
  });

  it('Sets Error correctly when happens in removeHook', async () => {
    const error = new Error('useEditPhone Error');
    // Mocked repo configuration
    PhoneService.remove = jest.fn(() => Promise.reject(error));
    PhoneService.detail = jest.fn((idPhone: number) =>
      Promise.resolve({ ...INITIAL_PHONE, id: idPhone })
    );

    const initialPhone = { ...INITIAL_PHONE, id: 1 };

    const { result, waitForNextUpdate } = renderHook(() =>
      usePhoneDelete(initialPhone.id)
    );
    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    await act(async () => {
      await result.current.deletePhone();
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(error);
    expect(result.current.phone).toEqual(initialPhone);
    expect(PhoneService.detail).toBeCalledTimes(1);
    expect(PhoneService.detail).toBeCalledWith(initialPhone.id);
  });
  it('Calls correctly repository', async () => {
    // Mocked repo configuration
    PhoneService.remove = jest.fn(() => Promise.resolve());
    PhoneService.detail = jest.fn((idPhone: number) =>
      Promise.resolve({ ...INITIAL_PHONE, id: idPhone })
    );

    const initialPhone = { ...INITIAL_PHONE, id: 1 };

    const { result, waitForNextUpdate } = renderHook(() =>
      usePhoneDelete(initialPhone.id)
    );
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();

    // Expectations
    expect(result.current.phone).toEqual(initialPhone);
    await act(async () => {
      await expect(result.current.deletePhone()).resolves.toBe(undefined);
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(PhoneService.remove).toBeCalledTimes(1);
    expect(PhoneService.remove).toBeCalledWith(initialPhone);
  });
});
