import { IPhone } from '../../../src/phone/domain/phone';
import { IPhoneRepository } from '../../../src/phone/domain/phone.repository';
import { phoneRemove } from '../../../src/phone/application/phoneRemove';
import { PHONE_SAMPLE_1 } from '../../../data/phone';

const getRepositoryMock = (): IPhoneRepository => ({
  list: jest.fn(),
  detail: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
});

const initialPhone: IPhone = {
  ...PHONE_SAMPLE_1,
};

describe('Remove Phone Use Case', () => {
  it('Calls correctly repository', async () => {
    // Mocked repo configuration
    const repositoryMock = getRepositoryMock();
    const removeUseCase = phoneRemove(repositoryMock);

    // Execution
    const phone = { ...initialPhone, id: 9999 };

    // Expectations
    await expect(removeUseCase(phone)).resolves.toBe(undefined);
    expect(repositoryMock.remove).toBeCalledTimes(1);
    expect(repositoryMock.remove).toBeCalledWith(phone);
  });

  it('Throws Phone.id Error', async () => {
    // Mocked repo configuration
    const repositoryMock = getRepositoryMock();
    const removeUseCase = phoneRemove(repositoryMock);

    // Expectations
    await expect(removeUseCase(initialPhone)).rejects.toThrow(
      `Runtime Error: Phone doesn't have id`
    );
    expect(repositoryMock.remove).not.toBeCalled();
  });
});
