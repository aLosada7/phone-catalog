import { IPhone } from '../../../src/phone/domain/phone';
import { IPhoneRepository } from '../../../src/phone/domain/phone.repository';
import { phoneUpdate } from '../../../src/phone/application/phoneUpdate';
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
  id: 1,
};

describe('Update Phone Use Case', () => {
  let repositoryMock: IPhoneRepository;

  beforeEach(() => {
    // Mocked repo configuration
    repositoryMock = getRepositoryMock();
    repositoryMock.update = jest.fn().mockResolvedValue(initialPhone);
  });

  it('update phone successfully', async () => {
    // Mocked repo configuration
    const phoneUpdateUseCase = phoneUpdate(repositoryMock);

    // Execution
    const result = await phoneUpdateUseCase(initialPhone);

    // Expectations
    expect(result).toEqual(initialPhone);
    expect(repositoryMock.update).toBeCalledTimes(1);
  });

  it('throws phone.id Error', async () => {
    // Mocked repo configuration
    const updateUseCase = phoneUpdate(repositoryMock);

    const phone = { ...initialPhone };
    delete phone.id;

    // Expectations
    await expect(updateUseCase(phone)).rejects.toThrow(
      `Runtime Error: Phone doesn't have id`
    );
    expect(repositoryMock.update).not.toBeCalled();
  });
});
