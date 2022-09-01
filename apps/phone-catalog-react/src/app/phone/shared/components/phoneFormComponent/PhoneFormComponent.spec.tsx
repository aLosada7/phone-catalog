import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { IPhone } from '@phone-catalog/core';
import { PHONE_SAMPLE_1 } from '@phone-catalog/core-data/phone';

import { PhoneFormComponent } from './PhoneFormComponent';

const initialPhone: IPhone = {
  ...PHONE_SAMPLE_1,
};

describe('phone form component', () => {
  let onSubmit: jest.Mock;
  let onCancel: jest.Mock;

  beforeEach(() => {
    onSubmit = jest.fn();
    onCancel = jest.fn();
  });

  it('should render component', () => {
    render(<PhoneFormComponent onSubmit={onSubmit} onCancel={onCancel} />);
    const nameInput = screen.getByLabelText(/Name/i);

    expect(nameInput).toBeInTheDocument();
  });

  it('callback onSubmit triggered by submit with data introduced manually', async () => {
    render(<PhoneFormComponent onSubmit={onSubmit} onCancel={onCancel} />);

    const nameInput = screen.getByLabelText(/Name/i) as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: initialPhone.name } });

    await waitFor(() => {
      expect(nameInput.value).toBe(initialPhone.name);
    });

    fireEvent.click(screen.getByText(/Save/i));

    expect(onSubmit).toHaveBeenCalled();
  });

  it('callback onSubmit triggered by submit with formData', async () => {
    render(
      <PhoneFormComponent
        phone={initialPhone}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    );

    fireEvent.click(screen.getByText(/Save/i));

    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(1);
    });
  });

  it('callback onCancel triggered correctly', async () => {
    render(
      <PhoneFormComponent
        phone={initialPhone}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    );

    fireEvent.click(screen.getByText(/Cancel/i));

    await waitFor(() => {
      expect(onCancel).toBeCalledTimes(1);
    });
  });
});
