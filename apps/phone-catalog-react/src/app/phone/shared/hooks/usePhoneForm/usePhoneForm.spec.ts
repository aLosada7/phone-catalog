import { ChangeEvent } from 'react';
import { act, renderHook } from '@testing-library/react-hooks';

import { IPhone } from '@phone-catalog/core';

import { usePhoneForm } from './usePhoneForm';

const JUDICIALRECORDINSTANCE_INITIAL_VALUES: Partial<IPhone> = {
  name: '',
};

const JUDICIALRECORDINSTANCE_UPDATED_VALUES = {
  target: { name: 'name', value: 'newName' },
};

describe('test suit for phone form hook', () => {
  it('change correctly form value', async () => {
    const { result } = renderHook(() =>
      usePhoneForm(() => {
        return true;
      }, JUDICIALRECORDINSTANCE_INITIAL_VALUES as IPhone)
    );

    const onChange = jest.spyOn(result.current, 'onChange');

    expect(result.current.formData.name).toBe('');

    await act(async () => {
      result.current.onChange(
        JUDICIALRECORDINSTANCE_UPDATED_VALUES as ChangeEvent<HTMLInputElement>
      );
    });

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(JUDICIALRECORDINSTANCE_UPDATED_VALUES);
    expect(result.current.formData.name).toBe('newName');
  });
});
