import { act, renderHook } from '@testing-library/react-hooks';

import { IPhone, PhoneService } from '@phone-catalog/core';
import { PHONE_SAMPLE_1 } from '@phone-catalog/core-data/phone';

import { usePhoneEdit } from './usePhoneEdit';
import { usePhoneUpdate } from '../usePhoneUpdate';

const PHONE_ID = 1;

const INITIAL_PHONE: IPhone = {
  ...PHONE_SAMPLE_1,
  id: PHONE_ID,
};

const UPDATED_JUDICIALEVENT: IPhone = {
  ...PHONE_SAMPLE_1,
  id: PHONE_ID,
  name: 'New Phone 1',
};

describe('Test suit for ListPhone Hook', () => {
  it('Sets Error correctly when happens in detailHook', async () => {
    const error = new Error('usePhoneEdit Error');
    // Mocked repo configuration
    PhoneService.detail = jest.fn(() => Promise.reject(error));

    const { result, waitForNextUpdate } = renderHook(() =>
      usePhoneEdit(PHONE_ID)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(error);
    expect(result.current.phone).toBeUndefined();
    expect(PhoneService.detail).toBeCalledTimes(1);
    expect(PhoneService.detail).toBeCalledWith(INITIAL_PHONE.id);
  });

  it('Sets Error correctly when happens in updateHook', async () => {
    const error = new Error('usePhoneUpdate Error');
    // Mocked repo configuration
    PhoneService.detail = jest.fn((idPhone: number) =>
      Promise.resolve({
        ...INITIAL_PHONE,
        id: idPhone,
        name: 'New Phone 1',
      })
    );
    PhoneService.update = jest.fn(() => Promise.reject(error));

    const { result, waitForNextUpdate } = renderHook(() =>
      usePhoneUpdate(PHONE_ID)
    );

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    await act(async () => {
      result.current.updatePhone({
        ...INITIAL_PHONE,
        name: 'New Phone 1',
      });
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(error);
    expect(result.current.phone).toEqual(UPDATED_JUDICIALEVENT);
    expect(PhoneService.detail).toBeCalledTimes(1);
    expect(PhoneService.detail).toBeCalledWith(INITIAL_PHONE.id);
  });

  it('Calls correctly repository', async () => {
    // Mocked repo configuration
    PhoneService.detail = jest.fn((idPhone: number) =>
      Promise.resolve({
        ...INITIAL_PHONE,
        id: idPhone,
        name: 'New Phone 1',
      })
    );
    PhoneService.update = jest.fn((phone: IPhone) =>
      Promise.resolve({ ...phone, id: PHONE_ID })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      usePhoneUpdate(PHONE_ID)
    );
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();

    // Expectations
    await act(async () => {
      await expect(
        result.current.updatePhone({
          ...INITIAL_PHONE,
          name: 'New Phone 1',
        })
      ).resolves.toEqual(UPDATED_JUDICIALEVENT);
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(result.current.phone).toEqual(UPDATED_JUDICIALEVENT);
    expect(PhoneService.update).toBeCalledTimes(1);
    expect(PhoneService.update).toBeCalledWith(UPDATED_JUDICIALEVENT);
  });
});
