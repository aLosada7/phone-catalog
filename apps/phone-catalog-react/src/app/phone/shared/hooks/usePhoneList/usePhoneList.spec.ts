import { act, renderHook } from '@testing-library/react-hooks';

import { IPhone, PhoneService } from '@phone-catalog/core';
import { PHONE_SAMPLE_1, PHONE_SAMPLE_2 } from '@phone-catalog/core-data/phone';

import { usePhoneList } from './usePhoneList';

const PHONE_LIST: IPhone[] = [
  {
    ...PHONE_SAMPLE_1,
    id: 1,
  },
  {
    ...PHONE_SAMPLE_2,
    id: 1,
  },
];

describe('test suit for phone list hook', () => {
  it('sets error correctly', async () => {
    const error = new Error('usePhoneList Error');
    // Mocked repo configuration
    PhoneService.list = jest.fn(() => Promise.reject(error));

    const { result, waitForNextUpdate } = renderHook(() => usePhoneList());

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    // Expectations
    expect(result.current.loading).toBe(false);
    expect(result.current.list).toEqual([]);
    expect(result.current.size).toEqual(1);
    expect(PhoneService.list).toBeCalledTimes(1);
  });

  it('should render the correct number of elements', async () => {
    PhoneService.list = jest.fn(() =>
      Promise.resolve({
        total: PHONE_LIST.length,
        data: PHONE_LIST,
      })
    );

    const { result, waitForNextUpdate } = renderHook(() => usePhoneList());

    await act(async () => {
      expect(result.current.loading).toBe(true);

      await waitForNextUpdate();

      expect(result.current.loading).toBe(false);
      expect(result.current.list).toHaveLength(2);
      expect(PhoneService.list).toBeCalledTimes(1);
    });
  });
});
